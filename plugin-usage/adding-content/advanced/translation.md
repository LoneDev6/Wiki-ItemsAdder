# 语言文件

你可以在ItemsAdder中翻译任何东西.只要你有时间.

## 翻译物品

### 给默认物品翻译

如果你想翻译IA的默认物品,你只需要复制我的初始翻译并创建你自己的翻译文件.

* 打开文件路径 plugins\ItemsAdder\data\items\_packs\dictionaries\ia\_default\_items
* 复制并粘贴该文件 en.yml
* 将`dictionary-lang`的`en`改为你的语言名称 \(例如 `fr`\)
* 翻译你想要的内容.
* 打开config.yml,将`dictionaries-lang`设置为你的语言名称 \（例如`fr`\）
* 重新加载插件或重新启动服务器.

### 为你的新物品添加你自己的翻译

要为你自己的物品添加自己的翻译 (你可能不会这么做,但是如果你想将来在网上分享你的物品,还是使物品可被翻译最好),你只需在你配置文件里创建一个新的文件(我会把它放在`dictionaries`文件里,以便各位寻找,但你也可以放在`items_packs`里的任何地方)

它看起来是这样的:

```yaml
info:
  namespace: special_items_lang
  dictionary-lang: "fr"
dictionary:
  display-name-my_sword: épée de saleté
  display-name-my_item: j'aime la baguette
```

这是我的物品文件的样子:

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
如你所看到的,我把`display_name`设置为 "display-name-my\_sword",这在告诉Ia用语言文件中的文字替换,所以剑会被命名为"épée de saleté"
{% endhint %}

{% hint style="warning" %}
你可以直接**跳过翻译**部分,但是这样做的话,在将来需要翻译时,你就不能轻松的**翻译**物品.
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

## 翻译命令和信息

你只需要打开lang文件夹,复制并粘贴en.yml,然后翻译它,并将config.yml中的lang设置改为你的文件名.

