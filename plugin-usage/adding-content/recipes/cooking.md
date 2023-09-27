---
description: This recipes allows your users to cook/smelt materials
---

# Cooking

ItemsAdder allows to add custom furnace recipes for your items, to turn them into something else.

## Example

When adding a cooking recipe, will you need to add the `cooking` section under `recipes`. The name shouldn't matter that much, but it is recommended to use the one of the result.

```yaml
recipes
  cooking:
    cooked_sausage:
      permission: itemsadder.cooked_sausage
      ingredient:
        item: itemsadder:sausage
      machines:
      - FURNACE
      - BLAST_FURNACE
      exp: 1
      cook_time: 200
      result:
        item: itemsadder:cooked_sausage
        amount: 1
```

In this example I created a `cooking` recipe called `cooked_sausage`

* `item` is the item that should be cooked. Both Vanilla Minecraft and custom items can be used through their respective namespaces.
* `machines` is a list of allowed furnace types that can smelt/cook the item. Supported are `FURNACE`, `BLAST_FURNACE` and `SMOKER`
* `exp` defines the amount of experience the player gets when taking out the item.
* `cook_time` is the time it should take for the item to be processed. The time is in ticks, which means that 20 = 1 second.
* `result` contains the `item` and `amount` option, which define what item and how much of it should be returned. Both Vanilla Minecraft and custom items can be used through their respective namespaces.
