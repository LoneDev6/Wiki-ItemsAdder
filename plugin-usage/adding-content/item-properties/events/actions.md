# 动作

## 什么是 actions?

动作是指 [事件](./) 被触发时所执行的操作.

### 动作列表:

* `play_sound`
* `stop_sound`
* `execute_commands`
* `play_particle`
* `shoot_particle`
* `play_effect`
* `increment_durability`
* `decrement_durability`
* `decrement_usages`
* `increment_amount`
* `decrement_amount`
* `drop_exp`
* `feed`
* `replace_properties`
* `give_item`
* `replace_near_blocks`
* `replace_block`
* `glow_near_blocks`
* `multiple_break`
* `potion_effect`
* `remove_potion_effect`
* `explosion`
* `damage_near_entities`
* `damage_entity_in_sight`
* `damage_entity`
* `increment_player_stat`
* `decrement_player_stat`
* `cancel`
* `target_potion_effect`
* `target_remove_potion_effect`
* `play_totem_animation`
* `set_block`
* `place_furniture`
* `drop_item`

### 延迟

{% hint style="info" %}
每个动作都有一个特殊的属性 **delay**.\
在经历指定的 **延迟** 后再触发该动作.\
例如:

```yaml
items:
  chain_events:
    display_name: "%#FE5A00%chain_events"
    permission: test.chain_events
    resource:
      material: COAL
      generate: true
      textures:
      - "minecraft:item/diamond.png"
    events:
      interact:
        right:
          execute_commands:
            cmd1:
              command: 'tellraw {player} {"text":"Action 1","color":"gold"}'
              as_console: true
              delay: 0
            cmd2:
              command: 'tellraw {player} {"text":"Action 2","color":"gold"}'
              as_console: true
              delay: 20
            cmd3:
              command: 'tellraw {player} {"text":"Action 3","color":"gold"}'
              as_console: true
              delay: 40
          play_sound_1:
            name: minecraft:block.note_block.banjo
            delay: 0
          play_sound_2:
            name: minecraft:block.note_block.banjo
            pitch: 1.2
            delay: 20
          play_sound_3:
            name: minecraft:block.note_block.banjo
            pitch: 1.5
            delay: 40
```
{% endhint %}

### 同时执行多组同一动作

{% hint style="info" %}
您可以设置在同一时间执行多组同一动作. 您只需要在最后加上 `_anything`.\
例如, 您想对玩家播放三种声音时, 可以这样写:

```yaml
play_sound_first:
  name: itemsadder:ambient.creepy
  volume: 1
  pitch: 1
play_sound_second:
  name: minecraft:ambient.cave
  volume: 1
  pitch: 1
play_sound_3:
  name: minecraft:ambient.cave
  volume: 1
  pitch: 1
```
{% endhint %}

### 动作权限

{% hint style="info" %}
每个动作都有一个特殊的属性 **permission**.\
检测玩家在执行 **动作** 前是否有特定的 **权限**.\
例如, 玩家必须持有 `myitems.usage.secret_items_dispenser` 权限才能播放特定音效.\
在本例子中您可以发现一个 "问题". 即使玩家没有事件所需的特定权限也会播放声音. 这是因为... 嗯, 它只在 give\_item 事件进行权限检测.

```yaml
  test_block:
    display_name: display-name-test_block
    permission: test_block
    resource:
      material: PAPER
      generate: true
      textures:
      - block/test_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: SMITHING_TABLE
    events:
      placed_block:
        interact:
          give_item:
            permission: "myitems.usage.secret_items_dispenser"
            item: DIAMOND
          play_sound:
            name: itemsadder:ambient.creepy
            volume: 1
            pitch: 1
```

####

#### 为每个事件设置相同的权限

如果您不想在频繁复制粘贴的情况下, 为每个事件设置相同的权限!\
您可以使用此特殊属性 `all_actions_permission`.\
例如:

```yaml
  test_block:
    display_name: display-name-test_block
    permission: test_block
    resource:
      material: PAPER
      generate: true
      textures:
      - block/test_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: SMITHING_TABLE
    all_actions_permission: "myitems.usage.secret_items_dispenser"
    events:
      placed_block:
        interact:
          give_item:
            item: DIAMOND
      play_sound:
        name: itemsadder:ambient.creepy
        volume: 1
        pitch: 1
```
{% endhint %}

## 动作的配置列表

使用在线编辑器可以更轻松地创建文件.

