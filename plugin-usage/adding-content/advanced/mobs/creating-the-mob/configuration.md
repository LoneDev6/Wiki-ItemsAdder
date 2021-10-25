# Конфигурация

## Создание своего кулака

### Конфигурация yml

Вы должны создать файл .yml в папке [namespace](.../.../.../beginners/basic-concepts/namespace.md) \(посмотрите [другие руководства](.../.../.../beginners/creating-your-namespace.md) для дополнительной информации\).

{% hint style="info" %}
Рассмотрите возможность использования [официального онлайн инструмента](../../../../../../files-editor.md) для редактирования файлов ItemsAdder.  
Он облегчит вам жизнь, так как имеет автозаполнение\(нажмите CRTL+SPACE\), которое поможет вам избежать ошибок.
{% endhint %}

Это пример для пользовательского моба под названием **Soul**.  
Как вы видите, я настроил его как обычный предмет, но со специальным [поведением](../../item-properties/behaviours.md) под названием **mob**.

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
```

У моба будет **заблокирован поворот головы** \(только по оси Y\), это позволит ему не выглядеть глупо, когда он смотрит на игрока, находясь в более высоком положении.

`hit_color` - это цвет, который будет иметь моб при повреждении игроком.  
Вы можете получить правильный цвет на этих сайтах:
[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)  
[https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)  
[https://misode.github.io/worldgen/biome/](https://misode.github.io/worldgen/biome/) \(используйте одну из программ выбора цвета и скопируйте значение из правой\)

{% hint style="info" %}
Примечание: Я **пропустил** свойство `material` в `resource`, потому что **это не нужно** для **mobs**, ItemsAdder автоматически обработает его.
{% endhint %}

### Анимации

Вы, вероятно, заметили, что есть еще два атрибута: `attack` и `walk` **анимации**.  
Поведение **mob\_animation** говорит ItemsAdder, что предмет является анимацией моба.  
На самом деле это другие предметы, которые вы должны создать подобным образом:

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

