# 修改/ia菜单

## 界面设置和"All"类别

ia\_gui.yml 包括与 `/ia` 指令的菜单相关的设置.  
也包括"All"类别的选项来显示所有ItemsAdder的物品

{% hint style="info" %}
默认的类型设置可以在以下目录里找到：`plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`
{% endhint %}

## 创建自定义类型

如果你想创建一个子类项的类型,你需要把这部分内容添加到你自己写好的 .yml 文件中 [命名空间](adding-content/beginners/basic-concepts/namespace.md).  
这是个栗子:

```yaml
info:
  namespace: your_namespace
categories:
  armors:
    enabled: true
    icon: "itemsadder:ruby_head"
    name: 'Armors'
    permission: "ia.menu.armors"
    #THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    font_image:
      name: "mcguis:blank_menu"
      x_position_pixels: -16
    #THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
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

如果你想让玩家在菜单中看到这一类型,记得给他们权限.比如： **ia.menu.armors**

{% hint style="info" %}
**font\_image and title\_position\_pixels are optional.**  
Plugin will take the one in `ia_gui.yml` if not set.
{% endhint %}

{% hint style="success" %}
**相同名字类型**即便命名空间不同,**也会被合并**,当你给两个文件都设置类型名为“Sword”,那么在**/ia**打开的菜单中,你会在Sword这一类型里看到两个文件中写的物品.
{% endhint %}

