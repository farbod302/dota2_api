const mongoose = require("mongoose")



const item = mongoose.Schema({

    id: String,
    key: String,
    name: String,
    notes: Array,
    cost: Number,
    colldown: String,
    mana: String,
    custom_att: Array,
    show: {
        type: Boolean,
        default: true
    },
    recipe: {
        type: Boolean,
        default: false
    },
    requirements: Array,
    upgrades: Array,
    img: String,
    tier: {
        default: null,
        type: Number
    }

})


module.exports = mongoose.model("Item", item)



