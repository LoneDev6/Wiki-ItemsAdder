---
icon: list
---

# Furniture entity

### `item_display`

This type of furniture entity is useful for any type of furniture you want to create.

![](<../../../.gitbook/assets/image (47) (1) (1) (1) (2).png>)

```yaml
behaviours:
  furniture:
    entity: item_display
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
```

#### Special properties

`item_display` allows you to do some special adjustments to your furniture model using the `display_transformation` property.\
You can resize it, rotate it and move it freely.\
This feature uses the native `item_display` feature of **Minecraft**, you can [read more here](https://www.youtube.com/watch?v=bwPWfUbcZxE) and online.\
You can also use [this tool](https://misode.github.io/transformation/) to preview your changes.

#### Example:

```yaml
  lava_lamp_new:
    enabled: true
    display_name: display-name-lava_lamp
    permission: iadeco.decorations.lava_lamp
    lore:
      - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lava_lamp
    behaviours:
      furniture:
        entity: item_display
        light_level: 7
        display_transformation:
          transform: HEAD
          right_rotation:
            axis_angle:
              angle: 180
              axis:
                x: 0
                y: 1
                z: 0
          translation:
            x: 0
            y: 0.92
            z: 0
          scale:
            x: 0.45
            y: 0.45
            z: 0.45
```

### `armor_stand`

This type of furniture entity is useful when you want to create chairs, plants, columns, lamps and similar environment decorations which don't need to rotate based on the surface on which you place them.

![](<../../../.gitbook/assets/image (47) (1) (1) (1) (2).png>)

```yaml
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
```

### `item_frame`

This type of furniture entity is useful when you want to make the furniture rotate based on the surface on which you place it.

For example if you have a decorative lamp you can make it placeable on walls, ceiling and ground and and make it oriented automatically based on the surface inclination.

![](<../../../.gitbook/assets/image (43) (1) (1) (1) (1) (1).png>)

```yaml
behaviours:
  furniture:
    entity: item_frame
    light_level: 15
    solid: false
    hitbox:
      length: 1
      width: 1
      height: 1.5
    placeable_on:
      walls: true
      ceiling: true
      floor: true
```
