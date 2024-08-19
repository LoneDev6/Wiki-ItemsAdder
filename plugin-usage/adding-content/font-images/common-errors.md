# Common errors

## I see only a white square

If you see a **white square** make sure the **height** of your image is not **greater** than the `y_position` value you set. \
To **bypass** this limitation you have to create an **image** with **higher height**.

Images must also not have **Uppercase** or **Bad Characters** (eg. `*`, `à`, `ù`, `=`, `$`, space etc.) in the filename or in the folders.

{% hint style="warning" %}
Keep in mind that the **max size** of a font image is **256x256**.\
This is a Minecraft limitation.\
To bypass this (if you're creating a GUI or HUD) you can split your image in multiple font images and merge them shifting them.
{% endhint %}

## When I add a hud others shift of some pixels

Be sure to have each image size set to a multiple of 2.\
Example:\
\- 2x2\
\- 4x4\
\- 6x6\
\- 52x52\
\- etc.

If you still have problems try to increase/decrease the size by 2 until the wrong shift disappears.\
This is an approximation problem I cannot fix.

## My GUI image is colored

You need to specify the **GUI image name** in the name of the GUI\
`title: :myimage: My Custom GUI`
which can be colored by the custom menu plugin automatically.
Be sure to add `&f` before doing :myimage: in the GUI.\
