---
icon: text-size
---

# 文本格式

{% hint style="warning" %}
由于 Minecract 限制，在 [Minecraft 语言文件](minecraft-language-files.md)中无效。
{% endhint %}

## 如何使用多彩文本

您可以更改文本的颜色，并使用特殊符号指定自定义十六进制颜色。

### 基础

`display_name: '&6TEST'`

```yml
items:
  custom_nbt_item_display_name_classic:
    enabled: true
    display_name: '&6TEST'
    resource:
      generate: false
      model_path: minecraft:item/emerald
      material: PAPER

```

### Minimessage

{% embed url="https://webui.advntr.dev/" %}

{% embed url="https://docs.advntr.dev/minimessage/format.html" %}

```yml
info:
  namespace: git_2224
  dictionary-lang: en
dictionary:
  display-name-test_gradient_dictionary: <b><color:#57ff5c>test</color></b><gradient:#ff00ee:#f79459>Amogus</gradient>
items:
  test_gradient_dictionary:
    display_name: display-name-test_gradient_dictionary
    lore:
      - "&6yo0"
      - "&2yo1"
    resource:
      generate: false
      model_path: minecraft:item/emerald
      material: PAPER
  test_font:
    display_name: <gradient:#ff00ee:#f79459><font:alt>Alt font used for this item</font></gradient>
    lore:
      - "<gradient:#ff00ee:#f79459><font:alt>Alt font used for this item</font></gradient>"
      - "<gradient:#ff00ee:#f79459><font:alt>Alt font used for this item</font></gradient>"
    resource:
      generate: false
      model_path: minecraft:item/emerald
      material: PAPER
```

```
<#FE5A00>Magic Fuel
<red>Magic <green>Fuel
<gradient:#ff00ee:#f79459>Here is a gradient example text!
```

<div><figure><img src="../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image (2) (1) (1).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image (45).png" alt=""><figcaption></figcaption></figure></div>

<div><figure><img src="../.gitbook/assets/example_minimessage_2.png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/example_minimessage_1.png" alt=""><figcaption></figcaption></figure></div>

### 组件

{% embed url="https://minecraft.tools/en/json_text.php" %}

```yaml
items:  
  custom_nbt_item_display_name_component:
    display_name: '{"text\":"TEST", "font": "alt"}'
    resource:
      generate: false
      model_path: minecraft:item/emerald
      material: PAPER
```