# Optifine CIT 不工作

## 自定义 CIT 无法正常工作

如果你为皮革盔甲创建了自定义 CIT，它可能无法工作。

为了解决这个问题，你必须确保在自定义 CIT 中添加 `weight` 属性，这会使 Optifine 优先加载你的 CIT，并正确加载它。

示例：

```editorconfig
type=armor
items=leather_helmet leather_chestplate leather_leggings leather_boots
texture.leather_layer_1=my_layer_1
texture.leather_layer_2=my_layer_2
nbt.display.Name=ipattern:My Custom Armor
weight=99999
```
