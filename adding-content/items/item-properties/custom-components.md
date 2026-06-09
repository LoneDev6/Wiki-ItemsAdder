---
icon: cube
---

# Custom Components (ItemsAdderAdditions)

Minecraft data components on custom items are available through [ItemsAdderAdditions](https://itemsadderadditions.com/en/docs/components).

Add a `components` section under your item definition and run `/iazip`. IAA applies the components at pack-generation time via the ItemsAdder item modifier hook.

```yaml
items:
  my_item:
    components:
      rarity: RARE
      use_cooldown:
        cooldown: 1.5
```

{% hint style="info" %}
Components are applied when ItemsAdder rebuilds the pack/item data. Run `/iazip` after changing component YAML. Generic NMS components require server **1.21.3 or higher**.
{% endhint %}

Check the full documentation [here](https://itemsadderadditions.com/en/docs/components).
