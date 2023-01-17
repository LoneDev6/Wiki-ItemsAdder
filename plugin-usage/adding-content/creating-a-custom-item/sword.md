# Sword

{% hint style="danger" %}
**Namespace**

If you didn't create your namespace please follow the [namespace tutorial](../basic-concepts/namespace/).
{% endhint %}

{% hint style="danger" %}
**Resourcepack hosting**

Remember to **decide** a [**resourcepack hosting**](../../resourcepack-hosting/) method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar
{% endhint %}

## My first sword

### Creating the swords file

{% hint style="warning" %}
This is an example sword (remember to change `my_items` [namespace ](../basic-concepts/namespace.md)to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom swords**:\
`ItemsAdder/contents/my_items/configs/myswords.yml`

In this file (`myswords.yml`) I start creating a simple sword called `mysword`

```yaml
info:
  namespace: my_items
items:
  mysword:
    display_name: My Sword
    permission: mysword
    durability:
      max_custom_durability: 1324
  
```

## Item texture

### Creating the texture file

Now the fun part, let's set the sword texture.\
To do that you have to put your sword `.png` texture file inside the correct folder.

In this case your **namespace** is `my_items` so you have to put it here:

`ItemsAdder/contents/my_items/textures/item/mysword.png`

![](../../../.gitbook/assets/image\_\(14\).png)

### Applying the texture file to your item

Now open `myswords.yml` file again and add the `resource` part as I did.\
As you can see I set `generate: true` and I set the textures for the item.\
This tells the plugin to generate the 3D model automatically using your texture.

```yaml
info:
  namespace: myitems
items:
  mysword:
    display_name: My Sword
    permission: mysword
    durability:
      max_custom_durability: 1324
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/example_item.png
```

## Final part

Now you just need to tell the plugin to load your just added item.\
To do that you have to:\
\- join the server\
\- make sure you accepted the resourcepacks\
\- use the command `/iazip`\
\- if you're using external-host (DropBox) scroll down and follow the instructions.\
\- get the item using `/iaget mysword`\
\- DONE!

### Now get your item

![](../../../.gitbook/assets/image\_\(18\).png)

![](../../../.gitbook/assets/image\_\(19\).png)

## If you're using external-host (Dropbox, GoogleDrive etc.) read here:

{% content-ref url="../../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](../../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

## If you are using self-host or another hosting method read here:

{% content-ref url="../../resourcepack-hosting/" %}
[resourcepack-hosting](../../resourcepack-hosting/)
{% endcontent-ref %}
