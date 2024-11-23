# EpicBackpacks

## [此处下载](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-epic-backpacks.28981/)

{% hint style="warning" %}
你必须安装 [DefaultPack](../../first-install.md#default-pack-optional)！
{% endhint %}

{% hint style="success" %}
为创建使用 ItemsAdder 材质的背包，你需要打开 backpacks.yml（在EpicBackpacks文件夹中）并添加如下内容（每个背包都需要）：
{% endhint %}

```yaml
 cool_backpack:
    display_name: '&fCool Backpack'
    item:
      type: ITEMSADDER_ITEM
      name: "iageneric:plastic_bag"
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
