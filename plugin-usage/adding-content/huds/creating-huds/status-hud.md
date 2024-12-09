---
description: 创建状态 HUD 的教程
---

# 状态 HUD

## 如何创建你的第一个 HUD（类型：STATUS）

状态 HUD 允许你创建具有一个纹理来表示其填充状态的 HUD。

例如，原版 Minecraft 的**饥饿条**使用的就是这种方法。

ItemsAdder 有一个这种类型 HUD 的示例用法，即**口渴条**。

### 在开始本教程之前，请阅读[前一个教程](frames-hud.md)。

## 创建所需的配置

与[FRAMS HUD](frames-hud.md)的区别在于，你不必为每一个可能的值创建一个纹理。

```yaml
info:
  namespace: myitems
huds:
  thirst_bar:
    enabled: true
    show:
      auto: true
      creative: false
      underwater: false
      riding: false
    type: STATUS
    x_position_pixels: 10
    direction: LEFT
    value:
      player_stat_name: thirst
      start: 10
      min: 0
      max: 10
    images:
      positive: myitems:thirst_bar_positive
      half: myitems:thirst_bar_half
      negative: myitems:thirst_bar_negative

```

```yaml
info:
  namespace: myitems
font_images:
  thirst_bar_positive:
    suggest_in_command: false
    path: font/hud/thirst_bar/positive.png
    y_position: -15
  thirst_bar_negative:
    suggest_in_command: false
    path: font/hud/thirst_bar/negative.png
    y_position: -15
  thirst_bar_half:
    suggest_in_command: false
    path: font/hud/thirst_bar/half.png
    y_position: -15

```

## 创建纹理

![](<../../../../.gitbook/assets/image (49) (1) (1).png>)

如你所见，我创建了 3 个纹理，一个用于**半填充**状态，一个用于**空**状态，一个用于**填充**状态。

## 最终结果

![](<../../../../.gitbook/assets/image (52) (1) (1) (1) (1) (1).png>)
