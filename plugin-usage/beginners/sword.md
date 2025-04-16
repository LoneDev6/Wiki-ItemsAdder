---
icon: sword
---

# My First Sword

{% hint style="danger" %}
### **Resourcepack hosting**

Remember to **decide** a [**resourcepack hosting**](../resourcepack-hosting/) method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar
{% endhint %}

## Creating the swords file config

{% hint style="warning" %}
This is an example sword (remember to change `my_items` namespace to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom swords**:\
`contents/my_items/configs/myswords.yml`

In this file (`myswords.yml`) I start creating a simple sword called `mysword`

{% code title="contents/my_items/configs/myswords.yml" %}
```yaml
info:
  namespace: my_items
items:
  mysword:
    display_name: My Sword
    permission: myitems.mysword
    durability:
      max_custom_durability: 1324
  
```
{% endcode %}

## Item texture

### Creating the texture file

Now the fun part, let's set the sword texture.\
To do that you have to put your sword `.png` texture file inside the correct folder.

In this case your **namespace** is `my_items` so you have to put it here:

`contents/my_items/textures/item/mysword.png`

![](../../.gitbook/assets/image_\(14\).png)

### Applying the texture file to your item

Now open `myswords.yml` file again and add the `resource` part as I did.\
As you can see I set `generate: true` and I set the textures for the item.\
This tells the plugin to generate the 3D model automatically using your texture.

{% code title="contents/my_items/configs/myswords.yml" %}
```yaml
info:
  namespace: myitems
items:
  mysword:
    name: My Sword
    permission: myitems.mysword
    resource:
      material: DIAMOND_SWORD
      generate: true
      texture: item/example_item.png
    durability:
      max_custom_durability: 1324
```
{% endcode %}

## Final part

Now you just need to tell the plugin to load your just added item.\
To do that you have to:

* &#x20;join the server
* &#x20;make sure you accepted the resourcepacks
* &#x20;use the command `/iazip`
* (if you're using **external-host** (**DropBox**) scroll down and follow the instructions)
* &#x20;get the item using `/iaget mysword`

![](<../../.gitbook/assets/immagine (21).png>)

![](<../../.gitbook/assets/immagine (58).png>)

## Resourcepack Hosting Tutorials

{% content-ref url="../resourcepack-hosting/" %}
[resourcepack-hosting](../resourcepack-hosting/)
{% endcontent-ref %}

