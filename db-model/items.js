const mongoose = require("mongoose")



const item = mongoose.Schema({

    consomables: Array,
    attribotes: Array,
    equipments: Array,
    miscellaneous: Array,
    secret_shop: Array,
    accessories: Array,
    support: Array,
    magical: Array,
    armor: Array,
    weapons: Array,
    artifacts: Array,
    neutral: Array,
    features: {
        type: Object,
        default: new Object
    }

}, { minimize: false })


module.exports = mongoose.model("Item", item)



