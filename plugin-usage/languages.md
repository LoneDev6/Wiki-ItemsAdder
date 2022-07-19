# 语言文件

### 当前可用语言

```
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
    Thai th

Items: 
    Chinese zh_cn
    Spanish es
    French fr
    Italian it
    Portuguese pt
    Russian ru
    Turkish tr
```

### 如何设置语言

打开 config.yml 来更改语言设置

```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```

## 如何编辑/创建新的语言文件?

The **plugin** messages **language** files are in **this folder**: `plugins\ItemsAdder\lang\`

The **default items** and **menus languages** files are inside **this folder**: `plugins\ItemsAdder\data\items_packs\dictionaries\`

{% hint style="warning" %}
某些附属可能会将其语言文件放置在items\_packs的某些文件夹中，你需要找到该文件来进行更改
{% endhint %}
