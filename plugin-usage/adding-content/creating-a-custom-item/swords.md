# Мечи

{% hint style="danger" %}
Если вы не создали свой namespace, следуйте руководству [namespace tutorial](../creating-your-namespace.md).
{% endhint %}

## Мой первый меч

Вот пример меча \(не забудьте изменить namespace myitems на тот, которое вы хотите\)

```yaml
info:
  namespace: myitems
items:
  mysword:
    display_name: My Sword
    permission: mysword
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/example_item.png
    durability:
      max_custom_durability: 1324
  
```

### Установка текстуры

{% page-ref page="../item-properties/resource/" %}



