---
icon: crosshairs-simple
---

# HUDs

为了创建自定义 HUDs，ItemsAdder 中提供了两个示例，它们使用了所有可用的功能。

这两个 HUD 分别是魔法值条和口渴值条。\
你可以在**realcraft**和**magiccraft**命名空间中找到它们。

![](<../../../.gitbook/assets/image (30).png>)

## 在世界中禁用/启用 HUDs

你可以轻松地在某些世界中禁用/启用 HUDs，以下是一些示例：

### 在所有世界中启用

要在所有世界中启用它们，只需避免在列表中输入任何世界，不要写入该属性。

```yaml
huds:
  thirst_bar:
    enabled: true
```

### 在所有世界中启用，但不在 `world_the_end` 中启用

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "!world_the_end"
```

注意世界名称前的`!`。 (由于 `.yml` 问题，使用`" "`字符非常重要，否则插件将无法工作 )

### 在名称以 `world_` 或 `adventure` 开头的所有世界中启用

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "world_*
    - "adventure*
```

注意末尾的`*`，这意味着“_**任何**_”。 (请记住，这仅在名称末尾有效)

## 特殊设置（仅限专业用户）

在`config.yml`中有一个与 HUDs 相关的特殊设置。\
此设置允许你将所有 HUDs 重新着色为特定颜色。\
如果你有一个与具有特定颜色的文本交互的自定义着色器，这将非常有用。

{% hint style="warning" %}
需要 Spigot 1.17+ 和 ItemsAdder 3.5.1+
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

更多信息[在这里](https://github.com/PluginBugs/Issues-ItemsAdder/issues/2931)。\
颜色选择器[在这里](https://g.co/kgs/Pvq3jj)。
