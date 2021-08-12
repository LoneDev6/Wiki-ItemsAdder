# 类型设置

什么是类型?

类型是给这个物品做的一套的动作,而这些动作并不是来自原版的. 这些**类型**已经包含在插件里,这将允许你在你的物品里添加一些已有的功能.

## 插件中包含的类型列表

* `block_trade_machine`\[可互交方块\]
* `furniture_trade_machine`\[可互交家具\]
* `fuel`\[法力\]
* `furniture`\[家具\]
* `furniture_sit`\[可坐家具\]
* `gun`\[枪\]
* `hat`\[帽子\]
* `keep_on_death`\[类似绑定\]
* `liquid_analyzer`\[水\]
* `liquid_bucket`\[水桶\]
* `mob_animation`\[怪物动作\]
* `mob`\[怪物\]
* `music_disc`\[唱片\]
* `sapling`\[树苗\]
* `spawn_egg`\[生成蛋\]
* `vehicle`\[车辆\]

{% hint style="info" %}
你可以使用官方在线工具来获得如何使用类型的建议.

{% page-ref page="../../../../files-editor.md" %}
{% endhint %}

```yaml
# 这种类型允许你打开一个具有以下物品的互交GUI
# 比如black_fishing_rod和red_fishing_rod
block_trade_machine:
  title: "Your title"
  permission: "mypermission.trade.example" # <--- 可选择不填
  gui_texture: ###可选的,只在对GUI进行附上贴图时使用它.
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
# ....... 它与block_trade_machine相同.


# 当你用该物品点击右键时,它将会和一个盔甲架一起被放在地面上.
# 盔甲架将把该物品作为头盔,并且盔甲架是隐形的.
furniture:
  entity: armor_stand # 你也可以使用"item_frame"(在1.16+的效果会比较好)
  small: true
  gravity: true
  fixed_rotation: false
  light_level: 7  
  solid: false
  opposite_direction: false # 使模型在放置时旋转180°
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

# 如果你添加了这个类型和"furniture[家具]"类型
# 你就能以你定义的高度来坐在家具上
furniture_sit:
  sit_height: 0.9
  opposite_direction: true #default is true
  # 坐在家具的每个屏障方块上(对于多个座位的家具)
  sit_all_solid_blocks: false


# 允许你把这个物品当作枪来使用.
# 你可以决定必须用副手握住哪种弹药才能射击.
gun:
  projectile: itemsadder:clip


# 允许你将当前物品作为帽子使用(与原版头盔的使用相同)
hat: true

# 允许你使物品在死亡时留在玩家的背包里
keep_on_death: true

# 允许你把当前的物品作为一个原版的唱片
# 记住,你必须放一段音效/音乐来进行播放.
music_disc:
  song:
    name: "itemsadder:music_disc.cdk_sunday"
    description: "Cdk - Sunday"


# 允许你将当前物品作为可坐的车辆或者其他.
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

