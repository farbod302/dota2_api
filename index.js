const express = require('express');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const heros = require('./routes/heros');
const patch = require('./routes/patch');
const item = require('./routes/items');
const { counter_pick } = require('./counter_pick');
const app = express();
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


mongoose.connect(process.env.DB, () => { console.log("connected to db"); })
app.listen(5050, () => { console.log("run"); })


app.use("/hero", heros)
app.use("/patch", patch)
app.use("/item", item)


app.post("/counter_pick", (req, res) => {
    const { heros } = req.body
    let score = counter_pick(heros)
    res.json({score})
})

