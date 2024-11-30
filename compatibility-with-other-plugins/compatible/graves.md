# Graves

## [此处下载](https://www.spigotmc.org/resources/graves.74208/)

## 如何增加兼容性？

启用兼容

```yaml
itemsadder: # https://www.spigotmc.org/resources/itemsadder.73355/
  enabled: true # Should ItemsAdder integration be enabled.
```

编辑默认选项，你也可以自定义物品（确保它们为正确的类型，在家具中使用家具物品；在方块中使用方块物品）。

```yaml
  ##############
  # ItemsAdder #
  ##############
  # The option requires ItemsAdder, you must have this installed to use models.
  itemsadder:
    furniture:
      enabled: true # Should we use ItemsAdder Furniture?
      name: "itemsadder:mysterious_stone" # Furniture name.
    block:
      enabled: true # Should we use ItemsAdder Blocks?
      name: "itemsadder:nice_stone" # Block name
```
