# 语言文件

## 目前可用的语言

```text
GUI: 
Chinese zh_cn
Czech cz
German de
English en
Spanish es
French fr
Italian it
Japanese jp
Korean ko
Dutch nl
Polish pl
Portuguese pt
Russian ru
Turkish tr

物品: 
Chinese zh_cn
Spanish es
French fr
Italian it
Portuguese pt
Turkish tr
```

## 如何改变语言?

打开config.yml,修改语言设置.

```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```

## How to edit or to create new languages?

The **plugin** messages **language** files are in **this folder**: `plugins\ItemsAdder\lang\`

The **default items** and **menus languages** files are inside **this folder**: `plugins\ItemsAdder\data\items_packs\dictionaries\`

{% hint style="warning" %}
Some addons may put their dictionary files inside other folders inside items\_packs, you have to search for them.
{% endhint %}

