# 🔊 自定义音频

### 步骤 1

{% content-ref url="convert-sound-to-.ogg.md" %}
[convert-sound-to-.ogg.md](convert-sound-to-.ogg.md)
{% endcontent-ref %}

* 打开 **plugins\ItemsAdder\data\resource\_pack\assets** 文件夹
* 打开你的 **命名空间** 文件夹
* 创建一个名为 **sounds** 的文件夹
* put your **.ogg** file in there (you can also create another folder to organize your sounds, for example "effects" folder, "music" folder...)

for example I have a file named **cdk\_sunday.ogg** and I put it into a new **music\_disc** folder.\
So now I have `plugin\ItemsAdder\data\resource_pack\assets\NAMESPACE\sounds\music_disc\cdk_sunday.ogg`

### 步骤 2

* 打开 **plugins\ItemsAdder\data\resource\_pack\assets** 文件夹
* 打开你的 **命名空间** 文件夹
* 创建文件 `sounds.json` (如果你已经创建就打开)
* this file is a json file, you MUST write it correctly or it won't work. If you need info about Json files please search online.

将音频添加至文件中，只需要进行以下操作：

```javascript
{
	"music_disc.cdk_sunday":{
		"sounds":[
			"myitems:music_disc/cdk_sunday"
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
Minecraft will play one of these sounds randomly (only if you set more than one sound).\
⚠️Keep in mind that you have to change `myitems`  to your own namespace name.

```javascript
"sounds":[
			"myitems:music_disc/cdk_sunday"
		]
```

For example if you want to have random sounds for the same sound name you just have to create multiple .ogg files and put them like this:
举个栗子：如果您想为相同的音频名称生成随机声音，您只需创建多个 .ogg 文件并将它们像这样放置：

```javascript
"sounds":[
			"myitems:music_disc/cdk_sunday_1",
			"myitems:music_disc/cdk_sunday_2",
			"myitems:music_disc/test_file"
		]
```

## 如何在 sounds.json 文件中添加多个音频？

当你想要添加新的音频时，你只需要在末尾加一个逗号.\
（指的是第 6 行逗号）

```javascript
{
    "music_disc.cdk_sunday":{
        "sounds":[
            "itemsadder:music_disc/cdk_sunday"
        ]
    },
    "music_disc.vidian_aether_theories":{
        "sounds":[
            "itemsadder:music_disc/vidian_aether_theories"
        ]
    }
}
```

{% hint style="warning" %}
如果你想避免错误，请使用此网站检查你的 json 文件中是否有错误: [https://jsonformatter.curiousconcept.com/](https://jsonformatter.curiousconcept.com/)
{% endhint %}
