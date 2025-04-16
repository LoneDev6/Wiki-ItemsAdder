---
icon: sheet-plastic
---

# Transparent block

<figure><img src="../../../.gitbook/assets/image (132).png" alt=""><figcaption></figcaption></figure>

To create a transparent block you have to use `REAL_TRANSPARENT` block model type.

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
    specific_properties:
      block:
        placed_model:
          type: REAL_TRANSPARENT
        cancel_drop: false
```

{% file src="../../../.gitbook/assets/test_transparent.zip" %}
