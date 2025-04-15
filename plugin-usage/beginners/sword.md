---
icon: sword
---

# My First Sword

{% hint style="danger" %}

### **Resourcepack hosting**

Remember to **decide** a [**resourcepack hosting**](../resourcepack-hosting/) method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar
{% endhint %}

## Creating the swords file config

{% hint style="warning" %}
This is an example sword. Remember to choose a unique namespace for your content. In this tutorial, we'll use `my_items` as our namespace.
{% endhint %}

For this tutorial, we'll create a file that will contain all our custom swords:\
`contents/my_items/configs/myswords.yml`

In this file (`myswords.yml`) we'll create a simple sword called `mysword`:

{% code title="contents/my_items/configs/myswords.yml" %}

```yaml
info:
  namespace: my_items
items:
  mysword:
    display_name: My Sword
    permission: my_items.mysword
    durability:
      max_custom_durability: 1324
```

{% endcode %}

### Understanding the Configuration

Let's break down what each part does:

- `info.namespace`: Defines the unique namespace for your items (keep this consistent)
- `items.mysword`: The unique identifier for your sword (used in commands)
- `display_name`: How the sword will appear in-game
- `permission`: Permission node players need to use this item
- `durability.max_custom_durability`: Sets a custom durability value for your sword

## Item Texture

### Creating the texture file

Now for the fun part - let's add a custom texture to our sword!

You'll need to create or obtain a sword texture image file in PNG format. The texture should be square (ideally 16x16 pixels for pixel art style, or a higher resolution like 32x32, 64x64 for more detailed textures).

Put your sword PNG texture file in this location:

`contents/my_items/textures/item/mysword.png`

![Example of a custom sword texture](<../../.gitbook/assets/image_(14).png>)

### Applying the texture file to your item

Now open your `myswords.yml` file again and add the `resource` section as shown below:

{% code title="contents/my_items/configs/myswords.yml" %}

```yaml
info:
  namespace: my_items
items:
  mysword:
    display_name: My Sword
    permission: my_items.mysword
    resource:
      material: DIAMOND_SWORD
      generate: true
      texture: item/mysword.png
    durability:
      max_custom_durability: 1324
```

{% endcode %}

### Understanding the resource section:

- `material: DIAMOND_SWORD`: Uses the diamond sword as the base item
- `generate: true`: Tells ItemsAdder to automatically generate the 3D model
- `texture: item/mysword.png`: Points to your custom texture file

## Enhancing Your Sword (Optional)

You can add additional properties to make your sword more interesting:

{% code title="Advanced sword example" %}

```yaml
info:
  namespace: my_items
items:
  mysword:
    display_name: "§6My Epic Sword"
    permission: my_items.mysword
    resource:
      material: DIAMOND_SWORD
      generate: true
      texture: item/mysword.png
    durability:
      max_custom_durability: 1324
    attribute_modifiers:
      mainhand:
        attackDamage: 10
        attackSpeed: 1.8
    lore:
      - "§7A powerful sword of legend"
      - "§cDeals §4+10 §cdamage"
```

{% endcode %}

This enhanced version includes:

- Colored display name using Minecraft color codes
- Custom attack damage and speed
- Descriptive lore text that appears when hovering over the item

## Testing Your Sword

Now you need to tell the plugin to load your newly added item:

1. Join the server
2. Make sure you've accepted the resourcepack
3. Use the command `/iazip` to generate and reload the resourcepack
4. If you're using external hosting (like Dropbox), follow the specific steps for your hosting method
5. Get the item using `/iaget my_items:mysword`

![Example of custom sword in-game](<../../.gitbook/assets/image_(18).png>)

![Player holding the custom sword](<../../.gitbook/assets/image_(19).png>)

## Troubleshooting

If your sword doesn't appear correctly:

- Check that your namespace is consistent across all references
- Verify that your texture path is correct
- Make sure you ran `/iazip` after making changes
- If using external hosting, ensure you've updated your hosted resourcepack

## Next Steps

Now that you've created your first sword, you might want to:

- [Create more complex items](../adding-content/item-properties/README.md) with custom behaviors
- [Add crafting recipes](../adding-content/crafting.md) for your sword
- [Learn about custom block creation](my-first-block.md)

## Resourcepack Hosting Tutorials

{% content-ref url="../resourcepack-hosting/" %}
[resourcepack-hosting](../resourcepack-hosting/)
{% endcontent-ref %}
