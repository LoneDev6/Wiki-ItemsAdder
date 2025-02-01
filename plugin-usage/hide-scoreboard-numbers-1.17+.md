---
icon: expand-wide
---

# Hide Scoreboard background and numbers

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

{% hint style="warning" %}
* Works only on **Minecraft 1.20.3+** clients
* **Works only on Minecraft 1.20.3+ servers!**
* Doesn't edit the `rendertype_text` shader files and doesn't use any shader
{% endhint %}

{% code title="config.yml" %}
```yaml
effects:
  hide-scoreboard-numbers: true
```
{% endcode %}

{% hint style="info" %}
This option doesn't require `/iazip` to be toggled on/off.\
You can change this value and simply run `/iareload` to apply.
{% endhint %}

### Any client version

{% hint style="warning" %}
* This feature works only on **Minecraft 1.17+** clients
* **Server version doesn't matter**
* Edits the `rendertype_text` shader files
{% endhint %}

{% code title="config.yml" %}
```yaml
effects:
  hide-scoreboard-numbers-old-clients: true
```
{% endcode %}

{% hint style="warning" %}
### **Warning**

This option is permanent and cannot be turned on/off in-game.\
You have to disable it in the `config.yml` and regenerate the pack again to enable/disable it (using `/iazip`).
{% endhint %}

## Hide background

{% hint style="success" %}
* **Works in all Minecraft versions**
* **Doesn't edit** `rendertype_text` **shader to work.**
{% endhint %}

### Plugin: AnimatedScoreboard

{% content-ref url="../compatibility-with-other-plugins/compatible/animatedscoreboard.md" %}
[animatedscoreboard.md](../compatibility-with-other-plugins/compatible/animatedscoreboard.md)
{% endcontent-ref %}

### Plugin: Scoreboard-revision <mark style="color:orange;">(Outdated)</mark>

{% content-ref url="../compatibility-with-other-plugins/compatible/scoreboard.md" %}
[scoreboard.md](../compatibility-with-other-plugins/compatible/scoreboard.md)
{% endcontent-ref %}
