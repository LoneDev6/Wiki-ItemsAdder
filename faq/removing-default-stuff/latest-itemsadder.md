---
描述: 最新版本的 ItemsAdder 如何删除预置内容
---

# 🗑 最新版本的 ItemsAdder 如何删除预置内容

## 如何删除所有的预置内容

{% hint style="info" %}
如果你不想使用预置的内容，想要自己制作.
<br>遵循该教程的步骤与即可：
{% endhint %}

### 删除配置文件

打开 `plugins/ItemsAdder/data/items\_packs/` 文件夹并删除不需要的文件夹/文件

### 删除 模型,材质以及其他资源

打开 `plugins/ItemsAdder/data/resource\_pack/data/` 文件夹并删除不需要的文件夹/文件

### 完成

使用指令: `/iacleancache items`

删除这些文件夹：\
`ItemsAdder\storage\cache\tmp\` `ItemsAdder\data\resource_pack\assets\minecraft\models\item\` `ItemsAdder\data\resource_pack\assets\minecraft\blockstates\`

最后使用指令 `/iazip`

