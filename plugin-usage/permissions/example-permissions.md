# ↪️基础权限

## 基础权限:

* `ia.user.ia` \(打开 /ia 菜单\)
* `ia.user.ia.*` \(查看所以物品在 /ia 菜单\)
* `ia.user.iarecipe` \(使用 /iarecipe 命令\)
* `ia.user.craft.*` \(合成Itemsadder物品权限\)
* `ia.menu.*` \(在 /ia 菜单中查看所有类型\)
* `ia.user.image.gui` \(使用 /e 命令查看表情列表\)
* `ia.user.image.hints` \(在使用 /e 指令后,可以用Tab补全表情文字\)
* `ia.user.image.chat` \(替换聊天中的表情文字,例如:slime:\)
* `ia.user.image.command` \(替换命令中的表情文字,例如:slime:\)
* `ia.user.image.sign` \(替换告示牌中的表情文字,例如:slime:\)
* `ia.user.image.book` \(替换书中的表情文字,例如:sliem:\)
* `ia.user.image.use.*` \(可以使用所有表情\)

## 我要怎么做才可以获得类型权限呢?

{% hint style="info" %}
### 默认类别

打开这个文件夹,查询所有权限/查看所有类别: `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`

比如,你想让玩家看到默认ItemsAdder里所有的类型,你只需要给予 `ia.menu.*` 权限.
{% endhint %}

{% hint style="info" %}
### 扩展类别

如果你安装了一个 [扩展插件](https://addons.plugin.ga/itemsadder/)你可以在里面搜索到一个`categories.yml` 文件 `ItemsAdder\data\items_packs\ADDON`,通常开发者会把配置放在这里,所以你也可以找到他们设置的 **权限**.
{% endhint %}

{% hint style="info" %}
### 创建属于我的类型

如果你要创建属于你的类型,只需阅读该教程.

{% page-ref page="../ia.md" %}
{% endhint %}

