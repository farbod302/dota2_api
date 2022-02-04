const express = require('express')
const router = express.Router()
const Item = require("../db-model/items")


router.post("/base", async (req, res) => {
    const { consomables, attribotes, equipments, miscellaneous, secret_shop, accessories,
        support, magical, armor, weapons, artifacts, neutral } = req.body
    await new Item(consomables, attribotes, equipments, miscellaneous, secret_shop, accessories,
        support, magical, armor, weapons, artifacts, neutral).save()

    res.json({
        consomables, attribotes, equipments, miscellaneous, secret_shop, accessories,
        support, magical, armor, weapons, artifacts, neutral
    })
})

router.get("/all", async (req, res) => {
    let items = await Item.find()
    res.json(items)
})


router.post("/select_item", async (req, res) => {
    const { id } = req.body
    let item = await Item.findOne({ id: id })
    if (!item) {
        res.json(null)
    }
    const { requirements, upgrades } = item
    let requ = requirements.map(each => {
        return Item.findOne({ key: each }, { img: 1, name: 1, _id: 0 })
    })
    let up = upgrades.map(each => {
        return Item.findOne({ key: each }, { img: 1, name: 1, _id: 0 })

    })
    let req_imgs = await Promise.all(requ)
    let up_imgs = await Promise.all(up)

    item.requirements=req_imgs
    item.upgrades=up_imgs
   
    res.json(item)
   
})


module.exports = router
