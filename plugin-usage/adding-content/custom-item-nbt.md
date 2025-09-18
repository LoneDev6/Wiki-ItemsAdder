---
icon: binary
---

# Custom item NBT

## Adding custom NBT attributes to the item

You can specify custom **NBT** attributes to be merged into the custom item.

{% hint style="success" %}
This feature supports legacy NBT and the new 1.20.5+ modern NBT too!\
It will automatically convert the legacy NBT if needed.

This is not guaranteed to work on every game version, so please consider manually updating your NBT configurations.

More info on the 1.20.5+ changes [here](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20-5) (scroll down).
{% endhint %}

{% hint style="danger" %}
Make sure to provide a valid **NBT** (`json`) or it won't work!
{% endhint %}

## Inject NBT properties from file

{% hint style="warning" %}
### This feature requires at least ItemsAdder 4.0.8
{% endhint %}

{% code title="my_item_file.yml" %}
```yaml
info:
  namespace: test
items:
  test_inject_nbt_from_file:
    display_name: "Test inject NBT from file"
    components_nbt_file: "test_inject_nbt_from_file.json"
    resource:
      material: IRON_CHESTPLATE
      generate: false
      model_path: minecraft:item/diamond
```
{% endcode %}

{% code title="test_inject_nbt_from_file.json" %}
```json
{
  "components":{
     "minecraft:custom_name": {"text":"Черепаший нагрудник", "italic":false},
     "minecraft:item_name": {"text":"Черепаший нагрудник", "italic":false},
     "minecraft:max_damage":440,
     "minecraft:attribute_modifiers":[
        {
           "id":"turtle_chestplate",
           "type":"minecraft:armor",
           "amount":6,
           "operation":"add_value",
           "slot":"chest"
        },
        {
           "id":"turtle_chestplate",
           "type":"minecraft:oxygen_bonus",
           "amount":1,
           "operation":"add_value",
           "slot":"chest"
        },
     ],
     "minecraft:repairable":{
        "items":"minecraft:turtle_scute"
     }
  }
}
```
{% endcode %}

## Old method, inject from NBT string

{% hint style="warning" %}
### NOTE

Make sure to escape the `"` character using `\`.\
Use my [Escape/Unescape tool](https://escape-mc-components.lonedev.workers.dev/) to escape the string before using it in the YML.
{% endhint %}

### Example custom attribute

For example I want to merge these tags into my item:\
`nbt: '{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}'`

```yaml
items:
  custom_nbt_item_data:
    display_name: "Injected nbt data into this item"
    lore:
    - 'test item: custom_nbt_item_data'
    - 'test line from IA config 1'
    - 'test line from IA config 2'
    - 'test line from IA config 3'
    permission: examples.test
    nbt: '{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}'
    resource:
      material: DIAMOND_SWORD
      generate: false
      model_path: "minecraft:item/diamond"
    durability:
      durability: 650
      max_durability: 1324
    attribute_modifiers:
      mainhand:
        attackDamage: 30
        attackSpeed: 25
```

### Custom NBT + name Component

`nbt: '{components:{"minecraft:custom_name":{"text":"TEST", "font": "alt", "italic":false}, "minecraft:custom_data": {"bro":"asd"}}}'`

```yaml
  custom_nbt_item_custom_name:
    enabled: true
    display_name: example_item_custom_name
    lore:
    - 'test item: custom_nbt_item_custom_name'
    - 'test line from IA config 1'
    - 'test line from IA config 2'
    - 'test line from IA config 3'
    permission: custom.test
    nbt: '{components:{"minecraft:custom_name":{"text":"TEST", "font": "alt", "italic":false}, "minecraft:custom_data": {"bro":"asd"}}}'
    resource:
      material: DIAMOND_SWORD
      generate: false
      model_path: "minecraft:item/diamond"
    durability:
      durability: 650
      max_durability: 1324
    attribute_modifiers:
      mainhand:
        attackDamage: 30
        attackSpeed: 25
```

### Old 1.20.4 Component - don't use this

{% hint style="warning" %}
This is an old way, don't use it.
{% endhint %}

`nbt: "{display:{Name:'{"text":"TEST", "font": "alt", "italic":false}'}}"`

```yml
items:
  custom_nbt_item_custom_name_legacy_nbt:
    enabled: true
    display_name: custom_nbt_item_custom_name_legacy_nbt
    lore:
    - 'test item: custom_nbt_item_custom_name_legacy_nbt'
    - 'test line from IA config 1'
    - 'test line from IA config 2'
    - 'test line from IA config 3'
    permission: custom.test
    nbt: "{display:{Name:'{"text":"TEST", "font": "alt", "italic":false}'}}"
    resource:
      material: DIAMOND_SWORD
      generate: false
      model_path: "minecraft:item/diamond"
    durability:
      durability: 650
      max_durability: 1324
    attribute_modifiers:
      mainhand:
        attackDamage: 30
        attackSpeed: 25
```

