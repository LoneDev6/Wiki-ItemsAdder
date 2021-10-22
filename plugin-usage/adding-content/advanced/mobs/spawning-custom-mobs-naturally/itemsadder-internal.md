# Встроенные функции

## Естественное порождение мобов с помощью ItemsAdder

Для естественного порождения мобов необходимо настроить свойство `replace_mobs_spawn`.

Это пример для пользовательского моба по имени **Soul**.  
Как видите, я настроил его как обычный предмет, но со специальным [поведением ](../../item-properties/behaviours.md)под названием **mob**.

Этот пример конфигурации указывает ItemsAdder заменить любого естественно порожденного `ZOMBIE` с 20% `chance` (шансом), в `MIDNIGHT` (полуночное время) и только в пещерах\(`max_sky_light: 0`\).

```yaml
  soul:
    display_name: Soul
    permission: creaturesplus
    click_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/soul"
    behaviours:
      mob:
        ai: HUSK
        hit_color: ff7e7e
        max_health: 40
        lock_head_rotation:
          y: 0
        animation:
          attack: soul_attack
          walk: soul_walking
        replace_mobs_spawn:
          mob1:
            type: ZOMBIE
            reason: NATURAL
            chance: 20
            max_sky_light: 0
            time:
              start: MIDNIGHT
            biomes:
             - DESERT
             - DESERT_HILLS
             - DESERT_LAKES
```

Вы можете создать столько правил замены, сколько захотите, например, если вы хотите заменить `ZOMBIE` и `SKELETON`, вы можете создать второе правило

```yaml
        replace_mobs_spawn:
          rule1:
            type: ZOMBIE
            reason: NATURAL
            chance: 20
            max_sky_light: 0
            time:
              start: MIDNIGHT
          rule2:
            type: SKELETON
            reason: NATURAL
            chance: 50
            max_sky_light: 0
            time:
              start: NOON
```

Вы можете решить, **заменить** моба **или породить** пользовательского **моба, не заменяя **оригинального**.  
Вы должны использовать свойство `spawn_another`.

```yaml
          rule3:
            type: ZOMBIE
            spawn_another: true
            reason: NATURAL
            chance: 10
            max_sky_light: 0
            time:
              start: MIDNIGHT
```

