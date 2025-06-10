---
icon: tent-arrows-down
---

# Loots

Loots can be used to specify when to drop a particular item.

You can decide to create different loot types:

* Blocks.
* Mobs.
* Fishing.

For example this is the loots category of a `.yml` file I created.

```yaml
info:
  namespace: my_loots
loots:
  blocks:
    ruby_ore:
      type: iasurvival:ruby_ore
      items:
        ruby:
          item: iasurvival:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
    nether_quartz_ore:
      type: NETHER_QUARTZ_ORE
      drop_only_first: true
      items:
        crystal:
          item: iasurvival:crystal
          min_amount: 1
          max_amount: 2
          chance: 10
        knowledge_fragment:
          item: iasurvival:knowledge_fragment
          min_amount: 1
          max_amount: 2
          chance: 15
```

This example has two loots in **blocks** category.

First one is called `ruby_ore` (you can call them as you prefer), this will drop a `itemsadder:ruby` item when you break a custom **block** of type `iasurvival:ruby_ore` with a minimum **amount** of **1** and **maximum** amount of **2** with **100% chance**.

The second one is a loot from a vanilla **block**. As you imagine it will drop a `crystal` or a `knowledge_fragment` when the player breaks a `NETHER_QUARTZ_ORE`.\
These **drops** are decided by **ItemsAdder** based on **chance** you set.

## Loots Types

### Fishing

```yaml
loots:
  fishing:
    loot_blue_parrotfish:
      biomes:
        - WARM_OCEAN
      items:
        item_1:
          item: iasurvival:blue_parrotfish
          min_amount: 1
          max_amount: 1
          chance: 5
    loot_green_sunfish:
      items:
        item_1:
          item: iasurvival:green_sunfish
          min_amount: 1
          max_amount: 1
          chance: 5
    loot_goldfish:
      items:
        item_1:
          item: iasurvival:goldfish
          min_amount: 1
          max_amount: 1
          chance: 5
```

### Mobs

```yaml
loots:
  mobs:
    villager:
      type: ZOMBIE
      items:
        item_1:
          item: iawearables:straw_hat
          min_amount: 1
          max_amount: 1
          chance: 100
    ender_dragon:
      type: ENDER_DRAGON
      items:
        item_1:
          item: iawearables:ender_dragon_wings
          min_amount: 1
          max_amount: 1
          chance: 100
```

### **Custom entities loots**

In order to let ItemsAdder drop an item based on when you kill a custom entity you just have to set `type` to the custom entity namespaced-id.

```yaml
loots:
  mobs:
    soul:
      type: custom:ninja_skeleton
      items:
        ruby:
          item: ruby
          min_amount: 1
          max_amount: 1
          chance: 100
```

## **Loots Rules**

### &#x20;(Blocks) `drop_only_first`

This special properties allows you to stop drops chance calculation when the first item is successfully dropped.\
<mark style="color:orange;">**WARNING**</mark><mark style="color:orange;">: this makes your items</mark> <mark style="color:orange;">**harder**</mark> <mark style="color:orange;">to be</mark> <mark style="color:orange;">**dropped**</mark><mark style="color:orange;">.</mark>

```yaml
loots:
  blocks:
    nether_quartz_ore:
      type: NETHER_QUARTZ_ORE
      drop_only_first: true
      items:
        crystal:
          item: iasurvival:crystal
          min_amount: 1
          max_amount: 2
          chance: 10
        knowledge_fragment:
          item: iasurvival:knowledge_fragment
          min_amount: 1
          max_amount: 2
          chance: 15
```

### Biomes

```yaml
loots:
  blocks:
    ruby_ore:
      type: iasurvival:ruby_ore
      biomes:
        - PLAINS
        - SUNFLOWER_PLAINS
        - MOUNTAINS
      items:
        ruby:
          item: iasurvival:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
```

### Ignore fortune enchant

You can make a loot ignore fortune enchant by adding the `ignore_fortune` property.

```yaml
loots:
  blocks:
    ruby_ore:
      type: iasurvival:ruby_ore
      items:
        ruby:
          item: iasurvival:ruby
          ignore_fortune: true # <----- here
          min_amount: 1
          max_amount: 2
          chance: 100
```

### Ignore mobs spawned from spawners

You can make a loot ignore fortune enchant by adding the `ignore_fortune` property.

```yaml
loots:
  mobs:
    villager:
      type: ZOMBIE
      ignore_spawner: true # <----- here
      items:
        item_1:
          item: iawearables:straw_hat
          min_amount: 1
          max_amount: 1
          chance: 100
```

### Worlds

```yaml
loots:
  blocks:
    change_me:
      enabled: true
      type: SAND
      biomes:
        - BEACH
      worlds:  # <----- here
        - "world_*"
        - "!private_*"
        - "example1"
        - "!example2"
      items:
        change_me:
          item: STONE
          min_amount: 1
          max_amount: 1
          chance: 100
```

Loots will drop in all worlds if you don't specify any world.

The special `*` character allows any world starting with a particular text.\
In this example every world starting with `world_` will match and will drop loots.

The special `!` character denies the loot to be dropped in any world starting with a particular text.\
In this example every world starting with `private_` will match and won't allow dropping loots.

You can also specify precise world names, in this example `example2` won't allow loots to be dropped.

You can also specify precise world names, in this example `example1` will allow loots to be dropped.

### **Tile entity NBT data**

**In this example I will check the NBT data of a spawner.**

```yaml
loots:
  blocks:
    change_me:
      enabled: true
      type: SPAWNER
      nbt:
        spawner_type:
          path: SpawnData.entity.id
          value: minecraft:zombie
          type: string
      items:
        change_me:
          item: ACACIA_BOAT
          min_amount: 1
          max_amount: 1
          chance: 100
          ignore_fortune: false
```

{% hint style="warning" %}
You have to enable this setting if you want to be able to get items from spawners by using an enchanted item with silktouch.

```yaml
loots:  
    allow-loots-drop-from-spawners-using-silk-touch: true
```
{% endhint %}

### **NBT**

In this example I will check the NBT data of a Villager (profession).

As you can see I set **profession** attribute and specified the **NBT attribute** path, which in this case is `VillagerData.profession`.\
Then I set value to `minecraft:farmer`, this tells ItemsAdder to match only **villagers** with attribute `VillagerData.profession` set to `minecraft:farmer`.

```yaml
loots:
  mobs:
    villager:
      type: VILLAGER
      nbt:
        profession:
          path: VillagerData.profession
          value: minecraft:farmer
          type: string
      items:
        item_1:
          item: itemsadder:straw_hat
          min_amount: 1
          max_amount: 1
          chance: 100
```

### Metadata

You can even match metadata, in case some plugin is setting that temporary information.

```yaml
loots:
  mobs:
    soul:
      type: HUSK
      metadata:
        my_rule_1:
          name: "YourCustomKey"
          value: "ExampleValue"
          type: "string"
      items:
        ruby:
          item: ruby
          min_amount: 1
          max_amount: 1
          chance: 100
```

{% hint style="warning" %}
The type attribute of **nbt** and **metadata** are really **important**, don't **forget** them or matches could not occur.
{% endhint %}
