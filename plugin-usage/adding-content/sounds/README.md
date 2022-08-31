# 🔊 自定义音效

### 步骤 1

{% content-ref url="convert-sound-to-.ogg.md" %}
[convert-sound-to-.ogg.md](convert-sound-to-.ogg.md)
{% endcontent-ref %}

* 打开 **plugins\ItemsAdder\data\resource\_pack\assets** 文件夹
* 打开你的 **命名空间** 文件夹
* 创建一个名为 **sounds** 的文件夹
* 将 **.ogg** 放入 **sounds** 文件夹（你也可以创建其他文件夹来管理你的音效，例如"effects"文件夹，"music"文件夹......）

例如，我有一个名为 **cdk\_sunday.ogg** 的音效，我将该音效放入 **sounds** 中新建的 **music\_disc** 文件夹中.\
可以得到路径：`plugin\ItemsAdder\data\resource_pack\assets\NAMESPACE\sounds\music_disc\cdk_sunday.ogg`

### 步骤 2

* 打开 **plugins\ItemsAdder\data\resource\_pack\assets** 文件夹
* 打开你的 **命名空间** 文件夹
* 创建文件 `sounds.json` (如果你已经创建就打开)
* 该文件为 json 文件，你需要使用正确的格式进行编写，否则将自定义音乐唱片将无效. （如果需要有关json文件的信息，请在网上查阅相关内容）

将音效添加至文件中，只需要进行以下操作：

```javascript
{
	"music_disc.cdk_sunday":{
		"sounds":[
			"myitems:music_disc/cdk_sunday"
		]
	}
}
```

下面我会解释每段代码的含义.\
此为 [音效名称 ](https://www.digminecraft.com/game\_commands/playsound\_command.php)，你将会在插件的每个部分 或 Minecraft原版指令 /playsound 中使用到.

```javascript
"music_disc.cdk_sunday":{
```

该文件为音效列表，当你调用该文件中的音效时 Minecraft 会播放对应的音效.\
在你设置多个音效时 Minecraft 可以随机播放其中一个音效.\
⚠️ 注意：你必须将 `myitems` 更改为自定的命名空间名称

```javascript
"sounds":[
			"myitems:music_disc/cdk_sunday"
		]
```

举个栗子：如果您想为相同的音效名称生成随机声音，您只需创建多个 .ogg 文件并像示例中一样填写配置：

```javascript
"sounds":[
			"myitems:music_disc/cdk_sunday_1",
			"myitems:music_disc/cdk_sunday_2",
			"myitems:music_disc/test_file"
		]
```

## 如何在 sounds.json 文件中添加多个音效？

当你想要添加新的音效时，你只需要在末尾加一个逗号.\
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
