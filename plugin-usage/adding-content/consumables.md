---
icon: burger-cheese
---

# Consumables

{% hint style="danger" %}
**Resourcepack hosting**

Remember to **decide** a [**resourcepack hosting**](../resourcepack-hosting/) method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar methods.
{% endhint %}

## Classic methods

{% hint style="warning" %}
Minecraft 1.21.1 and lower; ItemsAdder 4.0.7 and lower
{% endhint %}

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

## Modern method

{% hint style="warning" %}
Minecraft 1.21.4+ and ItemsAdder 4.0.8+.

Use this method only if your server accepts 1.21.2 clients and nothing below! Otherwise it won't work.
{% endhint %}

### Food

```yaml
info:
  namespace: my_items
items:
  my_food:
    enabled: true
    display_name: My Food
    resource:
      material: PAPER
      generate: true
      textures:
        - item/my_food
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
    enabled: true
    display_name: My Drink
    resource:
      material: PAPER
      generate: true
      textures:
        - item/my_drink
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
    enabled: true
    display_name: My Drink
    resource:
      material: PAPER
      generate: true
      textures:
        - item/my_drink
    consumable:
      nutrition: 1
      saturation: 0
    events:
      drink:
        increment_player_stat:
          name: thirst
          amount: 5
```
