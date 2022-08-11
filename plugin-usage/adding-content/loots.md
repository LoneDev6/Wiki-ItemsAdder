# 🎁 Loots

Loots can be used to specify when to drop a particular item.\
You can decide to create different loot types:&#x20;

* blocks
* mobs
* fishing

For example this is the loots category of a .yml file I created.

```yaml
loots:
  blocks:
    ruby_ore:
      type: itemsadder:ruby_ore
      items:
        ruby:
          item: itemsadder:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
    nether_quartz_ore:
      type: NETHER_QUARTZ_ORE
      drop_only_first: true
      items:
        crystal:
          item: itemsadder:crystal
          min_amount: 1
          max_amount: 2
          chance: 10
        knowledge_fragment:
          item: itemsadder:knowledge_fragment
          min_amount: 1
          max_amount: 2
          chance: 15
```

This example has two loots in **blocks** category.

First one is called **ruby\_ore** (you can call them as you prefer), this will drop a **itemsadder:ruby** item when you break a custom **block** of type **itemsadder:ruby\_ore** with a minimum **amount** of **1** and **maximum** amount of **2** with **100% chance**.

The second one is a loot from a vanilla **block**. As you imagine it will drop a **crystal** or a **knowledge\_fragment** when the player breaks a **NETHER\_QUARTZ\_ORE**.\
These **drops** are decided by **ItemsAdder** based on **chance** you set.&#x20;

{% hint style="info" %}
Special property: **drop\_only\_first**\
This allows you to **stop** the **plugin** from **dropping each** of the **items** that succeed into extracting a **correct** chance to be **dropped**. \
**WARNING**: this would make your items **harder** to be **dropped**.
{% endhint %}

## Drop only in specific biomes

```yaml
loots:
  blocks:
    ruby_ore:
      type: itemsadder:ruby_ore
      biomes:
        - PLAINS
        - SUNFLOWER_PLAINS
        - MOUNTAINS
      items:
        ruby:
          item: itemsadder:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
```

## Ignore fortune enchant

You can make a loot ignore fortune enchant by adding the **ignore\_fortune** property.

```yaml
loots:
  blocks:
    ruby_ore:
      type: itemsadder:ruby_ore
      items:
        ruby:
          item: itemsadder:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
          ignore_fortune: true # <----- here
```

## Other types of loots

As I said before there are other types of loots: mobs and fishing.\
These are some examples:

### Fishing

```yaml
loots:
  fishing:
    loot_blue_parrotfish:
      biomes:
        - WARM_OCEAN
      items:
        item_1:
          item: itemsadder:blue_parrotfish
          min_amount: 1
          max_amount: 1
          chance: 5
    loot_green_sunfish:
      items:
        item_1:
          item: itemsadder:green_sunfish
          min_amount: 1
          max_amount: 1
          chance: 5
    loot_goldfish:
      items:
        item_1:
          item: itemsadder:goldfish
          min_amount: 1
          max_amount: 1
          chance: 5
```

### Mobs

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
    ender_dragon:
      type: ENDER_DRAGON
      items:
        item_1:
          item: itemsadder:ender_dragon_wings
          min_amount: 1
          max_amount: 1
          chance: 100
```

{% hint style="info" %}
### Custom mobs loots ([old entities method](mobs/old-method/))
{% endhint %}

In order to let ItemsAdder drop an item based on when you kill a custom mob (created with ItemsAdder) you have to use the `ItemsAdderMob` metadata attribute. Example:

```yaml
loots:
  mobs:
    soul:
      type: HUSK
      metadata:
        ItemsAdderMob:
          name: "ItemsAdderMob"
          value: "creaturesplus:soul"
          type: "string"
      items:
        ruby:
          item: ruby
          min_amount: 1
          max_amount: 1
          chance: 100
```

As you can see I set `ItemsAdderMob` **** attribute and specified my custom mob **namespace:id** (in this example I used the **creaturesplus:soul** mob)

{% hint style="info" %}
### Custom entities loots
{% endhint %}

In order to let ItemsAdder drop an item based on when you kill a custom entity (created with ItemsAdder) you have to use the `ItemsAdderEntity` metadata attribute. Example:

```yaml
loots:
  mobs:
    soul:
      type: HUSK
      metadata:
        ItemsAdderEntity:
          name: "ItemsAdderEntity"
          value: "custom:ninja_skeleton"
          type: "string"
      items:
        ruby:
          item: ruby
          min_amount: 1
          max_amount: 1
          chance: 100
```

As you can see I set `ItemsAdderEntity` **** attribute and specified my custom mob **namespace:id** (in this example I used the **custom:ninja\_skeleton** mob)

{% hint style="info" %}
### Villager professions (and any other NBT attribute you want to match)
{% endhint %}

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

As you can see I set **profession** attribute and specified the **NBT attribute** path, which in this case is **VillagerData.profession**.\
Then I set value to **minecraft:farmer**, this tells ItemsAdder to match only **villagers** with attribute **VillagerData.profession** set to **minecraft:farmer**.

{% hint style="warning" %}
The type attribute of **nbt** and **metadata** are really **important**, don't **forget** them or matches could not occur.
{% endhint %}

{% hint style="info" %}
### Drop based on Tile entity NBT data (for example Spawner)
{% endhint %}

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
