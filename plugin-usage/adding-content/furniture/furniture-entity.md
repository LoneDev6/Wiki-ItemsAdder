# 家具实体

## 支持的实体类型

### armor\_stand（盔甲架）

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

### item\_frame（展示框）

该家具实体类型适用于让放置的家具随着放置的角度进行旋转.

例如, 如果您有一个装饰灯具, 则可以将其放置在地上、墙上或是天花板上, 并根据视角的位置自动确定方向.&#x20;

![](<../../../.gitbook/assets/image (41) (1) (1) (1) (1).png>)



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
