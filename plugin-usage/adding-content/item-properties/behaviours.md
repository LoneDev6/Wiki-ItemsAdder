# 行为属性（Behaviours）

什么是行为属性?

行为属性是使已导入的物品执行特定的操作.\
这些行为类型已经包含在插件中，向物品添加一些已经写入的功能

### 内置的行为属性列表

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
您可以通过官方编辑器获得如何使用这些行为的建议:
{% endhint %}

```yaml

# 该行为属性能够允许你在使用下列物品时打开交易界面
# 例如： black_fishing_rod 、 red_fishing_rod
block_trade_machine:
  title: "Your title"
  permission: "mypermission.trade.example" # <--- 可选项
  gui_texture: ###可选项, 取决于你是否要自定义该界面的UI
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
# ....... 类似于 block_trade_machine 属性

   
# 当你右键放置该物品时，该物品将会与盔甲架一同放置在地上，该物品会装备在盔甲架的头盔上（盔甲架是隐形的）
furniture:
  entity: armor_stand # 你也可以设置为 item_frame (在 1.16+ 版本中效果更好)
  small: true
  gravity: true
  fixed_rotation: false
  light_level: 7  
  solid: false
  opposite_direction: false #在放置模型时进行180°旋转
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

# 如果你在 "furniture" 属性下添加下列行为属性，将使模型能够以自定义的高度坐在家具模型上
furniture_sit:
  sit_height: 0.9
  opposite_direction: true #default is true
  # 坐在每个屏障方块上（用于有多个座位的家具上）
  sit_all_solid_blocks: false
  

# 使物品作为枪械，你可以定义玩家的左手需要手持什么物品才能够进行射击
gun:
  projectile: itemsadder:clip
  

# 使物品能够作为帽子来佩戴
hat: true

# 允许该物品在玩家死亡时不掉落
keep_on_death: true

# 使物品作为音乐唱片来播放自定义音频
music_disc:
  song:
    name: "itemsadder:music_disc.cdk_sunday"
    description: "Cdk - Sunday"
    

# 将当前物品设置为载具
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





