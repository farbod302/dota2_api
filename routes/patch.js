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




module.exports = router


