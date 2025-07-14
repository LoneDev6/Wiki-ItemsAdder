# (old) Textured Armor

{% hint style="warning" %}
This method is suggested for ItemsAdder 4.0.8 and lower.\
This is made for clients with version lower than 1.21.2.

ItemsAdder 4.0.9+ and Minecraft 1.21.2+ support a new way of making armors.\
[Read more here](../armors.md).
{% endhint %}

## Custom wear texture

{% hint style="danger" %}
The `vanilla` feature requires Minecraft 1.17 or greater.\
It can't work on Minecraft 1.16 and previous versions.

To make 1.16 clients see the custom armors you can enable also the `optifine` attribute, this will allow old clients to see the armors anyway.

This is also useful as fallback for people who use custom shaders, which are not compatible with the custom armors vanilla shaders.
{% endhint %}

{% hint style="warning" %}
If you see **bugged** textures and you have **Optifine** installed please [read here](../../../faq/armors-issues/armors-textures-not-working-with-shaders-mod.md).
{% endhint %}

### Creating the armor renderer

{% hint style="info" %}
An armor renderer is a setting which contains the information how to show the armor ingame on the player body.\
It is a configuration which specified how the game will show the armor ingame.

Note: there can be only one armor renderer with per color.
{% endhint %}

```yaml
info:
  namespace: my_items
armors_rendering:
  my_armor:
    color: "#d60000"
    layer_1: armor/my_armor/layer_1
    layer_2: armor/my_armor/layer_2
    use_color: false
```

{% hint style="warning" %}
You must decide a color! Even if the armor won't be colored. The color is like an ID (identifier) for the custom armor renderer.
{% endhint %}

* `use_color: false` disables the recoloring of the armor using the specified `color: "#d60000"`. It would have colored the armor texture if were set to `true`.\
  In some cases you may want to recolor the armor using the specified `color`, so you will have to set it to `true`.\
  This option will also make the item (in inventory) not colored automatically anymore.
* `color` is the color attribute of this armor.\
  It acts like an **unique identifier** for the armor (and will tint the armor if `use_color` is `true`). Use this website to get a valid color: [https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color).\
  Note: ItemsAdder will automatically select a nearest unused color if the selected one is already used by another custom armor.

Now I create the two PNG files inside the `contents/my_items/textures/armor/my_armor/` folder.

<figure><img src="../../../.gitbook/assets/armor_textures_preview.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**HD armor textures**

You can create HD high resolution armors too!\
Just make sure they have the same proportions of the original.\
For example:\
64x32, 128x64, 256x128, 512x256... <mark style="color:red;">it's very important! Size must be a power of 2.</mark>
{% endhint %}

{% hint style="danger" %}
It's not really advised to use HD textures since this is a blocky game.\
Lot of HD textures can cause issues because there is a different size limit for each Graphical Card.

So it's better to stick with the vanilla texture size if you want to avoid risking issues.
{% endhint %}

### Creating an armor piece

Let's create a chestplate.\
To create other pieces you just have to repeat the following method and change the `slot`.

```yaml
  my_armor_chest:
    display_name: my_armor chestplate
    permission: my_armor
    resource:
      generate: true
      textures:
      - item/my_armor/chestplate
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
        custom_armor: my_armor
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
```

{% hint style="warning" %}
Make sure that no `material` property is set. This is handled automatically by the plugin for custom textured armors. Armor won't work if a `material` has been set.
{% endhint %}

The `custom_armor` property is important, it makes the plugin apply the previous `armors_renderer` setting to this armor piece.

In this case I didn't specify any `color` in the `specific_properties` field of the armor piece because it's automatically applied by the `custom_armor` property, inherited from the `armors_renderer`.

Now I create the item texture and I put it inside the folder:\
`contents/my_items/textures/item/my_armor/`.

In this example I created also a new folder called `my_armor` to better organize the resourcepack since you will have 1 texture for each armor piece, and having them in the same textures folder might cause confusion.

`contents/my_items/textures/item/my_armor/chestplate.png`

![](../../../.gitbook/assets/chestplate_item_red.png)

![](<../../../.gitbook/assets/image (211).png>)

### Animated textures

You can also create animated armors!

