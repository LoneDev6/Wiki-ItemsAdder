---
描述: 关于如何创建状态值 HUD 的教程
---

# 状态 HUD

## 如何创建一个 HUD（STATUS）

状态HUD 允许你创建使用材质来表示三种不同的状态，分别是： **half** **negative** **positive**
<br>例如：原版中的 **饥饿值** 就使用了相同的方法.
并且 Itemsadder 的预置内容中有该类型HUD的示例 —— "口渴值"，

### 请阅读 [上一个教程](frames-hud.md) 

## 创建所需的配置

与 [动态 HUD](frames-hud.md) 的不同之处在于不需要为每个可能的值创建材质贴图.

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

## 创建材质

![](<../../../../.gitbook/assets/image (49) (1) (1).png>)

如图所示，我创建了 3 个材质，分别用于 **half** **negative** **positive** 三种状态.

## 最终效果

![](<../../../../.gitbook/assets/image (52) (1) (1) (1) (1) (1).png>)
