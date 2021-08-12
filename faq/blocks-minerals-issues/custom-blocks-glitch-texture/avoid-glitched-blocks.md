# 避免出现故障方块

{% hint style="warning" %}
## This only works on [Purpur](https://purpur.pl3x.net/). Spigot and Paper don't have this feature.
{% endhint %}

Enable these options in **purpur.yml** configuration:

* [https://purpur.pl3x.net/docs/Configuration/\#disable-mushroom-updates](https://purpur.pl3x.net/docs/Configuration/#disable-mushroom-updates)
* [https://purpur.pl3x.net/docs/Configuration/\#disable-note-block-updates](https://purpur.pl3x.net/docs/Configuration/#disable-note-block-updates)
* [https://purpur.pl3x.net/docs/Configuration/\#disable-chorus-plant-updates](https://purpur.pl3x.net/docs/Configuration/#disable-chorus-plant-updates)

**Example:**

```yaml
  blocks:
    disable-mushroom-updates: true
    disable-note-block-updates: true
    disable-chorus-plant-updates: true
```

