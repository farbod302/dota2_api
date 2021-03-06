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
    let heros = await Hero.find({}, { _id: 0, "imgs.hero_image": 1, id: 1, name: 1, class_name: 1 }).sort({ name: 1 })
    res.json(heros)
})

router.get("/all", async (req, res) => {
    let { lang } = req.query
    if (!lang) lang = "en"
    const heros = await Hero.find({}).sort({ name: 1 })
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

    let { id, lang } = req.body
    { lang ? lang = lang : lang = "en" }
    let hero = await Hero.findOne({ id: id })
    const { name, class_name, attack_type, imgs, attributes, roles, stats } = hero
    const { abilities, talent_tree, summarize } = hero[lang]
    let new_hero = {
        name, id, class_name, attack_type, imgs, attributes, roles, stats, abilities, talent_tree, summarize
    }
    res.json(new_hero)

})

router.post("/update", async (req, res) => {

    const { id, fa } = req.body

    await Hero.findOneAndUpdate({ id: id }, { $set: { fa: fa } })
    res.json(true)

})

module.exports = router

