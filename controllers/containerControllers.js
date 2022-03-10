const Container = require('../model/Container');

module.exports = {

// Get all Containers
    getAll: async (req, res, next) => {
        const containers = await Container.find();
        res.json({data: containers});
    },

// Get one Container
    getById: async (req, res) => {
        const container = await Container.findById(req.params.id);
        if (!container) {
            return res.status(404).json({message: "container Not Found"});
        }
        res.json(container);
    },

// Create Container
    create: async (req, res) => {
        const container = new Container(req.body);
        await container.save();
        res.status(201).json({message: "container created successfully", data: container});
    },

// Update Container
    update: async (req, res) => {
        const  container = await Container.findByIdAndUpdate(req.params.id, req.body);
        if (!container) {
            return res.status(404).json({message: "container"});
        }
        res.json({message: "container updated successfully", data: container});
    },

//Delete Container
    destroy: async (req, res) => {
        const container = await Container.findByIdAndDelete(req.params.id);
        if (!container) {
            res.status(404).json({message: "container Not Found"});
        }
        res.status(202).json({message: "container deleted sccessfully", data:container});
    }

}
