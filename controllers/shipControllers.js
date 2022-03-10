const ship = require('../model/Ship');

module.exports = {

// Get all ships
    getAll: async (req, res, next) => {
        const ships = await ship.find();
        res.json({data: ships});
    },

// Get one ship
    getById: async (req, res) => {
        const ship = await ship.findById(req.params.id);
        if (!ship) {
            return res.status(404).json({message: "ship Not Found"});
        }
        res.json(ship);
    },

// Create ship
    create: async (req, res) => {
        const ship = new ship(req.body);
        await ship.save();
        res.status(201).json({message: "ship created successfully", data: ship});
    },

// Update ship
    update: async (req, res) => {
        const  ship = await ship.findByIdAndUpdate(req.params.id, req.body);
        if (! ship) {
            return res.status(404).json({message: "ship"});
        }
        res.json({message: "ship updated successfully", data: ship});
    },

//Delete ship
    destroy: async (req, res) => {
        const ship = await ship.findByIdAndDelete(req.params.id);
        if (! ship) {
            res.status(404).json({message: "ship Not Found"});
        }
        res.status(202).json({message: "ship deleted sccessfully", data:ship});
    }

}
