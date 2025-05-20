---
icon: compact-disc
---

# Jukebox Disc

{% hint style="warning" %}
## This requires ItemsAdder 4.0.12 or greater.
{% endhint %}

{% hint style="warning" %}
This tutorial is suitable for servers that accept clients with version greater or equal than 1.21.1.\
If your server accepts 1.21.1 and lower, you can follow the [old tutorial here](music-disc.md).
{% endhint %}

## Create the disc item

Create a new item in your config

```yaml
info:
  namespace: my_sounds
items:
  song_1_disc:
    display_name: sound.song_1
    permission: my_songs.song_1
    resource:
      material: PAPER
      generate: true
      textures:
      - item/song_1.png
    jukebox_disc:
      song: my_sounds:song_1
```

As you can see I added a special property called `jukebox_disc`.\
This allows putting the item into the Jukebox.

### **`name`**&#x20;

The sound to be played, in this example `my_sounds:song_1`.

### Jukebox song sound

In this case put the sound file in `contents/my_sounds/sounds/song_1.ogg`.

```yaml
info:
  namespace: my_sounds
minecraft_lang_overwrite:
  my_lang_overwrite:
    entries:
      sound.song_1: "Song 1 Disc"
    languages:
    - ALL
sounds:
  song_1:
    path: song_1
    settings:
      subtitle: sound.song_1
    jukebox:
      enabled: true
      description: "Love Song"
```

As you can see I set the `jukebox` property. This enables this sound to be used in the new Minecraft 1.21.1+ jukebox component.

I used `minecraft_lang_overwrite` to create a translation for the subtitle and the item name.

{% hint style="info" %}
In case you have 1.21 and lower clients you can use the old [`music_disc`](music-disc.md) behaviour for your items and completely avoid setting the `jukebox` property in the sound, as it's not required by the old behaviour.
{% endhint %}

### `description`

This property is used to show the music disc name into the player hotbar.
