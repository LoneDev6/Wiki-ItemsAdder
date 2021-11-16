# Texture

## Custom on-body armor texture

{% hint style="danger" %}
This feature requires ItemsAdder 2.4.22+ and Minecraft 1.17.

It can't work on Minecraft 1.16 and previous versions.
{% endhint %}

{% hint style="warning" %}
You must enable this setting in `config.yml` file of ItemsAdder.&#x20;

And set it to `VANILLA_1_17`



```yaml
    generate-custom-armors-textures:
      enabled: true
      mode: VANILLA_1_17
```
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

`use_color` disables the recoloring of the armor using the specified `color: "#d60000"`. In some cases you may want to recolor the armor using the specified `color`, so you will have to set it to `true`.

Now I create the two PNG files inside the `data/resource_pack/assets/myitems/armor/my_armor/` folder.

![](<../../../../../.gitbook/assets/image (43).png>)

### Creating an armor piece

For example let's create a chestplate (you will create the other pieces on your own, following the same method).

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

In this case I didn't specify any `color` in the `specific_properties `field of the armor piece because it's already specified in the `custom_armor` property.

Now I create the item texture and I put it inside the `data\resource_pack\assets\itemsadder\textures\item\` folder.

![](<../../../../../.gitbook/assets/image (40).png>)

![](<../../../../../.gitbook/assets/image (42).png>)



## Optifine

{% hint style="info" %}
This method is compatible with any Minecraft version (player must have Optifine installed).
{% endhint %}

{% hint style="warning" %}
You must enable this setting in `config.yml` file of ItemsAdder.&#x20;

And set it to `OPTIFINE`

```yaml
    generate-custom-armors-textures:
      _: "Available values: VANILLA_1_17 or OPTIFINE"
      enabled: true
      mode: OPTIFINE
```
{% endhint %}

Follow the same tutorial [up here](texture.md#creating-the-armor-renderer), the only difference is that (for now) emissive textures are not supported.

This Optifine tutorial will be updated in the future, if you want you can follow the manual way of creating Optifine armors:

{% content-ref url="../../../optifine-only-features/armor-textures.md" %}
[armor-textures.md](../../../optifine-only-features/armor-textures.md)
{% endcontent-ref %}
