# Graves

## [下载插件](https://www.spigotmc.org/resources/graves.74208/)

## 如何兼容

在配置文件中启用插件兼容

```yaml
itemsadder: # https://www.spigotmc.org/resources/itemsadder.73355/
  enabled: true # 需要Itemsadder插件
```


Graves 会自动将模型添加到 ItemsAdder（需要先确保上述属性已启用），您只需要使用 `/iazip` 并使用"graves:grave"作为家具添加至下方furniture配置中
<br>你也可以自定义这些物品，文件位于：`Graves\Config\grave.yml`.(只需要确保与Itemsadder导入的设置的类型正确以及名称相同)

```yaml
  ##############
  # ItemsAdder #
  ##############
  # 该项需要Itemsadder,你需要安装他才能使用自定义模型
  # 二者只需要选择其一即可
  itemsadder:
    furniture:
      enabled: true # 是否需要使用家具
      name: "itemsadder:mysterious_stone" # 家具名称.
    block:
      enabled: true # 是否需要使用方块
      name: "itemsadder:nice_stone" # 方块名称
```
