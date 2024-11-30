---
icon: head-side-gear
---

# 手动创建字体图像

{% hint style="warning" %}
这是一个面向高级用户的教程。
{% endhint %}

## 如何在没有 ItemsAdder 的情况下手动创建字体图像

由于各种原因，一些服务器可能需要手动创建字体图像，例如：

* 你不希望 ItemsAdder 管理字体
* 你想为一些自定义字符使用自定义命名空间和自定义字体名称
* 你想自己管理它们

## Creating a custom character

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

创建或编辑资源包里的 `assets/minecraft/font/default.json` 文件。

{% code title="default.json" %}
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
{% endcode %}

如果你设置了多个字体图像，你需要在每一部分内容后添加 `,`，例如：

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

## 使用自定义 json 文件名

通过使用自定义的 json 字体文件，你可以将默认字体字符与自定义字符分开。

为此，你只需创建一个新的 json 文件并随意命名，例如 `my_font.json`。
完整路径将是：`assets/minecraft/font/my_font.json`。

## 使用自定义 json 命名空间

如果你想进一步组织你的资源包，你可以为你的字体文件使用自定义命名空间。\
为此，你必须在 `assets` 文件夹内创建一个文件夹，并使用它代替 `minecraft` 文件夹。\
完整路径将是（示例）：`assets/your_namespace/font/my_font.json`。

### 在游戏中显示自定义命名空间/字体

如果你自定义了字体命名空间和/或字体名称，你必须使用特殊语法在游戏中显示你的图像。

如果你同时设置了自定义命名空间和自定义字体名称：

`/tellraw @a [{"text":"Test message!","font":"your_namespace:my_font"}]`

如果你只设置了自定义字体名称：

`/tellraw @a [{"text":"Test message!","font":"my_font"}]`
