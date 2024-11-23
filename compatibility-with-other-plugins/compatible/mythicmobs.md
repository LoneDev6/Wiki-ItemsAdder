# Mythicmobs

### [此处下载](https://www.spigotmc.org/resources/%E2%9A%94-mythicmobs-free-version-%E2%96%BAthe-1-custom-mob-creator%E2%97%84.5702/)

## 在 MythicMobs 中使用 ItemsAdder 物品

{% hint style="warning" %}
更新至 **ItemsAdder 3.0.4** 与 **MythicMobs 5.0.1** 或更新
{% endhint %}

### 掉落物

例：以 30% 的几率掉落 1-5 个自定义物品。

```yaml
ninja_skeleton:
  Type: ZOMBIE
  Display: '&aNinja Skeleton'
  Health: 10
  Damage: 2
  Drops:
    - myitems:special_sword 1-5 30%
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
  - myitems:special_helmet HEAD
  - myitems:special_chestplate CHEST
  - myitems:special_leggings LEGS
  - myitems:special_boots FEET
  - myitems:special_sword HAND
  - myitems:special_shield OFFHAND
```

## 自定义怪物模型

{% content-ref url="../../plugin-usage/adding-content/mobs/advanced-method/" %}
[advanced-method](../../plugin-usage/adding-content/mobs/advanced-method/)
{% endcontent-ref %}
