---
icon: sheet-plastic
---

# Transparent furniture

{% hint style="warning" %}
If you want to make some transparent or semi-transparent textures you have to make sure you based your item on a vanilla item that accepts transparency.\
For example **`WHITE_STAINED_GLASS`**
{% endhint %}

### Example

{% tabs %}
{% tab title="Modern (1.21.4+)" %}
```yaml
material: WHITE_STAINED_GLASS
graphics:
  model: item/your_model
```
{% endtab %}

{% tab title="Legacy (1.21.3 and lower)" %}
```yaml
resource:
  material: WHITE_STAINED_GLASS
  generate: false
  model_path: item/your_model
```
{% endtab %}
{% endtabs %}

![Potion bottles with semi-transparency.](<../../.gitbook/assets/image%20(151).png>)
