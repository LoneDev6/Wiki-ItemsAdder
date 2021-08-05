# 音效

### 第一步

{% page-ref page="convert-sound-to-.ogg.md" %}

* 打开**plugins\ItemsAdder\data\resource\_pack\assets**文件
* 打开你的[命名空间](../../beginners/creating-your-namespace.md)文件
* 创建一个新的文件名为**sounds**
* 放置你的**.ogg**文件\(你也可以创建另一个文件来放你的音效,例如 "音效","音乐"文件...\)

举个栗子,我有一个名为**cdk\_sunday.ogg**的文件,我把它放到一个新的**music\_disc**文件里
所以现在我有`plugin\ItemsAdder\data\resource_pack\assets\NAMESPACE\sounds\music_disc\cdk_sunday.ogg`这样的文件路径.

### 第二步

* 打开**plugins\ItemsAdder\data\resource\_pack\assets**文件
* 打开你的[命名空间](../../beginners/creating-your-namespace.md)文件
* 创建一个新的文件名为 `sounds.json`\(或者你已经创建了\)
* 这个文件是一个Json文件,你一定正确地去编辑它,否则这个配置将无法启用.如果你需要更多关于Json文件的信息,请在网上进行[搜索](https://www.baidu.com/s?wd=Json%E5%85%A5%E9%97%A8%E5%88%B0%E5%85%A5%E5%9C%9F&rsv_spt=1&rsv_iqid=0xdc26cd380000081d&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=0&rsv_dl=tb&oq=Json&rsv_btype=t&inputT=15944&rsv_t=6e13tUwEqe0SHXkTgaM%2F6a%2FSvzpSPz%2FOWZsKsovyFd0ra%2BadH55j%2F7j8Lc9XxCJ0%2Fw30&rsv_sug3=30&rsv_sug1=25&rsv_sug7=100&rsv_pq=9c38f14f00002738&rsv_sug4=16148).

接下里只要把你的音效放到文件里,就可以了:

```javascript
{
	"music_disc.cdk_sunday":{
		"sounds":[
			"myitems:music_disc/cdk_sunday"
		]
	}
}
```

现在我说明一下我写的代码的每一部分  
这是音效的名字,会将在插件的每个地方使用它,当然也可以在Minecraft原版使用[/playsound](https://www.digminecraft.com/game_commands/playsound_command.php)command

```javascript
"music_disc.cdk_sunday":{
```

这是Minecraft的音效文件列表,当你指定音效名称时,会播放这些文件
Minecraft将会随机播放这些音效之一\(只有当你设置了一个以上的声音时\).  
⚠️请记住,你一定要把`myitems`改为你自己的命名空间.不然会出问题.

```javascript
"sounds":[
			"myitems:music_disc/cdk_sunday"
		]
```

比如,如果你想让同一个音效名称播放随机的音效,你只需要创建多个.ogg文件,然后像这样设置就行.

```javascript
"sounds":[
			"myitems:music_disc/cdk_sunday_1",
			"myitems:music_disc/cdk_sunday_2",
			"myitems:music_disc/test_file"
		]
```

## 如何在sounds.json文件中添加多个音效

有手就行.下次你想添加一个音效时,只需在结尾处加一个逗号,比如这样  
\(我指的是第6行的逗号\)

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
如果你想确保不会手残犯错,你可以使用这个网站来检查你的Json文件是否有错误:
国外:[https://jsonformatter.curiousconcept.com/](https://jsonformatter.curiousconcept.com/)
国内:[http://www.json.cn/](http://www.json.cn/)
{% endhint %}

