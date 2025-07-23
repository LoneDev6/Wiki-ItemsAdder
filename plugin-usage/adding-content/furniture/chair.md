---
icon: chair
---

# Chair

To create a chair you just have to follow the furniture creation tutorial and add a simple attribute to the furniture to make it "sittable".

Just add the `furniture_sit` behaviour and specify the `sit_height`.

```yaml
behaviours:
  furniture:
    # .....
  furniture_sit:
    sit_height: 0.5
```

### `sit_height`

Height of the sit position

### `opposite_direction`

Default: true. Enable if you want the player rotate of 180 degrees when they sit on this furniture.

### `passenger_front_view_on_sit`

Default: true. Rotate the player to face the front of the furniture when they sit on it.

### `passenger_rotate_body`

Default: false. Rotate the player body while sitting on the furniture.
