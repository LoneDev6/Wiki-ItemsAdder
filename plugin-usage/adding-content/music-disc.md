---
icon: compact-disc
---

# Music disc

### Step 1 - create the sound

{% content-ref url="adding-sounds.md" %}
[adding-sounds.md](adding-sounds.md)
{% endcontent-ref %}

### Step 2 - create the disc

Create a new item in your namespace, this will be your music disc:

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

As you can see I added a special behaviour called `music_disc`.\
This will tell Spigot server that this item is a custom music disc.\
**name** is the sound to be played, you added it in the [step 1](music-disc.md#step-1-create-the-sound).
