---
icon: helmet
---

# 3D Helmet

This is a simple help for how to create custom 3D helmet.

!! warning
  Currently it does not support durability checks.

## Complete `yml` configuration

<details>

<summary>Click here to read the configuration file</summary>

```yaml
info:
  namespace: my_items
items:
  my_simple_helmet:
    display_name: my_helmet_simple_helmet
    permission: my_helmet_simple
    behaviour: hat
    resource:
      material: paper
      generate: false
      model_path: helmets/my_threed_helmet
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
```
</details>