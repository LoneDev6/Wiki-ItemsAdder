# Head

## Custom entity head rotation

{% embed url="http://youtu.be/A20y3lo3Aic" %}

You can specify a bone to be marked as head and rotate automatically when the base entity AI rotates its head.

## Limitations

{% hint style="warning" %}
Head bone rotation works only if the mob head is not too far from the center of the body.\
This might be fixed in the future, but for now there is no solution.

Example: dragons and similar entities can't have their head rotated automatically to look at the target.
{% endhint %}

## Setup

### Configure the head bone

Open your `.iaentitymodel` model file with **Blockbench**.

Select the base bone of the head.

![](<../../../../.gitbook/assets/image (93) (1).png>)

Rightclick on the bone and select "**Bone Config**"

![](<../../../../.gitbook/assets/image (63) (1).png>)

Check the "**Head**" option and press "**Confirm**".\
You can also decide max angles for X and Y rotation.

![](<../../../../.gitbook/assets/image (84).png>)

The head bone is now marked as head, as you can see (the smiley face is the head bone).

![](<../../../../.gitbook/assets/image (51) (1).png>)

### Configure eyes height (optional)

Create a new bone, you can call it like you prefer, for example `eyes_height`.

![](<../../../../.gitbook/assets/image (59) (1) (1).png>)

Place the bone between the entity eyes.

![](<../../../../.gitbook/assets/image (45) (1).png>)

Rightclick on the bone and select "**Bone Config**", then select "Eyes height".

![](<../../../../.gitbook/assets/image (88) (1).png>)

### Done

Now you have to export the model as usual.

{% content-ref url="creation.md" %}
[creation.md](creation.md)
{% endcontent-ref %}

