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

router.get("/all",async(req,res)=>{
    let items=await Item.find()
    res.json(items)
})



module.exports = router
