const mongoose = require("mongoose")



const hero = mongoose.Schema({
    name: String,
    id: String,
    class_name: String,
    attack_type: String,
    sommize: String,
    imgs: Object,
    attributes: Object,
    roles: Object,
    stats: Object,
    talent_tree: Object,
    abilities: Object,
})


module.exports = mongoose.model("Hero", hero)