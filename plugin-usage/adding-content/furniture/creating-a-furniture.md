---
描述: Tutorial on how to create your first furniture
---

# Creating a furniture

## 什么是家具?

家具作为一种装饰物品，它可以是实心的、发光的，用作椅子并且具有其他的功能.

## 创建一个简单的家具

### 创建配置文件

第一步, 请在 [namespace](../basic-concepts/namespace/) 文件夹下创建一个配置文件. 比如在下列例子中命名的 `furniture_example.yml`.

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

请打开 [BlockBench](../item-properties/resource/creating-3d-models.md) 并创建一个 _"Java Block/Item"_.

![](<../../../.gitbook/assets/image (49) (1) (1) (1).png>)

现在将创建您的模型, 在以下示例中, 我会为一个（丑陋的）小型台灯建模.

![](<../../../.gitbook/assets/image (47) (1) (1) (1).png>)

{% hint style="warning" %}
重要: make sure the north is opposite of where you want the model to face.

或者将选项添加到您的配置文件中 `opposite_direction: true`
{% endhint %}

编辑模型在玩家手中的显示方式:

![](<../../../.gitbook/assets/image (46) (1) (1).png>)

![](<../../../.gitbook/assets/image (48) (1) (1) (1).png>)

### Configure how the model is shown ingame

#### Using Armor Stand

You have to select the **head icon** and then **small armorstand:**

![](<../../../.gitbook/assets/image (41) (1) (1) (1).png>)

Then you have to shift your model down until it matches the armorstand base:

![](<../../../.gitbook/assets/image (42) (1).png>)

#### Using Item Frames

You have to select the **Image icon** and then set the Z-offset to `-16`.\
This will display the model slighly of the block the Item Frame is attached to, but will be seamless when an invisible Item Frame is used. This is because of how items in invisible Item Frames are slightly lower than usual.

### Export the model

Now let's save the model file into the correct folder, in this case I set this property in the yml configuration file: `model_path: lamp`, so you have to save the .json file inside this path: `ItemsAdder\data\resource_pack\assets\myitems\models\lamp.json`.

To achieve this, click on "File" followed by "Export Model" and finally "Export Block/Item Model". In the new window, head over to the path you want to save your model under, give it the right name and confirm the changes.

### Saving changes

Now run `/iazip` (and follow the [hosting tutorial](../../resourcepack-hosting/) if needed), then obtain the item and place it: `/iaget myitems:lamp`.

![](<../../../.gitbook/assets/image (50) (1) (1) (1) (1) (1).png>)

![](<../../../.gitbook/assets/image (44) (1) (1).png>)
