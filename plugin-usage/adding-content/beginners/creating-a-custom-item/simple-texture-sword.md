# 普通材质的剑

{% hint style="danger" %}
### 命名空间

如果你没有创建你自己的命名空间,那么请按照[命名空间](../creating-your-namespace.md)创建.
{% endhint %}

{% hint style="danger" %}

{% endhint %}

Remember to **decide** a **resourcepack hosting** method **before** you **start**.\
I **advise** you to use **self-host** which is **easier** and **faster**, but you can also use **Dropbox** and similar

{% content-ref url="../../../resourcepack-hosting/" %}
[resourcepack-hosting](../../../resourcepack-hosting/)
{% endcontent-ref %}

## 我的第一把自定义剑

### 创建剑的配置

{% hint style="warning" %}
这是一把自定义剑的栗子 (记得要换 `myitems` [命名空间](../basic-concepts/namespace.md)to the one you want).
{% endhint %}

For example I created a **file** which will contain all my **custom swords**:

![](<../../../../.gitbook/assets/immagine (16).png>)

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

![](<../../../../.gitbook/assets/immagine (14).png>)

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
To do that you have to:

* join the server &#x20;
* make sure you accepted the resourcepacks &#x20;
* use the command `/iazip` &#x20;
* if you're using external-host (DropBox) scroll down and follow the instructions. &#x20;
* get the item using `/iaget mysword` &#x20;
* DONE!

### Now get your item

![](<../../../../.gitbook/assets/immagine (18).png>)

![](<../../../../.gitbook/assets/immagine (19).png>)

## If you're using external-host (Dropbox) read here:

Don't forget to upload the new generated .zip file on your hosting (Dropbox)!\
1\. Get it from this folder:

![](<../../../../.gitbook/assets/immagine (96) (2) (3) (2) (9).png>)

1. Upload it to your hosting (Dropbox) &#x20;
2. Open `config.yml` of ItemsAdder and update the `external-host` url with your new link.

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

{% content-ref url="../../../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](../../../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}
