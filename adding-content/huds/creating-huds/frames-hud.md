---
description: Tutorial on how to create a FRAMES HUD
---

# Frames HUD

## How to create your first HUD (type FRAMES)

FRAMES HUDs allows you to create HUDs which have a different texture for each of its possible values.

### Creating the configuration file

The first step is to create a configuration file in your **namespace** folder. In this example I'll create a file called `hud.yml`.

{% code title="hud.yml" %}
```yaml
info:
  namespace: myitems
huds:
  example_hud:
    enabled: true
    show:
      auto: true
      creative: true
    type: FRAMES
    x_position_pixels: 120
    value:
      player_stat_name: example_stat
      start: 0
      min: 0
      max: 5
    images:
      frames:
      - myitems:example_hud_0
      - myitems:example_hud_1
      - myitems:example_hud_2
      - myitems:example_hud_3
      - myitems:example_hud_4
      - myitems:example_hud_5
```
{% endcode %}

As you can see I created a configuration file with some settings for the new HUD.

`type: FRAMES` is used to create a HUD which has different texture, one for each value it can have.

`x_position_pixels: 120` is used to make the HUD positioned 120 pixels on the right (starting from the center of the screen).

`value` attribute is used to decide how many values the HUD can have, in this case from 0 to 5, and the start value is 0.

`player_stat_name` is an attribute which attaches the HUD to a custom player attribute which will contain the HUD value between server restarts, it's a custom attribute not a vanilla attribute, name it as you wish.

`images frames` is the list of [font\_images](../../font-images.md) textures, one for each value the HUD can have.

{% hint style="warning" %}
Important: make sure each possible value of your HUD has a valid texture. In this case values are from 0 to 5 so I have 6 images, one for each value of the HUD.
{% endhint %}

### Creating the images

Create a new yml file and add this code inside, it's used to let ItemsAdder know where your HUD images are and how to show them on the screen.

As you can see they have the same names as previously declared in the `hud.yml` file.

{% code title="hud_images.yml" %}
```yaml
info:
  namespace: myitems
font_images:
  example_hud_0:
    suggest_in_command: false
    path: example_hud/0.png
    y_position: -15
  example_hud_1:
    suggest_in_command: false
    path: example_hud/1.png
    y_position: -15
  example_hud_2:
    suggest_in_command: false
    path: example_hud/2.png
    y_position: -15
  example_hud_3:
    suggest_in_command: false
    path: example_hud/3.png
    y_position: -15
  example_hud_4:
    suggest_in_command: false
    path: example_hud/4.png
    y_position: -15
  example_hud_5:
    suggest_in_command: false
    path: example_hud/5.png
    y_position: -15
```
{% endcode %}

Now you have to create one image file for each of the ones we have specified in the previous file.

Create them in this path (as set in the configuration) `contents\myitems\resourcepack\myitems\textures\example_hud\`

![](<../../../../.gitbook/assets/image (186).png>)

Done!

### See the HUD in action

To see the HUD in action you just have to run `/iazip` (and follow the [hosting tutorial](../../../resourcepack-hosting/) if needed) to start seeing the new HUD ingame.

![](<../../../../.gitbook/assets/image (85).png>)

Now try to write this command (change `LoneDev` to your player name) to change the HUD value: `/iaplayerstat write LoneDev example_stat float 2`

![](<../../../../.gitbook/assets/image (193).png>)

As you can see the HUD value changed to 2! Very good!

### Make the HUD value automatically change during time

To make the HUD automatically increase during time you can just use [the triggers](../trigger-value-change.md).

### Make the HUD value change

To make the HUD value change you can just use the previous `write` command anywhere, in items events, in other plugins, everywhere.

## Read HUD values with PAPI placeholders

{% content-ref url="/broken/pages/-MC6haTTm1xdzqW89blp" %}
[Broken link](/broken/pages/-MC6haTTm1xdzqW89blp)
{% endcontent-ref %}
