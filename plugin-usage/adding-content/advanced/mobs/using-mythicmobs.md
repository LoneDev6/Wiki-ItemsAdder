# 使用 MythicMobs

## 如何将自定义怪物与MythicMobs进行关联

本教程将介绍如何将自定义怪物与MythicMobs进行关联，使MythicMobs赋予自定义怪物更多的功能
<br>例如：下方是MythicMobs中的一个配置

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
要将二者进行关联
你需要打开自定义怪物的.yml文件，并且如下方配置中编辑 **replace rule（替换规则）**

```yaml
        replace_mobs_spawn:
          mob1:
            replace_mythicmob:
              name: StaticallyChargedSheep
              always: true
            type: SHEEP
```

{% hint style="warning" %}
注意：**replace\_mythicmob** 属性下的 `name` 必须将其设置为 **mythicmob** 中怪物的名字.
{% endhint %}

### 随机生成

如果你只需要偶尔生成与 mythicmob 关联的怪物.
你只需要设置 `always: false` 属性，并设置生成规则
\(（这样可以帮助你为 mythicmob 设置更多的皮肤\）
例如：

```yaml
    replace_mobs_spawn:
      mob1:
        replace_mythicmob:
          name: StaticallyChargedSheep
          always: false
        type: SHEEP
        reason: CUSTOM
        chance: 20
        max_sky_light: 0
        time:
          start: MIDNIGHT
```

{% hint style="warning" %}
由于 MythicMobs 将 spawn reson 设置为 `CUSTOM` 而不是 `NATURAL`所以你需要将 `reason:` 设置为 `reason: CUSTOM` 否则将无法随机生成
{% endhint %}



