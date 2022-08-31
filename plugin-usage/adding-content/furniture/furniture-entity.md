# 家具实体

## 支持的实体类型

### armor\_stand（盔甲架）

该家具实体类型适用于 那些不需要基于放置表面的倾斜度进行旋转的家具
<br>例如：椅子，植物，路灯，柱子，等环境装饰物

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

该家具实体类型适用于 需要让家具基于放置的表面进行旋转.

<br>例如, 你有一个装饰灯具, 则可以将其放置在地上、墙上或是天花板上, 并根据表面的倾斜度的位置自动确定方向.&#x20;

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
