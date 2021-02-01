# Magic wand

## Example of fire magic wand

```yaml
  magic_wand:
    display_name: "Magic wand"
    permission: magic_wand
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/example_item.png
    durability:
      max_custom_durability: 512
    attribute_modifiers:
      mainhand:
        attackDamage: 0.1
    events_needed_player_stats:
      mana: ">0"
    events:
      held:
        potion_effect:
          type: FIRE_RESISTANCE
          amplifier: 0
          duration: 99999
      unheld:
        remove_potion_effect:
          type: FIRE_RESISTANCE
      drop:
        remove_potion_effect:
          type: FIRE_RESISTANCE
      interact:
        right:
          play_particle:
            name: SPELL_WITCH
        entity:
          target_potion_effect:
            type: GLOWING
            duration: 70
            amplifier: 15
      attack:
        play_particle:
          name: SPELL_WITCH
        explosion:
          power: 1
          fire: true
          break_blocks: false
        decrement_durability:
          amount: 1
        decrement_player_stat:
          name: mana
          amount: 1
```

