# Невозможно использовать чат и двигаться

## Towny

{% hint style="warning" %}
Если вы столкнулись с этой проблемой и вы используете плагин Towny - откройте файл конфигурации Towny config.yml у уберите слизня \(Slime\) из этой строки:
{% endhint %}

```yaml
town_mob_removal_entities: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
```

## Mob Farm Manager

Если у вас установлен плагин [Mob Farm Manager ](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-16-hopper-support.15127/) - убедитесь, что все типы сущностей **слизня \(Slime\)** не блокируются/модифицируются плагином, именно в этом кроется вся проблема в использовании транспорта.

## Другие плагины для удаления / группировки / соединения мобов

Уберите все функции таких плагинов для сущности **слизня \(SLIME\)**.

