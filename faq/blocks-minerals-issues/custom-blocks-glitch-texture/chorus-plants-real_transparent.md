# Chorus plants (REAL\_TRANSPARENT)

## REAL\_TRANSPARENT blocks break animation in some cases

{% hint style="info" %}
This is not harmful so you can just ignore it!
{% endhint %}

This is only a graphical glitch and cannot be fixed in normal **Spigot** or **Paper**.\
If you want to completely fix it you have to install **Purpur** and set this option in its `purpur.yml` file.

{% hint style="warning" %}
**This only works on** [**Purpur**](https://purpur.pl3x.net)**.**\
**Spigot** and **Paper** don't have this feature.

This will completely stop chorus plants from updating. So you won't have the chain break effect on them when the first block is broken.

[More info here](https://purpurmc.org/docs/Configuration/disable-chorus-plant-updates)
{% endhint %}

```yaml
  blocks:
    disable-chorus-plant-updates: true
```
