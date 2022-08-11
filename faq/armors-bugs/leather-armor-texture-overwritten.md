# Leather armor texture overwritten

## Leather layers keep getting overwritten by ItemsAdder

![](<../../.gitbook/assets/image (45) (1) (1).png>)

ItemsAdder automatically overwrites leather layers textures in order to create custom armors.\
Custom armors are created using colored leather, but the default Minecraft leather armor texture doesn't look like a texture made of minerals.

In some servers you might not need this feature at all and you could prefer to have the vanilla leather armor layers texture instead, or use your own custom one.

## How to disable this?

{% hint style="warning" %}
This requires ItemsAdder 2.5.2+
{% endhint %}

To disable this you just have to set this option in config.yml of ItemsAdder and run `/iazip` again (then [host the pack](../../plugin-usage/resourcepack-hosting/) if needed).

{% code title="config.yml" %}
```yaml
disable-overwrite-leather-armor-layers-textures: true
```
{% endcode %}
