# Templates and variants

## 什么是模板

模板是不会出现在游戏中的特殊物品,它们被用作物品的属性主体.[比如你想给这个木板添加更多颜色.那么只需用模板就可以保持属性的相同.]
它们允许你在一个物品里有相同的属性,通过分支来弄出不同的材质的效果.并且自动的添加到其他物品里,无需不断地复制和粘贴.

要创建一个模板,你必须在你的物品里设置`template: true`

## 什么是分支

分支是将在游戏中出现的物品，并且继承模板物品的属性.
要创建一个分支,你必须在你的物品里设置`variant_of: template name`

## 栗子

我想创建多个材质的家具,它们的属性是相同的,但只有材质/模型不同.

```yaml
  template_wood_park_bench:
    template: true  # <---- HERE you can see I set this item as "template"
    display_name: ""
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/oak_wood_park_bench
    behaviours:
      furniture:
        entity: armor_stand
        small: true
        solid: true
        fixed_rotation: true
        hitbox:
          length: 1
          width: 2
          height: 1
          width_offset: 0.5
        placeable_on:
          walls: false
          ceiling: false
          floor: true
      furniture_sit:
        sit_height: 0.5
        sit_all_solid_blocks: true
  oak_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Oak wood Park Bench"
    permission: oak_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/oak_wood_park_bench
  spruce_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Spruce wood Park Bench"
    permission: spruce_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/spruce_wood_park_bench
  birch_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Birch wood Park Bench"
    permission: birch_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/birch_wood_park_bench
```



