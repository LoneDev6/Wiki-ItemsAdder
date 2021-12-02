---
description: Disable red scoreboard numbers
---

# Hide Scoreboard numbers (1.17+)

## Scoreboard numbers

Some servers use the scoreboard to show custom data and they don't use the red numbers, they just look awful in most of the servers.

![Without ItemsAdder](<../../.gitbook/assets/immagine (131).png>)

![With ItemsAdder](<../../.gitbook/assets/immagine (130).png>)

## Limitations

{% hint style="danger" %}
### This feature works only on **Minecraft 1.17** client, server version doesn't matter.
{% endhint %}

{% hint style="warning" %}
### Warning:

Using <mark style="color:red;">**RED**</mark> (<mark style="color:red;">**\&c**</mark>) color on the scoreboard may **cause glitches**.\
This happens when you have red text near the right part of the scoreboard and you have GUI scale setting set to 1 or 3.\


### How to use <mark style="color:red;">`&c`</mark> color without issues?

You can change your text color from <mark style="color:red;">`&c`</mark> to <mark style="color:red;">`{#ff5546}`</mark>, it's the same color but it won't be bugged.



Another way to fix this is to **add some spaces at the end** of your red text to avoid this.
{% endhint %}

![](<../../.gitbook/assets/immagine (140).png>)

## How to hide them?

ItemsAdder **2.4.19** allows you to hide the scoreboard numbers.

To do that you have to enable the feature in `config.yml` and run **/iazip**.

```yaml
effects:
  hide-scoreboard-numbers: true
```

{% hint style="warning" %}
### Warning

this option is definitive and cannot be turned on/off in-game.\
You will have to disable it in the `config.yml` and run `/iazip` again if you want to show the numbers.
{% endhint %}
