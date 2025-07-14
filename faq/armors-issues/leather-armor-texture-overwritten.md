# Armor leather texture looks like metal

## Leather layers keep getting overwritten by ItemsAdder

![](<../../.gitbook/assets/image (196).png>)

ItemsAdder automatically overwrites leather layers textures in order to create custom armors.\
Custom armors are created using colored leather, but the default Minecraft leather armor texture doesn't look like a texture made of minerals.

In some servers you might not need this feature at all and you could prefer to have the vanilla leather armor layers texture instead, or use your own custom one.

## How to disable this?

To disable this you just have to set this option in config.yml of ItemsAdder and run `/iazip` again (then [host the pack](../../plugin-usage/resourcepack-hosting/) if needed).

{% tabs %}
{% tab title="ItemsAdder 4.0.10+" %}
```yaml
custom_armors_shaders_legacy:
  vanilla:
    overwrite_leather_layers: false
```
{% endtab %}

{% tab title="ItemsAdder 4.0.9+" %}
{% code title="config.yml" %}
```yaml
overwrite_leather_armor_layers_textures: false
```
{% endcode %}
{% endtab %}

{% tab title="Previous ItemsAdder versions" %}
{% code title="config.yml" %}
```yaml
disable-overwrite-leather-armor-layers-textures: true # Set it to true not FALSE!
```
{% endcode %}
{% endtab %}
{% endtabs %}
