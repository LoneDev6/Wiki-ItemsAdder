---
description: Ia可与MMOItems进行兼容
---

# MMOItems

在此下载[**MMOItems**](https://www.spigotmc.org/resources/mmoitems-premium.39267/)

### 在此可下载本教程中的资源包

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" %}

## 给MMOItem套Ia物品的材质包

### 使用指令 /mmoitems 浏览

![](<../../../.gitbook/assets/immagine (25).png>)

### 创建一个新的 MMOItem

![](<../../../.gitbook/assets/immagine (26).png>)

![](<../../../.gitbook/assets/immagine (29).png>)

### 添加想要的属性,例如魔法伤害等...

![](<../../../.gitbook/assets/immagine (28).png>)

### 在 /mmoitems 中预览MMOItem

![](<../../../.gitbook/assets/immagine (30).png>)



### 创建.yml文件设置ItemsAdder物品

![](<../../../.gitbook/assets/immagine (32).png>)

{% hint style="success" %}
如下,可以看到我设置了 **`mmoitem`** 项.在里头还有**`type`**项跟**`id`**项.\
设置**`mmoitem`** 项就是**指定**这**两物品**是一个东西.
{% endhint %}

```yaml
info:
  namespace: mmoitems_example
items:
  test:
    display_name: ""
    permission: example_item
    mmoitem:    #在这捏=w=[瑞瑞看不到]
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

### 创建.png材质

![](<../../../.gitbook/assets/immagine (31).png>)

### 获得物品

使用指令 `/iaget mmoitems_example:test` 来获取你刚刚制作的物品

![](<../../../.gitbook/assets/immagine (33).png>)

![](<../../../.gitbook/assets/immagine (34).png>)
