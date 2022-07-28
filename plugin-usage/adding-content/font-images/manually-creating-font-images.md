# 手动创建 字符图像（Font images）


## 在不使用 ItemsAdder 的情况下手动创建 字符图像（Font images）

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


如上，我创建了一个 json 配置条目，这是我的自定义字符图像设置列表.

现在你需要将其添加至 `assets/minecraft/font/default.json` 文件中的`"providers"` 属性下.

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

&#x20;如果你有多个条目需要添加，请在上一个条目结尾添加一个 `,`，如下所示：

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

通过使用自定义的 json 字体文件，可以将默认的字体字符与自定义字符分开
你只需要创建一个新的 json 文件，并将其命名为你想要的名称，例如 `my_font.json`.
创建完后的路径将会是: `assets/minecraft/font/my_font.json`.

{% hint style="warning" %}
该功能仅适用于 Minecraft 1.16+
{% endhint %}

## 使用自定义的 json 命名空间

当你想进一步的整合你的资源包，可以为你的字体文件使用一个自定义的命名空间

所以你需要在 `assets` 文件夹中创建一个新的文件夹，而不是在 `minecraft` 文件夹下创建

创建完后的路径将会是：`assets/your_namespace/font/my_font.json`

{% hint style="warning" %}
该功能仅适用于 Minecraft 1.16+
{% endhint %}

### 在游戏中显示自定义 命名空间/字体名称

当你自定义了字体命名空间和字体名称，你需要使用特殊指令在游戏中显示自定义图像.

如：同时设置了自定义命名空间和自定义字体名称：

`/tellraw @a [{"text":"Test message!","font":"your_namespace:my_font"}]`

如：只设置了自定义字体名称:

`/tellraw @a [{"text":"Test message!","font":"my_font"}]`
