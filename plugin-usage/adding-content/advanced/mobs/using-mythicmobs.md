# 使用 MythicMobs 创建

## 如何使用 MythicMobs 处理我的自定义怪物

如果你想让 MythicMobs 来处理你的自定义怪物，以获得更高级的功能与控制，也很简单！

例如我有这样一个 MythicMobs 配置：

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

  
打开你存放了自定义怪物的 ItemsAdder .yml 文件，添加如下**替换规则**：

```yaml
        replace_mobs_spawn:
          mob1:
            replace_mythicmob:
              name: StaticallyChargedSheep
              always: true
            type: SHEEP
```

{% hint style="warning" %}
将**replace\_mythicmob** `name` 属性设置为你 **mythicmob的名字**很重要.
{% endhint %}

### 随机几率

如果你只想在某些情况下替换 mythic mob（这允许你为mythicmob设置更多的皮肤样式），你只需要设置 `always:false`。
Example:

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
记住设置 `reason: CUSTOM` 否则它不会工作，因为 MythicMobs 设置了 `reason:CUSTOM` 而非 `reason:NATURAL`。
{% endhint %}



