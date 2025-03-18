---
icon: earth-americas
---

# 语言

### 当前可用语言

```
GUI: 
    捷克语 cz
    德语 de
    英语 en
    西班牙语 es
    法语 fr
    意大利语 it
    日语 jp
    韩语 ko
    荷兰语 nl
    葡萄牙语 pt
    波兰语 pl
    俄语 ru
    土耳其语 tr
    泰语 th
    简体中文 zh_cn
Items: 
    英语 en
    西班牙语 es
    法语 fr
    希伯来语 he
    意大利语 it
    葡萄牙语 pt
    俄语 ru
    泰语 th
    土耳其语 tr
    简体中文 zh_cn
```

### 如何更改语言？

{% code title="config.yml" %}
```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```
{% endcode %}

## 编辑或创建新语言

**插件的语言文件在此处**：`plugins/ItemsAdder/lang/`

你可以编辑你的语言文件，或者创建一个新的语言文件。

## 编辑或创建物品/资源语言文件

ItemsAdder 使用“字典”来翻译物品名称与描述。\
你可以在你的命名空间中创建字典，并添加相应的键。\
本例中为：`contents/iasurvival/dictionaries/`

### 示例

本例中我创建了两个字典：English 与 Italian。\
然后我在物品名中引用了该键。

{% code title="dictionary_en.yml" %}
```yaml
info:
  namespace: test
  dictionary-lang: en
dictionary:
  name-my-custom-item: This is my custom item
```
{% endcode %}

{% code title="dictionary_it.yml" %}
```yaml
info:
  namespace: test
  dictionary-lang: it
dictionary:
  name-my-custom-item: Il Mio Oggetto Modificato
```
{% endcode %}

{% code title="items.yml" %}
```yaml
items:
  my_custom_item:
    name: name-my-custom-item
    resource:
      material: PAPER
      generate: false
      model_path: minecraft:item/diamond
```
{% endcode %}