{% content-ref url="../../../../files-editor.md" %}
[files-editor.md](../../../../files-editor.md)
{% endcontent-ref %}

```yaml
play_sound:
  name: itemsadder:ambient.creepy
  volume: 1
  pitch: 1
  
  
stop_sound:
  name: "itemsadder:music_disc.cdk_sunday"
  
  
execute_commands:
  first_example:
    command: 'tellraw {player} {"text":"wow you did something!","color":"gold"}'
    as_console: true
  second:
    command: 'help'
    as_console: false
  third:
    command: 'give {player} diamond'
    as_console: true
    
    
play_particle:
  name: "ENCHANTMENT_TABLE"

# 发射粒子 (适用于武器以及法杖)
shoot_particle:
  name: FLAME
  distance: 7
  
play_effect:
  name: SMOKE
  
increment_durability:
  amount: 10
  
  
decrement_durability:
  amount: 10
  
  
decrement_usages:
  amount: 1


increment_amount:
  amount: 1
          
          
decrement_amount:
  amount: 1    


drop_exp:
  chance: 50
  min_amount: 1
  max_amount: 3
    
# 原版恢复饥饿值详情: 
# https://minecraft.gamepedia.com/Hunger#Food_level_and_saturation_level_restoration
feed:
  amount: 6
  saturation: 2 # <---可选项，默认为0
    
# 复制另一个物品的属性，应用至当前物品
# 目前你只能使用 custom_model_data 来进行此操作，更多类型将会在未来更新
replace_properties:
  custom_model_data:
    copy_from_item: "itemsadder:closed_lightsaber"
    restorable: true


give_item:
  item: empty_cup
  amount: 1
  
# 当你交互或破坏方块的时候使周围的特定方块替换为另一种特定方块（例如，该示例将岩浆替换为黑曜石）
replace_near_blocks:
  radius:
    x: 2
    y: 2
    z: 2
  from: LAVA
  to: OBSIDIAN
  decrement_durability: 8
  no_physics: false #default is false
  
# 在你交互或破坏方块的时候使周围的特定方块发光
glow_near_blocks:
  decrement_durability:
    amount: 1
  radius:
    x: 50
    y: 50
    z: 50
  material: DIAMOND_ORE
  
# 当你交互或破坏方块的时候能够额外破坏周围的方块（例如，在该示例中，挖掘掉一个方块将会使其周围 3x3 范围的方块都掉落 ）

multiple_break:
  keep_ores: true
  drop_all_blocks:
    enabled: true
    need_silk_touch: true
  size: 3
  depth: 3
  
  
potion_effect:
  type: UNLUCK
  duration: 100
  amplifier: 0


remove_potion_effect:
  type: GLOWING
  
  
explosion:
  power: 2
  fire: true
  break_blocks: true
  
# 使你周围的实体受到伤害
damage_near_entities:
  entity_groups:
   - HOSTILE
   - PLAYERS
   - PASSIVE
  damage: 4
  range: 7
  
# 使你注视的实体受到伤害
damage_entity_in_sight:
  damage: 4
  distance: 7
  
# 在该事件中能够使实体受到伤害（例如，攻击，交互或 item_hit_entity 事件）
damage_entity:
  damage: 4
  
# 该属性能够允许你为 自定义玩家数据HUD 的 数值 进行减少（例如：预置物品中的愈合结晶） 
# 该示例中作用的 HUD 为 "itemsadder:mana_bar"
increment_player_stat:
  name: "itemsadder:mana_bar"
  amount: 1
  
# 该属性能够允许你为 自定义玩家数据HUD 的 数值 进行增加（例如：预置物品中的愈合结晶） 
# 该示例中作用的 HUD 为 "itemsadder:mana_bar"
decrement_player_stat:
  name: "itemsadder:mana_bar"
  amount: 1
  
# 取消事件的特殊操作（调用此动作的事件）
cancel: true

# 添加对目标实体的药水效果（攻击、互动……）
target_potion_effect:
  type: GLOWING
  duration: 70
  amplifier: 15
  
# 移除对目标实体的药水效果（攻击、互动……）
target_remove_potion_effect:
  type: GLOWING
  
play_totem_animation: animatedtitles:bruh

set_block:
  block: rocks
  target: RELATIVE
  decrement_amount: true
  
place_furniture:
  furniture: furniture
  decrement_amount: true

drop_item:
  item: 2d_furniture
  chance: 99.9
  max_amount: 3
  min_amount: 1
```

###
