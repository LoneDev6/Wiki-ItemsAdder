---
icon: list
---

# 家具实体

### `item_display`

这种类型的家具实体适用于你想要创建的任何类型的家具。

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

#### 特殊属性

`item_display` 允许你使用 `display_transformation` 属性对家具模型进行特殊调整。\
你可以自由调整其大小、旋转与移动。\
该功能使用 **Minecraft** 原生的 `item_display` 功能，你可以在此[阅读更多](https://www.youtube.com/watch?v=bwPWfUbcZxE)。\
你也可以使用[这个工具](https://misode.github.io/transformation/)来预览更改。

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

这种类型的家具实体适用于你想要创建的椅子、植物、柱子、灯具和类似的环境装饰，这些装饰不需要根据放置的表面旋转。

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

这种类型的家具实体适用于你想要根据放置的表面来旋转家具的情况。

例如，如果你有一个灯，你可以使其可以放置在墙壁、天花板和地面上，并根据表面倾斜自动调整方向。

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
