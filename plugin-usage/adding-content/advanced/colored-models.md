# 彩色的模型

{% hint style="warning" %}
仅在**ItemsAdder 2.3.11+**中可用
{% endhint %}

{% hint style="info" %}
如果你想做一个彩色的物品(比如一个自定义的彩色家具)或彩色的车辆,你就不必为每个物品做一个不同颜色的单独模型.
{% endhint %}

## 我要怎么做?

### 1.用Blockbench打开你的模型

![](<../../../.gitbook/assets/immagine (79).png>)

### 2.选择你想要上色的部分

![](<../../../.gitbook/assets/immagine (80).png>)

### 3.使用白色/灰色材质,以便更好地进行着色

### 4.启用隐藏的"Tint"功能

![](<../../../.gitbook/assets/immagine (81).png>)

![](<../../../.gitbook/assets/immagine (83).png>)

### 5.为你想要着色的每个部分启用着色功能

![](<../../../.gitbook/assets/immagine (85).png>)

### 6.在你的.yml文件中设置特定的颜色

在这个栗子中,我使用了`leather_horse_armor`,但你也可以使用`potion`.

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
如果你想使用一个特别的颜色,你可以选择使用这个[color picker(颜色选择器)](https://www.mathsisfun.com/hexadecimal-decimal-colors.html).\
来获得**十进制**的颜色 (hex).
{% endhint %}

### 7.现在你可以创建你任何你想要的家具,只要你改变设置的颜色,它就会自动的被Itemsadder进行着色.

![](<../../../.gitbook/assets/immagine (86).png>)
