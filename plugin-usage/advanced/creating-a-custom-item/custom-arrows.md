# Custom Arrows

## Some examples (ItemsAdder 2.2.8+)

```yaml
items:
  iron_arrow:
    display_name: "Iron Arrow"
    permission: arrows.iron_arrow
    resource:
      material: ARROW
      generate: true
      textures:
      - "minecraft:item/spectral_arrow.png"
    events:
      item_hit_entity:
          damage_entity:
            damage: 3
  area_damage_arrow:
    display_name: "Area Damage Arrow"
    permission: arrows.area_damage_arrow
    resource:
      material: ARROW
      generate: true
      textures:
      - "minecraft:item/spectral_arrow.png"
    events:
      item_hit_ground:
          damage_near_entities:
            damage: 6
            radius: 5
          play_effect:
            name: ENDERDRAGON_SHOOT
          play_particle:
            name: EXPLOSION_HUGE
      item_hit_entity:
          damage_near_entities:
            damage: 6
            radius: 5
          play_effect:
            name: ENDERDRAGON_SHOOT
          play_particle:
            name: EXPLOSION_HUGE
  explosive_arrow:
    display_name: "Explosive Arrow"
    permission: arrows.explosive_arrow
    resource:
      material: ARROW
      generate: true
      textures:
      - "minecraft:item/spectral_arrow.png"
    events:
      item_throw:
        play_effect:
          name: SMOKE
      item_hit_ground:
        explosion:
          power: 2
          fire: false
          break_blocks: true
        play_effect:
          name: SMOKE
      item_hit_entity:
        explosion:
          power: 2
          fire: false
          break_blocks: true
        play_effect:
          name: SMOKE
  reveal_invisible_entity_arrow:
    display_name: "Reveal Invisible Entity Arrow"
    permission: arrows.reveal_invisible_entity_arrow
    resource:
      material: ARROW
      generate: true
      textures:
      - "minecraft:item/spectral_arrow.png"
    events:
      item_hit_entity:
          target_remove_potion_effect:
            type: INVISIBILITY
          play_effect:
            name: ENDERDRAGON_SHOOT
```
