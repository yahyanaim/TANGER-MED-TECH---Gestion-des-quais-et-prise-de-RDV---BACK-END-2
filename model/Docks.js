const mongoose = require("mongoose");
const dockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, "Please fill this field!"]
    },
    status: {
        type: Boolean,
        default: true
    }
});
const Dock = mongoose.model("dock", dockSchema);
module.exports = Dock;
