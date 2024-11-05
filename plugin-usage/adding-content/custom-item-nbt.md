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

### Example item name

```yml
items:
  example_item_custom_name:
    enabled: true
    display_name: example_item_custom_name
    permission: custom.example_item_custom_name
    nbt: "{components:{\"minecraft:custom_name\":'{\"text\":\"Yo This is a test!\"}'},count:1,id:\"minecraft:stone\"}"
```

### Example item name - old 1.20.4 notation

```yml
items:
  example_item_custom_name:
    enabled: true
    display_name: example_item_custom_name
    permission: custom.example_item_custom_name
    nbt: "{display:{Name:'{\"text\":\"TEST\", \"font\": \"alt\"}'}}"
```

<figure><img src="../../.gitbook/assets/nbt_custom_item_name_example.png" alt=""><figcaption></figcaption></figure>
