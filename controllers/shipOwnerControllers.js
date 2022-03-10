const Shipowner = require('../model/ShipOwner');

module.exports = {

// Get all shipowners
    getAll: async (req, res, next) => {
        const shipowners = await Shipowner.find();
        res.json({data: shipowners});
    },

// Get one shipowner
    getById: async (req, res) => {
        const shipowner = await Shipowner.findById(req.params.id);
        if (!shipowner) {
            return res.status(404).json({message: "shipowner Not Found"});
        }
        res.json(shipowner);
    },

// Create shipowner
    create: async (req, res) => {
        const shipowner = new Shipowner(req.body);
        await shipowner.save();
        res.status(201).json({message: "shipowner created successfully", data: shipowner});
    },

// Update shipowner
    update: async (req, res) => {
        const  shipowner = await Shipowner.findByIdAndUpdate(req.params.id, req.body);
        if (!shipowner) {
            return res.status(404).json({message: "shipowner"});
        }
        res.json({message: "shipowner updated successfully", data: shipowner});
    },

//Delete shipowner
    destroy: async (req, res) => {
        const shipowner = await Shipowner.findByIdAndDelete(req.params.id);
        if (!shipowner) {
            res.status(404).json({message: "shipowner Not Found"});
        }
        res.status(202).json({message: "shipowner deleted sccessfully", data:shipowner});
    }

}
