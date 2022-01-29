const Hero = require("./db-model/heros")
const download = require('image-downloader')
const translate = require('translate-google')


const download_hero_img = async () => {

    const heros = await Hero.find({}, { imgs: 1, _id: 0, name: 1 })
    let promissess = heros.map(async (each, index) => {
        await new Promise(resolve => { setTimeout(() => { resolve() }, index * 400) })
        const { hero_image } = each.imgs

        const options = {
            url: hero_image,
            dest: './hero_img/' + each.name + ".png"
        }
        return download.image(options)
    })

    await Promise.all(promissess)
}


const translate_ar =async (obj) => {
    
   let tr=await translate(obj,{to:"ar"})
    return tr
}

const translate_fa =async (obj) => {
    
    let tr=await translate(obj,{to:"fa"})
     return tr
 }

module.exports = { download_hero_img ,translate_ar,translate_fa}