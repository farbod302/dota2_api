const mongoose = require("mongoose")



const patch = mongoose.Schema({

    patch: String,
    general: {
        type: Array,
        default: []
    },
    heros: Array,
    item: Array,
    neutral: {
        type: Array,
        default: []
    }
})


module.exports = mongoose.model("Patch", patch)



