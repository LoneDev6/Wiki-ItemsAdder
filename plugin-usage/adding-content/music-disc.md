---
icon: compact-disc
---

# Music Disc (old)

{% hint style="warning" %}
This tutorial is suitable for servers that accept clients below 1.21.1.\
If your server accepts 1.21.1 and greater only, you can follow the [new tutorial here](jukebox-disc.md).
{% endhint %}

## Create the sound

{% content-ref url="adding-sounds.md" %}
[adding-sounds.md](adding-sounds.md)
{% endcontent-ref %}

## Create the disc

Create a new item in your config.

```yaml
  music_disc_cdk_sunday:
    display_name: display-name-music_disc_cdk_sunday
    permission: music_disc_cdk_sunday
    lore:
    - '&7Cdk - Sunday'
    resource:
      material: STICK
      generate: true
      textures:
      - item/music_disc_cdk_sunday.png
    behaviours:
      music_disc:
        song:
          name: my_sounds:music_disc.cdk_sunday
          description: Cdk - Sunday
```

As you can see I added a special behaviour called `music_disc`.

### **`name`**&#x20;

The sound to be played, in this example `my_sounds:music_disc.cdk_sunday`.
