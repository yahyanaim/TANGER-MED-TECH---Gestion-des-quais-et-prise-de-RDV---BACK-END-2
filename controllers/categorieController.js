const Categorie = require('../model/Categorie');

module.exports = {

// Get all Categories
    getAll: async (req, res, next) => {
        const categories = await Categorie.find();
        res.json({data: categories});
    },

// Get one Categorie
    getById: async (req, res) => {
        const categorie = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: "categorie Not Found"});
        }
        res.json(categorie);
    },

// Create Categorie
    create: async (req, res) => {
        const categorie = new Categorie(req.body);
        await categorie.save();
        res.status(201).json({message: "categorie created successfully", data: categorie});
    },

// Update Categorie
    update: async (req, res) => {
        const  categorie = await Categorie.findByIdAndUpdate(req.params.id, req.body);
        if (! categorie) {
            return res.status(404).json({message: "categorie"});
        }
        res.json({message: "categorie updated successfully", data: categorie});
    },

//Delete Categorie
    destroy: async (req, res) => {
        const categorie = await Categorie.findByIdAndDelete(req.params.id);
        if (! categorie) {
            res.status(404).json({message: "categorie Not Found"});
        }
        res.status(202).json({message: "categorie deleted sccessfully", data:categorie});
    }

}
