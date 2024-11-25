---
icon: tent-arrows-down
---

# 战利品

战利品可以用来指定何时掉落特定物品。

你可以决定创建不同类型的战利品：

* 方块
* 生物
* 钓鱼

例如，这是我创建的 `.yml` 文件中的战利品类别。

{% hint style="warning" %}
<mark style="color:red;">不要忘记命名空间！</mark>\
不要忘记为每个配置定义命名空间！
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

实例中在**方块**目录含有两个战利品。

第一个是 `ruby_ore`（你也可以按喜好命名），这会在你破坏一个类型为 `iasurvival:ruby_ore` 标签的自定义**方块**后以**100%的几率**掉落**最小**数量为**1**，**最大**数量为**2**的 `itemsadder:ruby` 物品。

第二个是原版**方块**的战利品。如你所想，当玩家破坏一个 `NETHER_QUARTZ_ORE`时会掉落一个 `crystal` 或 `knowledge_fragment`。\
这些**掉落物**由 **ItemsAdder** 依据你设定的**几率**决定。

{% hint style="info" %}
特殊属性：`drop_only_first`\
这允许你阻止插件在成功提取到正确的掉落几率时掉落物品。

<mark style="color:orange;">**警告**</mark><mark style="color:orange;">: 这可能会让物品</mark> <mark style="color:orange;">**更难掉落**</mark><mark style="color:orange;">。</mark>
{% endhint %}

## 仅在特定群系掉落

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

## 不受时运附魔影响

你可以通过添加 `ignore_fortune` 属性来让该战利品不受时运附魔影响

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

## 其他类型战利品

如前所述，还有怪物与钓鱼两种掉落物类型。\
这是一些示例：

### 钓鱼

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

### 怪物

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

### **自定义怪物战利品 (**[**旧方法**](mobs/old-method/)**)**

为了让 ItemsAdder 基于你击杀自定义怪物（通过 ItemsAdder 创建）来掉落战利品，你需要使用 `ItemsAdderMob` 元数据属性。示例：

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

如你所见，我设置了 `ItemsAdderMob` 属性，并设定了自定义怪物的**命名空间:id**（本例中为 **creaturesplus:soul**）

### **自定义实体战利品**

为了让 ItemsAdder 基于你击杀自定义实体（通过 ItemsAdder 创建）来掉落战利品，你需要使用 `ItemsAdderEntity` 元数据属性。示例：

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

如你所见，我设置了 `ItemsAdderEntity` 属性，并设定了自定义实体的**命名空间:id**（本例中为 **custom:ninja\_skeleton**）

### **村民职业（以及任何你想匹配的 NBT 属性）**

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

如你所见，我设置了职业属性并指定了 NBT 属性路径，在本例中为VillagerData.production。\
然后我将值设置为 **minecraft:farmor**，这告诉 ItemsAdder 只匹配属性 **VillageData.profession** 为 **minecraft:farmer** 的**村民**。

{% hint style="warning" %}
**NBT**和**元数据**非常**重要**，不要**忘记**它们，否则无法进行匹配。
{% endhint %}

### **基于重复实体 NBT 数据的掉落（如刷怪笼）**

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
如果你想通过使用具有精准采集附魔的物品从刷怪笼那里获得物品，你必须启用此设置。

```yaml
loots:  
    allow-loots-drop-from-spawners-using-silk-touch: true
```
{% endhint %}

## 多世界战利品

{% hint style="warning" %}
这需要 ItemsAdder 3.2.5+
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

如果你不指定任何世界，所有世界都会掉落战利品。

字符 `*` 允许任何以特定文本开头的世界掉落战利品\
在这个例子中，每个以“world_”开头的世界都会匹配并允许掉落。

字符 `!` 拒绝在任何以特定文本开头的世界中掉落战利品\
在这个例子中，每个以“private_”开头的世界都会匹配，并且不允许掉落。

您还可以指定精确的世界名称，在这个例子中，`example2` 不允许掉落战利品。

您还可以指定精确的世界名称，在本例中，`example1` 将允许掉落战利品。

## 掉落带有特定皮肤的 `PLAYER_HEAD`

如何指定带有纹理的 `PLAYER_HEAD` 为掉落物。

### 准备头颅掉落物（现有解决方法）

为玩家头颅创建一个新的自定义物品。

1. 创建一个新文件（我使用的是 `palyerheads.yml`），用于设置我们在 [minecraft-heads.com](https://minecraft-heads.com) 找到的纹理 `NBT`。

{% hint style="warning" %}
```
`skull` 可以是任意你想要的东西
```
{% endhint %}

2. 材料必须为 `PLAYER\_HEAD` 
3. 设置原版 `model\_path`

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

### 设置战利品

我们应该创建一个如下所示的战利品配置。\
`OBSIDIAN` 是将要掉落头颅的方块，对于 ItemsAdder 方块，应为 `namespace:blockname`\
`head` 是你想要设置的 ID\
将准备好的头颅命名空间放于`item: `后，如 `playerheads:skull`\
你可以在[这里](https://itemsadder.devs.beer/plugin-usage/adding-content/loots)找到所有变量。

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
