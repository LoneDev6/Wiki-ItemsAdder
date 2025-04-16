---
icon: crosshairs-simple
---

# HUDs

In order to create custom HUDs you have 2 examples provided in ItemsAdder and they make use of every feature available.

These two HUDs are the mana bar and the thirst bar.\
You can find them in the **realcraft** and in the **magiccraft** namespaces.

![](<../../../.gitbook/assets/image (107).png>)

## Disable/enable huds in worlds

You can easily disable/enable huds in some worlds, here some examples:

### Enable in all worlds

To enable them in all worlds you just have to avoid entering any world in the list, don't write the property at all.

```yaml
huds:
  thirst_bar:
    enabled: true
```

### Enable in all worlds but not in `world_the_end`

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "!world_the_end"
```

Notice the `!` in front of the world name. (It's very important to use the `" "` characters or plugin won't work (`.yml` bug).

### Enable in all worlds of name which starts with `world_` or `adventure`

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "world_*
    - "adventure*
```

Notice the `*` at the end, this means "_**any**_". (keep in mind that this works only at the end of the name)

## Special setting (expert users only)

In  `config.yml` there is a special setting related to HUDs.\
This setting allows you to recolor all HUDs to a specific color.\
This is useful if you have a custom shader which interacts with texts which have a specific color.

{% hint style="warning" %}
Requires Spigot 1.17+ and ItemsAdder 3.5.1+
{% endhint %}

{% code title="config.yml" %}
```yaml
huds:
  enabled: true
  force_color:
    enabled: true
    color: '#FFFFFF'
```
{% endcode %}

More info [here](https://github.com/PluginBugs/Issues-ItemsAdder/issues/2931).\
Color picker [here](https://g.co/kgs/Pvq3jj).
