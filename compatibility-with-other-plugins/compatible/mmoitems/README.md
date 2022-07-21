---
描述: Itemsadder可与MMOItems进行兼容
---

# MMOItems

在此下载[**MMOItems**](https://www.spigotmc.org/resources/mmoitems-premium.39267/)

### 在此可下载本教程中的资源包

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" %}

## 如何让 MMOItem 使用 ItemsAdder 的自定义物品

### 使用指令 /mmoitems 浏览

![](<../../../.gitbook/assets/immagine (25).png>)

### 创建一个新的 MMOItem

![](<../../../.gitbook/assets/immagine (26).png>)

![](<../../../.gitbook/assets/immagine (29).png>)

### 添加想要的属性,例如魔法伤害，等数值

![](<../../../.gitbook/assets/immagine (28).png>)

### 打开预览界面 /mmoitems browse 查看物品是否完成

![](<../../../.gitbook/assets/immagine (30).png>)

在这里我们已经完成了一半，接下来就是与ia的关联了

### 创建.yml文件设置ItemsAdder物品

![](<../../../.gitbook/assets/immagine (32).png>)

{% hint style="success" %}

如下所示，我设置了名为 **`mmoitem`**  的新属性以及 **`type`** 和 **`id`** 子项 
这个属性以及子项用于适配 **mmoitem的物品** 只需要对应于mmoitem创建的物品 即可

{% endhint %}

```yaml
info:
  namespace: mmoitems_example
items:
  test:
    display_name: ""
    permission: example_item
    mmoitem:    
      type: SWORD
      id: TEST
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/test.png
    durability:
      max_custom_durability: 1324
```

### 应用材质

![](<../../../.gitbook/assets/immagine (31).png>)

### 获得物品

使用指令 `/iaget mmoitems_example:test` 来获取你刚刚制作的物品

![](<../../../.gitbook/assets/immagine (33).png>)

![](<../../../.gitbook/assets/immagine (34).png>)
