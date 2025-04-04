---
icon: arrows-maximize
---

# Furniture size

{% hint style="warning" %}
**It's advised to use the small furniture (small Armor Stand)**
{% endhint %}

## How can I adjust the furniture position when placed?

If you want to adjust it you just have to use Blockbench as usual and:

![](../../../.gitbook/assets/image_\(8\).png)

1. click on **display** on the right
2. click on the **armorstand icon** on the left
3. click on the **smile face** (**head**) on the left
4. **move** your model on the armorstand **bottom** (it's the **ground**)

### Too small furniture

If your furniture is **too small** but you want it **bigger** and with bigger **hitbox** just set this to **false**.\
If you instead want a **small furniture** with small hitbox just set it to true.

{% hint style="info" %}
Note: hitbox is not limited, you can set a bigger hitbox which will be unrelated to the entity itself.

Set the hitbox attributes:

```yaml
    hitbox:
      height: 2
      length: 3
      width: 3
```
{% endhint %}

{% tabs %}
{% tab title="Big furniture" %}
```yaml
behaviours:
  furniture:
    small: false
```
{% endtab %}

{% tab title="Small furniture" %}
```yaml
behaviours:
  furniture:
    small: true
```
{% endtab %}
{% endtabs %}

#### and set this is BlockBench

{% tabs %}
{% tab title="Big furniture" %}
![](../../../.gitbook/assets/image_\(9\).png)
{% endtab %}

{% tab title="Small furniture" %}
![](../../../.gitbook/assets/image_\(10\).png)
{% endtab %}
{% endtabs %}
