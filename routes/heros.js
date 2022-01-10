const express = require('express')
const router = express.Router()
const Hero = require("../db-model/heros")



router.post("/base", async (req, res) => {
    const { name, id, class_name, attack_type, sommize, imgs, attributes, roles, stats, talent_tree, abilities } = req.body

    await Hero.findOneAndRemove({ id: id })
    let new_roles = { ...roles }
    Object.keys(new_roles).map(function (key, index) {
        let value = new_roles[key]
        if (value <= 33) {
            new_roles[key] = 1
            return
        }
        else if (value > 33 & value <= 66) {
            new_roles[key] = 2
        }
        else {
            new_roles[key] = 3

        }
    });


    let new_hero = {
        name, id, class_name, attack_type, sommize, imgs, attributes, roles: new_roles, stats, talent_tree, abilities
    }

    await new Hero(new_hero).save()

    res.json(new_hero)


})



module.exports = router

