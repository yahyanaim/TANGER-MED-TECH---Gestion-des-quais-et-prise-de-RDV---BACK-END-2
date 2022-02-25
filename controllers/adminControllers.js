const Admin = require("../model/Admin");
const {loginValidation} = require('../validation');


module.exports = { // create Admin
    create: async (req, res) => {
        // creat An Admin
        const admin = new Admin({email: req.body.email, password: req.body.password});
        await admin.save();
        res.status(201).json({message: "admin created successfully"});
    },

    // Admin Login
    login: async (req, res) => { 
        // validate the data before we get a user
        const {error} = loginValidation(req.body);
        if (error) 
            return res.status(400).send(error.details[0].message);
    
        // cheking if the email is already in the databse
        const email = await Admin.findOne({email: req.body.email});
        if (! email) {
            return res.status(400).json({message: "Email is wrong"})
        }

        // password is correct
        const validPass = await Admin.findOne({password: req.body.password});
        if (! validPass) {
            return res.status(400).json({message: "invalid password"})
        } else {
            res.status(201).json({message: "admin created successfully"});
        }

        // Create and assign token
        const token = jwt.sign({ _id: admin._id}, 
        process.env.TOKEN_SECRET);
        res.header('auth-token', token).send(token);

    },

}
