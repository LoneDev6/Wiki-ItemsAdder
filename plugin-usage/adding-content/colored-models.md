---
icon: fill-drip
---

# Colored models

{% hint style="info" %}
### Why?

To make a colored element or a colored vehicle you don't have to make a separate model for each item with a different color.

For example a custom colored furniture.
{% endhint %}

## How can I do this?

### 1. open your model with Blockbench

![](<../../.gitbook/assets/immagine (37).png>)

### 2. select the face you want to be colored

![](<../../.gitbook/assets/immagine (76).png>)

### 3. use a white/gray texture, for better coloring

### 4. enable the hidden "Tint" feature

![](<../../.gitbook/assets/immagine (34).png>)

![](<../../.gitbook/assets/immagine (91).png>)

### 5. enable the coloring for each face you want to be colored

![](<../../.gitbook/assets/immagine (108).png>)

### 6. set the specific color attribute in your .yml file.

<details>

<summary>Click here to read the old way</summary>

In this example I used `leather_horse_armor` but you can also use `potion`.

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

#### Getting colors

* **Decimal** colors using [this tool](https://www.mathsisfun.com/hexadecimal-decimal-colors.html)

- Colors from this list
  * `WHITE`
  * `SILVER`
  * `GRAY`
  * `BLACK`
  * `RED`
  * `MAROON`
  * `YELLOW`
  * `OLIVE`
  * `LIME`
  * `GREEN`
  * `AQUA`
  * `TEAL`
  * `BLUE`
  * `NAVY`
  * `FUCHSIA`
  * `PURPLE`
  * `ORANGE`

</details>

<details>

<summary>Click here to read the modern way (1.21.4+)</summary>

{% hint style="warning" %}
This requires ItemsAdder 4.0.13 and Minecraft 1.21.4+ (both client and server).
{% endhint %}

```yaml
  orange_modern_lamp:
    name: Orange Modern Lamp
    graphics:
      color: ORANGE
      model: item/template_modern_lamp
```

Read more on the [modern coloring tutorial](colored-items.md).

</details>

### 7. now you can create as many as models you want, just change the color and it will be automatically colored by the game

![](<../../.gitbook/assets/immagine (105).png>)
