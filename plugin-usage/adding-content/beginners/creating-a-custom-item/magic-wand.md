# Magic wand

## Example of fire magic wand

```yaml
  magic_wand:
    display_name: "Magic wand"
    lore: 
      - "&6[ &eSpecial effects &6]"
      - "  &f- &7Adds &6Fire Resistance &7for 10 seconds on &fheld"
      - "  &f- &7Removes &6Fire Resistance &7on &funheld"
      - "  &f- &7Creases an &cexposion &7on &fattack"
      - "  &f- &7Consumes &b1 mana when used"
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
    blocked_enchants:
    - ALL
    events_needed_player_stats:
      mana: ">0"
    events:
      held:
        potion_effect:
          type: FIRE_RESISTANCE
          amplifier: 0
          duration: 200
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
        left:
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

## Example of mana recover crystals

```yaml
  mana_recover_crystals:
    display_name: "Mana Recover Crystals"
    permission: mana_recover_crystals
    resource:
      material: IRON_SWORD
      generate: true
      textures:
      - item/mana_recover_crystals.png
    durability:
      max_custom_durability: 5
      custom_durability: 5
      disappear_when_broken: true
    item_flags:
    - HIDE_ATTRIBUTES
    events_cooldown: 100
    events:
      interact:
        right:
          play_particle:
            name: SPELL_WITCH
          decrement_durability:
            amount: 1
          increment_player_stat:
            name: mana
            amount: 1
```

