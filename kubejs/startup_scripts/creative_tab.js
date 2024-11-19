/**
 *
 * @param {number[]} glyphs 卷轴放置在世界的纹理（4个数字，随意填）
 * @param {number} intricate 是否为深奥原理图（0为不是，1为是）
 * @param {string} key 卷轴对应的键（用于本地化）
 * @param {number} material 卷轴身的材质
 * @param {string[]} schematics 卷轴可带来的模块改装
 * @param {string} ribbon 缠绕卷轴的丝带颜色（十六进制）
 * @returns {Internal.ItemStack}
 */
function custom_scroll(glyphs, intricate, key, material, schematics, ribbon) {
  return Item.of("tetra:scroll_rolled", {
    BlockEntityTag: {
      data: [
        {
          glyphs: glyphs,
          intricate: intricate,
          key: key,
          material: material,
          schematics: schematics,
          ribbon: ribbon,
        },
      ],
    },
  });
}
StartupEvents.modifyCreativeTab("create:base", e => {
  e.add("create:chocolate_bucket")
  e.add("create:honey_bucket")
})
StartupEvents.modifyCreativeTab("kubejs:tab", e => {
  e.add([
    custom_scroll(
      [1, 1, 4, 5],
      1,
      "bow/stave/remembrance_stave",
      1,
      ["tetra:bow/stave/remembrance_stave"],
      "c10000"
    ),
  ]);
  e.add(
    Item.of(
      "expatternprovider:infinity_cell",
      '{display:{Lore:[\'{"italic":false,"color":"white","extra":[{"text":""},{"text":"手持 "},{"color":"blue","text":"1k ME存储组件"},{"text":" 对装有大于1万桶熔岩的1x1流体抽屉蹲下右键获取"}],"text":""}\']},record:{"#c":"ae2:f",id:"minecraft:lava"}}'
    )
  );
  e.remove('createdelight:fire_dragonsteel_armorplate')
  e.remove('createdelight:ice_dragonsteel_armorplate')
  e.remove('createdelight:lightning_dragonsteel_armorplate')
  e.add([
    Item.of('createdelight:fire_dragonsteel_armorplate', '{Damage:0,armor:2.5d,toughness:1.5d,weight:1.5d}'), 
    Item.of('createdelight:ice_dragonsteel_armorplate', '{Damage:0,armor:2.5d,toughness:1.5d,weight:1.5d}'), 
    Item.of('createdelight:lightning_dragonsteel_armorplate', '{Damage:0,armor:2.5d,toughness:1.5d,weight:1.5d}')])
});
