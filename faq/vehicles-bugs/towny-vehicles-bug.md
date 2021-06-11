# Невозможно использовать чат и двигаться

## Worldguard

If you experience bugged vehicles \(get tipped under world and strange bugs like that\) please open config.yml of WorldGuard and set this:

```text
block-plugin-spawning: false
```

## Towny

{% hint style="warning" %}
Если вы столкнулись с этой проблемой и вы используете плагин Towny - откройте файл конфигурации Towny config.yml у уберите слизня \(Slime\) из этой строки:
{% endhint %}

```yaml
town_mob_removal_entities: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
```

## Mob Farm Manager

Если у вас установлен плагин [Mob Farm Manager ](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-16-hopper-support.15127/) - убедитесь, что все типы сущностей **слизня \(Slime\)** не блокируются/модифицируются плагином, именно в этом кроется вся проблема в использовании транспорта.

## Residence

Use the command `/res set monsters t/r` inside a **Residence**.  
I already contacted Residence developer and I hope[ they will fix this](https://github.com/Zrips/Residence/issues/469#issuecomment-801425643)

## Other mobs removal / grouping / merge plugins

Уберите все функции таких плагинов для сущности **слизня \(SLIME\)**.

