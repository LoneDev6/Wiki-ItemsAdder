# 怪物/生物掉落

掉落物可以用来指定什么行为掉落某个特定物品. 
你可以决定创建不同的掉落物类型:

* blocks[方块掉落]
* mobs[怪物掉落]
* fishing[垂钓掉落]

比如,这是我创建的一个.yml文件的掉落物类别.

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

这个栗子里,在**方块**里有两个掉落物.

第一个被名为**ruby\_ore**\(你可以随心所欲地命名\),在你破坏一个自定义的 **itemsadder:ruby** 的方块时.它将会掉落一个**itemsadder:ruby_ore**物品.掉落的最小数量为**1**,掉落的最大数量为**2**,概率为**100%**

第二个是来自**原版**方块的掉落.正如你所见的,当玩家打破一个**NETHER/QUARTZ/ORE**时,它会掉落一个**crystal**或一个**knowledge/fragment**
这些**掉落**是由**ItemsAdder**根据你所设定的**概率**所决定.

{% hint style="info" %}
特殊属性: **drop\_only\_first**  
This allows you to **stop** the **plugin** from **dropping each** of the **items** that succeed into extracting a **correct** chance to be **dropped**.  
**警告**: 这将会使你的物品**更难**被丢弃
{% endhint %}

## 无视时运附魔

你可以通过添加**ignore\_fortune**属性来忽略时运附魔

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

### 其他类型的掉落

正如我刚刚所说,还有其他类型的掉落方式:Mob[怪物掉落]和fishing[垂钓掉落].  
这是一些栗子:

#### 垂钓掉落

```yaml
loots:
  fishing:
    loot_blue_parrotfish:
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

#### 怪物掉落

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
## 自定义怪物的掉落物
{% endhint %}

为了让ItemsAdder判断你杀死的是不是自定义怪物\(ItemsAdder\)来掉落一个物品,你必须使用metadata属性.例如:

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

如你所见,我设置了**ItemsAdderMob**属性并指定了自定义怪物 **namespace:id** \(在这个栗子里,我使用了**creaturesplus:soul**怪物\)

{% hint style="info" %}
## 村民职业

### \(和任何其他你想匹配的NBT属性\)
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

如你所见,我设置了**profession[职业]**属性,并指定了**NBT属性**,在这种情况下是**VillagerData.profession**
然后我将配置的值设置为**minecraft:farmer**,这在告诉ItemsAdder只选择属性为**VillagerData.profession**的**villagers[村民]**,并设置为**minecraft:farmer**

{% hint style="warning" %}
**nbt**和**metadata**属性是超级**重要的**!请**不要**忘记设置它们,否则就不能进行指定.
{% endhint %}

{% hint style="info" %}
## 基于刷怪笼的刷取

### \(和任何其他你想选择的NBT属性\)
{% endhint %}

```yaml
loots:
  blocks:
    change_me:
      enabled: true
      type: SPAWNER
      nbt:
        spawner_type:
          path: SpawnData.id
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

