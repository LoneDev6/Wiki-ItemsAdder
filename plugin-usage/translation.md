---
icon: earth-americas
---

# 翻译

## 支持翻译的内容：

* 物品名称
* 物品描述
* `/ia` 菜单类别名称

## 翻译物品

### 翻译 ItemsAdder 默认物品

如果你想翻译 IA 默认物品，你可以复制我的字典并创建你自己的。

* 打开文件夹 `plugins/ItemsAdder/contents/` 并搜索 `dictionaries` 文件夹（在每个目录中，例如 `iasurvival/configs/`）
* 复制并重命名文件 `en.yml`
* 将 `dictionary-lang` 从 `en` 更改为你的语言标识符（例如 `fr`）
* 翻译你想要的内容
* 打开 config.yml 并将 `dictionaries-lang` 设置为你的语言标识符（例如 `fr`）
* 重新加载插件或重启服务器

### 为你的新物品创建翻译

要为你自己的物品创建翻译，只需在 `ItemsAdder/contents/` 内的新文件夹中创建新文件（每种语言一个文件），例如 `ItemsAdder/contents/myitems/configs/dictionaries/`。

它看起来像这样：

```yaml
info:
  namespace: special_items_lang
  dictionary-lang: "fr"
dictionary:
  display-name-my_sword: épée de saleté
  display-name-my_item: j'aime la baguette
```

这是我的物品文件的样子：

```yaml
info:
  namespace: special_items
items:
  my_sword:
    display_name: display-name-my_sword
    permission: my_sword
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/my_sword.png
    durability:
      max_custom_durability: 1324
```

{% hint style="info" %}
如你所见，我将 `display_name` 设置为 `display-name-my_sword`，这将告诉 IA 用字典中的文本替换文本，因此剑将被命名为 `épée de saleté`。
{% endhint %}

{% hint style="warning" %}
你可以**跳过**翻译部分，直接这样做，**但是**这**不会**让你在**将来**需要时轻松**翻译**物品。

```yaml
info:
  namespace: special_items
items:
  my_sword:
    display_name: "épée de saleté"
    permission: my_sword
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/my_sword.png
    durability:
      max_custom_durability: 1324
```
{% endhint %}

## 翻译命令和消息

你只需打开 `lang` 文件夹，复制 `en.yml`，然后翻译它并将 `config.yml` 中的 `lang` 设置更改为你的文件名。
