---
icon: compact-disc
---

# Jukebox Disc

{% tabs %}
{% tab title="Modern (Recommended)" %}
## Create the disc item

Create a new item in your config

```yaml
info:
  namespace: my_sounds
items:
  song_1_disc:
    display_name: "Song 1 Disc"
    graphics:
      texture: item/song_1
    jukebox_disc:
      song: my_sounds:song_1
```

As you can see I added a special property called `jukebox_disc`.\
This allows putting the item into the Jukebox.

### **`name`**

The sound to be played, in this example `my_sounds:song_1`.

### Jukebox song sound

In this case put the sound file in `contents/my_sounds/sounds/song_1.ogg`.

```yaml
info:
  namespace: my_sounds
sounds:
  song_1:
    path: song_1
    settings: # Optional
      subtitle: "Song 1 Disc" # Optional (No default value)
      volume: 1.0 # Optional (Default value: 1.0)
      pitch: 1.0 # Optional (Default value: 1.0)
      weight: 1 # Optional (Default value: 1)
      stream: true # Optional (Default value: false)
      attenuation_distance: 10 # Optional (Default value: 16)
      preload: true # Optional (Default value: false)
    jukebox:
      enabled: true
      description: "Song 1"
      comparator_output: 15 # Optional (Default value: 15)
```

As you can see I set the `jukebox` property. This enables this sound to be used in the new Minecraft 1.21.1+ jukebox component.

### `description`

This property is used to show the music disc name into the player hotbar.
{% endtab %}
{% tab title="Old (1.21.3 and lower)" %}
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

### **`name`**

The sound to be played, in this example `my_sounds:music_disc.cdk_sunday`.
{% endtab %}
{% endtabs %}
