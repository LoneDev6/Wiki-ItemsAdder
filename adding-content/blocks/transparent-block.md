---
icon: sheet-plastic
---

# Transparent Block

<figure><img src="../../.gitbook/assets/image (132).png" alt=""><figcaption></figcaption></figure>

To create a transparent block you have to use `REAL_TRANSPARENT` block model type.

{% tabs %}
{% tab title="Modern (1.21.4+)" %}
```yaml
info:
  namespace: test_transparent
items:
  test_block_transparent:
    enabled: true
    name: test_block_transparent
    graphics:
      texture: test
    behaviours:
      block:
        placed_model:
          type: REAL_TRANSPARENT
        cancel_drop: false
```
{% endtab %}

{% tab title="Legacy (1.21.3 and lower)" %}
```yaml
info:
  namespace: test_transparent
items:
  test_block_transparent:
    enabled: true
    display_name: test_block_transparent
    resource:
      generate: true
      textures:
        - test
      material: PAPER
    behaviours:
      block:
        placed_model:
          type: REAL_TRANSPARENT
        cancel_drop: false
```
{% endtab %}
{% endtabs %}

{% file src="../../../.gitbook/assets/test_transparent.zip" %}
