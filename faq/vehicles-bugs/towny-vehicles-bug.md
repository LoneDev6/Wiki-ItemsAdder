# 无法在聊天中发送消息以及无法移动

## Worldguard

当你在使用载具时遇到一些bug (载具塌陷至地下或一些奇怪的错误) 
打开 Worldguard 的 config.yml 并且进行如下设置:

```
block-plugin-spawning: false
```

## Towny

{% hint style="warning" %}
当载具出现问题时，刚好服务器有使用 Towny 插件，请打开 Towny 的 config.yml 并从该属性中删除 `Slime`：
{% endhint %}

```yaml
town_mob_removal_entities: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
```

## Mob Farm Manager

如果你使用了 [Mob Farm Manager ](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-16-hopper-support.15127/)
请确保你没有设置任何有关 **SLIME** 实体类型的规则，这将会导致插件移除作为载具一部分的史莱姆而导致错误.
## Residence

在**Residence**中使用命令`/res set monsters t/r`。\
目前已经与 Residence 开发者协商 [修复该问题](https://github.com/Zrips/Residence/issues/469#issuecomment-801425643)

## 其他有关 怪物 移除/分组/合并 的插件

请移除有关 **怪物 移除/分组/合并** 中具有 **SLIME** 实体类型的词条.