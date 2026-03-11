---
icon: burger-cheese
---

# Consumables

{% tabs %}
{% tab title="Modern (Recommended)" %}
## Modern method

### Food

```yaml
info:
  namespace: my_items
items:
  my_food:
    name: My Food
    graphics:
      texture: item/my_food
    consumable:
      nutrition: 7
      saturation: 4
```

### Drink

```yaml
info:
  namespace: my_items
items:
  my_drink:
    name: My Drink
    graphics:
      texture: item/my_drink
    consumable:
      nutrition: 1
      saturation: 0
```

#### Optional (thirst)

If you are using the thirst bar from the default assets, you can also add a drink event to increase the thirst bar.

```yaml
info:
  namespace: my_items
items:
  my_drink:
    name: My Drink
    graphics:
      texture: item/my_drink
    consumable:
      nutrition: 1
      saturation: 0
    events:
      drink:
        increment_player_stat:
          name: thirst
          amount: 5
```
{% endtab %}

{% tab title="Old (1.21.3 and lower)" %}
## Classic methods

### Food

```yaml
info:
  namespace: my_items
items:
  my_food:
    enabled: true
    display_name: My Food
    resource:
      material: COOKED_PORKCHOP
      generate: true
      textures:
        - item/my_food
    events:
      eat:
        feed:
          amount: 7
          saturation: 4
```

### Drink

```yaml
info:
  namespace: my_items
items:
  my_drink:
    enabled: true
    display_name: My Drink
    resource:
      material: POTION
      generate: true
      textures:
        - item/my_drink
    specific_properties:
      potion:
        type: WATER
        color: WHITE
    item_flags:
      - HIDE_POTION_EFFECTS
    events:
      drink:
        feed:
          amount: 1
          saturation: 0
```

#### Optional (thirst)

If you are using the thirst bar from the default assets, you can also add a drink event to increase the thirst bar.

```yaml
info:
  namespace: my_items
items:
  my_drink:
    enabled: true
    display_name: My Drink
    resource:
      material: POTION
      generate: true
      textures:
        - item/my_drink
    specific_properties:
      potion:
        type: WATER
        color: WHITE
    item_flags:
      - HIDE_POTION_EFFECTS
    events:
      drink:
        increment_player_stat:
          name: thirst
          amount: 5
        feed:
          amount: 1
          saturation: 0
```
{% endtab %}
{% endtabs %}