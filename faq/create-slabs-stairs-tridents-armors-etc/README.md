# Create slabs, stairs, tridents, armors...

### 可放置的自定义台阶、楼梯

{% hint style="warning" %}
 除了方块以外无法创建具有碰撞箱的自定义台阶，楼梯和可放置的物品.
 问题是Minecraft会因为这个[bug](https://bugs.mojang.com/browse/MC-54254)会将其显示为透明方块（如果想实现自定义台阶、楼梯必须得等mojang修复该bug）
 还有另一个重要的原因是由于Minecraft的限制 无法更改方块的碰撞箱
{% endhint %}

### Tridents

{% hint style="warning" %}
You can't create custom model for thrown tridents as it's a Minecraft bug I can't fix: [https://bugs.mojang.com/browse/MC-155286](https://bugs.mojang.com/browse/MC-155286)
{% endhint %}

### Armors

{% hint style="warning" %}
Minecraft 1.16 (and lower) doesn't allow you to add custom textures / custom 3D models to armors in any way (you can but only with Optifine).\
You can make them colored but you cannot change the texture.

### Custom textured armors 1.17

To create custom textured armors in 1.17 you can follow the [tutorial here](../../plugin-usage/adding-content/armors/texture.md) (No Optifine).

### Custom textured armors 1.16 (and lower)

ItemsAdder can automatically add custom armors to 1.16 version and lower, but only if the user has Optifine installed. Read [more here](../../plugin-usage/adding-content/armors/texture.md).
{% endhint %}

### Elytra

{% hint style="warning" %}
Minecraft doesn't allow you in any way to add custom textures / custom 3D models to elytras.
{% endhint %}
