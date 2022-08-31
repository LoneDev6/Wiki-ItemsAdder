# 🎨 模型着色

{% hint style="warning" %}
版本需求：
**ItemsAdder 2.3.11+**
{% endhint %}

{% hint style="info" %}
如果你想制作一些可以染色的物品/模型（比如：家具，车辆），你不需要去复杂的将每个颜色都制作出来，你只需要阅读该教程!
{% endhint %}

## 我该怎么做？

### 1. 在 blockbench 中打开你的模型

![](<../../../.gitbook/assets/immagine (79).png>)

### 2. 选择想要能够进行染色的面

![](<../../../.gitbook/assets/immagine (80).png>)

### 3. 使用 白色/灰色 的材质，来获得更好的染色效果

### 4. 启用隐藏的 'Tint（着色）' 功能

![](<../../../.gitbook/assets/immagine (81).png>)

![](<../../../.gitbook/assets/immagine (83).png>)

### 5. 为你想要具有染色功能的面启用着色功能

![](<../../../.gitbook/assets/immagine (85).png>)

### 6. 在 .yml 中设置特定的颜色属性.

在该示例中，我使用了 `leather_horse_armor` 或者你也可以使用 `potion`

```yaml
  orange_modern_lamp:
    display_name: "Orange Modern Lamp"
    specific_properties:
      leather_horse_armor:
        color: ORANGE
    resource:
      material: LEATHER_HORSE_ARMOR
      generate: false
      model_path: item/template_modern_lamp
```

{% hint style="info" %}
你可以使用[ 该页面获取颜色](https://www.mathsisfun.com/hexadecimal-decimal-colors.html).\
{% endhint %}

### 7. 现在你可以创建任意数量的家具或其他染色物品,只需要在配置中更改颜色，该物品就会被游戏自动着色.

![](<../../../.gitbook/assets/immagine (86).png>)



