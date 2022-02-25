const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('../validation');

module.exports={

// new user 
register : async (req, res) => { 

    // validate the data before we get a user
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    // cheking if user is already in the databse
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) {
        return res.status(400).json({message: "email alerdy exist"})
    }
 
    // Hach the password 
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const user = new User({name: req.body.name, email: req.body.email, password:  hashPassword, role: req.body.role});
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }

       // Permission
   const permission = await User.findOne({role : req.body.role});
  
   if( permission === 'Docker')
   {
    return res.status(400).json({message: "Page Docker"});
   } else {
    res.send({message: "Page Cheffeur"});
   }
},

login : async (req, res) => {

    // validate the data before we get a user
   const {error} = loginValidation(req.body);
   if (error) return res.status(400).send(error.details[0].message);

     // cheking if the email is already in the databse
     const user = await User.findOne({email: req.body.email});
     if (!user) {
         return res.status(400).json({message: "Email is wrong"})
     }

     // password is correct 
     const validPass = await bcrypt.compare(req.body.password, user.password);
     if(!validPass){
        return res.status(400).json({message: "invalid password"})
    }

     //Create and assign token
   const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
   res.header('auth-token', token).send(token);

},

// Get all users 
getAll : async (req, res) => {
    const page = req.query.page ?? req.query.page <= 0 ? req.query.page : 1;
    const perpage = 10;

    const users = await User.find().skip((page - 1) * perpage).limit(perpage);
    res.json({
        data: users,
        prevPage: page > 1 ? page - 1 : null,
        currentPage: +page,
        nextPage: page < users.length - 1 ? +page + 1 : null
    });
},

// Get one user
getById :  async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({
            message: "user Not Found",
        });
    }
    res.json(user);
},

// Update user
update :  async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    if (!user) {
        return res.status(404).json({
            message: "user not found",
        });
    }

    res.json({
        message: "user updated successfully",
        // data: customer
    });
}, 

// Delete User
destroy : async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        res.status(404).json({
            message: "user Not Found",
        });
    }
    res.status(202).json({
        message: "user deleted sccessfully",
        data: user
    });
},    

}



