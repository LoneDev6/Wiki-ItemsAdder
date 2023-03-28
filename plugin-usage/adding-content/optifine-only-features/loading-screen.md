# Loading screen

{% hint style="danger" %}
**Optifine** is **not officially supported** by **ItemsAdder**, but if you want to get more customization you can read these tutorials.

#### Please don't ask support about Optifine features. Thanks!
{% endhint %}

## Vanilla loading screen

![](<../../../.gitbook/assets/immagine (16).png>)

## Custom loading screen

![](<../../../.gitbook/assets/immagine (10).png>)

## How to do that?

### Minecraft 1.15 and lower versions

![](<../../../.gitbook/assets/immagine (40).png>)

You can get a [GIMP ](https://www.gimp.org/downloads/)template [here](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojang\_template.xcf).

* Edit my file: `contents/loading_screen/resourcepack/minecraft/textures/gui/title/mojang.png`
* Save the file in the same location

### Minecraft 1.16+

![](<../../../.gitbook/assets/immagine (38).png>)

{% hint style="danger" %}
**Warning**: a known issue is that the logo is bugged when you use `/iazip` or `/iatexture` to apply the texture ingame.\
The logo will be shown with no issue only on server join for some reason, probably an Optifine bug.
{% endhint %}

A little bit difficult:\
basically you have to split your image in half like I did, so you have to know how to use image editing programs (Photoshop, GIMP or Paint.net).\
You can get a [GIMP ](https://www.gimp.org/downloads/)template [here](https://github.com/LoneDev6/SpigotUtilities/blob/master/ItemsAdder/various\_files/mojangstudios\_template.xcf).

* Edit my file: `contents\loading_screen\resourcepack\minecraft\textures\gui\title\mojangstudios.png`
* Save the file in the same location

{% hint style="danger" %}
**IMPORTANT**\
The position of the parts needs to be precise.\
The left side of the texture needs to touch the top-right corner of the canvas while the right side needs to touch the center-left side of the canvas.

This is **always** the case, no matter the size of the actual texture!
{% endhint %}

### How to change the background color (1.16+ only)

Create a new file (or edit the already provided one): `contents/loading_screen/resourcepack/minecraft/optifine/color.properties`

Put this content:

```yaml
###############################################################################
# Resource loading screen
###############################################################################
# Background color
screen.loading=14181c
# Loading bar background color
screen.loading.bar=14181c
# Loading bar outline
screen.loading.outline=303336
# Loading bar foreground color
screen.loading.progress=1f17ce
# Logo blend mode
# Where src, dst, srcA and dstA are one of: 
#   ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR, 
#   SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, SRC_ALPHA_SATURATE
screen.loading.blend=DST_COLOR
```

You can edit the colors using a [HEX color picker](https://www.w3schools.com/colors/colors\_picker.asp)

{% hint style="danger" %}
Do not include the `#` at the start of the color code!
{% endhint %}
