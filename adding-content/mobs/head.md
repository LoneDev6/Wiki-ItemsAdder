---
icon: head-side
---

# Head

{% embed url="http://youtu.be/A20y3lo3Aic" %}

You can specify a bone to be marked as head and rotate automatically when the base entity AI rotates its head.

## Setup

### Configure the head bone

Open your `.iaentitymodel` model file with **Blockbench**.

Select the base bone of the head.

![](<../../../.gitbook/assets/image (92).png>)

Rightclick on the bone and select "**Bone Config**"

![](<../../../.gitbook/assets/image (181).png>)

Check the "**Head**" option and press "**Confirm**".\
You can also decide max angles for X and Y rotation.

![](<../../../.gitbook/assets/image (84).png>)

The head bone is now marked as head, as you can see (the smiley face is the head bone).

![](<../../../.gitbook/assets/image (79).png>)

### Eyes height

Height of the eyes of the entity, used for head look calculations. Default: `1.62`.\
You can set it in the `.yml` configuration file of the entity once exported.

Example:

```yaml
info:
  namespace: vanillaex
entities:
  happy_creeper:
    model_folder: entity/happy_creeper
    type: WOLF
    can_sun_burn: false
    eyes_height: 0.25
```

### Done

Now you have to export the model as usual.

{% content-ref url="advanced-method.md" %}
[advanced-method.md](advanced-method.md)
{% endcontent-ref %}

