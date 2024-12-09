# 模板和变体

## 什么是模板？

模板是不会出现在游戏中的特殊物品，它们用于为其他物品保存属性。  
它们允许您在一个物品中编写常见属性，并自动将它们添加到其他物品中，而无需不断复制和粘贴。

要创建模板，您必须在物品中设置 `template: true`。

{% hint style="warning" %}
这是一个实验性功能，如果有任何问题，请告诉我。  
您可以在[这个插件](https://www.spigotmc.org/resources/furniture-itemsadder-more-furniture.93193/)中看到一个使用示例。
{% endhint %}

## 什么是变体？

变体是会出现在游戏中的物品，并会继承模板物品的属性。

要创建变体，您必须在物品中设置 `variant_of: 模板名称`。

## 示例

我想创建多个相同但模型不同的家具。

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



