---
icon: boxes-stacked
---

# Item Model Definitions (ItemsAdderAdditions)

Item model definitions are available through [ItemsAdderAdditions](https://itemsadderadditions.com/en/docs/item-model-definitions).

Item model definitions are the vanilla resource-pack files (added in Minecraft 1.21.4) that map an item to a model and select between models based on item state. IAA generates these JSON files from a YAML section on your custom item and writes them into the resource pack.

```yaml
items:
  my_item:
    item_model_definition:
      model:
        type: model
        model: my_pack:item/my_item
```

{% hint style="warning" %}
Requires server **1.21.4 or higher**. On older versions the section is ignored with a console warning. Run `/iazip` to regenerate the pack.
{% endhint %}

Check the full documentation [here](https://itemsadderadditions.com/en/docs/item-model-definitions).
