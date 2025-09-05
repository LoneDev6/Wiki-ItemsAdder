---
icon: palette
---

# Colored Items

{% hint style="warning" %}
This requires ItemsAdder 4.0.13 and Minecraft 1.21.4+ (both client and server).
{% endhint %}

To create a colored item you have to use a base texture, for example something like the quartz texture: `minecraft:item/quartz`.\
You can use any texture you want, in this case I use the quartz texture as it's white and already included in the game files.

<figure><img src="../../.gitbook/assets/image (269).png" alt=""><figcaption></figcaption></figure>

Then specify the `color` attribute in the `graphics` properties. In this case I use `RED`.

It accepts the following format:

* `RED` (Bukkit `Color` enum)
* `#FFFFF` hex (`#` is optional)
* `13083194`
* `255, 255, 255` (RGB)

```yaml
info:
  namespace: test
items:
  test_dyeable:
    name: Test Dyeable
    graphics:
      texture: minecraft:item/quartz
      color: RED
      hand_animation_on_swap: true
```

<figure><img src="../../.gitbook/assets/image (270).png" alt=""><figcaption></figcaption></figure>

### Chaging color during gameplay

You can change colors using the command `/iacolor <color>`.

### Templates and variants

You can create variants of the base item to make various variants of the same item but with different color.

Mark the base item as `template: true` then reference it using `variant_of: xxx` in the other items.&#x20;

#### Example

```yaml
  test_dyeable_template:
    name: Test Dyeable
    template: true
    graphics:
      texture: minecraft:item/quartz
      color: RED
      hand_animation_on_swap: true
  test_dyeable2:
    name: Test Dyeable 2
    variant_of: test_dyeable_template
    graphics:
      color: BLUE
  test_dyeable3:
    name: Test Dyeable 3
    variant_of: test_dyeable_template
    graphics:
      color: "#326da8"
  test_dyeable4:
    name: Test Dyeable 4
    variant_of: test_dyeable_template
    graphics:
      color: 255,0,0
```

