---
description: Custom on-body armor texture
---

# Body texture

{% hint style="danger" %}
The `vanilla_1_17` feature requires ItemsAdder 2.4.22+ and Minecraft 1.17.\
It can't work on Minecraft 1.16 and previous versions.\
To make 1.16 clients see the custom armors you can enable also the `optifine` attribute, this will allow old clients to see the armors anyway.
{% endhint %}

{% hint style="warning" %}
If you see **bugged** textures and you have **Optifine** installed please [read here](../../../faq/armors-bugs/textures-broken-by-shaders-mod.md).
{% endhint %}

## Creating the armor renderer

{% hint style="info" %}
An armor renderer is a setting which contains the information how to show the armor ingame on the player body.

Note: there can be only one armor renderer with per color.
{% endhint %}

```yaml
info:
  namespace: myitems
armors_rendering:
  my_armor:
    color: "#d60000"
    layer_1: armor/my_armor/layer_1
    layer_2: armor/my_armor/layer_2
    use_color: false
```

This is a configuration which specified how the game will show the armor ingame.

{% hint style="warning" %}
You must decide a color! Even if the armor won't be colored. The color is like an ID (identifier) for the custom armor renderer.
{% endhint %}

`use_color` disables the recoloring of the armor using the specified `color: "#d60000"`.\
In some cases you may want to recolor the armor using the specified `color`, so you will have to set it to `true`.\
This option will also make the item (in inventory) not colored automatically anymore.

`color` is the color attribute of this armor. It acts like an unique identifier for the armor (and will tint the armor if `use_color` is `true`). Use this website to get a valid color: [https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)

Now I create the two PNG files inside the `contents/myitems/resourcepack/textures/armor/my_armor/` folder.

<figure><img src="../../../.gitbook/assets/armor_textures_preview.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**HD armor textures**

You can create HD high resolution armors too!

Just make sure they have the same proportions of the original.

For example 64x32, 128x64, 256x128, 512x256..... <mark style="color:red;">it's very important! Size must be a power of 2.</mark>
{% endhint %}

### Creating an armor piece

Let's create a chestplate.\
To create other pieces you just have to repeat the following method and change the `slot`.

```yaml
  my_armor_chestplate:
    display_name: "My Armor Chestplate"
    permission: my_armor_chestplate
    resource:
      generate: true
      textures:
      - item/my_armor/chestplate
    durability:
      max_custom_durability: 602
    specific_properties:
      armor:
        slot: chest
        custom_armor: my_armor
    attribute_modifiers:
      chest:
        armor: 8
        armorToughness: 3
```

The `custom_armor` property is important, it makes the plugin use the previous textures setting (`armors_renderer`) for this armor piece.

In this case I didn't specify any `color` in the `specific_properties` field of the armor piece because it's already specified in the `custom_armor` property.

Now I create the item texture and I put it inside the folder: \
`contents\myitems\textures\item\my_armor\`&#x20;

In this example I created also a new folder called `my_armor` to better organize the resourcepack since you will have 1 texture for each armor piece, and having them in the same textures folder might cause confusion.

![](<../../../.gitbook/assets/image (40) (1) (1).png>)

![](<../../../.gitbook/assets/image (42) (1) (1).png>)

### Animated textures

You can also create animated armors!

![](<../../../.gitbook/assets/ezgif-7-3b3a255fe802 (1) (1).gif>)

To create an animated armor you have to create an image with all the animation frames.\
Each frame must be under the previous. This is an example this is a 3 frames animation:

![layer\_1](../../../.gitbook/assets/layer\_1.png)

![layer\_2](../../../.gitbook/assets/layer\_2.png)

Now let's edit the rendering properties to support the animation.

```yaml
info:
  namespace: myitems
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
  namespace: myitems
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
