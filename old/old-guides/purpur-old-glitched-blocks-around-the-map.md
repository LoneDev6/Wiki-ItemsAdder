---
icon: block-question
---

# (Purpur) old Glitched blocks around the map

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
