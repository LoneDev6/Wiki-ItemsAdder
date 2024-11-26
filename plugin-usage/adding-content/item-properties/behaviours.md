# 行为

什么是行为？

行为是物品将执行的一组**已编辑好**的**动作**，这些动作**不是原版**的。\
这些**行为**已经包含在插件中，并将允许您为物品添加一些已编码的功能。

### 插件中包含的行为列表

* `block_trade_machine`
* `furniture_trade_machine`
* `fuel`
* `furniture`
* `furniture_sit`
* `gun`
* `hat`
* `keep_on_death`
* `liquid_analyzer`
* `liquid_bucket`
* `mob_animation`
* `mob`
* `music_disc`
* `sapling`
* `spawn_egg`
* `vehicle`

{% hint style="info" %}
您可以使用官方编辑器获取如何使用这些行为的建议：
{% endhint %}

```yaml
# This behaviour allows you to open a trade GUI with the following items
# For example black_fishing_rod and red_fishing_rod
block_trade_machine:
  title: "Your title"
  permission: "mypermission.trade.example" # <--- this is optional
  gui_texture: ###THIS IS OPTIONAL, use it only to retexture the GUI
    left: customization_table_left
    right: customization_table_right
  trades_list:
    black_fishing_rod:
      ingredients:
        slot1:
          item: FISHING_ROD
          amount: 1
        slot2:
          item: BLACK_DYE
          amount: 1
      result:
        item: black_fishing_rod
        amount: 1
    red_fishing_rod:
      ingredients:
        slot1:
          item: FISHING_ROD
          amount: 1
        slot2:
          item: RED_DYE
          amount: 1
      result:
        item: red_fishing_rod
        amount: 1
        
furniture_trade_machine:
# ....... it's the same as block_trade_machine

   
# When you rightclick with that item it will be placed on the ground with an
# armorstand. The armorstand will have the item as helmet and will be invisible.
furniture:
  entity: armor_stand # you can also use item_frame (works better on 1.16+)
  small: true
  gravity: true
  fixed_rotation: false
  light_level: 7  
  solid: false
  opposite_direction: false #makes the model rotate 180 when placed
  hitbox:
    length: 2
    width: 2.3
    height: 1
    length_offset: 0.5
    width_offset: 0.5
    height_offset: 0.5
  placeable_on:
    walls: false
    ceiling: false
    floor: true

# If you add this behaviour and "furniture" behaviour you will be able to sit
# on the furniture at the defined height.
furniture_sit:
  sit_height: 0.9
  opposite_direction: true #default is true
  # Sit on every BARRIER block of the furniture (for multi-seats chairs)
  sit_all_solid_blocks: false
  

# Allows you to use this item as a gun. You can decide which projectile must
# be hold on left hand in order to shot.
gun:
  projectile: itemsadder:clip
  

# Allows you to use the current item as hat (same vanilla helmet behaviour)
hat: true

# Allows you to make the item stay in player inventory on death
keep_on_death: true

# Allows you to use the current item as a vanilla music disc.
# Remember that you will have to create a custom sound to be able
# to play something.
music_disc:
  song:
    name: "itemsadder:music_disc.cdk_sunday"
    description: "Cdk - Sunday"
    

# Allows you to use the current item as a ridable vehicle
vehicle:
  fixed_rotation: false
  small: true
  sit_height: 0
  step_height: 0.1
  hitbox:
    length: 2
    width: 1.7
    height: 1
  speed:
    drive: 1
    jump: 0.3
    fly: 0
  fuel:
    start: 150
    max: 300
    items:
      COAL: 1
      CHARCOAL: 1
      COAL_BLOCK: 9
      "itemsadder:banana": 1
  smoke:
    amount: 2
    offset:
      x: 0
      y: 0
      z: -0.8
```

## 使用官方文件编辑器阅读所有属性

{% content-ref url="../../files-editor.md" %}
[文件编辑器](../../files-editor.md)
{% endcontent-ref %}
