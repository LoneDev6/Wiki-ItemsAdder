# 手动创建 字符图像（Font images）


## 在不适用 ItemsAdder 的情况下手动创建 字符图像（Font images）

某些服务器可能出于各种原因需要手动创建字体图像，例如：

* 不希望 ItemsAdder 管理字符图像
* 想为某些自定义字符使用自定义命名空间和自定义字体名称
* 想自己管理字符图像文件

## 创建一个自定义字符

```json
{
   "file":"image_test.png",
   "chars":[
      "\uE250"
   ],
   "height":8,
   "ascent":9,
   "type":"bitmap"
}
```


如上，我创建了一个 json 配置条目，下列是我的自定义字符图像设置列表.

现在你需要将其添加至 `assets/minecraft/font/default.json` 的default.json 文件中.

为此，您必须将其添加到 `"providers"` 属性中。

```json
{
   "providers":[
      {
         "file":"image_test.png",
         "chars":[
            "\uE250"
         ],
         "height":8,
         "ascent":9,
         "type":"bitmap"
      }
   ]
}
```

&#x20;If you have more entries you have to add a `,` after the previous entry, for example:

```json
{
   "providers":[
      {
         "file":"image1.png",
         "chars":[
            "\uE233"
         ],
         "height":8,
         "ascent":9,
         "type":"bitmap"
      },
      {
         "file":"image_test.png",
         "chars":[
            "\uE250"
         ],
         "height":8,
         "ascent":9,
         "type":"bitmap"
      }
   ]
}
```

## 使用自定义的 json 文件名

By using a customized json font file you can separate the default font characters from your custom characters.

To do so you just have to create a new json and call it whatever you want, for example `my_font.json`.

The complete path will be: `assets/minecraft/font/my_font.json`.

{% hint style="warning" %}
This feature only works on Minecraft 1.16+
{% endhint %}

## Using a customized json namespace

If you want to further organize your pack you can use a customized namespace for your font file.

To do so you have to create a folder inside `assets` folder and use it instead of `minecraft` folder.

The complete path will be (for example): `assets/your_namespace/font/my_font.json`.

{% hint style="warning" %}
This feature only works on Minecraft 1.16+
{% endhint %}

### Showing the customized namespace/font name in-game

If you customized the font namespace and/or the font name you have to use a special syntax to show your images in-game.

Example if you set both custom namespace and custom font name:

`/tellraw @a [{"text":"Test message!","font":"your_namespace:my_font"}]`

Example if you set only custom font name:

`/tellraw @a [{"text":"Test message!","font":"my_font"}]`
