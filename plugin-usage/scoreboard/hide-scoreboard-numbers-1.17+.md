# Hide Scoreboard numbers \(1.17+\)

## Scoreboard numbers

Some servers use the scoreboard to show custom data and they don't use the red numbers, they just look awful in most of the servers.

![Without ItemsAdder](../../.gitbook/assets/immagine%20%28137%29.png)

![With ItemsAdder](../../.gitbook/assets/immagine%20%28133%29.png)

## Limitations

{% hint style="danger" %}
### This feature works only on **Minecraft 1.17** client, server version doesn't matter.
{% endhint %}

{% hint style="warning" %}
### Warning:

Using **RED** \(**&c**\) color on the scoreboard may **cause glitches**, **avoid using** the **RED** color on the right of the scoreboard.  
This happens when you have red text near the right part of the scoreboard and you have GUI scale setting set to 1 or 3.
{% endhint %}

![](../../.gitbook/assets/immagine%20%28139%29.png)

## How to hide them?

ItemsAdder **2.4.19** allows you to hide the scoreboard numbers.

To do that you have to enable the feature in `config.yml` and run **/iazip**.

```yaml
effects:
  hide-scoreboard-numbers: true
```

{% hint style="warning" %}
Warning: this option is definitive and cannot be turned on/off in-game. You will have to disable it in the config.yml and run /iazip again if you want to show the numbers.
{% endhint %}

