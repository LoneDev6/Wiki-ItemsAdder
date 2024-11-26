---
description: 某些区域/自定义世界中的方块显示异常
icon: block-question
---

# 方块显示异常

{% hint style="success" %}
这些都只是图形上的问题，不会导致复制漏洞或类似问题。
{% endhint %}

## `REAL_NOTE`（音符盒）

在安装 ItemsAdder 之前放置的音符盒可能会显示为自定义方块纹理。

### 如何修复

{% code title="config.yml" %}
```yaml
blocks:
  fix-glitched-blocks:
    enabled: true
    only-new-chunks: false
```
{% endcode %}

## `REAL` 和 `REAL_TRANSPARENT`（蘑菇和紫颂植物）

如果你使用 `REAL` 和 `REAL_TRANSPARENT` 类型来创建自定义方块，这是正常的。
ItemsAdder 使用蘑菇方块和紫颂植物来创建它们。

这是因为游戏在游戏过程中生成它们以创建一些结构（例如：在主世界中的大蘑菇和末地中的紫颂植物），因此它们可能会生成一些特定的方块数据，这些数据会干扰 ItemsAdder 方块。

![](<../.gitbook/assets/image (50) (1) (1) (1).png>)

通常你应该避免使用 `REAL` 自定义方块类型（蘑菇），而使用更好的 `REAL_NOTE` 自定义方块类型，它使用 **音符盒** 来创建自定义方块，因此你不会遇到这个问题，因为它们不会自然生成在原版世界中。

### 如何修复

{% code title="config.yml" %}
```yaml
  fix-glitched-blocks:
    enabled: true
    only-new-chunks: false
```
{% endcode %}

### Paper 上的高级修复

{% code title="config/paper-global.yml" %}
```yaml
block-updates:
  disable-noteblock-updates: true
  disable-tripwire-updates: true
```
{% endcode %}

{% hint style="warning" %}
#### 注意

设置 `disable-tripwire-updates: true` 将完全停止绊线钩的更新。
因此，它可能会导致绊线陷阱不再工作。

设置 `disable-noteblock-updates: true` 将导致相同的行为。
这意味着没有更新。因此，你将无法制作音乐红石电路。
{% endhint %}

## `REAL_TRANSPARENT`（紫颂植物）

### 方块破坏动画错误

这只是一个图形上的问题，无法在 **Spigot** 中修复。
如果你想完全修复它，你必须安装 **Paper**。

{% embed url="https://youtu.be/1HPjKn_vmw8" %}

#### 如何修复

{% code title="config/paper-global.yml" %}
```yaml
block-updates:
  disable-chorus-plant-updates: true
```
{% endcode %}

### 自动掉落物品拾取复制问题

如果你有一个自动掉落物品拾取插件，你可能会遇到一个问题，当这种紫颂植物图形错误发生时，紫颂果会随机添加到你的库存中。

要解决此问题，你必须删除自动掉落物品拾取插件，或要求其开发人员添加一个选项，以禁用某些物品（紫颂果）或某些方块（紫颂植物）的自动拾取。

## **树木方块有时会消失并变成空气方块**

这是在创造模式中的已知问题，因为客户端不会向服务器发送某些数据包。
请尝试在生存模式中进行。

## **`REAL_TRANSPARENT` 方块在水流动时会掉落**

我知道这个错误，我无法在不让你的服务器变成烤箱的情况下修复它。
正如你所知，某些 Minecraft 功能对于你和插件开发人员来说都不是开箱即用的，因此某些功能需要大量的黑客手段来实现，有时并不完全稳定。这些功能之一是自定义方块。

要修复此水流错误，我必须监听水流事件并检查水周围的每个方块是否是自定义方块。这个事件在中型服务器中会被调用数千次，我不想让插件变得沉重，这会导致延迟。
