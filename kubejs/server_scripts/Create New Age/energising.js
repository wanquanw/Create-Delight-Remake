ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "create_new_age:reactor/reactor_casing",
        "create_new_age:advanced_motor_extension",
        "create_new_age:shaped/fluxuated_magnetite",
        "create_new_age:shaped/connector",
        "create_new_age:cutting/copper_sheet",
        "create_new_age:cutting/overcharged_iron_sheet",
        "create_new_age:cutting/overcharged_golden_sheet",
        "create_new_age:diamond_wire",
        "create_new_age:pressing/blank_circuit",
        "create_new_age:deploying/copper_circuit"
    ])
    
    // 充能和激发互相适配
    e.forEachRecipe({type: "create_new_age:energising", mod: "create_new_age"}, r => {
        let energy = r.json.get("energy_needed").asDouble
        let input = r.getOriginalRecipeIngredients()
        let output = r.getOriginalRecipeResult()
        e.recipes.createaddition.charging(input, output, energy)
        .id(`create_new_age:charging/${output.getId().split(":")[1]}`)
    })
    e.forEachRecipe({type: "createaddition:charging", mod: "createaddition"}, r => {
        let energy = r.json.get("energy").asDouble
        let input = r.json.get("input").asJsonObject
        let itemId = input.get("item").asString
        let count = input.get("count").asDouble
        let output = r.getOriginalRecipeResult()
        e.recipes.create_new_age.energising(Ingredient.of(itemId, count), output, energy)
        .id(`createaddition:energising/${output.getId().split(":")[1]}`)
    })
    // 充能器
    e.recipes.kubejs.shaped(
        'create_new_age:energiser_t1',
        [
            " A ",
            "BCB",
            " D "
        ], {
            A: 'create:shaft',
            B: '#forge:ingots/iron',
            C: "create:andesite_casing",
            D: "minecraft:lightning_rod"
        }
    ).id("create_new_age:shapeless/energiser_t1")
    e.recipes.kubejs.shaped(
        "create_new_age:energiser_t2",
        [
            " A ",
            "BCB",
            " D "
        ], {
            A: 'ad_astra:etrionic_core',
            B: "create_new_age:overcharged_golden_sheet",
            C: "create_new_age:energiser_t1",
            D: "vintageimprovements:laser_item"
        }
    ).id("create_new_age:shaped/energiser_t2")
})