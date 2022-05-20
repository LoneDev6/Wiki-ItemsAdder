# Creating 3D models

To create custom models I use [BlockBench ](https://blockbench.net/)which is a free, easy to use and amazing tool to make Minecraft model.

{% embed url="https://www.youtube.com/watch?v=aaJ8XgMAOno" %}

## Creating 3D model from a texture

{% embed url="https://www.youtube.com/watch?v=CSWxrAqjrKA" %}

{% hint style="warning" %}
## Important

If you're using a **non-vanilla** texture (your **.png** file) you have to open the **.json** file of your model and do a little edit.

If your model is using a custom texture you have to make sure to put your namespace in front of the texture name.\
For example if you have this 3D model and the texture has this path: `plugins\ItemsAdder\data\resource_pack\assets\my_items\textures\item\custom_item_1.png`

```javascript
 "textures":{
      "0":"item/custom_item_1"
   },
```

you have to add the **namespace** in front of it (`my_items` in my example, you have to use your namespace).

```javascript
 "textures":{
      "0":"my_items:item/custom_item_1"
   },
```
{% endhint %}
