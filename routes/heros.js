const express = require('express')
const router = express.Router()
const Hero = require("../db-model/heros")



router.post("/base", async (req, res) => {
    const { name, id, class_name, attack_type, sommize, imgs, attributes, roles, stats, talent_tree, abilities } = req.body

    await Hero.findOneAndRemove({ id: id })
    let new_hero = {
        name, id, class_name, attack_type, sommize, imgs, attributes, roles, stats, talent_tree, abilities
    }
    await new Hero(new_hero).save()

    res.json(new_hero)


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

