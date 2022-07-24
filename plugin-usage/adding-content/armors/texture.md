---
描述: 自定义盔甲材质
---

# 材质

{% hint style="danger" %}
使用 `vanilla_1_17` 功能 版本需求： ItemsAdder 2.4.22+ 以及 Minecraft 1.17+.\
要使1.17以下的版本能够显示自定义盔甲，你可以开启 `optifine` 属性，这样子就能在新老客户端上都能显示自定义盔甲
（ItemsAdder 可以自动将自定义盔甲添加到 1.16 及更低版本）
{% endhint %}

{% hint style="warning" %}
当你使用了 **Optifine** 时仍然显示 **错误** 的材质 [请阅读该页面](../../../faq/armors-bugs/textures-broken-by-shaders-mod.md).
{% endhint %}

## 创建盔甲渲染器

{% hint style="info" %}
盔甲渲染器是一项包含如何在游戏中显示自定义盔甲信息的设置
{% endhint %}

```yaml
info:
  namespace: myitems
armors_rendering:
  my_armor:
    color: "#d60000"
    layer_1: armor/my_armor/layer_1
    layer_2: armor/my_armor/layer_2
    use_color: false
```

该配置指定了游戏将如何显示示例中的盔甲

{% hint style="warning" %}

即使不会显示在盔甲上,你也必须在盔甲渲染器中指定一个颜色! 因为颜色就像自定义盔甲的 ID.
{% endhint %}

`use_color` disables the recoloring of the armor using the specified `color: "#d60000"`. In some cases you may want to recolor the armor using the specified `color`, so you will have to set it to `true`. **** This option will also make the item (in inventory) not colored automatically anymore.

`color` is the color attribute of this armor. It acts like an unique identifier for the armor (and will tint the armor if `use_color` is `true`). Use this website to get a valid color: [https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)

Now I create the two PNG files inside the `data/resource_pack/assets/myitems/textures/armor/my_armor/` folder.

![](<../../../.gitbook/assets/image (45) (1) (1) (1) (1).png>)

{% hint style="info" %}
### 高清盔甲材质

你可以制作高分辨率的自定义盔甲&#x20;

只需要注意分辨率需要与原来的贴图大小具有相同的比例.&#x20;

例如： 64x32, 128x64, 256x128, 512x256..... <mark style="color:red;">注意！！尺寸大小必须是2的倍数.</mark>
{% endhint %}

### 制作一件盔甲

例如：如下配置创建一个胸甲（你只需要按照相同的方法自行创建其他盔甲部件）

```yaml
  my_armor_chestplate:
    display_name: "My Armor Chestplate"
    permission: my_armor_chestplate
    resource:
      generate: true
      textures:
      - item/my_armor/chestplate
    durability:
      max_custom_durability: 602
    specific_properties:
      armor:
        slot: chest
        custom_armor: my_armor
    attribute_modifiers:
      chest:
        armor: 8
        armorToughness: 3
```

The `custom_armor` property is important, it makes the plugin use the previous textures setting (`armors_renderer`) for this armor piece.

In this case I didn't specify any `color` in the `specific_properties` field of the armor piece because it's already specified in the `custom_armor` property.

Now I create the item texture and I put it inside the `data\resource_pack\assets\myitems\textures\item\my_armor\` folder (in this example I created also a new folder called `my_armor` to better organize the resourcepack).

![](<../../../.gitbook/assets/image (40) (1) (1).png>)

![](<../../../.gitbook/assets/image (42) (1) (1).png>)

### 动态材质

你还可以制作动态的盔甲材质

![](../../../.gitbook/assets/ezgif-7-3b3a255fe802.gif)

要创建动态盔甲材质，你需要制作一张包含所有动画帧的贴图

<br>每一帧必须在前一帧的下方， 如下是一个3帧动画的示例：

![layer\_1](<../../../.gitbook/assets/layer\_1 (1).png>)

![layer\_2](../../../.gitbook/assets/layer\_2.png)

现在，让我们编辑盔甲渲染属性以支持动画

```yaml
info:
  namespace: myitems
armors_rendering:
  my_armor:
    color: "#d60000"
    layer_1: armor/my_armor/layer_1
    layer_2: armor/my_armor/layer_2
    use_color: false
    animation:
      interpolation: true
```

你可以发现我设置了 `interpolation: true` 属性，该属性可以使得动画更加平滑

动画默认速度为 24，但是你可以自定义一个觉得合适的速度值，

```yaml
    animation:
      speed: 30
      interpolation: true
```

### 发光材质

你还可以为其盔甲设置发光材质（并且可以同时设置贴图动画以及发光材质）
```yaml
info:
  namespace: myitems
armors_rendering:
  my_armor:
    color: "#d60000"
    layer_1: armor/my_armor/layer_1
    layer_2: armor/my_armor/layer_2
    emissive_1: armor/my_armor/emissive_1
    emissive_2: armor/my_armor/emissive_2
    use_color: false
```

In this case I want to make the previous animation emissive, I want it to glow in the dark.\
You have to make 2 textures in order to make the textures glow. \
The **transparent** part **won't glow** while the colored part will glow.

You basically just have to copy and paste your texture and erase the parts you don't want to glow.
