# Can't write in chat and can't move

## Worldguard

如果遇到你的车辆被窃盗的话 \(奇怪的Bug\) 请打开WorldGuard的config.yml,设置这个:

```text
block-plugin-spawning: false
```

## Towny

{% hint style="warning" %}
如果你的车辆有问题,而你使用了Towny插件.打开Towny的config.yml,在这里删除Slime:
{% endhint %}

```yaml
town_mob_removal_entities: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
```

## Mob Farm Manager

如果你使用 [Mob Farm Manager ](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-16-hopper-support.15127/)插件请确保检查是否设置了任何实体类型的**SLIME**,这可能会删除作为车辆一部分的SLIME,才导致会发生报错

## Residence

使用指令 `/res set monsters t/r` 在你的 **领地**.  
我已经联系了Residence开发者,我希望[他们能解决这个问题](https://github.com/Zrips/Residence/issues/469#issuecomment-801425643)

## 其他怪物限制/分组怪物/合并怪物插件

请删除实体类型**SLIME**的任何分组怪物/合并怪物/怪物限制功能.

