const express = require('express');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const heros = require('./routes/heros');
const patch = require('./routes/patch');
const item = require('./routes/items');
const { download_hero_img } = require('./helper');
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
download_hero_img()