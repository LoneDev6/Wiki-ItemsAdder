# 🔖 自定义称号材质

## 使用自定义称号，会让你的服务器看起来更加专业

![](<../../.gitbook/assets/image (27) (1) (1) (1) (1) (1) (1) (1) (1).png>)

{% hint style="warning" %}
#### 该教程中使用 [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) 权限插件和 [TAB](https://www.mc-market.org/resources/14009/)  插件来进行演示，如果你使用不同的权限插件和TAB插件，操作方法可能会有所不同.

#### 如果你在使用其他的称号插件，你可能需要 [该方法](font-images/using-font\_images-emojis-everywhere.md) 来进行显示自定义称号
{% endhint %}

## 如何创建我的自定义称号

### 下载示例材质

* 版本需求： **ItemsAdder 2.1.30+**
* [下载示例材质 ](https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/)

### 创建一个新的称号配置

打开 `plugins\ItemsAdder\data\items_packs\betterranks\ranks.yml` ，并 **复制粘贴** 其中一个配置.\
将其重命名为新的称号，例如： `custom`

```yaml
  custom:
    permission: "ranks.custom"
    show_in_gui: true
    suggest_in_command: false
    path: "font/rank/custom.png"
    scale_ratio: 9
    y_position: 8
```

{% hint style="warning" %}
不要更改 `scale_ratio` 和 `y_position` 的数值，这会导致图像像素化
{% endhint %}

### 创建 .png 图像

从  `plugins\ItemsAdder\data\resource_pack\assets\betterranks\textures\font\rank\` 中的 **示例材质** 复制 **.png** 文件并使用 **图像编辑软件** 对其进行编辑.\
\
例如：复制 `admin.png`，并将其命名为 `custom.png` 来进行编辑.

{% hint style="danger" %}
### 不要更改图像的高度，只能更改其宽度，否则会导致图像像素化
{% endhint %}

### 栗子:

例如：你想制作与 **BetterRanks** 相似的称号材质，你只需要使用 [Minecraftia](https://www.dafont.com/andrew-tyler.d2526) 字体，并删除一些像素.

![](<../../.gitbook/assets/image (36).png>)

![](<../../.gitbook/assets/image (37).png>)

![](<../../.gitbook/assets/image (38).png>)

![](<../../.gitbook/assets/image (39).png>)

## 在游戏中应用自定义称号材质

### Luckperms

#### 创建一个组, 例如 (admin)

使用指令 `/lp creategroup admin`

#### 添加称号

使用指令: `/lp editor` 获取编辑器\
点击链接并打开 Web 编辑器

选择组别，该示例中为 `admin`.

![](<../../.gitbook/assets/image (77).png>)

在底部输入框中填写 `prefix.100.` 后跟自定义称号材质变量，在该示例中使用 `:admin:`

&#x20;`prefix.100.:admin:` （确保填写正确）

![](<../../.gitbook/assets/image (67) (1).png>)

点击 <mark style="color:green;">**`+Add`**</mark>

![](<../../.gitbook/assets/image (74) (1).png>)

你会发现在权限列表中出现了新的一行，该行为称号设置

![](<../../.gitbook/assets/image (70).png>)

设置完成后，保存更改

![](<../../.gitbook/assets/image (44).png>)

#### 将称号应用至玩家

使用指令 `/lp user [player] group add admin`

![](<../../.gitbook/assets/immagine (40).png>)

{% hint style="warning" %}
当然你也可以使用其他的称号插件来应用自定义称号材质，只需要设置对应的字符图像名称即可
{% endhint %}

### TAB 插件

{% hint style="warning" %}
请确保安装了 [PlaceholderAPI](font-images/using-font\_images-emojis-everywhere.md)
{% endhint %}

#### 编辑 TAB 插件的 config.yml

在 `groups（示例中的admin）` 属性下添加自定义称号材质，如果已经存在该组，只需要对其进行编辑.\
（你应该使用 `%img_admin%` 而不是 `:admin:` 来显示图像，因为 **TAB** 只支持 **PlaceholderAPI** 变量，**该使用方法同样适用于其他插件**)

```yaml
  Admin:
    tabprefix: '%img_admin%  '
    tagprefix: '%img_admin%  '
```

使用指令 `/tab reload`

![](<../../.gitbook/assets/immagine (38).png>)

![](<../../.gitbook/assets/immagine (39).png>)
