---
icon: circle-exclamation
---

# 1.21.11 - Multiple atlases used in model

{% hint style="info" %}
This happens in 1.21.11+ clients
{% endhint %}

`[Worker-Main-108/WARN]: Unable to bake item model: 'minecraft:netherite_sword'`

`java.lang.IllegalStateException: Multiple atlases used in model, expected minecraft:textures/atlas/blocks.png, but also got minecraft:textures/atlas/items.png`

## How to fix

Add the model name (in this case `netherite_sword` ) in `config.yml` and regenerate your pack.

```yml
      fix_1_21_11_plus_atlas_items_models:
        enabled: true
        models:
          - "paper"
          - "potion"
          - "netherite_sword"
```

Another solution is to make sure to avoid mixing up block and item textures for the same model.
