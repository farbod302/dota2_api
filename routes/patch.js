const express = require('express')
const router = express.Router()
const Patch = require("../db-model/patch")





router.post("/bace", async (req, res) => {
    const { heros, patch, general, item, neutral } = req.body
    await Patch.findOneAndRemove({ patch: patch })
    let new_patch = { heros, patch, general, item, neutral }
    await new Patch(new_patch).save()
    res.json(new_patch)
})

router.get("/", async (req, res) => {
    const patches = await Patch.find({})
    res.json(patches)
})

router.post("/select_patch", (req, res) => {
    const { patch } = req.body
    let selected = await Patch.findOne({ patch: patch })
    res.json({ selected })
})


module.exports = router


