const Dock = require('../model/Docks');
module.exports = {

// Get all dock
    getAll: async (req, res, next) => {
        const docks = await Dock.find();
        res.json({data: docks});
    },

// Get one dock
    getById: async (req, res) => {
        const dock = await Dock.findById(req.params.id);
        if (!dock) {
            return res.status(404).json({message: "dock Not Found"});
        }
        res.json(dock);
    },

// Create dock
    create: async (req, res) => {
        const dock = new Dock(req.body);
        await dock.save();
        res.status(201).json({message: "dock created successfully", data: dock});
    },

// Update dock
    update: async (req, res) => {
        const  dock = await Dock.findByIdAndUpdate(req.params.id, req.body);
        if (! dock) {
            return res.status(404).json({message: "dock"});
        }
        res.json({message: "dockupdated successfully", data: dock});
    },

//Delete dock
    destroy: async (req, res) => {
        const dock = await Dock.findByIdAndDelete(req.params.id);
        if (! dock) {
            res.status(404).json({message: "dock Not Found"});
        }
        res.status(202).json({message: "dock deleted sccessfully", datadock});
    }

}
