# 动作

动作是当你触发[事件](./)时执行的操作

## 动作列表

要阅读可用的动作列表，请使用官方编辑器。

{% content-ref url="../../../files-editor.md" %}
[文件编辑器](../../../files-editor.md)
{% endcontent-ref %}

### 指令可用的占位符

* `{player}` 你（触发事件的玩家）
* `{target-player}` 目标玩家/被害人
* `{target-x}|{target-y}|{target-z}` 目标玩家/被害人的 x/y/z 坐标
* `{target-world}` 目标世界

### 延迟（Delay）

每个动作都有一个特殊的属性**延迟**。\
**延迟**决定了动作执行前经过的时刻数。\
例如：

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

### 相同类型的多个动作

你可以多次设置相同动作，只需要在最后添加 `_(任意值)`。\
例如你想要播放两次声音，你需要这样写：

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

### 动作权限（permission）

每个动作都有一个特殊属性**权限**\
玩家必须有对应的**权限**来执行**动作**。\
例如玩家需要具有 `myitems.usage.secret_items_dispenser` 权限来播放声音。\
注意：本例中你会发现到一个问题。\
即使玩家没有权限也能触发给与事件，这是由于只检查了 `give_item` 权限。

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

**为每个动作设置相同权限**

如果你想要对每个动作都使用相同权限，而不想复制，\
使用特殊属性 `all_actions_permission`。\
例如：

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

### 属性

使用[官方文件编辑器](../../../files-editor.md)来在配置时获得完整的列表。

## 自定义流程

该插件允许你通过避免在某些特定情况下执行操作来进一步自定义你的操作。\
这允许你进一步自定义物品逻辑。

例如你可以创建一个在成功攻击怪物时播放一种声音，在攻击失败时播放另一种声音。

{% embed url="https://youtu.be/xZLln6e3iAU" %}

<details>

<summary>示例魔杖的代码（点击展开）</summary>

```yaml
info:
  namespace: actions_flow_test
items:
  magic_wand:
    display_name: Test Magic Wand
    resource:
      generate: false
      model_path: minecraft:item/stick
      material: STONE_SWORD
    events:
      interact_mainhand:
        left:
          # Damage the entity in sight
          damage_entity_in_sight:
            damage: 1
            distance: 8
          # Decrement durability only if the attack is successful
          decrement_durability:
            amount: 1
            flow:
              skip_if_fail: damage_entity_in_sight
          # Play sound only if the attack is successful
          play_sound:
            name: block.amethyst_cluster.step
            volume: 1.5
            pitch: 1
            flow:
              skip_if_fail: damage_entity_in_sight
          # Play sound only if the attack is successful
          shoot_particle:
            name: CRIT_MAGIC
            distance: 7
            flow:
              skip_if_fail: damage_entity_in_sight
          # Play sound only if the attack is failed
          play_sound_fail:
            name: minecraft:block.wool.break
            volume: 1
            pitch: 2
            flow:
              skip_if_success: damage_entity_in_sight
          # Play sound only if the attack is failed
          shoot_particle_fail:
            name: CRIT
            distance: 7
            flow:
              skip_if_success: damage_entity_in_sight
```

</details>

### 流程规则

#### `stop_if_last_success`

如果前方**最后**一个动作**执行成功**，则不执行该动作及以后的动作。

#### `stop_if_last_fail`

如果前方**最后**一个动作**执行失败**，则不执行该动作及以后的动作。

#### `skip_if_last_success`

如果前方**最后**一个动作**执行成功**，则不执行该动作。

#### `skip_if_last_fail`

如果前方**最后**一个动作**执行失败**，则不执行该动作。

#### `stop_if_any_success`

如果前方**任意**一个动作**执行成功**，则不执行该动作及以后的动作。

#### `stop_if_any_fail`

如果前方**任意**一个动作**执行失败**，则不执行该动作及以后的动作。

#### `skip_if_any_success`

如果前方**任意**一个动作**执行成功**，则不执行该动作。

#### `skip_if_any_fail`

如果前方**任意**一个动作**执行失败**，则不执行该动作。

#### `stop_if_success`

如果前方**特定**一个动作**执行成功**，则不执行该动作及以后的动作。

#### `stop_if_fail`

如果前方**特定**一个动作**执行失败**，则不执行该动作及以后的动作。

#### `skip_if_success`

如果前方**特定**一个动作**执行成功**，则不执行该动作。

#### `skip_if_fail`

如果前方**特定**一个动作**执行失败**，则不执行该动作。

### 特殊属性

`execute_commands` 有一个叫做 `flow_success_if_message_contains` 的特殊属性。\
这允许你识别控制台命令何时没有失败，例如玩家是否被成功传送，方块是否被设置等。

插件正常可以自动识别原版指令的成功/失败，但不能识别插件的指令。因此你可以使用该设置来判断某个插件的指令是否失败。\
例如你可以将其设置为 `"failed to teleport"` 来判断传送指令是否失败（仅示例）。

### 使用原版的 `execute if`

在某些情况下你可能需要使用原版 `/execute if` 指令对计分板、方块等做些特定的检查。

#### 示例

这个物品会在 `example_score` 值为 0 时将玩家向上传送两格。

```yaml
info:
  namespace: test
items:
  test_flow:
    enabled: true
    display_name: test_flow
    resource:
      generate: false
      model_path: minecraft:item/diamond
      material: DIAMOND
    events:
      interact:
        right:
          execute_commands_1:
            cause_command:
              command: 'execute if score {player} example_score matches 0'
              as_console: true
              delay: 0
          execute_commands_2:
            effect_command:
              command: 'tp {player} ~ ~2 ~'
              as_console: true
            flow:
              skip_if_fail: execute_commands_1
```

这个物品会将坐标为 `~ ~-1 ~` 的方块设置为石头。\
如果指令执行成功，会发送一条 "Successfully set block!" 信息。\
如果指令执行失败，则会直接跳过信息。

```yaml
  test_flow_setblock:
    enabled: true
    display_name: test_flow_setblock
    resource:
      generate: false
      model_path: minecraft:item/diamond
      material: DIAMOND
    events:
      interact:
        right:
          execute_commands:
            cause_command:
              command: 'execute at {player} run setblock ~ ~-1 ~ stone'
              as_console: true
          execute_commands_2:
            effect_command:
              command: 'tellraw {player} {"text": "Successfully set block!"}'
              as_console: true
            flow:
              skip_if_fail: execute_commands
```

这个物品会执行一个插件指令。\
插件无法自动识别插件命令的成功/失败状态，因此你必须指定一个文本来帮助插件识别命令状态。\
例如我要检查结果文本是否包含 `Given item` 以获知指令是否成功执行。

```yaml
  test_flow_plugin_command:
    enabled: true
    display_name: test_flow_plugin_command
    resource:
      generate: false
      model_path: minecraft:item/diamond
      material: DIAMOND
    events:
      interact:
        right:
          execute_commands:
            cause_command:
              command: 'iagive {player} iasurvival:end_ore'
              as_console: true
              flow_success_if_message_contains: "Given item"
          execute_commands_2:
            effect_command:
              command: 'tellraw {player} {"text": "Okay successfully given item!"}'
              as_console: true
            flow:
              skip_if_fail: execute_commands
```
