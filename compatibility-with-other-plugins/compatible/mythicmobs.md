# Mythicmobs

### [Download here](https://www.spigotmc.org/resources/%E2%9A%94-mythicmobs-free-version-%E2%96%BAthe-1-custom-mob-creator%E2%97%84.5702/)

## Using an ItemsAdder items in MythicMobs drops

{% hint style="warning" %}
Update to **ItemsAdder 3.0.4** or greater and **MythicMobs 5.0.1** or greater
{% endhint %}

Example: drop a ruby by 30% chance and 1 to 5 amount.

```yaml
ninja_skeleton:
  Type: ZOMBIE
  Display: '&aNinja Skeleton'
  Health: 10
  Damage: 2
  Drops:
    - itemsadder:ruby 1-5 30%
  Options:
    MovementSpeed: 0
    Silent: true
  Skills:
  - customentity{model=custom:ninja_skeleton} @self ~onSpawn
  - customentity{play=attack} @self ~onAttack
  - customentity{walk=b_walk} @self ~onAttack
```

## Custom mobs models

{% content-ref url="../../plugin-usage/advanced/mobs/advanced-method/" %}
[advanced-method](../../plugin-usage/advanced/mobs/advanced-method/)
{% endcontent-ref %}
