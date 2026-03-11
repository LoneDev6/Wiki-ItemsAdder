---
icon: burst
---

# TNT

{% hint style="warning" %}
Requires ItemsAdder 4.0.15+
{% endhint %}

## Custom TNT

To create a custom TNT you have to use the `primeable` settings of the custom block.

### `radius`

Radius of the explosion . Default `4`.

### `damage_multiplier`

Multiplier applied to the vanilla TNT explosion. Default `1`.

### `waterproof`

If the explosion works underwater. Default `true`.

### `incendiary`

If the explosion causes fire to spread around. Default `false`.

### `fuse_ticks`

Amount before the explosion happens. Default `80`.

### `triggers`

Conditions to make the block explode.

#### `tools`

List of tools that can trigger the explosion on interaction.\
Supports wildcard `*` and use `hand` to allow hand to trigger the block.

By default no item can trigger the explosion.

#### `flaming_projectile`

If flaming projectiles can trigger the block (arrows on fire etc.). Default `false`.

#### `redstone`

If redstone signal triggers the block. Default `false`.

#### `fire`

If fire triggers the block. Default `false`.

#### `explosion`

If other explosions trigger the block. Default `false`.

## Example TNT block

```yaml
info:
  namespace: test_tnt
items:
  dark_tnt:
    name: Dark Tnt
    graphics:
      textures:
        down: block/tnt_bottom
        up: block/tnt_top
        south: block/tnt_side
        north: block/tnt_side
        east: block/tnt_side
        west: block/tnt_side
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
        drop_when_mined: true
        primeable:
          radius: 4
          damage_multiplier: 1
          waterproof: false
          incendiary: false
          fuse_ticks: 30
          triggers:
            tools:
            - diamond_*
            flaming_projectile: true # Default false
            redstone: true # Default false
            fire: true # Default false
            explosion: true # Default false

```
