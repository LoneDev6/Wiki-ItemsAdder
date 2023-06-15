# Chorus plants (REAL\_TRANSPARENT)

## REAL\_TRANSPARENT blocks break animation in some cases

{% embed url="https://youtu.be/1HPjKn_vmw8" %}

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

### Automatic drop pickup duplication issue

If you have an automatic drops pickup plugin you might experience an issue where chorus fruit gets randomly added to your inventory when this kind of Chorus Plant graphical glitches happen.

To fix this you have to remove the automatic drop pickup plugin or ask its developer to add an option to disable automatic pickup of some items (Chorus Fruit) or from some blocks (Chorus Plant).
