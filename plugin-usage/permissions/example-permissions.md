# ↪ 示例权限

## 基础设置:

* `ia.user.ia` (打开 `/ia` 菜单的权限)
* `ia.user.ia.seeitem.*` (在`/ia`菜单中查看某Ia物品的权限)
* `ia.user.iarecipe` (使用 `/iarecipe` )
* `ia.user.recipe.*` (允许使用全部合成配方)（将 * 替换为任意物品id即特指该物品的合成配方）
* `ia.menu.seecategory.*` (在`/ia`中查看某分类的权限). 注意: 该权限将以下载附属中的分类配置所决定，但通常格式为 `ia.menu.seecategory.XXXX`，但附属包的开发者可以自定该权限的格式，所以详情需要查看该附属的分类文件
* `ia.user.image.gui` (使用 `/e` 来查看表情Gui)
* `ia.user.image.hints` (在使用`/e`和TAB时补全表情符号)
* `ia.user.image.chat` (允许使用表情在 聊天栏 )
* `ia.user.image.command` (允许使用表情在 命令 中)
* `ia.user.image.sign` (允许使用表情在 告示牌 上)
* `ia.user.image.book` (允许使用表情在 书 上)
* `ia.user.image.use.*` (允许使用全部表情)（将 * 替换为任意表情名称即特指该表情的使用权限）

## 如何获取分类的权限

{% hint style="info" %}
### ItemsAdder 默认分类

在此文件中你可以获取所有的分类以及权限
 `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`

如果想让玩家查看默认的所有分类,给予`ia.menu.*`权限即可.
{% endhint %}

{% hint style="info" %}
### 扩展分类

若你安装了 [附属](https://addons.plugin.ga/itemsadder/) 通常附属包作者会将其分类放在 `ItemsAdder\data\items_packs\ADDON（附属名称）` 中找到  `categories.yml`
<br>通常附属包作者会将分类放在 `categories.yml` 文件中，你可以从该分类中获取**权限**
{% endhint %}

{% hint style="info" %}
### 创建分类

创建分类只需阅读此教程
{% endhint %}



