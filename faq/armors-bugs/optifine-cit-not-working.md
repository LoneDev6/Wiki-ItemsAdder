# 使用 Optifine CIT 新增的自定义盔甲失效

## 通过 CIT 新增的自定义盔甲失效

修复该问题，你需要为盔甲配置添加 `weight`（权重）属性，使 optifine 优先加载 cit 中的自定义盔甲

栗子:

```editorconfig
type=armor
items=leather_helmet leather_chestplate leather_leggings leather_boots
texture.leather_layer_1=my_layer_1
texture.leather_layer_2=my_layer_2
nbt.display.Name=ipattern:My Custom Armor
weight=99999
```
