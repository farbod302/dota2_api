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

    res.json(new_hero)


})


router.get("/imgs", async (req, res) => {
    const heros = await Hero.find({}, { _id: 0, "imgs.hero_image": 1, id: 1, name: 1 })
    res.json(heros)
})

router.get("/all", async (req, res) => {
    const { lang } = req.query
    const heros = await Hero.find({})
    let result = []
    heros.forEach(each => {
        const { name, id, class_name, attack_type, imgs, attributes, roles, stats } = each
        const { abilities, talent_tree, summarize } = each[lang]
        let new_hero = {
            name, id, class_name, attack_type, imgs, attributes, roles, stats, abilities, talent_tree, summarize
        }
        result.push(new_hero)
    })
    res.json(result)
})


router.post("/select_hero", async (req, res) => {

    const { id, lang } = req.body
    let hero = await Hero.findOne({ id: id })
    const { name, class_name, attack_type, imgs, attributes, roles, stats } = hero
    const { abilities, talent_tree, summarize } = hero[lang]
    let new_hero = {
        name, id, class_name, attack_type, imgs, attributes, roles, stats, abilities, talent_tree, summarize
    }
    res.json(new_hero)

})

module.exports = router

