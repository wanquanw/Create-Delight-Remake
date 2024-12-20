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
    
    // 磁铁块
    let ingr_1 = ["minecraft:iron_block"]
    for (let i = 0; i < 8; i++) {
        ingr_1.push("alexscaves:energized_galena_neutral")
    }
    e.recipes.vintageimprovements.pressurizing(
        "create_new_age:magnetite_block", 
        ingr_1
    ).heated().id("create_new_age:pressurizing/magnetite_block")
    // 红石磁铁
    e.recipes.vintageimprovements.pressurizing(
        "create_new_age:redstone_magnet",
        [
            "create_new_age:magnetite_block",
            'minecraft:redstone',
            Fluid.of("createdelight:molten_scarlet_neodymium", 90),
            Fluid.of("createdelight:molten_azure_neodymium", 90)
        ]
    ).heated().id("create_new_age:shaped/redstone_magnet")
    // 铁金介质磁铁
    let iner_3 = "createdelight:incomplete_layered_magnet"
    e.recipes.create.sequenced_assembly("create_new_age:layered_magnet", "create_new_age:redstone_magnet", 
        [
            e.recipes.create.deploying(iner_3, [iner_3, 'create_new_age:overcharged_golden_sheet']),
            e.recipes.create.deploying(iner_3, [iner_3, 'create_new_age:overcharged_iron_sheet']),
            e.recipes.create.deploying(iner_3, [iner_3, 'create_new_age:overcharged_golden_sheet']),
            e.recipes.create.deploying(iner_3, [iner_3, 'create_new_age:overcharged_iron_sheet']),
        ]
    )
        .loops(1)
        .transitionalItem(iner_3)
        .id("create_new_age:shaped/layered_magnet")
    // 钻石磁铁
    e.recipes.vintageimprovements.pressurizing(
        "create_new_age:fluxuated_magnetite",
        [
            'create_new_age:overcharged_gold',
            'create_new_age:overcharged_diamond',
            "create_new_age:layered_magnet",
            'minecraft:blaze_powder',
            Fluid.of("alexscaves:acid", 250)
        ]
    ).heated().id("create_new_age:fluxuated_magnetite")
    // 下届合金磁铁
    e.recipes.vintageimprovements.pressurizing(
        "create_new_age:netherite_magnet",
        [
            "create_new_age:fluxuated_magnetite",
            Fluid.of("createmetallurgy:molten_netherite", 90)
        ]
    ).heated().id("create_new_age:shaped/netherite_magnet")
    //核反应堆材料
    let iner_1 = "create_new_age:incomplete_casing"
    e.recipes.create.sequenced_assembly("create_new_age:reactor_casing", "ad_astra:steel_plating", [
        e.recipes.create.deploying(iner_1, [iner_1, "createmetallurgy:graphite"]),
        e.recipes.create.deploying(iner_1, [iner_1, "alexscaves:polymer_plate"]),
        e.recipes.create.pressing(iner_1, iner_1)
    ])
    .loops(1)
    .transitionalItem(iner_1)
    .id("create_new_age:reactor/reactor_casing")
    

    //电机，电机扩展
    e.recipes.create.mechanical_crafting("create_new_age:advanced_motor_extension", [
        "AAAAA",
        "BCDCE",
        "AAAAA"
    ],
    {
        A: "ad_astra:steel_plate",
        B: "alexscaves:block_of_scarlet_neodymium",
        C: "create_new_age:copper_circuit",
        D: "create_new_age:reinforced_motor",
        E: "alexscaves:block_of_azure_neodymium"
    })
    .id("create_new_age:advanced_motor_extension")
})