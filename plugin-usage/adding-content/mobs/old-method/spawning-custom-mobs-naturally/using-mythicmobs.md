# 使用 MythicMobs

## 如何让 MythicMobs 处理自定义怪物

如果您想让 **MythicMobs** 处理您的自定义怪物, 使其拥有更高级的功能和控制效果, 那就请跟着下面走!

如下所示, 我有一个 MythicMobs 配置:

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

\
接着, 打开您的 **ItemsAdder** 创建自定义怪物的 `.yml` 文件, 并编辑 **replace rule（替换规则）** 如下所示:

```yaml
        replace_mobs_spawn:
          mob1:
            replace_mythicmob:
              name: StaticallyChargedSheep
              always: true
            type: SHEEP
```

{% hint style="warning" %}
最重要的一点, 将 **replace\_mythicmob** 的 `name` 选项的值填写为 **您的 MythicMobs 怪物名称**.
{% endhint %}

### 随机概率

如果您想为自定义怪物创建自定义的生成逻辑, 那就不能使用 **ItemsAdder** 的规则, 请使用 **Mythicmobs** 配置: [https://www.mythicmobs.net/manual/doku.php/tutorials/randomspawns](https://www.mythicmobs.net/manual/doku.php/tutorials/randomspawns)

{% hint style="warning" %}
### Warning:

**ItemsAdder** 的怪物蛋和 /iasummon 命令对 Mythicmobs 的自定义实体 **无效**, 必须使用 **Mythicmobs 命令** 来生成他们.\
`/mythicmobs mobs spawn StaticallyChargedSheep`
{% endhint %}

## 完整配置

### ItemsAdder 中的 mobs.yml 配置

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

### Mythicmobs 怪物配置示例

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

### Mythicmobs 随机生成配置示例

```yaml
RandomStaticallyChargedSheep:
  MobType: StaticallyChargedSheep
  Worlds: world
  Chance: 0.25
  Priority: 1
  Action: REPLACE
```
