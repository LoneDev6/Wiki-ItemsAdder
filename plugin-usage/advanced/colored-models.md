# 🎨 Colored models

{% hint style="warning" %}
Only available in **ItemsAdder 2.3.11+**
{% endhint %}

{% hint style="info" %}
If you want to make a colored element (for example a custom colored furniture) or a colored vehicle you don't have to make a separate model for each item with different color.
{% endhint %}

## How can I do this?

### 1. open your model with blockbench

![](<../../.gitbook/assets/immagine (79).png>)

### 2. select the face you want to be colored

![](<../../.gitbook/assets/immagine (80).png>)

### 3. use a white/gray texture, for better coloring

### 4. enable the hidden "Tint" feature

![](<../../.gitbook/assets/immagine (81).png>)

![](<../../.gitbook/assets/immagine (83).png>)

### 5. enable the coloring for each face you want to be colored

![](<../../.gitbook/assets/immagine (85).png>)

### 6. set the specific color attribute in your .yml file.

In this example I used `leather_horse_armor`but you can also use `potion`.

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
If you want to use a specific color you can use[ this color picker](https://www.mathsisfun.com/hexadecimal-decimal-colors.html).\
Copy the **decimal** color (hex).
{% endhint %}

### 7. now you can create as many as furnitures you want, just change the color and it will be automatically colored by the game

![](<../../.gitbook/assets/immagine (86).png>)



