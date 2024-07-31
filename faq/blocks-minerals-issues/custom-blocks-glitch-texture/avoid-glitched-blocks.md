---
description: Glitched blocks in some areas/custom worlds
---

# Glitched blocks around the map

## Glitched blocks

{% hint style="info" %}
This is normal if you use `REAL` , `REAL_TRANSPARENT` types to create custom blocks.\
ItemsAdder uses Mushroom Blocks and Chorus Plants to create them.

This happens because the game generates them during gameplay to create some structures (example: big mushrooms in the overworld and chorus plants in the end), so they might spawn with some specific block data, which interfere with ItemsAdder blocks.
{% endhint %}

{% hint style="success" %}
This is only a graphical glitch, this state won't cause duplication bugs or similar.
{% endhint %}

![](<../../../.gitbook/assets/image (50) (1) (1) (1).png>)

Generally you should avoid using `REAL` custom blocks type (mushroom) and use `REAL_NOTE` custom blocks type.\
`REAL_NOTE` uses **Note Blocks** to create custom blocks, so you won't have this issue because they don't naturally generate around the vanilla world.

## How to fix

Open `config.yml` and set this option:

{% code title="config.yml" %}
```yaml
  fix-glitched-blocks:
    enabled: true
    only-new-chunks: false
```
{% endcode %}

## Advanced fix on Paper 1.20.1+

### Disable REAL\_NOTE blocks glitches

```yaml
block-updates:
  disable-noteblock-updates: true
  disable-tripwire-updates: true
```

{% hint style="warning" %}
### Note

Setting `disable-tripwire-updates: true` will completely stop tripwire from updating.\
So it can potentially cause tripwires traps to not work anymore.\

Setting `disable-noteblock-updates: true` will commit into same behaviour.\
Which means NO UPDATES. So you will be unable to do music redstone circuit.
{% endhint %}

## Advanced fix on on Purpur (before 1.20.1)

{% hint style="warning" %}
**This only works on** [**Purpur**](https://purpur.pl3x.net)**.**\
**Spigot** and **Paper** don't have this feature.
{% endhint %}

Enable these options in **`purpur.yml`** configuration:

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
