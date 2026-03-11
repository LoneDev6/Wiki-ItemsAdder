---
icon: bolt
---

# Actions

## What are actions?

Actions are what happens when an [event](../events/) is triggered.

To read the list of available actions use the [official editor](../../../beginners/files-editor.md).

## `events_settings`

Special item attribute to customize some properties of events.

### Cooldown

You can set a cooldown which won't allow the player to trigger any of the actions for this item.\
Useful to avoid players spamming a special item.

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
      cooldown:
        indicator: HUD
        ticks: 120
    events:
    ## .... your events
```

### Cooldown indicator

You can customize the cooldown indicator and decide from some different indicator types:

#### HIDDEN

Won't show any indicator.

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
      cooldown:
        indicator: HIDDEN
        ticks: 120
    events:
    ## .... your events
```

#### HUD

Shows a custom HUD on-screen.

<figure><img src="../../../../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
`custom_hud` property is not mandatory, `_iainternal:small_cooldown_bar` will be used instead if not specified, which is the built-in custom hud.

<mark style="color:red;">⚠️</mark> Make sure you didn't disable `extract_internal_utility_assets` in `config.yml`!
{% endhint %}

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
      cooldown:
        indicator: HUD
        ticks: 120
        custom_hud: my_items:custom_hud_1
    events:
    ## .... your events
```

{% hint style="info" %}
If you want to create a custom HUD, but you don't want to waste time coloring, you can use [this guide](../../../../other/bulk-colorize-images.md) to colorize images in one click.
{% endhint %}

#### TITLE

Shows a big on-screen title indicator.

<figure><img src="../../../../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure>

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
      cooldown:
        indicator: TITLE
        ticks: 120
    events:
    ## .... your events
```

#### BOSSBAR

Shows a bossbar on-screen.

<figure><img src="../../../../.gitbook/assets/image (49).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
`color` and `style` properties are not mandatory, the ones from `config.yml` will be used instead if not specified.
{% endhint %}

```yaml
  healing_crystals:
    display_name: display-name-healing_crystals
    permission: healing_crystals
    ## .... item properties
    events_settings:
      cooldown:
        indicator: BOSSBAR
        ticks: 120
        bossbar:
          color: WHITE
          style: SOLID
    events:
    ## .... your events
```

## Delay

Every action has a special attribute **delay**.\
It's the **delay** in ticks before starting the action.\
For example:

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

## Multiple actions of the same type

You can set the same action multiple times. You just have to add `_anything` at the end.\
For example if you want to play two sounds you have to write this:

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

## Actions permission

Every action has a special attribute **permission**.\
It's the **permission** the player must have before starting the **action**.\
For example the player must have `myitems.usage.secret_items_dispenser` permission to play the sound.\
NOTE: In this example you will notice an issue.\
The sound is played even if the user has no permission for the give event. That's because permission check is only on the `give_item`.

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

**Setting the same permission to every action**

If you want to set the same permission to every action without copy and paste you can!\
Use this special attribute `all_actions_permission`.\
For example:

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

## Flow customization

The plugin allows you to further customize your actions by avoiding their execution in some specific cases explained in the next lines.\
This allows further customization of your items logic.

For example you can create a wand which plays specific sound only if a mob was successfully attacked and which plays another sound in case of failed attack.

{% embed url="https://youtu.be/xZLln6e3iAU" %}

<details>

<summary>Magic wand example code (click to expand)</summary>

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

### Flow rules

#### `stop_if_last_success`

Doesn't execute this and the next actions if the previous action **succeeded**.

#### `stop_if_last_fail`

Doesn't execute this and the next actions if the previous action **failed**.

#### `skip_if_last_success`

Doesn't execute this action if the previous action **succeeded**.

#### `skip_if_last_fail`

Doesn't execute this action if the previous action **failed**.

#### `stop_if_any_success`

Doesn't execute this and the next actions if **ANY** of the previous actions **succeeded**.

#### `stop_if_any_fail`

Doesn't execute this and the next actions if **ANY** of the previous actions **failed**.

#### `skip_if_any_success`

Doesn't execute this action if **ANY** of the previous actions **succeeded**.

#### `skip_if_any_fail`

Doesn't execute this action if **ANY** of the previous actions **failed**.

#### `stop_if_success`

Doesn't execute this and the next actions if a specific previous action **succeeded**.

#### `stop_if_fail`

Doesn't execute this and the next actions if a specific previous action **failed**.

#### `skip_if_success`

Doesn't execute this action if a specific previous action **succeeded**.

#### `skip_if_fail`

Doesn't execute this action if a specific previous action **failed**.

### Special properties

`execute_commands` has a special property called `flow_success_if_message_contains` and it works only if you have `as_console: true`.

It allows you to identify when a console command didn't fail, for example if the player was teleported successfully, if the block was set etc.

The plugin can automatically identify success/fail of vanilla commands but not of plugins commands because they have dynamic messages, so you might use this setting to identify if a plugin command failed or not.\
For example you can set it to `"failed to teleport"` to identify if plugin teleport command failed (this is just an example).

### Using vanilla `execute if`

In some cases you might want to do some specific checks on scoreboard, blocks and similar using the vanilla `/execute if` command.

#### Examples

This item makes the player teleport 2 blocks up only if the `example_score` value is 0.

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

This checks if the player is in the nether or not.

```yaml
execute_commands_1:
  cmd1:
    command: "execute at {player} if dimension minecraft:the_nether"
    as_console: true
```

This item sets the block at `~ ~-1 ~` to stone.\
"Successfully set block!" message is printed if the command status is success.\
The message is completely skipped if the command status is fail.

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

This item will execute a plugin command.\
The plugin can't automatically identify plugins commands success/fail status, so you have to specify a text that can help the plugin to identify the command status.\
For example I check if the result text contains `"Given item"` in order to know if the command was executed successfully.

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
