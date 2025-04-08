---
description: 教程：如何创建你的第一个家具
icon: lamp-floor
---

# 家具

家具是一种装饰物品，可以是实心的、发光的、用作椅子的，并且可以具有其他功能。

## 创建一个简单的家具

### 创建配置文件

第一步是在你的 **namespace** 文件夹中创建一个配置文件。\
在这个例子中，我将其命名为 `furniture_example.yml`。

{% code title="furniture_example.yml" %}
```yaml
info:
  namespace: myitems
items:
  lamp:
    display_name: "Lamp"
    permission: myitems.decorative.lamp
    lore:
    - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture:
        light_level: 13
```
{% endcode %}

如你所见，我创建了具有一些特殊属性的物品。

`behaviours` 属性有一个特殊的子属性 `furniture`，这个属性告诉 ItemsAdder 这个物品是一个可放置的家具模型。

让我们添加一些更多的设置：

{% code title="furniture_example.yml" %}
```yaml
  lamp:
    display_name: "Lamp"
    permission: myitems.decorative.lamp
    lore:
    - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture:
        light_level: 13
        solid: true
        placeable_on:
          floor: true
          ceiling: false
          walls: false
        hitbox:
          height: 1
        sound:
          place:
            name: block.metal.fall
          break:
            name: block.metal.break
```
{% endcode %}

我添加了一些属性，在这种情况下，我指定了家具可以放置的位置（仅在`地面`），[`碰撞箱`](advanced-furniture-properties/furniture-collisions.md)大小和 `放置`/`破坏` 声音。

{% hint style="info" %}
默认情况下，碰撞箱是 1x1x1，所以不需要指定这些选项。

仅当模型大于 1x1x1 时才指定它们。

例如，如果你有一个 1x2x1 的家具，你可以这样设置：

```yaml
    hitbox:
      height: 2
      length: 1
      width: 1
```
{% endhint %}

最后结果：

{% code title="furniture_example.yml" %}
```yaml
info:
  namespace: myitems
items:
  lamp:
    display_name: "Lamp"
    permission: myitems.decorative.lamp
    lore:
    - lore-decorative-item
    resource:
      material: PAPER
      generate: false
      model_path: lamp
    behaviours:
      furniture:
        light_level: 13
        solid: true
        placeable_on:
          floor: true
          ceiling: false
          walls: false
        hitbox:
          height: 1
        sound:
          place:
            name: block.metal.fall
          break:
            name: block.metal.break
```
{% endcode %}

### 创建模型文件

现在打开 **BlockBench** 并创建一个 _"Java Block/Item"_.

![](<../../.gitbook/assets/image (49) (1) (1) (1).png>)

现在创建你的模型，在这个例子中，我正在建模一个丑陋的极简的灯。

![](<../../.gitbook/assets/image (47) (1) (1) (1).png>)

{% hint style="warning" %}
重要提示：确保北向与模型面向的方向相反。

或者在 YML 配置中添加属性 `opposite_direction: true`
{% endhint %}

编辑模型在玩家手中的显示方式：

![](<../../.gitbook/assets/image (46) (1) (1).png>)

![](<../../.gitbook/assets/image (48) (1) (1) (1).png>)

### 配置模型在游戏中的显示方式

#### 使用 `armor_stand`

你需要选择**头部图标**然后**小型盔甲架**：

![](<../../.gitbook/assets/image (41) (1) (1) (1).png>)

然后你需要将模型向下移动，直到它与盔甲架底座匹配：

![](<../../.gitbook/assets/image (42) (1).png>)

#### 使用 `item_display`

你需要选择**图像图标**然后将 Z 偏移设置为 **-16**。 这将使模型显示在物品框附着的方块稍微偏移的位置，但在使用隐形物品框时将无缝显示。这是因为隐形物品框中的物品比通常情况下稍微低一些。

#### 使用 `item_frame`

与 `item_display` 相同。

### 导出模型

现在将模型文件保存到正确的文件夹中，在这种情况下，我在 yml 配置文件中设置了这个属性：`model_path: lamp`，所以你必须将 .json 文件保存到这个路径：contents/myitems/models/lamp.json。

要实现这一点，点击“文件”，然后点击“导出模型”，最后点击“导出方块/物品模型”。在新窗口中，前往你想要保存模型的路径，给它起一个合适的名字并确认更改。

### 保存更改

运行 `/iazip` (如有需要，请查看 [托管教程](../resourcepack-hosting/))。

运行此命令以查看物品：`/iaget myitems:lamp`.

![](<../../.gitbook/assets/image (50) (1) (1) (1) (1) (1).png>)

![](<../../.gitbook/assets/image (44) (1) (1).png>)
