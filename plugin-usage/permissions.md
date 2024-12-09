---
icon: user-police
---

# 权限

## 权限

{% hint style="danger" %}
你**必须**使用一个支持 `.*` 权限符号的权限管理器，比如 [LuckPerms](https://luckperms.net/download)。\
Bukkit 默认不支持这种符号！
{% endhint %}

| 功能                              | 权限                     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允许使用配方，[更多信息](adding-content/item-properties/permission.md#recipes-permissions).       | <p><code>ia.user.recipe.PERMISSION</code> <br><br>（或使用 <code>ia.user.recipe.*</code> 来授予所有配方权限）</p>                                           |
| 在 `/ia` GUI 中查看物品，[更多信息](adding-content/item-properties/permission.md).                        | <p><code>ia.user.ia.seeitem.PERMISSION</code><br><br>（或使用 <code>ia.user.ia.seeitem.*</code> 来授予所有 /ia 权限）</p>                                         |
| 在 `/ia` GUI 中搜索.   | `ia.user.ia.search`            |
| 在 GUI 中查看类别.              | 使用类别权限，请查看 [/ia GUI ](ia.md) 页面.                                      |
| 使用 `/e` 命令时显示 `/e` GUI.                                                        | `ia.user.image.gui`            |
| 根据搜索词显示带有表情符号的标签列表.                                                       | `ia.user.image.hints`          |
| 在**聊天**中使用**表情符号**.       | `ia.user.image.chat`           |
| 在**命令**中使用**表情符号**.   | `ia.user.image.command`        |
| 在**告示牌**中使用**表情符号**.      | `ia.user.image.sign`           |
| 在**书**中使用**表情符号**.      | `ia.user.image.book`           |
| 在**铁砧**重命名中使用**表情符号**.                                                                | `ia.user.image.anvil`          |
| 使用一个**表情符号**.                 | <p><code>ia.user.image.use.&#x3C;name></code><br>示例: <code>ia.user.image.use.heart</code></p>    |
| 在**聊天**中使用**文字效果**. | `ia.user.text_effect.chat`     |
| 在**告示牌**中使用**文字效果**.| `ia.user.text_effect.sign`     |
| 在**书**中使用**文字效果**.| `ia.user.text_effect.book`     |
| 在**铁砧**重命名中使用**文字效果**.                                                          | `ia.user.text_effect.anvil`    |
| 使用一个**文字效果**.            | <p><code>ia.user.text_effect.use.&#x3C;effect></code></p><p></p><p>示例 (<a href="text-effects-1.17+.md">完整列表</a>):</p><ul><li><code>ia.user.text_effect.use.r</code></li><li><code>ia.user.text_effect.use.rw</code></li></ul>       |
| 使用表情命令 ([<mark style="color:blue;">玩家表情</mark>](adding-content/player-emotes/)). | `ia.user.iaemote`              |
| 使用一个表情 ([<mark style="color:blue;">玩家表情</mark>](adding-content/player-emotes/)).          | <p><code>ia.user.iaemote.use.&#x3C;emote></code><br>  </p><p>示例:</p><ul><li><code>ia.user.iaemote.use.yes</code></li><li><code>ia.user.iaemote.use.*</code></li></ul>   |
| 查看 HUD         | `ia.user.hud.show.<name>`      |
| 查看所有 HUD       | `ia.user.hud.show.*`           |
| 阻止玩家的 HUD 值根据事件增加或减少.                                  | `ia.user.hud.bypass.triggers.*`|
| 阻止玩家的 HUD 值根据命令增加或减少.                             | `ia.user.hud.bypass.commands.*`|
| 阻止玩家的 HUD 值根据 API 增加或减少.                                  | `ia.user.hud.bypass.api.*`     |
| 资源包未加载时防止踢出| `ia.resourcepack.bypasskick`   |
| 允许玩家放置的方块掉落战利品                                                              | `ia.admin.bypassblockplaceloot`|
| 破坏自定义方块                | <p><code>ia.user.block.break.&#x3C;suffix></code></p><p><br>示例:</p><p><code>permission_suffix</code> -> <code>break</code> : <code>iasurvival.ruby_block</code></p><p>权限: <code>ia.user.block.break.iasurvival.ruby_block</code><br><br>注意: 需要在 <a href="adding-content/block.md">方块属性</a> 中设置 <code>permissions_suffix</code>.</p>             |
| 放置自定义方块                | <p><code>ia.user.block.place.&#x3C;suffix></code></p><p><br>示例:</p><p><code>permission_suffix</code> -> <code>break</code> : <code>iasurvival.ruby_block</code></p><p>权限: <code>ia.user.block.place.iasurvival.ruby_block</code><br><br>注意: 需要在 <a href="adding-content/block.md">方块属性</a> 中设置 <code>permissions_suffix</code>.</p>             |
| 破坏家具                   | <p><code>ia.user.furniture.break.&#x3C;suffix></code></p><p><br>示例:</p><p><code>permission_suffix</code> -> <code>break</code> : <code>example.red_chair</code></p><p>权限: <code>ia.user.furniture.break.example.red_chair</code><br><br>注意: 需要在 <a href="adding-content/furniture.md">家具属性</a> 中设置 <code>permissions_suffix</code>.<br></p> |
| 放置家具                   | <p><code>ia.user.furniture.place.&#x3C;suffix></code></p><p><br>示例:</p><p><code>permission_suffix</code> -> <code>break</code> : <code>example.red_chair</code></p><p>权限: <code>ia.user.furniture.place.example.red_chair</code><br><br>注意: 需要在 <a href="adding-content/furniture.md">家具属性</a> 中设置 <code>permissions_suffix</code>.</p>     |

## WorldGuard 标志

{% content-ref url="../compatibility-with-other-plugins/compatible/worldguard-flags.md" %}
[worldguard-flags.md](../compatibility-with-other-plugins/compatible/worldguard-flags.md)
{% endcontent-ref %}

## 权限设置示例

| 权限                    | 操作                                                             |
| ----------------------- | - |
| `ia.user.ia`            | 打开 `/ia` 菜单|
| `ia.user.ia.seeitem.*`  | 查看 `/ia` 菜单中的所有物品|
| `ia.user.iarecipe`      | 使用 `/iarecipe` 命令|
| `ia.user.recipe.*`      | 使用所有配方|
| `ia.menu.seecategory.*` | <p>查看 <code>/ia</code> 菜单中的所有类别.<br><mark style="color:red;">注意:</mark> <br><mark style="background-color:red;">这可能会根据你下载的物品包而改变. 类别权限通常以</mark> <code>ia.menu.seecategory.</code> <mark style="background-color:red;">开头，但有些开发者可能会更改它.</mark></p> |
| `ia.user.image.gui`     | 使用 `/e` 命令查看表情符号书|
| `ia.user.image.hints`   | 使用 `/e` 和 TAB 完成时建议表情符号|
| `ia.user.image.chat`    | 在聊天中替换表情符号文本 `:smile:` 等|
| `ia.user.image.command` | 在命令中替换表情符号文本 `:smile:` 等|
| `ia.user.image.sign`    | 在标牌中替换表情符号文本 `:smile:` 等|
| `ia.user.image.book`    | 在书籍中替换表情符号文本 `:smile:` 等|
| `ia.user.image.use.*`   | 访问所有表情符号|

## 我在哪里可以获得类别权限？

{% hint style="info" %}
**ItemsAdder 默认类别**

打开 `categories.yml` 文件以读取查看类别的所有权限.\
默认的 ItemsAdder 包类别文件位于每个 `namespace` 文件夹内.\
例如: `contents/iasurvival/configs/categories.yml`

例如，如果你想让玩家查看默认 ItemsAdder 的所有类别，你只需授予 `ia.menu.*` 权限.
{% endhint %}

{% hint style="info" %}
**插件类别**

如果你正在安装一个 [插件](https://addons.plugin.ga/itemsadder/)，你可以在 `contents/<插件名称>/configs` 中搜索 `categories.yml` 文件，通常他们会将类别放在那里，因此你也可以找到他们的**权限**.
{% endhint %}

### **创建我的类别**

要创建你的类别，请阅读教程

{% content-ref url="ia.md" %}
[ia.md](ia.md)
{% endcontent-ref %}
