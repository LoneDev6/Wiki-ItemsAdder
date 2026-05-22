---
icon: compact-disc
---

# Music/Jukebox Disc

This page walks through creating a custom music disc: an item that plays a song when you right-click it on a jukebox, just like vanilla discs.

{% tabs %}
{% tab title="Modern (Recommended)" %}
{% hint style="warning" %}
This method requires ItemsAdder **4.0.13** or greater and a Minecraft client on **1.21.4** or newer.
{% endhint %}

## What you'll end up with

* A custom item that goes in a jukebox like any vanilla disc
* A song that plays when the disc is inserted, with the disc name shown in the hotbar
* A sound key (`my_music:faint`) you can also play with `/playsound` or use in any other plugin

## Step 1: Add the song

The disc plays a sound that you register through ItemsAdder. If you haven't done this yet, follow the [Sounds tutorial](sounds.md) to set up your folder and add the `.ogg` file.

When you register the sound, add a `jukebox` block so it can be used as a disc song:

{% code title="contents/my_music/config.yml" %}
```yaml
info:
  namespace: my_music

minecraft_lang_overwrite:
  my_lang_overwrite:
    entries:
      sound.faint: "Linkin Park - Faint"
    languages:
      - ALL

sounds:
  faint:
    path: faint
    settings:
      subtitle: sound.faint
      stream: true              # Recommended for music: streams from disk instead of loading into RAM
    jukebox:
      enabled: true
      description: "Linkin Park - Faint"   # Shown in the hotbar when the disc plays
```
{% endcode %}

* `path: faint` points to `sounds/faint.ogg` inside `contents/my_music/`.
* `subtitle: sound.faint` uses the translation key registered in `minecraft_lang_overwrite`.
* `jukebox.enabled: true` is what makes this sound eligible to be a disc song.
* `jukebox.description` is the text shown in the player's hotbar while the disc is playing.

## Step 2: Create the disc item

Add an `items:` section to the same `config.yml`:

```yaml
items:
  faint_disc:
    name: "<yellow>Faint Disc"
    permission: my_music.faint
    graphics:
      texture: minecraft:item/music_disc_13
    jukebox_disc:
      song: my_music:faint
```

* `jukebox_disc.song` is the **full sound name** (`namespace:sound`). This must match the sound you registered above exactly. A typo here is the most common reason the disc plays nothing.
* `graphics.texture` is the inventory texture. The example above reuses the vanilla `music_disc_13` texture. Skip ahead to [Custom texture](#custom-texture) for your own art.

{% hint style="info" %}
The `jukebox_disc` property is what gives the item its disc behaviour: usable on a jukebox, plays its song, drops with the disc-pickup animation.
{% endhint %}

## Step 3: Apply and test

1. Run `/iazip` to regenerate the resourcepack.
2. Reconnect so the new pack downloads, or have players reconnect.
3. Get the disc with `/iaget my_music faint_disc`.
4. Right-click a jukebox while holding it.

The song plays, the hotbar shows the description, and `/playsound my_music:faint master @s` works too.

## Custom texture

To use your own disc art instead of the vanilla texture:

1. Inside `contents/my_music/`, create the folder `textures/item/`.
2. Place your texture PNG in there. For this example: `faint_linkin_park.png`.

```
contents/
└── my_music/
    ├── config.yml
    ├── sounds/
    │   └── faint.ogg
    └── textures/
        └── item/
            └── faint_linkin_park.png
```

# PLACEHOLDER IMAGE - (File explorer screenshot of contents/my_music/textures/item/ containing the custom disc PNG file)

3. Change the `graphics.texture` field on your item to point at the new file (without the `.png` extension, relative to `textures/`):

```yaml
items:
  faint_disc:
    name: "<yellow>Faint Disc"
    permission: my_music.faint
    graphics:
      texture: item/faint_linkin_park
    jukebox_disc:
      song: my_music:faint
```

4. Run `/iazip` again. Reconnect. The disc now uses your texture.

{% hint style="info" %}
Need a vanilla texture as a reference or starting point? [misode.github.io/assets](https://misode.github.io/assets/) lets you browse and download any vanilla asset.
{% endhint %}

## Troubleshooting

* **The disc plays nothing.** The sound name in `jukebox_disc.song` doesn't match the registered sound. Check namespace and key for typos.
* **The texture is missing/purple.** The file isn't where the config says it is, or you forgot `/iazip` after editing.
* **No subtitle shows.** Either you didn't add a `minecraft_lang_overwrite` entry, or the `settings.subtitle` value doesn't match the translation key.
* **The song cuts off after a few seconds.** Set `stream: true` under `settings:` for long audio files.
{% endtab %}

{% tab title="Old (1.21.3 and lower)" %}
For clients on 1.21.3 or older, use the `music_disc` behaviour with the legacy `resource` graphics:

```yaml
items:
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

`song.name` is the registered sound key. Set it up using the old `sounds.json` method on the [Sounds page](sounds.md).
{% endtab %}
{% endtabs %}
