# 🇬🇧 🇬🇧 汉化

你可以汉化 ItemsAdder 中的任何内容

## 汉化物品

### 汉化 ItemsAdder 的默认物品

If you want to translate IA default items you can, you just have to copy my dictionary and create your own.\


* open folder plugins\ItemsAdder\data\items\_packs\dictionaries\ia\_default\_items
* copy and paste the file en.yml
* change `dictionary-lang` from `en` to your language identifier (example `fr`)
* translate everything you want
* open config.yml and set `dictionaries-lang` to your language identifier (example `fr`)
* reload the plugin or restart the server

### 为自己新增的物品增添语言文件

To create your own translations for your own items (you won't likely need this, but if you want to share your items online in the future it would be better to make them translatable) you just have to create a new file wherever you want (I'd put it inside the `dictionaries`folder for easier organization, but you can put anywhere inside `items_packs`).

This is how it looks like:

```yaml
info:
  namespace: special_items_lang
  dictionary-lang: "fr"
dictionary:
  display-name-my_sword: épée de saleté
  display-name-my_item: j'aime la baguette
```

And this is how my items file looks like:

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
As you can see I set the `display_name`to "display-name-my\_sword", this will tell IA to replace the text with text from the dictionary, so sword would be named "épée de saleté".
{% endhint %}

{% hint style="warning" %}
You can **skip** the **translation** part and do this directly, **but** this **won't** allow you to easily **translate** items in the **future** if you need to.

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
你只需要在 config.yml zhong 将 lang 设置为zh_cn即可
