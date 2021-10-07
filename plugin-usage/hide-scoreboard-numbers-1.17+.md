# Hide Scoreboard numbers \(1.17+\)

## Scoreboard numbers

Some servers use the scoreboard to show custom data and they don't use the red numbers, they just look awful in most of the servers.

![Without ItemsAdder](../.gitbook/assets/immagine%20%28137%29.png)

![With ItemsAdder](../.gitbook/assets/immagine%20%28133%29.png)

{% hint style="danger" %}
### This feature works only on **Minecraft 1.17** client, server version doesn't matter.
{% endhint %}

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

