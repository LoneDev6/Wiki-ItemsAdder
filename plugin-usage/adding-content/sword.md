---
icon: sword
---

# 剑

{% hint style="danger" %}
**资源包托管**

记得在开始之前**决定**一种[**资源包托管**](../resourcepack-hosting/)方法。\
我**建议**使用**自行托管**，它**更简单**且**更快**，但你也可以使用**Dropbox**等类似服务。
{% endhint %}

## 我的第一把剑

### 创建剑的文件

{% hint style="warning" %}
这是一个示例剑（记得将 `my_items` [命名空间](broken-reference)更改为你想要的）。
{% endhint %}

例如，我创建了一个**文件**，其中包含我所有的**自定义剑**：\
`contents/my_items/configs/myswords.yml`

在这个文件（`myswords.yml`）中，我开始创建一个名为 `mysword` 的简单剑

```yaml
info:
  namespace: my_items
items:
  mysword:
    display_name: My Sword
    permission: mysword
    durability:
      max_custom_durability: 1324
  
```

## 物品纹理

### 创建纹理文件

现在是有趣的部分，让我们设置剑的纹理。\
为此，你需要将剑的 `.png` 纹理文件放在正确的文件夹中。

在这种情况下，你的**命名空间**是 `my_items`，所以你需要将其放在这里：

`contents/my_items/textures/item/mysword.png`

![](../../.gitbook/assets/image\_\(14\).png)

### 将纹理文件应用到你的物品

现在再次打开 `myswords.yml` 文件并添加 `resource` 部分。\
如你所见，我设置了 `generate: true` 并为物品设置了纹理。\
这告诉插件使用你的纹理自动生成 3D 模型。

```yaml
info:
  namespace: myitems
items:
  mysword:
    display_name: My Sword
    permission: mysword
    durability:
      max_custom_durability: 1324
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/example_item.png
```

## 最后部分

现在你只需要告诉插件加载你刚刚添加的物品。\
为此，你需要：\
\- 加入服务器\
\- 确保你接受了资源包\
\- 使用命令 `/iazip`\
\- 如果你使用外部托管（DropBox），请向下滚动并按照说明进行操作。\
\- 使用 `/iaget mysword` 获取物品\
\- 完成！

### 现在获取你的物品

![](../../.gitbook/assets/image\_\(18\).png)

![](../../.gitbook/assets/image\_\(19\).png)

## 如果你使用外部托管（Dropbox、GoogleDrive 等），请阅读这里：

{% content-ref url="../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[dropbox托管](../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

## 如果你使用自托管或其他托管方法，请阅读这里：

{% content-ref url="../resourcepack-hosting/" %}
[资源包托管](../resourcepack-hosting/)
{% endcontent-ref %}
