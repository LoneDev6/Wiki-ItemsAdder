---
icon: volume-low
---

# 声音

## 将 MP3 转换为 OGG

使用[这个网站](https://audio.online-convert.com/convert-to-ogg)将你的文件（mp3, wav 等）转换为 ogg。

{% hint style="warning" %}
### 重要

记得将“更改音频通道”设置为单声道，否则你会遇到[音频问题](https://bugs.mojang.com/browse/MC-146721)

<img src="../../.gitbook/assets/audio_mono.png" alt="" data-size="original">
{% endhint %}

### 步骤 1

* 创建一个新文件夹 `ItemsAdder/contents/my_sounds/resourcepack/my_sounds/sounds/` \
  （如果你已经有一个文件夹，可以使用它）
* 将你的 **.ogg** 文件放在里面。\
  你也可以在 `sounds` 文件夹内创建更多文件夹来组织你的声音文件。\
  例如“effects”、“music”等。

例如，我有一个名为 **song\_1.ogg** 的文件，并将其放入一个新的 `music` 文件夹中。\
所以现在我有 `contents/my_sounds/resourcepack/my_sounds/sounds/music/song_1.ogg`

### 步骤 2

* 打开文件夹 `ItemsAdder/contents/my_sounds/resourcepack/my_sounds/`
* 创建一个名为 `sounds.json` 的新文件（如果已经创建则打开它）
* 这个文件是一个 `.json` 文件，所以你必须正确编写，否则它将无法工作。\
  如果你需要关于 Json 文件的信息，请在线搜索。

要将你的声音添加到文件中，只需这样做：

```javascript
{
	"music.song_1":{
		"sounds":[
			"my_sounds:music/song_1"
		]
	}
}
```

#### 现在我解释我写的代码的每一部分。

这是声音名称。你将在插件的每个部分以及 Minecraft 原版的 [/playsound ](https://www.digminecraft.com/game\_commands/playsound\_command.php)命令中使用它。

```javascript
"music.song_1":{
```

这是当你调用声音名称时 Minecraft 将播放的声音文件列表。\
Minecraft 将随机播放其中一个声音（仅当你设置了多个声音时）。

{% hint style="warning" %}
请记住，如果你的命名空间名称不同，你必须将 `my_sounds` 更改为你自己的命名空间名称！
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">"sounds":[
<strong>    "my_sounds:music/song_1"
</strong>]
</code></pre>

例如，如果你想为同一个声音名称设置随机声音，只需创建多个 `.ogg` 文件并像这样放置它们：

```javascript
"sounds":[
    "my_sounds:music/song_1_variant_1",
    "my_sounds:music/song_1_variant_2",
    "my_sounds:music/song_1_variant_3"
]
```

## 如何在 `sounds.json` 文件中添加多个声音？

很简单，下次你想添加声音时，只需在末尾添加一个逗号，如下所示。\
（我指的是第 6 行的逗号）

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
如果你想确保不出错，请使用这个网站检查你的 Json 文件是否正确或有错误：[https://jsonformatter.curiousconcept.com/](https://jsonformatter.curiousconcept.com/)
{% endhint %}
