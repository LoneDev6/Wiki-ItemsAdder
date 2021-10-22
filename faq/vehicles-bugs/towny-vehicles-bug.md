# Невозможно использовать чат и двигаться

## Worldguard

Если у вас возникают проблемы с транспортными средствами\\(опрокидывание под миром и другие подобные ошибки\), откройте config.yml WorldGuard и установите это:

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

## Менеджер фермы мобов

Если у вас установлен плагин [Mob Farm Manager](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-16-hopper-support.15127/) - убедитесь, что все типы сущностей **slime\* не заблокированы/изменены плагином, именно здесь кроется вся проблема с использованием транспорта.

## Residence

Используйте команду `/res set monsters t/r` внутри **Residence**.  
Я уже связался с разработчиком резиденции и надеюсь, что они [исправят это](https://github.com/Zrips/Residence/issues/469#issuecomment-801425643)

## Другие плагины для удаления/группировки/слияния мобов

Уберите все функции таких плагинов для сущности **слизня \(SLIME\)**.

