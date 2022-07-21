# DeluxeMenu

要在 **DeluxeMenu** 上显示具有自定义材质的 ItemsAdder 物品，需要将此特殊属性添加到菜单的图标中：

```yaml
nbt_int: CustomModelData: 1
```

其中的 1 请填写你自定义物品的 **CustomModelData** 

### 如何获取 CustomModelData 值？

手持ia物品的同时使用命令 `/iatag` ，然后搜索 `CustomModelData` 值。

