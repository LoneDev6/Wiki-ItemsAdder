---
描述: 如何创建一个动态HUD
---

# 动态 HUD

## 如何创建您的第一个动态 HUD (type FRAMES)

动态 HUD 允许您创建一个 **每个可能的值都具有不同的材质纹理** 的 HUDs.

### 创建配置文件

第一步, 请在您的对应 [namespace（命名空间）](../../basic-concepts/namespace/) 文件夹中创建配置文件. 如下所示, 我创建了一个 `hud.yml` 文件.

{% code title="hud.yml" %}
```yaml
info:
  namespace: myitems
huds:
  example_hud:
    enabled: true
    show:
      auto: true
      creative: true
    type: FRAMES
    x_position_pixels: 120
    value:
      player_stat_name: example_stat
      start: 0
      min: 0
      max: 5
    images:
      frames:
      - myitems:example_hud_0
      - myitems:example_hud_1
      - myitems:example_hud_2
      - myitems:example_hud_3
      - myitems:example_hud_4
      - myitems:example_hud_5
```
{% endcode %}

我创建了一个配置文件, 其中包含一些关于新 HUD 的设置.

`type: FRAMES` 用于创建具有不同材质纹理的 HUD, 每个材质纹理对应一个值.

`x_position_pixels: 120` is used to make the HUD positioned 120 pixels on the right (从屏幕中心开始偏移).

`value` 属性是决定 HUD 的上限值是多少, 在本例中是 0 到 5, 并且数值是从 0 开始的.

`player_stat_name` is an attribute which attaches the HUD to a custom player attribute which will contain the HUD value between server restarts, it's a custom attribute not a vanilla attribute, name it as you wish.

`images frames` 是 [字符图像](../../font-images/) 的材质列表, HUD 的每个数值可对应一个材质.

{% hint style="warning" %}
重要提示: 请确保 HUD 的每个值都有一个相对应的材质. 在本例中, 我的 HUD 的可能值范围在 0 到 5 之间, 所以我创建了 6 个图像, 以确保每个值都有一个对应图像.&#x20;
{% endhint %}

### 创建图像

创建一个新的 `.yml` 文件并在其中添加此代码, 它用于让 ItemsAdder 知道您的 HUD 图像位置, 以及如何在屏幕上显示.

如下所示, 它们的图像名称与先前在 `hud.yml` 文件中设置的材质名称相同.

{% code title="hud_images.yml" %}
```yaml
info:
  namespace: myitems
font_images:
  example_hud_0:
    suggest_in_command: false
    path: example_hud/0.png
    y_position: -15
  example_hud_1:
    suggest_in_command: false
    path: example_hud/1.png
    y_position: -15
  example_hud_2:
    suggest_in_command: false
    path: example_hud/2.png
    y_position: -15
  example_hud_3:
    suggest_in_command: false
    path: example_hud/3.png
    y_position: -15
  example_hud_4:
    suggest_in_command: false
    path: example_hud/4.png
    y_position: -15
  example_hud_5:
    suggest_in_command: false
    path: example_hud/5.png
    y_position: -15
```
{% endcode %}

现在，您需要为上一个文件中指定的每个图像配置创建一个图形文件.

在此路径中创建它们 (如配置中所示) `ItemsAdder\data\resource_pack\assets\myitems\textures\example_hud\`

![](<../../../../.gitbook/assets/image (50) (1) (1) (1) (1).png>)

完成!

### 查看 HUD 是否正常运行

想查看 HUD 的作情况, 只需要使用命令 `/iazip` (如需要, 请遵循 [资源包托管](../../../resourcepack-hosting/) 的内容) 即可在游戏内查看新的 HUD.

![](<../../../../.gitbook/assets/image (47) (1) (1).png>)

现在, 尝试输入命令 (请将 `LoneDev` 更改为您的玩家名) 来改变 HUD 的数值: `/iaplayerstat write LoneDev example_stat float 2`

![](<../../../../.gitbook/assets/image (40) (1).png>)

如图所示, HUD 的数值被更改成了 2, 这代表一切正常

### 让 HUD 的数值随时间自动更改

想要让 HUD 的数值在随时间内自动增加, 请使用 [触发器](../trigger-value-change.md).

### 更改 HUD 的数值

想要更改 HUD 的数值, 您可以在任何地方、任何事件和插件中使用更改数值的 `write` 命令.（请参考上方的命令）

## 使用 PAPI 占位符读取 HUD 数值

{% content-ref url="../../../placeholderapi.md" %}
[placeholderapi.md](../../../placeholderapi.md)
{% endcontent-ref %}