![](<../../../.gitbook/assets/ezgif-7-3b3a255fe802 (1).gif>)

To create an animated armor you have to create an image with all the animation frames.\
Each frame must be under the previous. This is an example this is a 3 frames animation:

![layer\_1](../../../.gitbook/assets/layer_1.png)

![layer\_2](../../../.gitbook/assets/layer_2.png)

Now let's edit the rendering properties to support the animation.

```yaml
info:
  namespace: my_items
armors_rendering:
  my_armor:
    color: "#d60000"
    layer_1: armor/my_armor/layer_1
    layer_2: armor/my_armor/layer_2
    use_color: false
    animation:
      interpolation: true
```

In this case I set `interpolation: true` because I want the animation to be smooth.

Default speed is 24, but you can customize it until you find the right speed value:

```yaml
    animation:
      speed: 30
      interpolation: true
```

### Emissive textures (glowing in the dark)

You can also create emissive textures which glow in the dark. (You can make both animated and emissive textures at the same time!)

```yaml
info:
  namespace: my_items
armors_rendering:
  my_armor:
    color: "#d60000"
    layer_1: armor/my_armor/layer_1
    layer_2: armor/my_armor/layer_2
    emissive_1: armor/my_armor/emissive_1
    emissive_2: armor/my_armor/emissive_2
    use_color: false
```

In this case I want to make the previous animation emissive, I want it to glow in the dark.\
You have to make 2 textures in order to make the textures glow.\
The **transparent** part **won't glow** while the colored part will glow.

You basically just have to copy and paste your texture and erase the parts you don't want to glow.

## Extra: Custom 3D helmet

{% hint style="warning" %}
Currently only items equipped on the head support 3D due to Minecraft limitations.
{% endhint %}

This is an example on how to create a custom helmet that has a 3D model and not just a texture.

```yaml
info:
  namespace: my_items
items:
  test_3d_helmet:
    display_name: Test 3D Helmet
    resource:
      generate: false
      model_path: item/test_3d_helmet
      material: PAPER
    durability:
      max_durability: 1562
    behaviours:
      hat: true
```

{% hint style="warning" %}
Make sure to use a `material` like `PAPER` and not an helmet, otherwise the 3D model would not be visible when equipped.
{% endhint %}

{% hint style="warning" %}
Custom helmets support durability only on ItemsAdder 4.0.8+.
{% endhint %}

## Full configuration from the previous example

<details>

<summary>Click here to read the configuration file</summary>

```yaml
info:
  namespace: myitems
armors_rendering:
  myarmor:
    color: "#d60000"
    layer_1: armor/myarmor/layer_1
    layer_2: armor/myarmor/layer_2
items:
  myarmor_helmet:
    display_name: myarmor helmet
    permission: myarmor
    resource:
      generate: true
      textures:
      - item/myarmor/helmet
    durability:
      max_custom_durability: 275
    specific_properties:
      armor:
        slot: head
        custom_armor: myarmor
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
  myarmor_chestplate:
    display_name: myarmor chestplate
    permission: myarmor
    resource:
      generate: true
      textures:
      - item/myarmor/chestplate
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
        custom_armor: myarmor
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
  myarmor_leggings:
    display_name: myarmor leggings
    permission: myarmor
    resource:
      generate: true
      textures:
      - item/myarmor/leggings
    durability:
      max_custom_durability: 375
    specific_properties:
      armor:
        slot: legs
        custom_armor: myarmor
    attribute_modifiers:
      legs:
        armor: 5
        armorToughness: 1
  myarmor_boots:
    display_name: myarmor boots
    permission: myarmor
    resource:
      generate: true
      textures:
      - item/myarmor/boots
    durability:
      max_custom_durability: 325
    specific_properties:
      armor:
        slot: FEET
        custom_armor: myarmor
    attribute_modifiers:
      feet:
        armor: 3
        armorToughness: 1
```

</details>

{% file src="../../../.gitbook/assets/myarmor_example (1).zip" %}
Extract the zip into the `contents` folder of ItemsAdder
{% endfile %}

## FAQ

{% hint style="warning" %}
`armors_rendering` was renamed to `legacy_armor_renderings` in ItemAdder 4.0.9.\
The old property still works to maintain compatibility.
{% endhint %}
