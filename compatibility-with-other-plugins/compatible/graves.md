# Graves

## [下载插件](https://www.spigotmc.org/resources/graves.74208/)

## 如何兼容

在配置文件中启用起到兼容

```yaml
itemsadder: # https://www.spigotmc.org/resources/itemsadder.73355/
  enabled: true # 需要Itemsadder插件
```

请修改默认选项.<br>你也可以自定义这些物品(在这,请确保设置的类型正确,并在家具中使用家具类型,在方块中使用方块类型)

```yaml
  ##############
  # ItemsAdder #
  ##############
  # 该项需要Itemsadder,你需要安装他才能使用模型
  itemsadder:
    furniture:
      enabled: true # 是否需要使用家具
      name: "itemsadder:mysterious_stone" # 家具名称.
    block:
      enabled: true # 是否需要使用方块
      name: "itemsadder:nice_stone" # 方块名称
```
