ServerEvents.recipes(e => {
    // 移除配方：ad_astra
    remove_recipes_type(e, [
        "ad_astra:refining",
        "ad_astra:cryo_freezing"
    ])
    remove_recipes_output(e, [
        "ad_astra:compressor",
        "ad_astra:coal_generator",
        "ad_astra:cable_duct",
        "ad_astra:ostrum_fluid_pipe",
        "ad_astra:desh_cable",
        "ad_astra:steel_cable",
        "ad_astra:desh_fluid_pipe",
        "ad_astra:fluid_pipe_duct",
        "ad_astra:water_pump",
        "ad_astra:nasa_workbench",
        "ad_astra:wrench",
        "ad_astra:steel_plate"
    ])
    remove_recipes_id(e, [
        "ad_astra:nasa_workbench/tier_1_rocket",
        "ad_astra:nasa_workbench/tier_2_rocket",
        "ad_astra:nasa_workbench/tier_3_rocket",
        "ad_astra:nasa_workbench/tier_4_rocket",
        "ad_astra:recipes/steel_ingot_from_blasting_iron_ingot",
        "ad_astra:recipes/steel_ingot_from_nuggets",
        "ad_astra:recipes/engine_frame",
        "ad_astra:recipes/ostrum_tank",
        "ad_astra:recipes/ostrum_engine",
        "ad_astra:recipes/calorite_tank",
        "ad_astra:recipes/calorite_engine",
        "ad_astra:fuel_refinery",
        "ad_astra:cryo_freezer"
    ])
    e.replaceInput({id:"ad_astra:oxygen_distributor"}, "ad_astra:oxygen_loader", "createdelight:electrolyzer")
    // 新增配方：霜原木
    e.recipes.kubejs.shapeless("ad_astra:glacian_log", [
        "#minecraft:logs",
        "ad_astra:ice_shard"
    ])
    // 新增配方：霜原树叶
    e.recipes.kubejs.shapeless("ad_astra:glacian_leaves", [
        "#minecraft:leaves",
        "ad_astra:ice_shard"
    ])
    // 替换配方：喷气式航天服
    e.recipes.kubejs.shaped("ad_astra:jet_suit", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "ad_astra:calorite_plate",
        B: "create_sa:brass_jetpack_chestplate",
        C: "ad_astra:calorite_tank",
        D: "ad_astra:netherite_space_suit",
        E: 'ad_astra:etrionic_capacitor',
        F: "ad_astra:calorite_engine"
    })
        .id("ad_astra:jet_suit")
    //替换配方：氧气罐
    e.recipes.kubejs.shaped("ad_astra:gas_tank", [
        "ABA",
        "ACA",
        "AAA"
    ], {
        A: "#forge:plates/steel",
        B: "createaddition:iron_rod",
        C: "create:fluid_tank"
    }).id("ad_astra:gas_tank")
    //替换配方：引擎框架
    e.recipes.kubejs.shaped("ad_astra:engine_frame", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "#forge:rods/iron",
        B: "create:precision_mechanism"
    }).id("ad_astra:engine_frame")
    //替换配方：引擎风扇
    e.recipes.kubejs.shaped("ad_astra:fan", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "#forge:plates/steel",
        B: "create:propeller"
    }).id("ad_astra:fan")
    //替换配方：充能器
    e.recipes.kubejs.shaped("ad_astra:energizer", [
        "ABA",
        "ACA",
        "ADA"
    ], {
        A: "ad_astra:ostrum_plate",
        B: "create:depot",
        C: 'ad_astra:etrionic_capacitor',
        D: "createaddition:modular_accumulator"
    }).id("ad_astra:energizer")
    //石墨
    e.recipes.kubejs.shapeless(
        'createmetallurgy:graphite',[
            "8x #minecraft:coals",
            "minecraft:clay_ball"
        ]
    ).id("createmetallurgy:graphite")
    //替换配方：氧气装载机
    e.recipes.kubejs.shaped('createdelight:electrolyzer', [
        "AAA",
        "BCB",
        "ADA"
    ], {
        A: "#forge:plates/steel",
        B: "ad_astra:gas_tank",
        C: '#forge:graphite',
        D: "createaddition:modular_accumulator"
    }).id("ad_astra:oxygen_loader")
    // 混合燃料
    e.recipes.create.mixing(
        Fluid.of("createdelight:fuel_mixtures", 10),
        [
            Fluid.of("createdieselgenerators:gasoline", 10),
            Fluid.of("createdieselgenerators:diesel", 10)
        ]
    ).id("ad_astra:recipes/fuel_mixtures")
    e.recipes.create.mixing(
        Fluid.of("createdelight:fuel_mixtures", 20),
        [
            Fluid.of("createdieselgenerators:gasoline", 20),
            Fluid.of("createdieselgenerators:biodiesel", 30)
        ]
    ).id("ad_astra:sub_recipes/fuel_mixtures")
    // 电子核心
    e.recipes.kubejs.shaped(
        "3x ad_astra:etrionic_core", [
        "AAA",
        "BBB",
        "AAA"
    ], {
        A: "createaddition:zinc_sheet",
        B: "createaddition:electrum_sheet"
    }
    ).id("ad_astra:crafting/etrionic_core")
    // 电容器
    e.recipes.kubejs.shaped(
        "ad_astra:etrionic_capacitor", [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "minecraft:redstone",
        B: "ad_astra:steel_plate",
        C: "ad_astra:etrionic_core",
        D: "minecraft:diamond"
    }
    ).id("ad_astra:etrionic_capacitor")
    // 太阳能面板
    e.replaceInput({ id: "ad_astra:photovoltaic_etrium_cell" }, "minecraft:diamond", "ad_astra:etrionic_core")
    // 太阳能
    e.recipes.kubejs.shaped(
        "ad_astra:solar_panel", [
        "AAA",
        "BCB",
        "CDC"
    ], {
        A: "ad_astra:photovoltaic_etrium_cell",
        B: "ad_astra:steel_plate",
        C: "ad_astra:desh_plate",
        D: "ad_astra:etrionic_core"
    }
    ).id("ad_astra:solar_panel")
})
