---
描述: 该教程将会指导你创建你的第一个家具
---

# 创建一个家具

## 什么是家具?

家具作为一种装饰物品，它可以是有碰撞箱的、能够发光的（如台灯..），能够用作坐椅，并且具有其他的功能.

## 创建一个简单的家具

### 创建配置文件

第一步, 请在 [命名空间](../basic-concepts/namespace/) 文件夹下创建一个配置文件. 比如在下列例子中命名的 `furniture_example.yml`.

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
        small: true
        light_level: 13
```
{% endcode %}

正如您所见, 我创建了一些带有特殊配置的物品.

`behaviours` 属性有一个特殊的子属性, 命名为 `furniture`, 该属性会让 ItemsAdder 识别为这是一个可放置的家具模型.

让我们再添加一些配置:

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
        small: true
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

我在该例子中添加了一些配置, 指定了家具可放置的位置 (只能在 `floor` 上), 碰撞箱 [`hitbox`](furniture-collisions.md) 的尺寸和 `放置`/`破坏` 时发出的声音.

{% hint style="info" %}
默认情况下, 碰撞箱的尺寸为 1x1x1, 因此实际上并不需要指定这些选项.

仅当模型的尺寸大于 1x1x1 时您才需要更改它.

假如您有一件模型尺寸为 1x2x1 的家具, 您可以这样设置:

```yaml
    hitbox:
      height: 2
      length: 1
      width: 1
```
{% endhint %}

最终结果如下:

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
        small: true
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

请打开 [BlockBench](../item-properties/resource/creating-3d-models.md) 并创建一个 _"Java Block/Item（java 方块/物品）"_.

![](<../../../.gitbook/assets/image (49) (1) (1) (1).png>)

现在将创建您的模型, 在以下示例中, 我会为一个（丑陋的）小型台灯建模.

![](<../../../.gitbook/assets/image (47) (1) (1) (1).png>)

{% hint style="warning" %}
重要: 确保模型的北面与你想要模型正对的方向相反.\

或者将选项添加到您的配置文件中 `opposite_direction: true`
（建议直接添加属性，避免为每个模型进行单独设置）
{% endhint %}

编辑模型在玩家手中的显示方式:

![](<../../../.gitbook/assets/image (46) (1) (1).png>)

![](<../../../.gitbook/assets/image (48) (1) (1) (1).png>)

### 配置模型在游戏中的显示

#### 用于盔甲架时

您需要选择 **head icon（头部）**, 然后选择 **small armorstand（小型盔甲架）:**

![](<../../../.gitbook/assets/image (41) (1) (1) (1).png>)

然后您需要将模型向下移动, 以确保它和盔甲架的底座匹配:

![](<../../../.gitbook/assets/image (42) (1).png>)

#### 用于物品展示框时

您需要在显示中选择 **Image icon（展示框）**, 然后设置 Z-offset（Z轴偏移） 的值为 `-16`.\
因为在隐形展示框中的物品位置会比平时略低一些，将Z轴偏移数值设置为 `-16` 能够使家具完美贴合地面（或其他方块上）.

### 导出您的模型

现在, 让我们把模型导出到指定的文件夹中, 在本示例中, 我在配置文件设置了这个选项: `model_path: lamp`, 所以您必须保存 .json 文件于此路径中: `ItemsAdder\data\resource_pack\assets\myitems\models\lamp.json`.

要实现这一点, 请点击 "File（文件）", 然后点击 "Export Model（导出模型）", 最后点击 "Export Block/Item Model（导出 方块/物品 模型）". 在新窗口中, 跳转到要保存模型的路径, 为其命名并确认本次更改.

### 保存此次更改

现在, 请运行命令 `/iazip` (如果需要的话, 请遵循 [资源包托管](../../resourcepack-hosting/) 的内容), 然后使用命令: `/iaget myitems:lamp` 获取物品并放置它.

![](<../../../.gitbook/assets/image (50) (1) (1) (1) (1) (1).png>)

![](<../../../.gitbook/assets/image (44) (1) (1).png>)
