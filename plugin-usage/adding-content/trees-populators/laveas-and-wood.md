# 树叶和原木

## 创建树叶和原木

为了创建自定义树木，你需要分别为其创建 **树叶** 和 **原木** 方块.

### 根据教程创建自定义方块&#x20;

{% content-ref url="../creating-a-custom-item/blocks/block.md" %}
[block.md](../creating-a-custom-item/blocks/block.md)
{% endcontent-ref %}

例如：我按照教程创建了两个自定义方块: `my_leaves`, `my_log`.

```yaml
info:
  namespace: myitems
items:
  my_leaves:
    display_name: "My Leaves"
    permission: myitems.my_leaves
    resource:
      material: PAPER
      generate: true
      textures:
      - block/my_leaves.png
    specific_properties:
      block:
        hardness: 0.2
        cancel_drop: true
        placed_model:
          type: REAL_TRANSPARENT
          break_particles: ITEM
  my_log:
    display_name: "My Log"
    permission: myitems.my_log
    resource:
      material: PAPER
      generate: true
      textures:
      - block/my_log/log_top.png
      - block/my_log/log.png
      - block/my_log/log.png
      - block/my_log/log.png
      - block/my_log/log_top.png
      - block/my_log/log.png
    specific_properties:
      block:
        hardness: 1.7
        placed_model:
          type: REAL
          break_particles: ITEM
        break_tools_whitelist:
        - _AXE
        - _axe
        - HAND
```
