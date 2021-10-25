# Шаблоны и варианты

## Что такое шаблоны?

Шаблоны - это специальные предметы, которые не будут появляться в игре, они используются как хранители свойств для других предметов.  
Они позволяют записывать общие свойства в одном предмете и автоматически добавлять их в другие предметы без постоянного копирования и вставки.

Чтобы создать шаблон, необходимо установить `template: true` в вашем предмете.

{% hint style="warning" %}
Это экспериментальная функция, дайте мне знать, если что-то работает неправильно.  
Вы можете увидеть пример использования в [этом аддоне](https://www.spigotmc.org/resources/furniture-itemsadder-more-furniture.93193/).
{% endhint %}

## Что такое варианты?

Варианты - это предметы, которые будут появляться в игре и будут наследовать свойства шаблонных предметов.

Чтобы создать вариант, вы должны установить `variant_of: template name` в вашем предмете.

## Пример

Я хочу создать несколько одинаковых предметов мебели, но с разными моделями.

```yaml
  template_wood_park_bench:
    template: true  # <---- HERE you can see I set this item as "template"
    display_name: ""
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/oak_wood_park_bench
    behaviours:
      furniture:
        entity: armor_stand
        small: true
        solid: true
        fixed_rotation: true
        hitbox:
          length: 1
          width: 2
          height: 1
          width_offset: 0.5
        placeable_on:
          walls: false
          ceiling: false
          floor: true
      furniture_sit:
        sit_height: 0.5
        sit_all_solid_blocks: true


  oak_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Oak wood Park Bench"
    permission: oak_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/oak_wood_park_bench


  spruce_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Spruce wood Park Bench"
    permission: spruce_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/spruce_wood_park_bench


  birch_wood_park_bench:
    variant_of: template_wood_park_bench # <-- HERE I specify the template to inherit
    display_name: "Birch wood Park Bench"
    permission: birch_wood_park_bench
    lore:
    - 'lore-decorative-item'
    resource:
      material: PAPER
      generate: false
      model_path: item/birch_wood_park_bench
```

