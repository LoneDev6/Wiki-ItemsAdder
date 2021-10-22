# Пользовательские NBT

## Добавление пользовательских атрибутов NBT к элементу

Вы можете указать пользовательские **NBT** атрибуты, которые будут объединены в пользовательский элемент.

## Пример

Например, я хочу объединить эти теги в мой элемент.

`{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}`

```yaml
items:
  custom_nbt_item:
    display_name: "Just an example"
    permission: examples.custom_nbt_item
    nbt: '{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}'
    resource:
      material: DIAMOND_SWORD
      generate: true
      model_path: "minecraft:item/diamond"
    durability:
      max_custom_durability: 1324
```

{% hint style="danger" %}
## Предупреждение

Убедитесь, что вы предоставили корректный **NBT** \(**json**\), иначе функция не будет работать.

### Для этой функции требуется **ItemsAdder 2.4.18+**.
{% endhint %}

