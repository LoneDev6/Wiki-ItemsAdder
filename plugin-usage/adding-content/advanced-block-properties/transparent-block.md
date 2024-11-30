---
icon: sheet-plastic
---

# 透明方块

<figure><img src="../../../.gitbook/assets/image (4) (1) (1).png" alt=""><figcaption></figcaption></figure>

要创建一个透明方块，你需要使用 `REAL_TRANSPARENT` 方块模型类型。

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
