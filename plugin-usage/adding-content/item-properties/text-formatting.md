# 文本格式化

ItemsAdder 实现了 Minimessage 支持，因此您可以轻松自定义文本。

{% hint style="warning" %}
这需要 ItemsAdder 3.5.1 或更高版本和 LoneLibs 1.0.26 或更高版本。
{% endhint %}

<div>

<figure><img src="../../../.gitbook/assets/example_minimessage_2.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../../.gitbook/assets/example_minimessage_1.png" alt=""><figcaption></figcaption></figure>

</div>

## 在线 Minimessage 文本编辑器

{% embed url="https://webui.advntr.dev/" %}

## Minimessage 教程

{% embed url="https://docs.advntr.dev/minimessage/format.html" %}

## 使用 Minimessage 进行文本格式化的示例

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
