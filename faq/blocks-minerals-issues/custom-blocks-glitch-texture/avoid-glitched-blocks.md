---
description: Glitched blocks in some areas/custom worlds
---

# Avoid glitched blocks

## Glitched blocks

{% hint style="info" %}
This is only a graphical glitch, this state won't cause duplication bugs or similar.
{% endhint %}

![](<../../../.gitbook/assets/image (50) (1) (1) (1).png>)

## Fix on Spigot/Paper

{% hint style="info" %}
This is normal if you use REAL type to create custom blocks.\
ItemsAdder uses mushroom blocks to create them.
{% endhint %}

Open `config.yml` and set this option:

{% code title="config.yml" %}
```yaml
  fix-glitched-blocks:
    enabled: true
    only-new-chunks: false
```
{% endcode %}

### Another solution

Another solution is to avoid using `REAL` custom blocks type (mushroom) and use `REAL_NOTE` custom blocks type.\
`REAL_NOTE` uses Noteblocks to create custom blocks, so you won't have this issue because they don't naturally generate around the vanilla world.

## Optional settings on Purpur

{% hint style="warning" %}
**This only works on** [**Purpur**](https://purpur.pl3x.net)**.**\
**Spigot and Paper don't have this feature.**
{% endhint %}

Enable these options in **purpur.yml** configuration:

* [https://purpurmc.org/docs/Configuration/disable-mushroom-updates](https://purpurmc.org/docs/Configuration/disable-mushroom-updates)
* [https://purpurmc.org/docs/Configuration/disable-note-block-updates](https://purpurmc.org/docs/Configuration/disable-note-block-updates)
* [https://purpurmc.org/docs/Configuration/disable-chorus-plant-updates](https://purpurmc.org/docs/Configuration/disable-chorus-plant-updates)

{% hint style="warning" %}
Note: `disable-chorus-plant-updates: true` will completely stop chorus plants from updating. So you won't have the chain break effect on them when the first block is broken.
{% endhint %}

**Example:**

```yaml
  blocks:
    disable-mushroom-updates: true
    disable-note-block-updates: true
    disable-chorus-plant-updates: true
```
