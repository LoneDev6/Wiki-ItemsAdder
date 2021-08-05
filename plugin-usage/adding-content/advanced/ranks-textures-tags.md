# 等级材质\(称号\)

你可以为你的服务器创建自定义等级,让它看起来更厉害
查看这个插件,然后了解如何创建它们: [https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/](https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/)

![](../../../.gitbook/assets/image%20%2827%29.png)

{% hint style="danger" %}
### 请把更新为 [ItemsAdder 2.1.30以上](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-huds-gui-emojis-ores-blocks-wings-tails-hats.73355/)
{% endhint %}

{% hint style="warning" %}
### 必须使用 [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) 和 [TAB](https://www.spigotmc.org/resources/tab-1-7-x-1-16-5.57806/) 最好和本教程用的一样,如果你使用其他权限和其他的TABS插件,方法可能会有所不同.
{% endhint %}

{% hint style="info" %}
### 如果你使用的是另一个前缀插件,你可能需要使用[这种方法](../../using-font_images-emojis-everywhere.md) 来显示
{% endhint %}

## Luckperms

### 创建一个权限组,例如\(管理员\)

使用该指令 `/lp creategroup admin`

### 添加前缀

使用该指令 `/lp group admin meta addprefix 100 :admin:`

### 将该权限组分配给一个玩家

使用该指令 \(将LoneDev改为你的玩家名称\) `/lp user LoneDev group add admin`

![](../../../.gitbook/assets/immagine%20%2843%29.png)

## TAB plugin

{% hint style="warning" %}
确保你安装了 [PlaceholderAPI](../../using-font_images-emojis-everywhere.md)
{% endhint %}

### 打开TAB插件的config.yml

在`groups`下添加设置,如果已经存在,则修改它. 
\(你只能使用`%img_admin%`而不是`:admin:`因为 **TAB** 只能和 **PlaceholderAPI** 变量挂钩而不是**ItemsAdder**的变量.这也适用于**任何插件**\)

```yaml
  Admin:
    tabprefix: '%img_admin%  '
    tagprefix: '%img_admin%  '
```

然后使用命令 `/tab reload`

![](../../../.gitbook/assets/immagine%20%2841%29.png)

![](../../../.gitbook/assets/immagine%20%2842%29.png)

