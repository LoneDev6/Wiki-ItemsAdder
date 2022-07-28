# 🇬🇧 🇬🇧 汉化物品 & 自定义物品的语言文件

你可以汉化 ItemsAdder 中的任何内容

## 汉化物品

### 汉化 ItemsAdder 的默认物品

如果你想汉化 Itemsadder 的默认物品只需要遵循下列操作即可.\


* 打开文件夹 plugins\ItemsAdder\data\items\_packs\dictionaries\ia\_default\_items
* 复制并粘贴语言文件 en.yml，并更改文件名称
* 在文件中翻译你想翻译的
* 将 `dictionary-lang` 中的 `en` 更改为您的语言名称（例如 `fr`）
* 重载插件并重启服务器

### 为自己新增的物品增添语言文件

为你的 自定义物品 创建语言文件（如果你只是准备自己使用，而不去共享该项目，则不需要这些操作. 进行该操作是当你要将其共享至互联网上，可以让其他国家/地区的人对该附属包进行翻译.）
<br>为了方便管理，我将该语言文件放在 `dictionaries` 文件夹中. 实际上你可以放在 `items_packs` 文件夹中的任意位置.

物品语言文件示例配置：

```yaml
info:
  namespace: special_items_lang
  dictionary-lang: "fr"
dictionary:
  display-name-my_sword: épée de saleté
  display-name-my_item: j'aime la baguette
```

物品配置的示例

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

如配置中所示，我将 `display_name` 设置为 `display-name-my_sword`，并在翻译文件中对名称进行配置 ，此时IA会使用 `dictionary` 属性下的配置来对物品进行命名.\
因此在该示例中，这把剑的名称为 **épée de saleté**
{% endhint %}

{% hint style="warning" %}
您可以**跳过** **增添物品的语言文件** 部分直接执行此操作，但直接进行操作无法帮助你在未来更加方便的去 **定义** 物品名称

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

## 汉化 命令和消息

~打开 lang 文件夹并复制并粘贴 en.yml，并将 config.yml 中的 lang 设置为新的汉化文件名~

你只需要打开 config.yml 来更改语言设置

```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```
```
GUI: 
    简体中文 zh_cn
    捷克语 cz
    德语 de
    英语 en
    西班牙语 es
    法语 fr
    意大利语 it
    日语 jp
    韩语 ko
    荷兰语 nl
    波兰语 pl
    葡萄牙语 pt
    俄语 ru
    土耳其语 tr
    泰语 th

Items: 
    简体中文 zh_cn
    西班牙语 es
    法语 fr
    意大利语 it
    葡萄牙语 pt
    俄语 ru
    土耳其语 tr
```