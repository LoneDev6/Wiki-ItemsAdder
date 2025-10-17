---
icon: volume-low
---

# Sounds

## Converting files from `MP3` to `OGG`

Use [this website](https://misieur.me/audio-converter/) to convert your file (`mp3`, `wav`...) to `ogg` (alternative [here](https://audio.online-convert.com/convert-to-ogg)).

{% hint style="warning" %}
#### IMPORTANT

Remember to set "Channels" to `Mono` or you will experience [audio problems](https://bugs.mojang.com/browse/MC-146721)
{% endhint %}

## Creating the sound

### New Method

{% hint style="warning" %}
### This requires ItemsAdder 4.0.12 or greater. Scroll down for older versions.
{% endhint %}

#### Simple sound

Put the sound file in `contents/my_sounds/sounds/sound_1.ogg`.

```yaml
info:
  namespace: my_sounds
minecraft_lang_overwrite:
  my_lang_overwrite:
    entries:
      sound.sound_1: "Sound 1"
    languages:
    - ALL
sounds:
  sound_1:
    path: bruh
    settings:
      subtitle: sound.sound_1
```

#### Jukebox song (Minecraft 1.21.1 and greater)

{% content-ref url="jukebox-disc.md" %}
[jukebox-disc.md](jukebox-disc.md)
{% endcontent-ref %}

### Old Method (ItemsAdder 4.0.10 and lower)

<details>

<summary>Click to read the old method</summary>

**Step 1**

* create a new folder `ItemsAdder/contents/my_sounds/resourcepack/my_sounds/sounds/`\
  (or use yours if you already have one)
* put your **`.ogg`** file in there.\
  You can also create more folders inside `sounds` to organize your sounds.\
  For example `effects`, `music` etc...

I have a file named **`song_1.ogg`** and I put it into a new `music` folder.\
So now I have `contents/my_sounds/resourcepack/my_sounds/sounds/music/song_1.ogg`

**Step 2**

* open the folder `contents/my_sounds/resourcepack/my_sounds/`
* create a new file named `sounds.json` (or open it if you already created it)
* this file is a `.json` file so you MUST write it correctly or it won't work.

To add your sound into the file you just have to do this:

{% code title="contents/my_sounds/resourcepack/my_sounds/sounds.json" %}
```javascript
{
	"music.song_1":{
		"sounds":[
			"my_sounds:music/song_1"
		]
	}
}
```
{% endcode %}

**Now I explain each part of the code I wrote**

This is the sound name. You will use it in every part of the plugin and also in Minecraft vanilla [/playsound ](https://www.digminecraft.com/game_commands/playsound_command.php)command.

```javascript
"music.song_1":{
```

This is the list of sound files Minecraft will play when you call the sound name.\
Minecraft will play one of these sounds randomly (only if you set more than one sound).

{% hint style="warning" %}
Keep in mind that you have to change `my_sounds` to your own namespace name if it's different!
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">"sounds":[
<strong>    "my_sounds:music/song_1"
</strong>]
</code></pre>

For example if you want to have random sounds for the same sound name you just have to create multiple `.ogg` files and put them like this:

```javascript
"sounds":[
    "my_sounds:music/song_1_variant_1",
    "my_sounds:music/song_1_variant_2",
    "my_sounds:music/song_1_variant_3"
]
```

**How can I add multiple sounds in the `sounds.json` file?**

It's easy, the next time you want to add a sound you just have to add a comma at the end, like this.\
(I'm referring to line 6 comma)

```javascript
{
    "music.song_1":{
        "sounds":[
            "my_sounds:music/song_1"
        ]
    },
    "music.song_2":{
        "sounds":[
            "my_sounds:music/song_2"
        ]
    }
}
```

{% hint style="warning" %}
If you want to be sure not to make mistakes use this website to check if your `sounds.json` file is good or has errors: [https://jsonformatter.curiousconcept.com/](https://jsonformatter.curiousconcept.com/)
{% endhint %}

</details>
