# Mythicmobs

### [下载](https://www.spigotmc.org/resources/%E2%9A%94-mythicmobs-free-version-%E2%96%BAthe-1-custom-mob-creator%E2%97%84.5702/)

## 如何在 Mythicmobs 中使用 ItemsAdder 物品&#x20;

{% hint style="warning" %}
版本需求：
**ItemsAdder 3.0.4** +
**MythicMobs 5.0.1** +
{% endhint %}

### 掉落物

栗子：有30%的几率掉落1-5个自定义物品

```yaml
ninja_skeleton:
  Type: ZOMBIE
  Display: '&aNinja Skeleton'
  Health: 10
  Damage: 2
  Drops:
    - my_items:special_sword 1-5 30%
  Options:
    MovementSpeed: 0
    Silent: true
  Skills:
  - customentity{model=custom:ninja_skeleton} @self ~onSpawn
  - customentity{play=attack} @self ~onAttack
  - customentity{walk=b_walk} @self ~onAttack
```

### 装备

```yaml
SkeletalKnight:
  Type: WITHER_SKELETON
  Display: '&aSkeletal Knight'
  Health: 40
  Damage: 8
  Equipment:
  - my_items:special_helmet HEAD
  - my_items:special_chestplate CHEST
  - my_items:special_leggings LEGS
  - my_items:special_boots FEET
  - my_items:special_sword HAND
  - my_items:special_shield OFFHAND
```

## 自定义怪物模型

{% content-ref url="../../plugin-usage/adding-content/mobs/advanced-method/" %}
[advanced-method](../../plugin-usage/adding-content/mobs/advanced-method/)
{% endcontent-ref %}
