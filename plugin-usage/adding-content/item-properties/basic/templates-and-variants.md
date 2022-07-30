# 物品模板和子级物品

## 什么是物品模板?

物品模板作为一种不会在游戏内显示的特殊物品, 它会为其他的物品添加相同的配置.  
这允许您在物品模板中写入公共配置, 并将其自动添加到其他物品中, 而无需频繁地复制和粘贴.

要创建一个模板，你必须在物品中添加 `template: true` 属性.

{% hint style="warning" %}
这是一个正在测试的实验性功能，如果有问题，请立即和作者反馈.  
你可以在这里看到一个示例用法 [点击打开](https://www.spigotmc.org/resources/furniture-itemsadder-more-furniture.93193/).
{% endhint %}

## 什么是 variants（子级物品）?

Variants（子级物品）将显示在游戏中, 并将继承模板物品的物品配置.

要创建一个子级物品, 您必须在物品添加 `variant_of: 模板名称`.

## 示例配置

我想创建多个不同模型的相同样式家具.

```yaml
  template_wood_park_bench:
    template: true  # <---- 在这里可以看到我将此项设置为 "template"
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
    variant_of: template_wood_park_bench # <-- 这里是指定我要继承的物品模板
    display_name: "Oak wood Park Bench"
    permission: oak_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/oak_wood_park_bench
      
      
  spruce_wood_park_bench:
    variant_of: template_wood_park_bench # <-- 这里是指定我要继承的物品模板
    display_name: "Spruce wood Park Bench"
    permission: spruce_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/spruce_wood_park_bench
      
      
  birch_wood_park_bench:
    variant_of: template_wood_park_bench # <-- 这里是指定我要继承的物品模板
    display_name: "Birch wood Park Bench"
    permission: birch_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/birch_wood_park_bench
```



