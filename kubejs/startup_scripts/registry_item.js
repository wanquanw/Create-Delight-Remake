StartupEvents.registry('item', e => {
    // 安山合金粒
    e.create("createdelight:andesite_alloy_nugget")
        .maxStackSize(64)
        .translationKey("item.createdelight.andesite_alloy_nugget")
        .tag("forge:nuggets/andesite_alloy")
    // 粗钢锭
    e.create("createdelight:raw_steel_ingot")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_steel_ingot")
        .tag("forge:ingots/raw_steel")
        .rarity("common")
    // 锤炼中的粗钢锭
    e.create("createdelight:hammering_raw_steel_ingot")
        .maxStackSize(64)
        .translationKey("item.createdelight.hammering_raw_steel_ingot")
        .tag("forge:ingots/hammering_raw_steel")
        .rarity("common")
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
    // **rs中间产物
    e.create("createdelight:incompleted_1k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_1k_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_4k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_4k_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_16k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_16k_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_64k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_64k_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_64k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_64k_fluid_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_256k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_256k_fluid_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_1024k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_1024k_fluid_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_4096k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_4096k_fluid_storage_part")
        .rarity("common")
    e.create("createdelight:raw_silicon")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_silicon")
        .rarity("common")
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
    // 生潘恩达炸饺
    e.create("createdelight:raw_empanada")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_empanada")
        .food(food => {
            food.hunger(2)
            .saturation(1)
        })
    // 生暴辣疣猪兽排
    e.create("createdelight:raw_hoglin_chop")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_hoglin_chop")
        .food(food => {
            food.hunger(2)
            .saturation(1)
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
            food.hunger(2)
            .saturation(1)
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
    // 未完成相关
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
        .translationKey("item.createdelight.iron_coin")
        .rarity("common")
    e.create("createdelight:brass_coin")
        .maxStackSize(64)
        .translationKey("item.createdelight.brass_coin")
        .rarity("uncommon")
    e.create("createdelight:gold_coin")
        .maxStackSize(64)
        .translationKey("item.createdelight.gold_coin")
        .rarity("rare")
    e.create("createdelight:netherite_coin")
        .maxStackSize(64)
        .translationKey("item.createdelight.netherite_coin")
        .rarity("epic")

    //一阶火箭核心
    e.create("createdelight:first_stage_rocket_core")
        .maxStackSize(64)
        .translationKey("item.createdelight:first_stage_rocket_core")
        .rarity("common")
    //二阶火箭核心
    e.create("createdelight:second_stage_rocket_core")
        .maxStackSize(64)
        .translationKey("item.createdelight:second_stage_rocket_core")
        .rarity("common")
    //三阶火箭核心
    e.create("createdelight:third_stage_rocket_core")
        .maxStackSize(64)
        .translationKey("item.createdelight:third_stage_rocket_core")
        .rarity("uncommon")
    //四阶火箭核心
    e.create("createdelight:fourth_stage_rocket_core")
        .maxStackSize(64)
        .translationKey("item.createdelight:fourth_stage_rocket_core")
        .rarity("rare")
})