# Встроенные функции мобов ItemsAdder

## Создание вашего первого моба

Создайте файл .yml в вашей [папке ](../../beginners/basic-concepts/namespace.md)f \(гляньте [другое руководство ](../../beginners/creating-your-namespace.md), чтобы получить еще больше информации\).

{% hint style="info" %}
Советую использовать мой [ официальный онлайн-редактор ItemsAdder](../../../../files-editor.md), для простоты изменения файлов ItemsAdder. Это сделает вашу настройку проще, благодаря функции автоматического завершения строк \(зажатие CRTL+ПРОБЕЛ\) и позволит вам избегать лишние ошибки.
{% endhint %}

Пример моба с именем "Душа" (Soul) и своей моделью.  
Как можно заметить, я настраиваю его как обычный предмет, но со своим [поведением ](../item-properties/behaviours.md), названное **mob**.

```yaml
info:
  namespace: creaturesplus
items:
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
        y_offset: 0
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
```

Этот параметр поведения строк указывает ItemsAdder заменять ванильного, натурально-появившегося `Зомби`с 20% `шансом`, только в указанный отрезок времени - `полночь` и только в пещерах, где нет света солнца \(`max_sky_light: 0`\).  
Голова моба заморожена, тобишь лишена возможности поворачиваться почти во все стороны \(исключение - по Y оси\), это не даст мобу выглядеть тупо, когда он смотрит на игрока, которых находится выше.

`hit_color` - цвет моба, когда он получает урон.   
Вы можете посмотреть списки правильных, доступных цветов в этих источниках:  
[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)  
[https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)  
[https://misode.github.io/worldgen/biome/](https://misode.github.io/worldgen/biome/) \(возьмите определенный цвет из палитры и скопируйте его значение\)

{% hint style="info" %}
Примечание: Я **пропустил** параметр `material` в категории `resource`, так как **это не нужно** **мобам**, ItemsAdder определяет это автоматически.
{% endhint %}

### Анимации

Возможно вы уже знаете, что у моделей есть 2 дополнительных атрибута: **анимации** `атаки (attack)` и `ходьбы (walk)`.  
Фактически, данные анимации будут являться другими предметами (и другой моделью) и должны быть прописаны подобным образом:

```yaml
  soul_walking:
    display_name: soul_walking
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/walking"
    behaviours:
      mob_animation: true
  soul_attack:
    display_name: soul_attack
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/attack"
    behaviours:
      mob_animation: true
```

## Результат

```yaml
info:
  namespace: creaturesplus
items:
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
  soul_walking:
    display_name: soul_walking
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/walking"
    behaviours:
      mob_animation: true
  soul_attack:
    display_name: soul_attack
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/attack"
    behaviours:
      mob_animation: true
```

![](../../../../.gitbook/assets/image%20%2816%29.png)

## Натуральное появление моба

Чтобы заставить моба появляться натуральным образом на основе появления других, вы должны прописать параметр `replace_mobs_spawn`.

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
```

Вы можете задать больше таких указаний по замене мобов, если это нужно, например - вы можете подменять обоих мобов: `ЗОМБИ` и `СКЕЛЕТА`, для этого попросту нужно создать второе правило на новых строках

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

Помимо **замещения**, в процентным шансе, появляющихся мобов ванили, вы можете заставить своего моба **появляться** без **замещения** других, **оригинальных** мобов.  
Для этого вы должны использовать параметр `spawn_another`.

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

