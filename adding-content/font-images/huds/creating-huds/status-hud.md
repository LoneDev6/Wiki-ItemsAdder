---
description: Tutorial on how to create a STATUS HUD
---

# Status HUD

## How to create your first HUD (type STATUS)

STATUS HUDs allows you to create HUDs which have one texture to represent their filled state, empty state and half filled state.

For example vanilla Minecraft **hunger bar** uses the same method.

ItemsAdder has an example usage of this type of HUD, the **thirst bar**.

### Please read the [previous tutorial](frames-hud.md) before starting this one.

## Creating the needed configuration

The difference from [FRAMES HUDs](frames-hud.md) is that you don't have to bother creating one texture for each one of the possible values.

```yaml
info:
  namespace: myitems
huds:
  thirst_bar:
    enabled: true
    show:
      auto: true
      creative: false
      underwater: false
      riding: false
    type: STATUS
    x_position_pixels: 10
    direction: LEFT
    value:
      player_stat_name: thirst
      start: 10
      min: 0
      max: 10
    images:
      positive: myitems:thirst_bar_positive
      half: myitems:thirst_bar_half
      negative: myitems:thirst_bar_negative

```

```yaml
info:
  namespace: myitems
font_images:
  thirst_bar_positive:
    suggest_in_command: false
    path: font/hud/thirst_bar/positive.png
    y_position: -15
  thirst_bar_negative:
    suggest_in_command: false
    path: font/hud/thirst_bar/negative.png
    y_position: -15
  thirst_bar_half:
    suggest_in_command: false
    path: font/hud/thirst_bar/half.png
    y_position: -15

```

## Creating the textures

![](<../../../../.gitbook/assets/image (160).png>)

As you can see I had created 3 textures, one for the **half** state, one for the **negative** state and one for the **positive** state.

## Final result

![](<../../../../.gitbook/assets/image (118).png>)
