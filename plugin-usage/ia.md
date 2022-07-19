---
描述: /ia 菜单设置
---

# 📃 合成菜单

## 菜单设置和“全部”类别

`ia_gui.yml` 文件中包含有关 `/ia`  GUI 的设置。\
并且包含 ItemsAdder 的所有分类 以及显示 **"all（全部）"** 物品 

{% hint style="info" %}
默认的Itemsadder资源包分类配置位于: `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`
{% endhint %}

## 创建一个自定分类

如果你想创建一个自定的分类，你需要添加一个新的yml文件至你的[命名空间]中(adding-content/basic-concepts/namespace/).\
栗子:

```yaml
info:
  namespace: your_namespace
categories:
  armors:
    enabled: true
    icon: "itemsadder:ruby_head"
    name: 'Armors'
    permission: "ia.menu.armors"
    #[可选设置] 如果未设置，将会以 `ia_gui.yml` 为中的设置为默认设置
    font_image:
      name: "mcguis:blank_menu"
      x_position_pixels: -16
    #[可选设置]. 如果未设置，将会以 `ia_gui.yml` 为中的设置为默认设置
    title_position_pixels: 0
    items:
      - "itemsadder:ruby_sword"
      - "itemsadder:ruby_head"
      - "itemsadder:ruby_chest"
      - "itemsadder:ruby_legs"
      - "itemsadder:ruby_boots"
      - "itemsadder:spinel_head"
      - "itemsadder:spinel_chest"
      - "itemsadder:spinel_legs"
```

如果你想玩家只能查看某些分类，只需要给予相应的分类权限即可（该权限在分类中设置（见上述配置））.\
权限栗子: **ia.menu.armors**

{% hint style="info" %}
**font\_image and title\_position\_pixels are optional.**\
****如果未设置，将会以 `ia_gui.yml` 为中的设置为默认设置

此设置能够帮助你为每个分类设置不同的背景
{% endhint %}

{% hint style="success" %}

当 **分类** 不相同 但具有 **相同的名称** 的物品 **将会被合并在一起**
假如你有两种关于“剑”的分类（sowrd1,sword2）.在你使用**/ia**打开菜单时可以查看到自动合并在一起的分类，而非两种不同的分类
{% endhint %}
