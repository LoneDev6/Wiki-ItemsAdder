---
icon: film
---

# Animated 3D Items

## Creating the animated model

To create the models I use [BlockBench](https://blockbench.net/), it's very easy to use and fast.\
BlockBench [tutorials ](https://www.youtube.com/results?search_query=blockbench+tutorial)are available on YouTube.

{% hint style="danger" %}
You have to make sure to create your model as Java Block/Item model! Don't use Bedrock Model or Entity model!

<img src="../../.gitbook/assets/image_(89) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (9) (1) (1) (1) (19).png" alt="" data-size="original">
{% endhint %}

## Creating a very simple animation

For example I created this model, it's made of some cubes as you can see.

![](../../.gitbook/assets/image_\(52\).png)

Now we want to animate it!\
For example I want to make it float up and down.

### **Save** the **current model** in a temporary folder (anywhere on your PC)

![](../../.gitbook/assets/image_\(53\).png)

![](../../.gitbook/assets/image_\(56\).png)

I saved it as **1.json** inside the temporary folder. This is the first frame of the **animation**.

### Return to **BlockBench** and select all pressing **`CTRL+A`**

![](<../../.gitbook/assets/image_(78) (1).png>)

**Hold left mouse button** while clicking on the <mark style="color:green;">**GREEN**</mark> arrow, **hold `CTRL`** and **move** the mouse **up** a little bit.

![](../../.gitbook/assets/image_\(58\).png)

**Save** the file again but change the name to `2.json`.\
Do the same thing for each frame you want. Each model holds a single frame of your animation.

### Merging the models into a single `.json` animation

Now we have finished creating the needed frames for our animation. Open [this website](https://lonedev6.github.io/animated-models/).\
**Click** on the **icon** to load our `json` frames.

![](../../.gitbook/assets/image_\(68\).png)

Click on **`Choose files...`** and select your `json` files (the frames) and the `png` texture.

![](../../.gitbook/assets/image_\(77\).png)

![](../../.gitbook/assets/image_\(69\).png)

Click on **`LOAD`.**

![](../../.gitbook/assets/image_\(70\).png)

**Click** the **copy** icon (second icon) and **drag** and **drop** the **4 files** to the bottom line.

![](../../.gitbook/assets/image_\(71\).png)

![](../../.gitbook/assets/image_\(72\).png)

You should have them like that.

![](../../.gitbook/assets/image_\(73\).png)

Drag and drop them again but in reverse (3-2, I skipped 1 and 4 because they would be useless for the animation).

![](../../.gitbook/assets/image_\(75\).png)

Press the **play** button (on the **bottom left**) to **preview** the animation

![](https://i.imgur.com/zslbD0G.gif)

Press **`Export`** button (**top right** of the **screen**) and provide a model path, you will use it later to reference the model, then press **`Export`** again.

<figure><img src="../../.gitbook/assets/image (104).png" alt=""><figcaption></figcaption></figure>

Now you will have a **`zip`** file with the animation, **download** it and **open** it.

**Extract** the `models` folder from the `zip` file into your **ItemsAdder** contents folder, for example `contents\myitems\models\`

Set your item configuration like this, to use the idle animation and not the stuck one: `item/cosmetic_mob_soul`

```yaml
info:
  namespace: myitems
items:
  cosmetic_mob_soul:
    display_name: Cosmetic Mob Soul
    permission: my_items
    resource:
      generate: false
      model_path: "item/cosmetic_mob_soul"
```

Use the command `/iazip` (if you're using external-host please follow the [tutorial](../resourcepack-hosting/)carefully).

{% hint style="warning" %}
Do not open the animated model (exported from the website) with BlockBench or any other editing program or it will probably break and stop working.
{% endhint %}

{% hint style="info" %}
You can delete the 1-2-3-4.json files, you don't need them anymore (but you can backup them for future usage), you only need the idle.json file and the png+mcmeta files which are the animated files.
{% endhint %}
