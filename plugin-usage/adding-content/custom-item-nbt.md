---
icon: binary
---

# Custom item NBT

## Adding custom NBT attributes to the item

You can specify custom **NBT** attributes to be merged into the custom item.

{% hint style="danger" %}
Make sure to provide a valid **NBT** (`json`) or it won't work!
{% endhint %}

{% hint style="warning" %}
### NOTE

Make sure to escape the `"` character using `\`.\
Use my [Escape/Unescape tool](https://escape-mc-components.lonedev.workers.dev/) to escape the string before using it in the YML.
{% endhint %}

{% hint style="success" %}
This feature supports legacy NBT and the new 1.20.5+ modern NBT too!\
It will automatically convert the legacy NBT if needed.

[More info](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20-5) on the 1.20.5+ changes (scroll down).
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

`nbt: "{components:{"minecraft:custom_name":'{"text":"TEST", "font": "alt", "italic":false}', "minecraft:custom_data": {"bro":'asd'}}}"`

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
    nbt: "{components:{\"minecraft:custom_name\":'{\"text\":\"TEST\", \"font\": \"alt\", \"italic\":false}', \"minecraft:custom_data\": {\"bro\":'asd'}}}"
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
    nbt: "{display:{Name:'{\"text\":\"TEST\", \"font\": \"alt\", \"italic\":false}'}}"
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

