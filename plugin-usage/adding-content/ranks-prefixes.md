---
icon: hashtag
---

# 等级 / 前缀

## 自定义等级纹理

![](<../../.gitbook/assets/image (27) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (3).png>)

{% hint style="warning" %}
**你必须使用** [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/) **和** [**TAB**](https://www.spigotmc.org/resources/tab-1-5-1-21-4.57806/) **来完成本教程，如果你使用其他权限和TAB插件，方法可能会有所不同。**

**如果你使用其他前缀插件，你可能需要使用** [**此方法**](broken-reference) **来显示等级**
{% endhint %}

## 如何创建我的等级？

### 在这里下载示例等级

{% embed url="https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-for-itemsadder.84852/" %}

### 创建新的等级配置

打开 `ItemsAdder/contents/betterranks/configs/ranks.yml` 文件并**复制**和**粘贴**其中一个等级配置。\
然后将其重命名为你的等级，并决定一个新的 **.png** 文件名，例如 `custom`

```yaml
  custom:
    permission: "ranks.custom"
    show_in_gui: true
    suggest_in_command: false
    path: "custom.png"
    scale_ratio: 9
    y_position: 8
```

{% hint style="warning" %}
不要更改 `scale_ratio` 和 `y_position`。这会使等级看起来像素化。
{% endhint %}

### 创建png图像

**复制**我的一个等级 **.png** 文件并从文件夹 `contents/betterranks/textures/` 中编辑它\
\
你可以使用 **Photoshop**、**GIMP**、**Paint.NET** 或任何其他你使用的编辑软件进行编辑。\
例如复制 `admin.png`，命名为 `custom.png` 并进行编辑。

{% hint style="danger" %}
**不要更改等级图像的高度！** \
**只更改宽度，否则图像会看起来像素化！**
{% endhint %}

### 示例：

例如，为了制作一个类似于我的 **BetterRanks** 插件的等级，你只需使用 [Minecraftia ](https://www.dafont.com/andrew-tyler.d2526) 字体并剪切一些像素。

![](<../../.gitbook/assets/image (36).png>)

![](<../../.gitbook/assets/image (37).png>)

![](<../../.gitbook/assets/image (38).png>)

![](<../../.gitbook/assets/image (39).png>)

## 在游戏中使用等级

### Luckperms

#### 创建一个组，例如 (admin)

使用此命令 `/lp creategroup admin`

#### 添加前缀

使用此命令获取编辑器：`/lp editor`\
现在点击链接并打开网页编辑器。

选择角色，在本例中为 `admin`。

![](<../../.gitbook/assets/image (77).png>)

在底部输入框中写入 `prefix.100.` 后跟前缀占位符，在本例中我将使用 `:admin:`

`prefix.100.:admin:`（确保你正确书写）。

![](<../../.gitbook/assets/image (80) (1).png>)

按 <mark style="color:green;">**`+Add`**</mark>

![](<../../.gitbook/assets/image (74) (1).png>)

如你所见，你在权限列表中有一行新内容，这是前缀设置。

![](<../../.gitbook/assets/image (70).png>)

现在保存你的更改

![](<../../.gitbook/assets/image (44).png>)

#### 将组分配给玩家

使用此命令（将 `LoneDev` 更改为你的玩家名称） `/lp user LoneDev group add admin`

![](../../.gitbook/assets/image\_\(40\).png)

### TAB 插件

{% hint style="warning" %}
确保你安装了 [PlaceholderAPI](broken-reference)
{% endhint %}

#### 编辑 TAB 插件的 config.yml

**在** `groups` 类别下添加此内容或编辑它（如果已存在）。\
（你必须使用 `%img_admin%` 而不是 `:admin:`，因为 **TAB** 只识别 **PlaceholderAPI** 占位符，而不识别 **ItemsAdder** 占位符。这也适用于**其他插件**）

```yaml
  Admin:
    tabprefix: '%img_admin%  '
    tagprefix: '%img_admin%  '
```

然后使用命令 `/tab reload`

![](../../.gitbook/assets/image\_\(38\).png)

![](../../.gitbook/assets/image\_\(39\).png)
