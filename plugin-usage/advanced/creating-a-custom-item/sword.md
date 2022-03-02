# Sword

{% hint style="danger" %}
### Namespace

If you didn't create your namespace please follow the [namespace tutorial](../basic-concepts/namespace/creating-your-namespace.md).
{% endhint %}

{% hint style="danger" %}
### Resourcepack hosting

Remember to **decide** a **resourcepack hosting** method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar
{% endhint %}

## My first sword

### Creating the swords file

{% hint style="warning" %}
This is an example sword (remember to change `myitems` [namespace ](../basic-concepts/namespace/)to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom swords**:

![](<../../../.gitbook/assets/immagine (16).png>)

In this file (`myswords.yml`) I start creating a simple sword called `mysword`

```yaml
info:
  namespace: myitems
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
To do that you have to put your sword `.png` texture file inside the correct folder.\
In this case your **namespace** is `myitems` so you have to put it here:

![](<../../../.gitbook/assets/immagine (14).png>)

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

![](<../../../.gitbook/assets/immagine (18).png>)

![](<../../../.gitbook/assets/immagine (19).png>)

## If you're using external-host (Dropbox) read here:

Don't forget to upload the new generated .zip file on your hosting (Dropbox)!\
1\. Get it from this folder:

![](<../../../.gitbook/assets/immagine (96) (2) (3) (2).png>)

2\. Upload it to your hosting (Dropbox)\
3\. Open `config.yml` of ItemsAdder and update the `external-host` url with your new link.

```yaml
  self-host:
    enabled: false
    server-ip: '127.0.0.1'
    pack-port: 8163
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

If you have more questions read the full **external-host** tutorial here:

{% content-ref url="../../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](../../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

