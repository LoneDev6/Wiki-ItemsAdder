---
icon: cube
---

# Disable Blocks

## Completely disable blocks

{% hint style="warning" %}
Requires ItemsAdder 4.0.13+
{% endhint %}

If you do not use custom blocks you can optimize the plugin by disabling them.

{% code title="config.yml" %}
```yaml
blocks:
  custom:
    note: false
    mushroom: false
    chorus: false
    wire: false
    fire: false
  worlds: []
```
{% endcode %}
