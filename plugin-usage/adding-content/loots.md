# 🎁 Loots

Loots can be used to specify when to drop a particular item.

You can decide to create different loot types:

* blocks
* mobs
* fishing

For example this is the loots category of a `.yml` file I created.

{% hint style="warning" %}
<mark style="color:red;">Don't forget the namespace!</mark>\
Don't forget to define a namespace for every of your config!
{% endhint %}

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

{% hint style="info" %}
Special property: `drop_only_first`\
This allows you to **stop** the **plugin** from **dropping each** of the **items** that succeed into extracting a **correct** chance to be **dropped**.

<mark style="color:orange;">**WARNING**</mark><mark style="color:orange;">: this would make your items</mark> <mark style="color:orange;">**harder**</mark> <mark style="color:orange;">to be</mark> <mark style="color:orange;">**dropped**</mark><mark style="color:orange;">.</mark>
{% endhint %}

## Drop only in specific biomes

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

## Ignore fortune enchant

You can make a loot ignore fortune enchant by adding the `ignore_fortune` property.

```yaml
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
      type: VILLAGER
      ignore_spawner: true
      nbt:
        profession:
          path: VillagerData.profession
          value: minecraft:farmer
          type: string
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

### **Custom mobs loots (**[**old entities method**](mobs/old-method/)**)**

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

As you can see I set `ItemsAdderMob` \*\*\*\* attribute and specified my custom mob **namespace:id** (in this example I used the **creaturesplus:soul** mob)

### **Custom entities loots**

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

As you can see I set `ItemsAdderEntity` \*\*\*\* attribute and specified my custom mob **namespace:id** (in this example I used the **custom:ninja\_skeleton** mob)

### **Villager professions (and any other NBT attribute you want to match)**

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

### **Drop based on Tile entity NBT data (for example Spawner)**

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

## Per-world loots

{% hint style="warning" %}
This requires ItemsAdder 3.2.5+
{% endhint %}

```yaml
loots:
  blocks:
    change_me:
      enabled: true
      type: SAND
      biomes:
        - BEACH
      worlds:
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
          ignore_fortune: false
```

Loots will drop in all worlds if you don't specify any world.

The special `*` character allows any world starting with a particular text.\
In this example every world starting with `world_` will match and will drop loots.

The special `!` character denies the loot to be dropped in any world starting with a particular text.\
In this example every world starting with `private_` will match and won't allow dropping loots.

You can also specify precise world names, in this example `example2` won't allow loots to be dropped.

You can also specify precise world names, in this example `example1` will allow loots to be dropped.

## Loot `PLAYER_HEAD` with specific skin

How to assign `PLAYER_HEAD` with texture as drop.

### Preparing the head drop (only existing workaround)

Create a new custom item for the player head to drop.

1.  create new file (name of mine is `playerheads.yml`), where we set `nbt` to set texture which can be found on [minecraft-heads.com](https://minecraft-heads.com)

    {% hint style="warning" %}
    `skull` can be set to what you want
    {% endhint %}
2. material must be `PLAYER_HEAD`
3. set the vanilla `model_path`

```yml
info:
    namespace: playerheads
items:
  skull:
    enabled: true
    display_name: "SKULL"
    nbt: "{display:{Name:'{\"text\":\"Mossy Skull\"}'},SkullOwner:{Id:[I;-178232365,-1961341643,-1329297047,2014436438],Properties:{textures:[{Value:\"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjk4NWQzOTY0NDhmM2NlMWQ0YWRhZGVjMjg2N2U5OGU4N2QxNTVhMjU2YmVmNmY0NjQxMDA1MzNiMjQ3YWMwYSJ9fX0=\"}]}}}"
    resource:
      material: PLAYER_HEAD
      generate: false
      model_path: "minecraft:item/player_head"
```

### Setting up the loot

We have to create a new loot config which should look like this\
`OBSIDIAN` is block from which this head will be dropped\
↳ `namespace:blockname` for custom ItemsAdder block\
`head` is custom id which can be set to whatever you want\
To `item:` we should place our namespace from prepared head to drop, so `playerheads:skull`\
All of other variables you can find here https://itemsadder.devs.beer/plugin-usage/adding-content/loots.

```yml
info:
  namespace: my_loots
loots:
  blocks:
    obsidian:
      type: OBSIDIAN
      items:
        head:
          item: playerheads:skull
          min_amount: 1
          max_amount: 1
          chance: 100
```
