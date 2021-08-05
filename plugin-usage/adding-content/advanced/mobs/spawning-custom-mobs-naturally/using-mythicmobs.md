# Using MythicMobs

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

  
打开你用ItemsAdder创建怪物的.yml文件,并添加**replace rule[挂钩规则]**,像这样:

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

如果你有时想把原版怪物替换为MythicMobs怪物\(这允许你创造更多的MythicMobs怪物外观变化\)你只需要设置"always: false",并设置你的生成规则  
比如:

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
记住要设置为`reason: CUSTOM`,否则将插件无法加载,因为MythicMobs将生成设置为`CUSTOM`而不是`NATURAL`.
{% endhint %}



