const express = require('express')
const router = express.Router()
const Hero = require("../db-model/heros")
const { translate_ar, translate_fa } = require('../helper');



router.post("/base", async (req, res) => {
    const { name, id, class_name, attack_type, summarize, imgs, attributes, roles, stats, talent_tree, abilities } = req.body

    await Hero.findOneAndRemove({ id: id })
    let new_hero = {
        name, id, class_name, attack_type, imgs, attributes, roles, stats,
    }
    await res.json(new_hero)
    let tr = {
        summarize, abilities, talent_tree
    }
    let en = {
        summarize, abilities, talent_tree
    }
    let ar = await translate_ar(tr)

    let fa = await await translate_fa(tr)

    await new Hero({
        name, id, class_name, attack_type, imgs, attributes, roles, stats, en, ar, fa
    }).save()



})


router.get("/imgs", async (req, res) => {
    const heros = await Hero.find({}, { _id: 0, "imgs.hero_image": 1, id: 1, name: 1 })
    res.json(heros)
})

router.get("/all", async (req, res) => {
    const heros = await Hero.find({})
    res.json(heros)
})


router.post("/select_hero", async (req, res) => {

    const { id } = req.body
    let hero = await Hero.findOne({ id: id })
    res.json(hero)

})

module.exports = router

