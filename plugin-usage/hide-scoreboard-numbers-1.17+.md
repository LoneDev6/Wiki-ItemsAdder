# ⬜ Hide Scoreboard background and numbers

## Hide scoreboard background

### Plugin: AnimatedScoreboard

{% content-ref url="../compatibility-with-other-plugins/compatible/animatedscoreboard.md" %}
[animatedscoreboard.md](../compatibility-with-other-plugins/compatible/animatedscoreboard.md)
{% endcontent-ref %}

### Plugin: Scoreboard-revision <mark style="color:orange;">(outdated)</mark>

{% content-ref url="../compatibility-with-other-plugins/compatible/scoreboard.md" %}
[scoreboard.md](../compatibility-with-other-plugins/compatible/scoreboard.md)
{% endcontent-ref %}

## Hide scoreboard numbers <mark style="color:red;">(1.17+ only!)</mark>

{% hint style="danger" %}
**This feature works only on Minecraft 1.17 client, server version doesn't matter.**
{% endhint %}

Some servers use the scoreboard to show custom data and they don't use the red numbers, they just look awful in most of the servers.

{% tabs %}
{% tab title="After" %}
![With ItemsAdder](<../.gitbook/assets/immagine (92).png>)
{% endtab %}

{% tab title="Before" %}
![Without ItemsAdder](<../.gitbook/assets/immagine (79).png>)
{% endtab %}
{% endtabs %}

## How to hide them the numbers

Enable the feature in `config.yml` regenerate your resourcepack using `/iazip` (follow the hosting tutorial if you are not using self-host).

```yaml
effects:
  hide-scoreboard-numbers: true
```

{% hint style="warning" %}
### **Warning**

This option is definitive and cannot be turned on/off in-game.\
You will have to disable it in the `config.yml` and regenerate the pack again to enable/disable it.
{% endhint %}
