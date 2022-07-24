# ↪ Example permissions

## 基础设置:

* `ia.user.ia` (打开 `/ia` 菜单的权限)
* `ia.user.ia.seeitem.*` (使用`/ia`在菜单中查看所有Ia物品)
* `ia.user.iarecipe` (使用 `/iarecipe` )
* `ia.user.recipe.*` (使用所有合成配方)
* `ia.menu.seecategory.*` (使用`/ia`在菜单中查看所有Ia类别). 注意: This can change based on the items pack you downloaded. Category permission usually starts with `ia.menu.seecategory.` but some developers may have changed it.
* `ia.user.image.gui` (使用 `/e` 来查看表情Gui)
* `ia.user.image.hints` (在使用`/e`和TAB时补全表情符号)
* `ia.user.image.chat` (可以使 `:smile:` 等显示在聊天栏里)
* `ia.user.image.command` (可以使 `:smile:` 等显示在命令里)
* `ia.user.image.sign` (可以使 `:smile:` 等显示在提示牌上)
* `ia.user.image.book` (可以使 `:smile:` 等显示在书上)
* `ia.user.image.use.*` (允许使用表情的权限)

## 我可以在哪获得类别的权限？

{% hint style="info" %}
### ItemsAdder 默认类别

打开此文件,找到所有的权限,查看类别:
 `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`

如果你想让玩家查看到ItemsAdder的默认类别,你只需要给`ia.menu.*`权限就可以.
{% endhint %}

{% hint style="info" %}
### 扩展类别

若你安装了[扩展 ](https://addons.plugin.ga/itemsadder/)你可以找到 `categories.yml` 在 `ItemsAdder\data\items_packs\ADDON`, 可能他们会把类别放在那儿,所以你也可以找到**权限**.
{% endhint %}

{% hint style="info" %}
### 创建类别

创建类别?只需阅读此教程
{% endhint %}



