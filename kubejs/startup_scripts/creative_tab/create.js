// 机械动力
StartupEvents.modifyCreativeTab("create:base", e => {
    e.add([
      "create:chocolate_bucket",
      "create:honey_bucket"
    ])
  })
  // 机械动力：实用物品
  StartupEvents.modifyCreativeTab("createutilities:base", e => {
    e.remove([
      'createutilities:void_chest',
      'createutilities:gearcube'
    ])
  })
  // 齿轮与麦穗
  StartupEvents.modifyCreativeTab("ratatouille:base", e => {
    e.remove([
      'ratatouille:salt'
    ])
  })
  // 机械动力：甜食
  StartupEvents.modifyCreativeTab("create_confectionery:create_confectionery_tab", e => {
    e.remove([
      'create_confectionery:crushed_cocoa',
      'create_confectionery:cocoa_powder',
      'create_confectionery:cocoa_butter',
      'create_confectionery:candy_cane_block'
    ])
  })
  
  // 柴油动力
  StartupEvents.modifyCreativeTab("createdieselgenerators:cdg_creative_tab", e => {
    e.remove([
      'createdieselgenerators:kelp_handle',
      'createdieselgenerators:chemical_sprayer',
      'createdieselgenerators:chemical_sprayer_lighter'
    ])
  })
  // 机械动力：新世代
  StartupEvents.modifyCreativeTab("create_new_age:create_new_age_tab", e => {
    e.remove([
      'create_new_age:copper_wire',
      'create_new_age:overcharged_diamond_wire',
      'create_new_age:overcharged_iron_wire',
      'create_new_age:overcharged_golden_wire',
      'create_new_age:blank_circuit',
      'create_new_age:electrical_connector'
    ])
    e.add([
      'alexscaves:block_of_scarlet_neodymium',
      'alexscaves:block_of_azure_neodymium'
    ])
  })
  // CCA
  StartupEvents.modifyCreativeTab("create_connected:main", e => {
    e.add([
      'create_connected:fan_freezing_catalyst'
    ])
  })
  // 创意传动
  StartupEvents.modifyCreativeTab("create_connected:main", e => {
    e.add([
      'create_connected:fan_freezing_catalyst'
    ])
  })
  // create_sa
  StartupEvents.modifyCreativeTab("create_sa:create_stuff_additions_tab", e => {
    e.remove([
      'create_sa:brass_drone_item',
      'create_sa:drone_controller',
      'create_sa:fan_component',
      'create_sa:vault_component',
      'create_sa:blazing_pickaxe',
      'create_sa:blazing_shovel',
      'create_sa:blazing_axe',
      'create_sa:blazing_cleaver',
      'create_sa:brass_cube',
      'create_sa:heap_of_experience',
      'create_sa:experience_pickaxe',
      'create_sa:experience_pickaxe',
      'create_sa:experience_axe',
      'create_sa:experience_sword',
      'create_sa:experience_shovel',
      'create_sa:zinc_handle'
    ])
  })
  // 机械动力：矿石开掘
StartupEvents.modifyCreativeTab("createoreexcavation:create_ore_excavation", e => {
  e.add([
    'createdelight:prospector',
    'createdelight:prospector_core',
    'createdelight:overworld_metal_ore_cluster',
    'createdelight:overworld_noble_metal_ore_cluster',
    'createdelight:nether_ore_cluster',
    'createdelight:moon_ore_cluster',
    'createdelight:mars_ore_cluster',
    'createdelight:mars_gemstone_cluster',
    'createdelight:mercury_ore_cluster',
    'createdelight:venus_ore_cluster',
    'createdelight:glacio_ore_cluster',
  ])
  e.remove([
    'createoreexcavation:vein_finder',
  ])
})