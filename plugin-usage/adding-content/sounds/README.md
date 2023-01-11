# 🔊 Sounds

### Step 1

{% content-ref url="convert-sound-to-.ogg.md" %}
[convert-sound-to-.ogg.md](convert-sound-to-.ogg.md)
{% endcontent-ref %}

* create a new folder `ItemsAdder/contents/my_sounds/resourcepack/my_sounds/` **** folder (or use yours if you already have one)
* create a new sub-folder called `sounds`
* create a new folder called **sounds**
* put your **.ogg** file in there (you can also create another folder to organize your sounds, for example "effects" folder, "music" folder...)

for example I have a file named **cdk\_sunday.ogg** and I put it into a new **music\_disc** folder.\
So now I have `contents/my_sounds/resourcepack/my_sounds/sounds/music_disc/cdk_sunday.ogg`

### Step 2

* open the folder `ItemsAdder/contents/my_sounds/resourcepack/my_sounds/`
* create a new file named `sounds.json` (or open it if you already created)
* this file is a json file, you MUST write it correctly or it won't work. If you need info about Json files please search online.

To add your sound into the file you just have to do this:

```javascript
{
	"music_disc.cdk_sunday":{
		"sounds":[
			"my_sounds:music_disc/cdk_sunday"
		]
	}
}
```

Now I explain each part of the code I wrote.\
This is the sound name, you will use it in every part of the plugin and also in Minecraft vanilla [/playsound ](https://www.digminecraft.com/game\_commands/playsound\_command.php)command

```javascript
"music_disc.cdk_sunday":{
```

This is the list of sound files Minecraft will play when you call the sound name.\
Minecraft will play one of these sounds randomly (only if you set more than one sound).

{% hint style="warning" %}
Keep in mind that you have to change `my_sounds` to your own namespace name if it's different!
{% endhint %}

```javascript
"sounds":[
			"my_sounds:music_disc/cdk_sunday"
		]
```

For example if you want to have random sounds for the same sound name you just have to create multiple .ogg files and put them like this:

```javascript
"sounds":[
			"my_sounds:music_disc/cdk_sunday_1",
			"my_sounds:music_disc/cdk_sunday_2",
			"my_sounds:music_disc/test_file"
		]
```

## How can I add multiple sounds in the sounds.json file?

It's easy, the next time you want to add a sound you just have to add a comma at the end, like this.\
(I'm referring to line 6 comma)

```javascript
{
    "music_disc.cdk_sunday":{
        "sounds":[
            "my_sounds:music_disc/cdk_sunday"
        ]
    },
    "music_disc.vidian_aether_theories":{
        "sounds":[
            "my_sounds:music_disc/vidian_aether_theories"
        ]
    }
}
```

{% hint style="warning" %}
If you want to be sure not to make mistakes use this website to check if your Json file is good or has errors: [https://jsonformatter.curiousconcept.com/](https://jsonformatter.curiousconcept.com/)
{% endhint %}
