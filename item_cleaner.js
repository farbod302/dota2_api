const { ARTIFACTS, WEAPONS, ARMOR, MAGICAL, SUPPORT, ACCESSORIES, SECRET_SHOP, MISCELLANEOUS, EQUIPMENTS, ATTRIBUTES, CONSUMABLES } = require("./scrap_items")
all_scrap = [ARTIFACTS, WEAPONS, ARMOR, MAGICAL, SUPPORT, ACCESSORIES, SECRET_SHOP, MISCELLANEOUS, EQUIPMENTS, ATTRIBUTES, CONSUMABLES]
const api_items = require("./api_items.json")
const Items = require("./db-model/items")

const recipe_cleaner = async () => {
    let img = "https://s6.uupload.ir/files/recipe_orjy.png"
    let all_recipes = [...api_items].filter(each => each.key.indexOf("item_recipe") > -1)
    let add_arr = []
    all_recipes.forEach(each => {
        let { id, name, key, notes, cost, requirements, upgrades } = each
        if (!name) {
            name = key.replace("item_recipe", "")
            name = name.replace(/_/g, " ")
            name = name.replace(" ", "")

        }
        name = name.replace(" Recipe", "")
        name = name.toLowerCase()
        let new_item = {
            id, key, notes, cost, requirements, upgrades, name,
            img,
            mana: "0",
            colldown: "0",
            custom_att: [],
            show: false,
            recipe: true
        }
        add_arr.push(new_item)
    })
    await Items.insertMany(add_arr)
}

const main_item_cleaner = async () => {
    let all_main = [...api_items].filter(each => each.key.indexOf("item_recipe") == -1 && each.name !== undefined && each.cost !== undefined && each.id < 350)
    let all_recipes = [...api_items].filter(each => each.key.indexOf("item_recipe") > -1)
    let add_item = []
    all_main.forEach(each => {
        let { id, name, key, notes, cost,secret_shop, requirements, upgrades, custom_attributes } = each
        let new_item = {
            id, name: name, key, notes, cost, secret_shop,requirements, upgrades, custom_att: custom_attributes
        }

        //find img
        let img
        all_scrap.forEach(each => {
            let selected = each.find(each_selected => each_selected.item_name == name)
            if (selected) {
                img = selected.item_image
            }
        })

        // delete * from req
        new_item.requirements.forEach((each, index) => {
            new_item.requirements[index] = each.replace("*", "")
        })

        //ditect recipe
        let name_of_recipe = `item_recipe_${key.replace("item_", "")}`
        let index = all_recipes.findIndex(each => each.key == name_of_recipe)
        if (index !== -1) {
            new_item.requirements.push("recipe")
        }
        if (img !== undefined) {
            new_item["img"] = img
            add_item.push(new_item)
        }

    })

    await Items.insertMany(add_item)

}



module.exports = { recipe_cleaner, main_item_cleaner }

