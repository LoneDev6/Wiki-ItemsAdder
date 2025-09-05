---
icon: car
---

# Vehicles

You can create simple limited vehicles to enhance the gameplay. These are pretty simple vehicles.

```yaml
info:
  namespace: my_vehicles
items:
  shopping_cart:
    enabled: true
    display_name: Shopping Cart
    permission: my_vehicles.ground.shopping_cart
    resource:
      material: PAPER
      generate: false
      model_path: item/shopping_cart
    behaviours:
      vehicle:
        sit_height: 2
        step_height: 0.1
        hitbox:
          length: 2
          width: 2.3
          height: 1
        speed:
          drive: 0.3
          jump: 0.3
        fuel:
          start: 60
          max: 300
          items:
            banana: 30
            pear: 30
        smoke:
          amount: 1
```

The default example pack contains some example vehicles, [download it here](https://github.com/ItemsAdder/OtherPacks/releases).

{% embed url="https://www.youtube.com/watch?v=_pEd_25zINg" %}

## Properties

#### `sit_height`

Height of the seat, where the player sits.

#### `step_height`

The max height the vehicle can auto-jump.

#### `hitbox`

The hitbox of the vehicle.

#### `speed`

The speed of the vehicle.

#### `fuel`

The items accepted by the vehicle (on interaction) to refill the fuel indicator.

#### `smoke`

The smoke to be spawned behind the vehicle.

## Creating advanced vehicles

You can create some advanced vehicles using the new entities system, like multiple seats, animations, sounds, etc.

Read more here:

{% content-ref url="mobs/" %}
[mobs](mobs/)
{% endcontent-ref %}

### Example advanced vehicles pack

You can download an interesting advanced vehicles pack [here](https://www.spigotmc.org/resources/wheelchairs-rideable-wheelchairs-for-itemsadder.127743/).

{% embed url="https://www.youtube.com/watch?v=XtcMQM_xYgU" %}
