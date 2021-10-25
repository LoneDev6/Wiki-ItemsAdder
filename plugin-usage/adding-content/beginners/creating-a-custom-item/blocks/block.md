# Block

## My first custom block

### Creating the blocks file

{% hint style="warning" %}
This is an example block (remember to change `myitems `[namespace ](../../basic-concepts/namespace.md)to the one you want).
{% endhint %}

For example I created a **file **which will contain all my **custom blocks**:

In this file (`blocks.yml`) I start creating a simple block called `red_block`

![](<../../../../../.gitbook/assets/immagine (90).png>)

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      material: PAPER
```

{% hint style="warning" %}
It's very important to use a **non placeable **vanilla **material**. For example **PAPER**.\
If you use a block (like STONE or DIRT) it will result a bit glitchy when placed.
{% endhint %}

## Block textures

### Creating the textures files

Now the fun part, let's set the textures!\
To do that you have to put the `.png` textures file inside the correct folder.\
In this case your **namespace **is `myitems `so you have to put them here:

![](<../../../../../.gitbook/assets/immagine (105).png>)

### Applying the textures files to your item

Now open `blocks.yml `file again and add the `resource` part as I did.\
As you can see I set `generate: true` and I set the textures for the item.\
This tells the plugin to generate the 3D model automatically using your texture.

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
```

### Using different texture for each face

{% hint style="warning" %}
**Important**: keep the correct cardinal directions order as shown in the example.
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block_down.png
        - block/red_block_east.png
        - block/red_block_north.png
        - block/red_block_south.png
        - block/red_block_up.png
        - block/red_block_west.png
```

### Using the same texture for each face

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
```

## Adding the block placing functionality

You have to add the `specific_properties` attribute, like in this example:

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```

{% hint style="info" %}
Click on the bottom link if you want to specify **tools **which can break the block, add **hardness **and **other attributes**.
{% endhint %}

## Final part

Now you just need to tell the plugin to load your just added block.

### If you're using [self-host](../../../../resourcepack-hosting/resourcepack-self-hosting.md) or [auto-external-host](../../../../resourcepack-hosting/automatic-upload-hosting.md):

* run `/iazip`.

### If you're using [external-host](../../../../resourcepack-hosting/resourcepack-on-dropbox.md) (Dropbox) read here:

Don't forget to upload the new generated .zip file on your hosting (Dropbox)!\
1\. Get it from this folder:

![](<../../../../../.gitbook/assets/immagine (96) (2) (3) (2) (1).png>)

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

If you have more questions read the full **external-host **tutorial here:

{% content-ref url="../../../../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](../../../../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

## Getting the block ingame

Run `/iaget red_block` to get the item.

![](<../../../../../.gitbook/assets/immagine (92).png>)

![](<../../../../../.gitbook/assets/immagine (91).png>)

![](<../../../../../.gitbook/assets/immagine (93).png>)
