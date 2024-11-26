---
description: ItemsAdder 3.3.0 之前的版本
---

# 🗑️ 移除默认内容 v3.2

## ItemsAdder 3.3.0 之前的版本

{% hint style="warning" %}
仅当您使用的是 ItemsAdder 旧版资源包时阅读此处。\
如果您是在 v3.2.0 或之后购买的插件，可以忽略此内容。
{% endhint %}

## 我如何移除所有物品和默认内容？

{% hint style="info" %}
如果您不关心我的默认内容，只想制作自己的物品、方块和其他东西，这很简单！\
请按照本教程操作。
{% endhint %}

### 1. Config.yml

打开插件的 `config.yml` 文件，并将以下内容设置为 **false**。

```yaml
  extract-default-items: false
  extract-default-resources: false
```

### 2. 删除您不需要的文件夹。从以下列表中选择。

#### Twitter 表情符号

`plugins\ItemsAdder\data\items_packs\twitteremojis`\
`plugins\ItemsAdder\data\resource_pack\assets\twitteremojis`

#### 魔法工艺示例

`plugins\ItemsAdder\data\items_packs\magiccraft`\
`plugins\ItemsAdder\data\resource_pack\assets\magiccraft`

#### Minecraft 表情符号

`plugins\ItemsAdder\data\items_packs\mcemojis`\
`plugins\ItemsAdder\data\resource_pack\assets\mcemojis`

#### ItemsAdder 物品

`plugins\ItemsAdder\data\items_packs\itemsadder`\
`plugins\ItemsAdder\data\resource_pack\assets\itemsadder`

#### 示例物品

`plugins\ItemsAdder\data\items_packs\example`\
`plugins\ItemsAdder\data\resource_pack\assets\example`

### 3. 完成更改

运行此命令：`/iacleancache items`

删除这些文件夹：\
`ItemsAdder\storage\cache\tmp\` `ItemsAdder\data\resource_pack\assets\minecraft\models\item\` `ItemsAdder\data\resource_pack\assets\minecraft\blockstates\`

然后运行 `/iazip`

{% hint style="danger" %}
#### 不要删除前面列表中未列出的其他文件夹。

如果删除 minecraft、mcguis 或 mcicons 文件夹，插件的某些部分可能会停止工作。
{% endhint %}
