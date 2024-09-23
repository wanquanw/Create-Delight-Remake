StartupEvents.registry("item", e => {
    // 安山合金粒
    e.create("createdelight:andesite_alloy_nugget")
        .maxStackSize(64)
        .translationKey("item.createdelight.andesite_alloy_nugget")
        .tag("forge:nuggets/andesite_alloy")
    // 土豆加牛肉
    e.create("createdelight:potato_stew_beef")
        .food(food => {
            food.hunger(7)
                .saturation(0.6)
                .meat()
                .eaten(ctx => {
                    if (!ctx.level.isClientSide())
                        ctx.player.tell(Text.translatable("text.createdelight.eat_potato_stew_beef").red())
                })
        })
        .translationKey("item.createdelight.potato_stew_beef")
    // 注册挂面
    e.create("createdelight:vermicelli")
        .maxStackSize(64)
        .translationKey("item.createdelight.vermicelli")
    // 注册曲奇面团
    e.create("createdelight:persimmon_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.persimmon_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })
    e.create("createdelight:lemon_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.lemon_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })
    e.create("createdelight:oatmeal_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.oatmeal_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })
    e.create("createdelight:green_tea_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.green_tea_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })
    e.create("createdelight:cranberry_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.cranberry_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })
    e.create("createdelight:bayberry_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.bayberry_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })
    e.create("createdelight:chocolate_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.chocolate_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })
    e.create("createdelight:honey_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.honey_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })
    e.create("createdelight:sweet_berry_cookie_dough")
        .tag("forge:cookie_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.sweet_berry_cookie_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
        })

    // 开酥相关
    e.create("createdelight:butter")
        .maxStackSize(64)
        .translationKey("item.createdelight.butter")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
                .effect("minecraft:nausea", 200, 1, 1.0)
        })
    e.create("createdelight:whipped_cream_bowl")
        .maxStackSize(64)
        .translationKey("item.createdelight.whipped_cream_bowl")
    e.create("createdelight:oil_dough")
        .maxStackSize(64)
        .translationKey("item.createdelight.oil_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
                .effect("minecraft:nausea", 200, 1, 1.0)
        })
    e.create("createdelight:puff_pastry")
        .maxStackSize(64)
        .translationKey("item.createdelight.puff_pastry")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
                .effect("minecraft:nausea", 200, 1, 1.0)
        })
    e.create("createdelight:yorkshire_pudding_and_beef")
        .maxStackSize(64)
        .translationKey("item.createdelight.yorkshire_pudding_and_beef")
        .food(food => {
            food.hunger(12)
                .saturation(1)
        })
    e.create("createdelight:oil_dough_with_butter")
        .maxStackSize(64)
        .translationKey("item.createdelight.oil_dough_with_butter")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
                .effect("minecraft:nausea", 200, 1, 1.0)
        })
    // 板面
    e.create("createdelight:board_noodles")
        .maxStackSize(64)
        .translationKey("item.createdelight.board_noodles")
    // 薯条
    e.create("createdelight:french_fries")
        .maxStackSize(64)
        .translationKey("item.createdelight.french_fries")
        .food(food => {
            food.hunger(5)
                .saturation(0.6)
                .fastToEat()
        })
    e.create("createdelight:potato_sticks")
        .maxStackSize(64)
        .translationKey("item.createdelight.potato_sticks")
        .food(food => {
            food.hunger(1)
                .saturation(1)
        })
    // 切片食物
    e.create("createdelight:sliced_onion")
        .maxStackSize(64)
        .translationKey("item.createdelight.sliced_onion")
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
        })
        .tag("forge:crops/onion")
        .tag("forge:vegetables/onion")
        .tag("forge:fermentable")
        .tag("festival_delicacies:onion")
    e.create("createdelight:sliced_tomato")
        .maxStackSize(64)
        .translationKey("item.createdelight.sliced_tomato")
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
        })
        .tag("forge:crops/tomato")
        .tag("forge:vegetables/tomato")
        .tag("forge:fermentable")
    // 生潘恩达炸饺
    e.create("createdelight:raw_empanada")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_empanada")
        .food(food => {
            food.hunger(4)
                .saturation(0.25)
        })
    // 生暴辣疣猪兽排
    e.create("createdelight:raw_hoglin_chop")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_hoglin_chop")
        .food(food => {
            food.hunger(10)
                .saturation(0.8)
                .effect("mynethersdelight:b_pungent", 1200, 1, 1.0)
        })
    // 生奶酪披萨
    e.create("createdelight:raw_cheese_pizza")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_cheese_pizza")
    // 燕麦面包
    e.create("createdelight:oat_bread")
        .maxStackSize(64)
        .translationKey("item.createdelight.oat_bread")
        .food(food => {
            food.hunger(5)
                .saturation(0.5)
                .effect("minecraft:regeneration", 60, 1, 1.0)
        })
    // 玉米粉
    e.create("createdelight:corn_flour")
        .maxStackSize(64)
        .translationKey("item.createdelight.corn_flour")
    // 腊肠
    e.create("createdelight:salami")
        .maxStackSize(64)
        .translationKey("item.createdelight.salami")
        .food(food => {
            food.hunger(6)
                .saturation(0.7)
                .effect("farmersdelight:nourishment", 600, 1, 1.0)
        })
    // 九转大肠
    e.create("createdelight:braised_intestines_in_brown_sauce")
        .rarity("epic")
        .maxStackSize(16)
        .translationKey("item.createdelight.braised_intestines_in_brown_sauce")
        .food(food =>{
            food.hunger(20)
                .saturation(1)
                .effect("minecraft:nausea", 200, 2, 1.0)
                .effect("minecraft:darkness", 200, 1, 1.0)
                .effect("farmersdelight:nourishment", 6000, 1, 1.0)
    
        })
    // 未完成相关
    e.create("createdelight:incomplete_tesla_coil")
        .maxStackSize(64)
        .translationKey("item.createdelight.incomplete_tesla_coil")
    e.create("createdelight:incomplete_alternator")
        .maxStackSize(64)
        .translationKey("item.createdelight.incomplete_alternator")
    e.create("createdelight:incomplete_diesel_engine")
        .maxStackSize(64)
        .translationKey("item.createdelight.incomplete_diesel_engine")
    e.create("createdelight:incomplete_electric_motor")
        .maxStackSize(64)
        .translationKey("item.createdelight.incomplete_electric_motor")
    e.create("createdelight:incomplete_huge_diesel_engine")
        .maxStackSize(64)
        .translationKey("item.createdelight.incomplete_huge_diesel_engine")
    e.create("createdelight:incomplete_large_diesel_engine")
        .maxStackSize(64)
        .translationKey("item.createdelight.incomplete_large_diesel_engine")
    e.create("createdelight:incompleted_modular_accumulator")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_modular_accumulator")
    e.create("createdelight:incomplete_electron_tube")
        .maxStackSize(64)
        .translationKey("item.createdelight.incomplete_electron_tube")
    e.create("createdelight:bleak_electron_tube")
        .maxStackSize(64)
        .translationKey("item.createdelight.bleak_electron_tube")

    // 注册货币
    e.create("createdelight:iron_coin")
        .maxStackSize(64)
        .translationKey("item.createdelightcore.iron_coin")
        .rarity("common")
    e.create("createdelight:copper_coin")
        .maxStackSize(64)
        .translationKey("item.createdelightcore.copper_coin")
        .rarity("uncommon")
    e.create("createdelight:gold_coin")
        .maxStackSize(64)
        .translationKey("item.createdelightcore.gold_coin")
        .rarity("rare")
    e.create("createdelight:emerald_coin")
        .maxStackSize(64)
        .translationKey("item.createdelightcore.emerald_coin")
        .rarity("rare")
    e.create("createdelight:netherite_coin")
        .maxStackSize(64)
        .translationKey("item.createdelightcore.netherite_coin")
        .rarity("epic")

    // 测试剑
    e.create("createdelight:sigma_man_sword", "sword")
        .tier("netherite")
        .attackDamageBonus(999999)
        .unstackable()
        .translationKey("item.createdelight:sigma_man_sword")
        .rarity("epic")

    // 异界笔记
    e.create("createdelight:otherworld_note")
        .maxStackSize(64)
        .translationKey("item.createdelight.otherworld_note")
        .rarity("rare")

    // 通用压印模板（ae用）
    e.create("createdelight:universal_press")
        .tag("vintageimprovements:curving_heads")
        .translationKey("item.createdelight.universal_press")
    // 红石膏
    e.create("createdelight:redstone_paste")
        .maxDamage(64)
        .translationKey("item.createdelight.redstone_paste")
    // 陨石膏
    e.create("createdelight:sky_stone_paste")
        .maxDamage(64)
        .translationKey("item.createdelight.sky_stone_paste")
    // 初加工的电路板
    e.create("createdelight:initial_processing_of_printed_engineering_processor")
        .translationKey("item.createdelight.initial_processing_of_printed_engineering_processor")
    e.create("createdelight:initial_processing_of_printed_calculation_processor")
        .translationKey("item.createdelight.initial_processing_of_printed_calculation_processor")
    e.create("createdelight:initial_processing_of_printed_logic_processor")
        .translationKey("item.createdelight.initial_processing_of_printed_logic_processor")
    // 待压印的处理器
    e.create("createdelight:engineering_processor_inscribed")
        .translationKey("item.createdelight.engineering_processor_inscribed")
    e.create("createdelight:calculation_processor_inscribed")
        .translationKey("item.createdelight.calculation_processor_inscribed")
    e.create("createdelight:logic_processor_inscribed")
        .translationKey("item.createdelight.logic_processor_inscribed")
    // 元件外壳坯件
    e.create("createdelight:item_cell_housing_blank")
        .translationKey("item.createdelight.item_cell_housing_blank")
    e.create("createdelight:fluid_cell_housing_blank")
        .translationKey("item.createdelight.fluid_cell_housing_blank")
    e.create("createdelight:mega_item_cell_housing_blank")
        .translationKey("item.createdelight.mega_item_cell_housing_blank")
    e.create("createdelight:mega_fluid_cell_housing_blank")
        .translationKey("item.createdelight.mega_fluid_cell_housing_blank")
    // 初处理的元件外壳
    e.create("createdelight:initial_processing_of_item_cell_housing")
        .translationKey("item.createdelight.initial_processing_of_item_cell_housing")
    e.create("createdelight:initial_processing_of_fluid_cell_housing")
        .translationKey("item.createdelight.initial_processing_of_fluid_cell_housing")
    e.create("createdelight:initial_processing_of_mega_item_cell_housing")
        .translationKey("item.createdelight.initial_processing_of_mega_item_cell_housing")
    e.create("createdelight:initial_processing_of_mega_fluid_cell_housing")
        .translationKey("item.createdelight.initial_processing_of_mega_fluid_cell_housing")
    // 未成型的元件外壳
    e.create("createdelight:unformed_item_cell_housing")
        .translationKey("item.createdelight.unformed_item_cell_housing")
    e.create("createdelight:unformed_fluid_cell_housing")
        .translationKey("item.createdelight.unformed_fluid_cell_housing")
    e.create("createdelight:unformed_mega_item_cell_housing")
        .translationKey("item.createdelight.unformed_mega_item_cell_housing")
    e.create("createdelight:unformed_mega_fluid_cell_housing")
        .translationKey("item.createdelight.unformed_mega_fluid_cell_housing")
    // 石英玻璃部件
    e.create("createdelight:quartz_glass_parts")
        .translationKey("item.createdelight.quartz_glass_parts")
    e.create("createdelight:quartz_vibrant_glass_parts")
        .translationKey("item.createdelight.quartz_vibrant_glass_parts")
    // 陨铜锭
    e.create("createdelight:sky_copper_ingot")
        .translationKey("item.createdelight.sky_copper_ingot")
    // 元件外壳封头
    e.create("createdelight:cell_housing_curving_head")
        .translationKey("item.createdelight.cell_housing_curving_head")
        .tag("vintageimprovements:curving_heads")
    // 未完成火箭核心
    e.create("createdelight:incomplete_first_stage_rocket_core")
        .translationKey("item.createdelight.incomplete_first_stage_rocket_core")
    e.create("createdelight:incomplete_second_stage_rocket_core")
        .translationKey("item.createdelight.incomplete_second_stage_rocket_core")
    e.create("createdelight:incomplete_third_stage_rocket_core")
        .translationKey("item.createdelight.incomplete_third_stage_rocket_core")
    e.create("createdelight:incomplete_fourth_stage_rocket_core")
        .translationKey("item.createdelight.incomplete_fourth_stage_rocket_core")


    // 主世界
    e.create("createdelight:overworld_metal_ore_cluster")
        .translationKey("item.createdelight.overworld_metal_ore_cluster")
    e.create("createdelight:overworld_noble_metal_ore_cluster")
        .translationKey("item.createdelight.overworld_noble_metal_ore_cluster")
    // 下界
    e.create("createdelight:nether_ore_cluster")
        .translationKey("item.createdelight.nether_ore_cluster")
    // 月球
    e.create("createdelight:moon_ore_cluster")
        .translationKey("item.createdelight.moon_ore_cluster")
    // 火星
    e.create("createdelight:mars_ore_cluster")
        .translationKey("item.createdelight.mars_ore_cluster")
    e.create("createdelight:mars_gemstone_cluster")
        .translationKey("item.createdelight.mars_gemstone_cluster")
    // 水星
    e.create("createdelight:mercury_ore_cluster")
        .translationKey("item.createdelight.mercury_ore_cluster")

    // 霜原星
    e.create("createdelight:glacio_ore_cluster")
        .translationKey("item.createdelight.glacio_ore_cluster")

    // 高压相变铁
    e.create("createdelight:phase_transition_iron")
        .translationKey("item.createdelight.phase_transition_iron")
})
