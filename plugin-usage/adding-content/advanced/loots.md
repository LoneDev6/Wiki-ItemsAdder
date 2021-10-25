# 🎁 Лут

Данная функция может быть использована для указания плагину, когда нужно выдать тот или иной предмет.  
Вы можете сделать выпадение предметов разного типа:

* из блоков
* из мобов
* в рыбалке

Это пример категории выпадления предметов в файле .yml, котораый я создал:

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

Данный пример содержит в себе 2 выпадающих предмета в категории **блоков**.

Первый пример назван **ruby\_ore** \(вы можете называть их как хотите\), игрок получит предмет **itemsadder:ruby** из **блока** **itemsadder:ruby\_ore**, когда тот будет сломан, в минимальном **количестве** от **1** до **максимального значение** - **2** со **100% шансом**.

Второй пример заставляет выбрасывать предмет из ванильного **блока**. Как вы можете заметить, из блока **Кварцевой руды** выпадет предмет **crystal** или **knowledge\_fragment**, когда игрок его сломает .  
Такое **выпаделние** создается плагином **ItemsAdder**, с указанным вами **шансом**.

{% hint style="info" %}
Особая функция: **drop\_only\_first**  
Это позволит вам **заставить плагин** не **выкидывать все указанные предметы разом**, а выкидывать предметы только в **указанном им шансе**.  
**Важно**: эта функция сделает выпадение предмета намного реже и, собственно, сложнее в добыче.
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

Вы можете заставить плагин игнорировать увелечение количества дропа при помощи строки **ignore\_fortune**.

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
          ignore_fortune: true          #<----- тут
```

### Другие типы выпадения

Как и говорил, плагин поддерживает другие типы дропа лута: из мобов и рыбалки.  
These are some examples:

#### Рыбалка

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

### Мобы

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
### Выпадение из мобов плагина
{% endhint %}

Чтобы заставить ItemsAdder выкидывать предметы из убитых мобов плагина \(созданных самим же ItemsAdder\) вам нужно указать атрибут метаданных. Пример:

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

Как вы можете заметить, я установил атрибут **ItemsAdderMob** и указал нужного моба в формате **имя папки:ID моба** \(в данном примере: **creaturesplus:soul**\)

{% hint style="info" %}
## Профессии жителей (и любой другой атрибут NBT, который вы хотите сопоставить)
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

Как вы можете заметить, я установил атрибут **profession** и указал атрибут **NBT** - **VillagerData.profession**.  
После чего я установил значение **minecraft:farmer**, это заставит ItemsAdder менять только тех **жителей**, которым присвоен атрибут **VillagerData.profession** с значением **minecraft:farmer**.

{% hint style="warning" %}
Атрибуты **nbt** и **метаданных \(metadata\)** очень **важны**, не **забывайте** о них, иначе сделать сопоставление не получится.
{% endhint %}

{% hint style="info" %}
## Падение на основе сущности спавнера

### \(и любой другой атрибут NBT, который вы хотите сопоставить\)
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
