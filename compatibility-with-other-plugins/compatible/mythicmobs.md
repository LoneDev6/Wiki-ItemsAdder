# Mythicmobs

### [Download here](https://www.spigotmc.org/resources/%E2%9A%94-mythicmobs-free-version-%E2%96%BAthe-1-custom-mob-creator%E2%97%84.5702/)

## Using an ItemsAdder items in MythicMobs&#x20;

{% hint style="warning" %}
Update to **ItemsAdder 3.0.4** or greater and **MythicMobs 5.0.1** or greater
{% endhint %}

### Drops

Example: drop a custom item by 30% chance and 1 to 5 amount.

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

### Equipment

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

## Custom mobs models

{% content-ref url="../../plugin-usage/adding-content/mobs/advanced-method/" %}
[advanced-method](../../plugin-usage/adding-content/mobs/advanced-method/)
{% endcontent-ref %}
