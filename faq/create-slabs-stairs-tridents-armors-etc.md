# Create slabs, stairs, tridents, armors etc.

### Slabs and stairs

{% hint style="warning" %}
You can't create solid custom slabs and stairs.\
The problem is that Minecraft doesn't allow custom hitboxes for custom blocks.
{% endhint %}

### Tridents

{% hint style="warning" %}
You can't create custom model for thrown tridents as it's a Minecraft bug which I can't fix: [https://bugs.mojang.com/browse/MC-155286](https://bugs.mojang.com/browse/MC-155286)
{% endhint %}

### Armors

{% hint style="warning" %}
Minecraft 1.16 (and lower) doesn't allow you to add custom textures / custom 3D models to armors in any way (you can but only with Optifine).\
You can make them colored but you cannot change the texture.

### **Custom textured armors 1.17**

To create custom textured armors in 1.17 you can follow the [tutorial here](../plugin-usage/adding-content/armors/custom-textured-armor.md) (No Optifine).

### **Custom textured armors 1.16 (and lower)**

ItemsAdder can automatically add custom armors to 1.16 version and lower, but only if the user has **Optifine** installed.\
Just enable it in `config.yml`

```yaml
generate-custom-armors-textures:
  optifine: true
```
{% endhint %}

### Elytra

{% hint style="warning" %}
Minecraft doesn't allow you in any way to add custom textures or custom 3D models to elytras.
{% endhint %}
