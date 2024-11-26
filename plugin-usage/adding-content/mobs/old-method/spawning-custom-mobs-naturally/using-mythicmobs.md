# 使用 MythicMobs

## 如何让 MythicMobs 处理我的自定义生物

如果你想让 **MythicMobs** 处理你的自定义生物以获得更高级的功能和控制，这真的很容易！

例如，我有以下 MythicMobs 配置：

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
打开你创建生物的 **ItemsAdder** `.yml` 文件，并像这样编辑 **替换规则**：

```yaml
        replace_mobs_spawn:
          mob1:
            replace_mythicmob:
              name: StaticallyChargedSheep
              always: true
            type: SHEEP
```

{% hint style="warning" %}
重要的是将 **replace\_mythicmob** `name` 属性设置为你的 **mythicmob 名称**。
{% endhint %}

### 随机几率

如果你想为你的自定义生物创建自定义生成逻辑，你不应该使用 **ItemsAdder** 规则，而是使用 **Mythicmobs** 配置：[https://www.mythicmobs.net/manual/doku.php/tutorials/randomspawns](https://www.mythicmobs.net/manual/doku.php/tutorials/randomspawns)

{% hint style="warning" %}
#### 警告：

**ItemsAdder** 刷怪蛋和 /iasummon 命令 **不适用于** Mythicmobs 自定义生物，如果你想手动生成它们，你必须使用 **Mythicmobs 命令** 生成它们。\
`/mythicmobs mobs spawn StaticallyChargedSheep`
{% endhint %}

## 完整示例

### ItemsAdder 配置 mobs.yml

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

### Mythicmobs 配置 Mobs\example.yml

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

### Mythicmobs 配置 RandomSpawns\example.yml

```yaml
RandomStaticallyChargedSheep:
  MobType: StaticallyChargedSheep
  Worlds: world
  Chance: 0.25
  Priority: 1
  Action: REPLACE
```
