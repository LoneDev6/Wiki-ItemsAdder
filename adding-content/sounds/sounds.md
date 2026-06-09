---
icon: volume-low
---

# Sounds

This page covers how to add custom sounds to your resourcepack so you can play them with `/playsound`, ItemsAdder events, music discs, custom block sounds, and any other place that takes a sound name.

{% tabs %}
{% tab title="Modern (Recommended)" %}
{% hint style="warning" %}
The method below requires ItemsAdder **4.0.12** or greater.
{% endhint %}

## 1. Prepare your audio file

Your audio file must be:

* In `.ogg` format
* **Mono**, not stereo. Stereo sounds cannot be positioned in 3D space and will trigger [this Mojang bug](https://bugs.mojang.com/browse/MC-146721) (no falloff over distance)

If your file is in another format (e.g. `.mp3`, `.wav`), convert it using one of:

* [misieur.me/audio-converter](https://misieur.me/audio-converter/)
* [audio.online-convert.com](https://audio.online-convert.com/convert-to-ogg)

Set **Change audio channels** to `Mono`.

# PLACEHOLDER IMAGE - (Screenshot of the audio converter website with the "Change audio channels" option set to Mono, highlighted with a red box)

### Lowering the file size

Audio bitrate has a big impact on resourcepack size. A few minutes of music at high bitrate can add several megabytes per song.

For music and ambient sounds, set **Change constant bitrate** to a lower value (e.g. `96 kbps`). The audio will lose some quality but the file will be much smaller. Short effect sounds usually don't need this.

# PLACEHOLDER IMAGE - (Screenshot showing the bitrate option set to 96 kbps and the resulting smaller file size below)

## 2. Set up the folder structure

Inside `ItemsAdder/contents/`, create a folder for your sounds. The folder name is your **namespace**, so pick something short and unique. In this example we use `my_music`.

Inside that folder, create:

* A `sounds/` folder (this is where the `.ogg` files go)
* A `config.yml` file (this is where you register the sounds)

The result:

```
ItemsAdder/
└── contents/
    └── my_music/
        ├── config.yml
        └── sounds/
            └── faint.ogg
```

# PLACEHOLDER IMAGE - (File explorer screenshot showing contents/my_music/ with config.yml and the sounds subfolder)

Place your `.ogg` file inside `sounds/`. In this example: `sounds/faint.ogg`.

## 3. Register the sound

Open `config.yml` and add the namespace at the top:

```yaml
info:
  namespace: my_music
```

Then add the sound itself:

```yaml
sounds:
  faint:
    path: faint
```

* The key under `sounds:` (`faint`) is the **sound name** you'll use in commands and configs. The full reference is `my_music:faint`.
* `path:` is the filename of your `.ogg` inside the `sounds/` folder, **without the `.ogg` extension**. If you put your file in a subfolder like `sounds/music/faint.ogg`, write `path: music/faint`.

### Adding a subtitle

A subtitle is the small text that shows on the player's screen when the sound plays (matches the `Subtitles` accessibility option). To make the subtitle work in any client language, register it through `minecraft_lang_overwrite`:

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
```

* `entries:` maps a translation key (`sound.faint`) to the text you want shown.
* `languages: [ALL]` applies the text to every client language. Replace with specific language codes (`en_us`, `fr_fr`, etc.) if you want per-language subtitles.
* `settings.subtitle` on the sound points to the translation key.

## 4. Apply the pack

Run `/iazip` ingame (or in console). When players reconnect they will receive the new pack and the sound is ready to use.

Test it with:

```
/playsound my_music:faint master @s
```

You can use the sound name `my_music:faint` anywhere that takes a sound: ItemsAdder events, custom block sounds, other plugins, vanilla commands.

## All available settings

Every field in `settings` is optional.

```yaml
sounds:
  my_sound:
    path: my_folder/my_sound    # Path to the .ogg file (without extension), relative to sounds/
    settings:
      subtitle: sound.my_sound  # Translation key shown on-screen while the sound plays
      volume: 1.0               # Default: 1.0
      pitch: 1.0                # Default: 1.0
      weight: 1                 # Random selection weight when multiple variants exist (default: 1)
      stream: false             # Stream from disk instead of loading into memory. Use for long sounds (default: false)
      attenuation_distance: 16  # Max distance the sound is audible from (default: 16)
      preload: false            # Load the file when the resourcepack loads, not on first play (default: false)
      mono: true                # Force mono on conversion (default: true)
      duration_seconds: 0       # Override the reported sound length, in seconds
      bitrate_quality: 5        # OGG encoder quality, 0 (smallest) to 10 (best). Default: 5
      replace: false            # Replace the vanilla sound with the same key (default: false)
```

{% hint style="info" %}
`stream: true` is recommended for music discs and long ambient tracks. Without it, the entire file is loaded into RAM when the sound plays.
{% endhint %}

## Random variants

A single sound name can play one of several `.ogg` files chosen at random each time it's triggered. There are two ways to set this up.

### Method A: shared settings

List the variant files under `paths`. All variants share the same `settings`:

```yaml
sounds:
  footstep:
    paths:
      - footsteps/step_1
      - footsteps/step_2
      - footsteps/step_3
    settings:
      volume: 0.8
```

### Method B: per-variant settings

Any key that starts with `variant` is treated as a variant block. Each block has its own `path` and can override the shared `settings`:

```yaml
sounds:
  hit:
    settings:
      volume: 1.0
    variant_soft:
      path: hits/soft
      volume: 0.6
      weight: 3       # Picked 3x as often as the other variants
    variant_hard:
      path: hits/hard
      volume: 1.4
      pitch: 0.9
      weight: 1
```

Inside a variant block, settings go at the top level (no `settings:` wrapper). You can override: `volume`, `pitch`, `weight`, `stream`, `attenuation_distance`, `preload`, `duration_seconds`, `bitrate_quality`, `mono`.

## Jukebox properties

Adding a `jukebox` block lets you use this sound as a custom music disc song:

```yaml
sounds:
  faint:
    path: faint
    settings:
      subtitle: sound.faint
    jukebox:
      enabled: true
      description: "Linkin Park - Faint"   # Shown in the hotbar while the disc plays
      comparator_output: 15                # Comparator strength while the disc plays (default: 15)
```

See [Music/Jukebox Disc](sounds/jukebox-disc.md) for the item side.

{% hint style="warning" %}
Jukebox songs require Minecraft **1.21.1** or greater.
{% endhint %}
{% endtab %}

{% tab title="Old (ItemsAdder 4.0.10 and lower)" %}
**Step 1**

* Create the folder `ItemsAdder/contents/my_sounds/resourcepack/my_sounds/sounds/`.
* Put your `.ogg` file inside. You can create subfolders to organize them (`music`, `effects`...).

Example: `contents/my_sounds/resourcepack/my_sounds/sounds/music/song_1.ogg`

**Step 2**

Open the folder `contents/my_sounds/resourcepack/my_sounds/` and create a file called `sounds.json`.

{% code title="contents/my_sounds/resourcepack/my_sounds/sounds.json" %}
```json
{
    "music.song_1": {
        "sounds": [
            "my_sounds:music/song_1"
        ]
    }
}
```
{% endcode %}

* The top-level key (`music.song_1`) is the sound name you'll use ingame.
* `"sounds"` is the list of files that can play under that name. If multiple files are listed, one is picked at random.

**Adding multiple sounds**

Separate each entry with a comma:

```json
{
    "music.song_1": {
        "sounds": ["my_sounds:music/song_1"]
    },
    "music.song_2": {
        "sounds": ["my_sounds:music/song_2"]
    }
}
```

{% hint style="warning" %}
Validate your JSON before testing ingame: [jsonformatter.curiousconcept.com](https://jsonformatter.curiousconcept.com/). A missing comma or bracket breaks the whole file.
{% endhint %}
{% endtab %}
{% endtabs %}
