# Graves/GravesX

## [下载Graves Legacy](https://www.spigotmc.org/resources/graves.74208/)
## [下载GravesX](https://www.spigotmc.org/resources/gravesx.118271/)

## 如何增加兼容性？

> [!注意]
> Graves 的配置文件位于 `/plugins/Graves`，而 GravesX 的配置文件位于 `/plugins/GravesX`。除了名字的区别，两个插件的文件结构相同。

在 config/config.yml 内启用兼容

```yaml
itemsadder: # https://www.spigotmc.org/resources/itemsadder.73355/
  enabled: true # 是否启用 ItemsAdder 兼容
```

在 config/grave.yml 内更改默认选项。你也可以在必要时更改自定义物品（确保是正确的类型，在家具属性中使用家具，在方块属性中使用方块

```yaml
  ##############
  # ItemsAdder #
  ##############
  # 该选项需要 ItemsAdder，你必须安装以使用模型。
  itemsadder:
    furniture:
      enabled: true # 是否使用 ItemsAdder 家具
      name: "itemsadder:mysterious_stone" # 家具名
    block:
      enabled: true # 是否使用 ItemsAdder 方块
      name: "itemsadder:nice_stone" # 方块名
```