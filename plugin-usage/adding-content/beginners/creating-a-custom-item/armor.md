# Броня

## Пример пользовательской брони

```yaml
items:
  ruby_head:
    display_name: Ruby helmet
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 275
    specific_properties:
      armor:
        slot: head
        color: ff0000
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
  ruby_chest:
    display_name: Ruby chestplate
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
        color: ff0000
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
  ruby_legs:
    display_name: Ruby leggings
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 375
    specific_properties:
      armor:
        slot: legs
        color: ff0000
    attribute_modifiers:
      legs:
        armor: 5
        armorToughness: 1
  ruby_boots:
    display_name: Ruby boots
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 325
    specific_properties:
      armor:
        slot: FEET
        color: ff0000
    attribute_modifiers:
      feet:
        armor: 3
        armorToughness: 1
```

{% page-ref page="../../../../faq/can-i-create-slabs-stairs/" %}

## Пользовательская текстура \(только в инвентаре\)

Чтобы добавить пользовательскую текстуру для элемента брони, вам необходимо указать текстуру или модель \ (как и для любого другого пользовательского элемента\).

{% hint style="warning" %}
#### Обновление до ItemsAdder 2.4.17+
{% endhint %}

### Текстура пользовательского предмета

```yaml
items:
  custom_helmet:
    display_name: "Custom Helmet"
    permission: armors.custom_helmet
    resource:
      generate: true
      textures:
       - "item/custom_helmet"
```

### Пользовательская модель предмета

```yaml
items:
  custom_helmet:
    display_name: "Custom Helmet"
    permission: armors.custom_helmet
    resource:
      generate: false
      model_path: "item/custom_helmet"
```

### Пользовательская текстура брони на теле

{% page-ref page="../../optifine-only-features/armor-textures.md" %}

