ServerEvents.recipes((event) => {
  event.remove({mod: "createoreexcavation", type: "createoreexcavation:vein"})
  event.remove({mod: "createoreexcavation", type: "createoreexcavation:drilling"})
  //主世界金属矿簇
  event.recipes.createoreexcavation
    .vein(
      '{"text": "主世界金属矿簇"}',
      "createdelight:overworld_metal_ore_cluster",
    )
    .placement(64, 8, 114514)
    .id("kubejs:overworld_metal_ore_cluster_ore")
    .biomeWhitelist("minecraft:is_overworld");
  event.recipes.createoreexcavation
    .drilling(
      "createdelight:overworld_metal_ore_cluster",
      "kubejs:overworld_metal_ore_cluster_ore",
      600,
    )
    .id("kubejs:overworld_metal_ore_cluster_ore_drilling");

  //主世界贵金属矿簇
  event.recipes.createoreexcavation
    .vein(
      '{"text": "主世界贵金属矿簇"}',
      "createdelight:overworld_noble_metal_ore_cluster",
    )
    .placement(128, 16, 721)
    .id("kubejs:overworld_noble_metal_ore_cluster_ore")
    .biomeWhitelist("minecraft:is_overworld");
  event.recipes.createoreexcavation
    .drilling(
      "createdelight:overworld_noble_metal_ore_cluster",
      "kubejs:overworld_noble_metal_ore_cluster_ore",
      1000,
    )
    .id("kubejs:overworld_noble_metal_ore_cluster_ore_drilling")
    .drill("createoreexcavation:netherite_drill");

  //下界矿簇
  event.recipes.createoreexcavation
    .vein('{"text": "下界矿簇"}', "createdelight:nether_ore_cluster")
    .placement(64, 8, 114514)
    .id("kubejs:nether_ore_cluster")
    .biomeWhitelist("minecraft:is_nether");
  event.recipes.createoreexcavation
    .drilling(
      "createdelight:nether_ore_cluster",
      "kubejs:nether_ore_cluster",
      600,
    )
    .id("kubejs:nether_ore_cluster_drilling");

  //月球矿簇
  event.recipes.createoreexcavation
    .vein('{"text": "月球矿簇"}', "createdelight:moon_ore_cluster")
    .placement(64, 8, 114514)
    .id("kubejs:moon_ore_cluster_ore")
    .biomeWhitelist("createdelight:is_moon");
  event.recipes.createoreexcavation
    .drilling(
      "createdelight:moon_ore_cluster",
      "kubejs:moon_ore_cluster_ore",
      600,
    )
    .id("kubejs:moon_ore_cluster_ore_drilling");

  //火星矿簇
  event.recipes.createoreexcavation
    .vein('{"text": "火星矿簇"}', "createdelight:mars_ore_cluster")
    .placement(64, 8, 114514)
    .id("kubejs:mars_ore_cluster_ore")
    .biomeWhitelist("createdelight:is_mars");
  event.recipes.createoreexcavation
    .drilling(
      "createdelight:mars_ore_cluster",
      "kubejs:mars_ore_cluster_ore",
      600,
    )
    .id("kubejs:mars_ore_cluster_ore_drilling");

  //火星宝石矿簇
  event.recipes.createoreexcavation
    .vein('{"text": "火星宝石矿簇"}', "createdelight:mars_gemstone_cluster")
    .placement(128, 16, 721)
    .id("kubejs:mars_gemstone_cluster_ore")
    .biomeWhitelist("createdelight:is_mars");
  event.recipes.createoreexcavation
    .drilling(
      "createdelight:mars_gemstone_cluster",
      "kubejs:mars_gemstone_cluster_ore",
      1000,
    )
    .id("kubejs:mars_gemstone_cluster")
    .drill("createoreexcavation:netherite_drill");
  
  //水星矿簇
  event.recipes.createoreexcavation
    .vein('{"text": "水星矿簇"}', "createdelight:mercury_ore_cluster")
    .placement(64, 8, 114514)
    .id("kubejs:mercury_ore_cluster_ore")
    .biomeWhitelist("createdelight:is_mercury");
  event.recipes.createoreexcavation
    .drilling(
      "createdelight:mercury_ore_cluster",
      "kubejs:mercury_ore_cluster_ore",
      600,
    )
    .id("kubejs:mercury_ore_cluster_ore_drilling")
    .drill("createoreexcavation:netherite_drill");

  //金星矿簇
  event.recipes.createoreexcavation
    .vein('{"text": "金星矿簇"}', "createdelight:venus_ore_cluster")
    .placement(128, 16, 721)
    .id("kubejs:venus_ore_cluster_ore")
    .biomeWhitelist("createdelight:is_venus")
  event.recipes.createoreexcavation
    .drilling(
      "createdelight:venus_ore_cluster",
      "kubejs:venus_ore_cluster_ore",
      1000,
    )
    .id("kubejs:venus_ore_cluster")
    .drill("createoreexcavation:netherite_drill");
  //霜原星矿簇
  event.recipes.createoreexcavation
   .vein('{"text": "霜原星矿簇"}', "createdelight:glacio_ore_cluster")
   .placement(128, 16, 721)
   .id("kubejs:glacio_ore_cluster_ore")
   .biomeWhitelist("createdelight:is_glacio");
  event.recipes.createoreexcavation
   .drilling(
     "createdelight:glacio_ore_cluster",
     "kubejs:glacio_ore_cluster_ore",
     1000,
   )
   .id("kubejs:glacio_ore_cluster")
   .drill("createoreexcavation:netherite_drill");
 
});