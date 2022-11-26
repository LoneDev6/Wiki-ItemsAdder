# Furniture entity

## Supported entities

### armor\_stand

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

### item\_frame

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
