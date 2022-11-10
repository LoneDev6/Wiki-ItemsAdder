---
description: Hide red scoreboard numbers
---

# Hide Scoreboard numbers (1.17+)

## Scoreboard numbers

Some servers use the scoreboard to show custom data and they don't use the red numbers, they just look awful in most of the servers.

{% tabs %}
{% tab title="After" %}
![With ItemsAdder](<../../.gitbook/assets/immagine (130).png>)
{% endtab %}

{% tab title="Before" %}
![Without ItemsAdder](<../../.gitbook/assets/immagine (131).png>)
{% endtab %}
{% endtabs %}

## Limitations

{% hint style="danger" %}
**This feature works only on Minecraft 1.17 client, server version doesn't matter.**
{% endhint %}

<details>

<summary>&#x3C;--- Warning for ItemsAdder &#x3C; 3.2.5 only</summary>

Using <mark style="color:red;">**RED**</mark> (<mark style="color:red;">**\&c**</mark>) color on the scoreboard may **cause glitches** on old <mark style="color:orange;">**ItemsAdder**</mark> <mark style="color:orange;">versions before</mark> <mark style="color:orange;">**3.2.5**</mark>.\
This happens when you have red text near the right part of the scoreboard and you have GUI scale setting set to 1 or 3.\\

**How to use `&c`**\*\* color without issues?\*\*

You can change your text color from <mark style="color:red;">`&c`</mark> to <mark style="color:red;">`{#ff5546}`</mark>, it's the same color but it won't be bugged.

Another way to fix this is to **add some spaces at the end** of your red text to avoid this.

<img src="../../.gitbook/assets/immagine (140).png" alt="" data-size="original">

</details>

## How to hide them the numbers

Enable the feature in `config.yml` regenerate your resourcepack using `/iazip` (follow the hosting tutorial if you are not using self-host).

```yaml
effects:
  hide-scoreboard-numbers: true
```

{% hint style="warning" %}
### **Warning**

This option is definitive and cannot be turned on/off in-game.\
You will have to disable it in the `config.yml` and regenerate the pack again to disable it.
{% endhint %}
