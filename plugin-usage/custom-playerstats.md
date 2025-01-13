---
icon: database
---

# 自定义玩家状态

## 什么是玩家状态？

它们是由 ItemsAdder 添加的自定义属性，你可以使用一个特殊命令添加和读取它们：`/iaplayerstat`

然后你可以使用 **PlaceholderAPI** 在任何地方显示它们或将它们绑定到 HUD。\
我用它来创建口渴和法力值。查看我的[默认配置](https://github.com/search?q=repo%3AItemsAdder%2FDefaultPack+player\_stat\_name\&type=code)以获取示例。

### 示例：

`/iaplayerstat write LoneDev thirst 6`\
`/iaplayerstat read LoneDev thirst float`

## 保存玩家状态

### 自定义 NBT 文件

将它们保存到由 ItemsAdder 处理的自定义 NBT 文件中，该文件可以稍后轻松删除。\
此文件保存在 `plugins\ItemsAdder\storage\players\stats\` 文件夹中。

```yaml
player_stats:
  save_type: CUSTOM_NBT
```

<figure><img src="../.gitbook/assets/image (52).png" alt=""><figcaption></figcaption></figure>

### player.dat 文件

将它们保存至原版 `player.dat` 文件。\
如果您想同步服务器，并且已经同步了玩家数据文件，这很有用。

```yaml
player_stats:
  save_type: PLAYER_DAT
```

<figure><img src="../.gitbook/assets/image (55).png" alt=""><figcaption></figcaption></figure>
