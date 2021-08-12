# 配合MythicMobs食用

## 然后让MythicMobs挂钩我的自定义怪物

如果你想让**MythicMobs**和你的自定义怪物挂钩,以拥有更多的功能,其实这有手就行!

比如,这是我的MythicMobs配置:

```yaml
StaticallyChargedSheep:
  Type: SHEEP
  Display: '&aStatically Charged Sheep'
  Health: 100
  Damage: 2
  Options:
    MovementSpeed: 0.3
  DamageModifiers:
  - LIGHTNING 0
  - FIRE 0.5
  Skills:
  - lightning @LivingInRadius{r=10} ~onTimer:100
```

打开你用ItemsAdder创建怪物的.yml文件,并添加**replace rule\[挂钩规则\]**,像这样:

```yaml
        replace_mobs_spawn:
          mob1:
            replace_mythicmob:
              name: StaticallyChargedSheep
              always: true
            type: SHEEP
```

{% hint style="warning" %}
将**replace\_mythicmob**`name`属性设置为你的**MythicMobs名称**.超级重要!
{% endhint %}

### 随机生成

If you want to create custom spawn logic for your custom mob you must not use **ItemsAdder** rules, use **Mythicmobs** configuration: [https://www.mythicmobs.net/manual/doku.php/tutorials/randomspawns](https://www.mythicmobs.net/manual/doku.php/tutorials/randomspawns)

{% hint style="warning" %}
### Warning:

**ItemsAdder** eggs and /iasummon command **won't work** for Mythicmobs custom mobs, you have to spawn them using **Mythicmobs command** if you want to spawn them manually.  
`/mythicmobs mobs spawn StaticallyChargedSheep`
{% endhint %}

## Complete example

### ItemsAdder configuration mobs.yml

```yaml
  glow_squid:
    display_name: "Glow Squid"
    permission: iamobs
    click_in_ia_gui: false
    lore:
      - lore-1-glow_squid
      - lore-life-glow_squid
      - lore-2-glow_squid
      - lore-3-glow_squid
      - lore-4-glow_squid
      - lore-5-glow_squid
    resource:
      generate: false
      model_path: "mob/glow_squid/glow_squid"
    behaviours:
      mob:
        ai: SQUID
        hit_color: ff7e7e
        max_health: 20
        animation:
          walk: glow_squid_walking
        replace_mobs_spawn:
          mob1:
            replace_mythicmob:
              name: StaticallyChargedSheep
              always: true
            type: SHEEP
```

### Mythicmobs configuration Mobs\example.yml

```yaml
StaticallyChargedSheep:
  Type: SHEEP
  Display: '&aStatically Charged Sheep'
  Health: 100
  Damage: 2
  Options:
    MovementSpeed: 0.3
  DamageModifiers:
  - LIGHTNING 0
  - FIRE 0.5
  Skills:
  - lightning @LivingInRadius{r=10} ~onTimer:100
```

### Mythicmobs configuration RandomSpawns\example.yml

```yaml
RandomStaticallyChargedSheep:
  MobType: StaticallyChargedSheep
  Worlds: world
  Chance: 0.25
  Priority: 1
  Action: REPLACE
```

