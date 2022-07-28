# 🔋 HUDs

In order to create custom HUDs you have 2 examples provided in ItemsAdder and they make use of every feature available.

These two HUDs are the mana bar and the thirst bar.\
You can find them in the **realcraft** and in the **magiccraft** namespaces.

![](<../../../.gitbook/assets/image (30).png>)

## 在世界中 启用/禁用 HUD

You can easily disable/enable huds in some worlds, here some examples:

### 在所有世界中启用

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

Notice the `!` in front of the world name. (It's very important to use the `" "` characters or plugin won't work (yml bug).

### 在所有以 `world_` 、 `adventure` 为开头的世界中启用口渴值

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "world_*
    - "adventure*
```

注意：在末尾的 `*`，代表"全部".（该含义仅适用于名称的末尾.）
