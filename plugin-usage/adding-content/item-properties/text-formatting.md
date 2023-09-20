# Text formatting

ItemsAdder implements Minimessage support so you can easily customize your texts.

{% hint style="warning" %}
This requires ItemsAdder 3.5.1 or greater and LoneLibs 1.0.26 or greater.
{% endhint %}

<div>

<figure><img src="../../../.gitbook/assets/example_minimessage_2.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../../.gitbook/assets/example_minimessage_1.png" alt=""><figcaption></figcaption></figure>

</div>

## Online Minimessage text editor

{% embed url="https://webui.advntr.dev/" %}

## Minimessage tutorials

{% embed url="https://docs.advntr.dev/minimessage/format.html" %}

## Examples of text formatting using Minimessage

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
