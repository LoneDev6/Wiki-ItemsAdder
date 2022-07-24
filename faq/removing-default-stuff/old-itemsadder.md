---
描述: ItemsAdder 3.2.0 之前的版本
---

# 🗑 旧版本 ItemsAdder

{% hint style="warning" %}
仅当使用 ItemsAdder 旧资源包时阅读该教程。\
如果你使用的版本为3.2.0之前的版本请阅读该教程
{% endhint %}

## 如何删除所有物品和预置内容

{% hint style="info" %}
如果你不想使用预置的内容，想要自己制作.
<br>遵循该教程的步骤与即可：
{% endhint %}

### 1. Config.yml

打开 `config.yml` 文件并将其设置为 **false**

```yaml
  extract-default-items: false
  extract-default-resources: false
```

### 2. 在下列列表中选择不需要的文件夹删除

#### Twitter emojis

`plugins\ItemsAdder\data\items_packs\twitteremojis`\
`plugins\ItemsAdder\data\resource_pack\assets\twitteremojis`

#### Magic craft example

`plugins\ItemsAdder\data\items_packs\magiccraft`\
`plugins\ItemsAdder\data\resource_pack\assets\magiccraft`

#### Minecraft Emojis

`plugins\ItemsAdder\data\items_packs\mcemojis`\
`plugins\ItemsAdder\data\resource_pack\assets\mcemojis`

#### ItemsAdder items

`plugins\ItemsAdder\data\items_packs\itemsadder`\
`plugins\ItemsAdder\data\resource_pack\assets\itemsadder`

#### &#x20;Example items

`plugins\ItemsAdder\data\items_packs\example`\
`plugins\ItemsAdder\data\resource_pack\assets\example`

### 3. 完成

使用指令: `/iacleancache items`

删除下列文件夹：\
<BR>`ItemsAdder\storage\cache\tmp\` 
<BR>`ItemsAdder\data\resource_pack\assets\minecraft\models\item\` 
<BR>`ItemsAdder\data\resource_pack\assets\minecraft\blockstates\`
<BR>使用指令 `/iazip`

{% hint style="danger" %}
## 请勿删除列表中未列出的文件夹

如果删除 minecraft、mcguis 、 mcicons 文件夹，插件的某些功能将会失效
{% endhint %}

