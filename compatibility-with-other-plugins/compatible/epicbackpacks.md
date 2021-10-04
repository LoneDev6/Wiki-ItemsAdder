# EpicBackpacks

## [下载](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-epic-backpacks.28981/)

{% hint style="success" %}
要创建将使用 ItemsAdder 贴图的背包，您必须打开packets.yml \(在 EpicBackpacks 文件夹中\) 并填写如下的属性 \(在每一个你想使用ia贴图的背包中\):
{% endhint %}

```yaml
 cool_backpack:
    display_name: '&fCool Backpack'
    item:
      type: ITEMSADDER_ITEM
      name: "itemsadder:plastic_bag"
    size: 3
    craft_recipe:
      pattern:
        - XXX
        - LCL
        - XLX
      ingredients:
        L: LEATHER
        C: CHEST
```

