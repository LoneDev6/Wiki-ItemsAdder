# ⬜ Hide Scoreboard background and numbers

## Hide background

### Plugin: AnimatedScoreboard

{% content-ref url="../compatibility-with-other-plugins/compatible/animatedscoreboard.md" %}
[animatedscoreboard.md](../compatibility-with-other-plugins/compatible/animatedscoreboard.md)
{% endcontent-ref %}

### Plugin: Scoreboard-revision <mark style="color:orange;">(outdated)</mark>

{% content-ref url="../compatibility-with-other-plugins/compatible/scoreboard.md" %}
[scoreboard.md](../compatibility-with-other-plugins/compatible/scoreboard.md)
{% endcontent-ref %}

## Hide scoreboard numbers

{% tabs %}
{% tab title="After" %}
![With ItemsAdder](../.gitbook/assets/image\_\(130\).png)
{% endtab %}

{% tab title="Before" %}
![Without ItemsAdder](../.gitbook/assets/image\_\(131\).png)
{% endtab %}
{% endtabs %}

### 1.20.3 and greater clients

{% code title="config.yml" %}
```yaml
effects:
  hide-scoreboard-numbers: true
```
{% endcode %}

{% hint style="info" %}
This option doesn't require `/iazip` to be toggled on/off.\
You can change this value and simply run `iareload` to apply.
{% endhint %}

### 1.20.2 and lower clients

{% hint style="danger" %}
**This feature works only on Minecraft 1.17 client, server version doesn't matter.**
{% endhint %}

{% code title="config.yml" %}
```yaml
effects:
  hide-scoreboard-numbers-old-clients: true
```
{% endcode %}

{% hint style="warning" %}
### **Warning**

This option is definitive and cannot be turned on/off in-game.\
You will have to disable it in the `config.yml` and regenerate the pack again to enable/disable it.
{% endhint %}
