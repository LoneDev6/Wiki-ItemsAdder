---
icon: text-size
---

# Text Formatting

{% hint style="warning" %}
Doesn't work in [Minecraft language files](../../plugin-usage/plugin-configuration/languages.md) due to a Minecraft limitation.
{% endhint %}

## How to use colored texts

You can change color of text and specify a custom hex color using the special notation.

{% tabs %}
{% tab title="MiniMessage (Recommended)" %}
{% embed url="https://webui.advntr.dev/" %}

{% embed url="https://docs.advntr.dev/minimessage/format.html" %}

```yaml
info:
  namespace: git_2224
  dictionary-lang: en
dictionary:
  display-name-test_gradient_dictionary: <#57ff5c><bold>test</bold><gradient:#ff00ee:#f79459>Amogus
items:
  test_gradient_dictionary:
    name: display-name-test_gradient_dictionary
    lore:
      - "<gold>yo0"
      - "<dark_green>yo1"
    graphics:
      model: minecraft:item/emerald
  test_font:
    name: <gradient:#ff00ee:#f79459><font:alt>Alt font used for this item
    lore:
      - "<gradient:#ff00ee:#f79459><font:alt>Alt font used for this item"
      - "<gradient:#ff00ee:#f79459><font:alt>Alt font used for this item<"
    graphics:
      model: minecraft:item/emerald
```

```
<#FE5A00>Magic Fuel
<red>Magic <green>Fuel
<gradient:#ff00ee:#f79459>Here is a gradient example text!
```

<div><figure><img src="../../.gitbook/assets/image%20(46).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image%20(45).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image%20(235).png" alt=""><figcaption></figcaption></figure></div>

<div><figure><img src="../../.gitbook/assets/example_minimessage_2.png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/example_minimessage_1.png" alt=""><figcaption></figcaption></figure></div>
{% endtab %}

{% tab title="Component" %}
{% embed url="https://minecraft.tools/en/json_text.php" %}

{% embed url="https://www.gamergeeks.net/apps/minecraft/raw-json-text-format-generator" %}

```yaml
items:
  test_emerald:
    name: '{"text\":"TEST", "font": "alt"}'
    graphics:
      model: minecraft:item/emerald
```
{% endtab %}

{% tab title="Legacy" %}
`display_name: '&6TEST'`

```yaml
items:
  test_emerald:
    enabled: true
    name: "<gold>TEST"
    graphics:
      model: minecraft:item/emerald
```
{% endtab %}
{% endtabs %}
