---
icon: burger-cheese
---

# Consumable

{% tabs %}
{% tab title="Modern (Recommended)" %}
#### Food

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

#### Drink

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
      animation: drink
```
{% endtab %}

{% tab title="Old (1.21.3 and lower)" %}
#### Food

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

#### Drink

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
{% endtab %}
{% endtabs %}
