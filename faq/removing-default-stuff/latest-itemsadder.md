---
icon: trash-can
---

# 移除默认内容

{% hint style="info" %}
如果你没有按照[首次安装](../../first-install.md)教程中的可选步骤操作，你不应该有任何默认资源。
{% endhint %}

按照本教程操作，只保留你自己的物品、方块和其他内容，而不包含任何 ItemsAdder 的内容。

## 如何移除默认资源

打开 `plugins/ItemsAdder/contents/` 文件夹并删除你不需要的文件夹/文件。

运行此命令：`/iacleancache items`。

然后运行 `/iazip`。

## 移除内部资源（不推荐）

如果你想完全移除任何已提供的资源，你必须禁用此设置。

{% code title="config.yml" %}
```yaml
extract_internal_utility_assets: true
```
{% endcode %}

打开 `plugins/ItemsAdder/contents/` 文件夹并删除你不需要的文件夹/文件。

然后运行 `/iazip`。

{% hint style="warning" %}
如果你删除了 ItemsAdder 的内部资源，不要报告视觉错误，有些是插件用来显示 GUI 和其他内容的。
{% endhint %}
