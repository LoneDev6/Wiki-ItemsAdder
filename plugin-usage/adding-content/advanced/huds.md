# HUDы

В качестве примеров своих HUDов вы можете видеть 2 полоски, которые добавлены плагином ItemsAdder, которые используют все функции этого рода.

Эти два HUDа - полоска маны и полоска жажды.  
Вы можете найти их в папках **realcraft** и **magiccraft**.

![](../../../.gitbook/assets/image%20%2832%29.png)

## Disable/enable huds in worlds

You can easily disable/enable huds in some worlds, here some examples:

## Enable in all worlds

To enable them in all worlds you just have to avoid entering any world in the list, don't write the property at all.

```yaml
huds:
  thirst_bar:
    enabled: true
```

### Enable thirst in all worlds but not in world\_the\_end

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "!world_the_end"
```

Notice the `!` in front of the world name. \(It's very important to use the `" "` characters or plugin won't work \(yml bug\).

### Enable thirst in all worlds of name which starts with `world_` or `adventure`

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "world_*
    - "adventure*
```

Notice the `*` at the end, this means "any". \(keep in mind that this works only at the end of the name\)

