---
描述: 手动编辑 Optifine 来创建自定义盔甲材质
---

# 自定义盔甲材质(旧方法)

## 在 1.16 中自定义盔甲材质 (或更低版本)

如果你想为盔甲添加自定义材质而不仅仅是自定义颜色,你可以配合 **Optifine** 来实现.

### 如果你想要使用自动创建请参阅该教程

{% content-ref url="../armors/" %}
[armors](../armors/)
{% endcontent-ref %}

## 自定义盔甲材质 (手动)

### [下载该附属](https://www.spigotmc.org/resources/optifine-example-custom-textured-armor-itemsadder-addon.87846/)

![](<../../../.gitbook/assets/image (22).png>)

![](<../../../.gitbook/assets/image (23).png>)

### 步骤 1

创建你的 **命名空间** (如果还未创建), [ 参阅该教程](../basic-concepts/namespace/creating-your-namespace.md).\
在该示例中 **命名空间** 名为 `mystuff`

### 步骤 2

在 `plugins\ItemsAdder\data\resource_pack\assets\mystuff\textures\item\example_1` 中放入 自定义盔甲的物品材质.

![](<../../../.gitbook/assets/image (24).png>)

### 步骤 3

为 **盔甲** 创建 **自定义材质** . 你可以在下方路径中获取一个 **模板** :\
`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\models\armor\leather_layer_1.png`\
`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\models\armor\leather_layer_2.png`

使用图像编辑软件 **制作** 你的自定义盔甲 **材质贴图** 并保存为文件，例如：`layer_1.png` 和 `layer_2.png`&#x20;

### 步骤 4

创建 `optifine` 文件夹，我们将在 `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine` 路径中加入自定义盔甲的材质贴图

{% hint style="warning" %}
使用 optifine 导入自定义盔甲有一个限制：.\
你 **必须在 `minecraft` 文件夹中创建 `optifine` 文件夹**，你不能在 **命名空间** 中（在本示例中为 `mystuff`）创建 `optifine` 文件夹，因为optifine无法进行读取.
{% endhint %}

### 步骤 5

现在将之前制作的 **盔甲材质贴图**(`layer_1.png` and `layer_2.png` ) 放入 `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\mystuff\armors\example_1\entity`

现在应该拥有如下文件:

![](<../../../.gitbook/assets/image (25).png>)

### 步骤 6

在 `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\mystuff\armors\example_1\entity` 文件夹中 **创建** 下列文件:
<br> **boots.properties**, **chestplate.properties**, **helmet.properties**, **leggings.properties**

每个文件都必须包含下列内容：

```elixir
nbt.itemsadder.namespace=mystuff
nbt.itemsadder.id=example_chestplate_1

type=armor
items=diamond_chestplate
texture.diamond_layer_1=layer_1
texture.diamond_layer_2=layer_2
```

对于每个 `.properties` 文件，你应该更改文件中的配置：
`nbt.itemsadder.namespace` ：为盔甲的命名空间
`nbt.itemsadder.id` ： 为盔甲的ID
`items` ：为盔甲的部件(`diamond_leggings` , `diamond_boots` ....)
`texture.diamond_layer_X` ：为盔甲的自定义材质

现在应该拥有如下文件:

![](<../../../.gitbook/assets/image (26).png>)



### 步骤 7

创建 **.yml**文件 来配置该自定义盔甲，将其命名为  **example_1.yml** 并放在命名空间的文件夹下.\
该示例的路径为：`plugins\ItemsAdder\data\items_packs\mystuff\example_1.yml`

### 步骤 8

**添加内容** 至 **.yml** 文件中.如配置所示，我将盔甲的 **源材质** 设置为 钻石盔甲，但并没有指定任何颜色，因为使用 optifine 会自动为其应用材质.

```yaml
info:
  namespace: mystuff
items:
  example_helmet_1:
    display_name: Example
    permission: example_helmet_1
    resource:
      generate: true
      material: DIAMOND_HELMET
      textures:
      - item/example_1/helmet.png
    durability:
      max_custom_durability: 275
    specific_properties:
      armor:
        slot: head
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
  example_chestplate_1:
    display_name: Example
    permission: example_chestplate_1
    resource:
      generate: true
      material: DIAMOND_CHESTPLATE
      textures:
      - item/example_1/chestplate.png
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
  example_leggings_1:
    display_name: Example
    permission: example_leggings_1
    resource:
      generate: true
      material: DIAMOND_LEGGINGS
      textures:
      - item/example_1/leggings.png
    durability:
      max_custom_durability: 375
    specific_properties:
      armor:
        slot: legs
    attribute_modifiers:
      legs:
        armor: 5
        armorToughness: 1
  example_boots_1:
    display_name: Example
    permission: example_boots_1
    resource:
      generate: true
      material: DIAMOND_BOOTS
      textures:
      - item/example_1/boots.png
    durability:
      max_custom_durability: 325
    specific_properties:
      armor:
        slot: feet
    attribute_modifiers:
      feet:
        armor: 3
        armorToughness: 1
```

### 完成!

## 提醒:

{% hint style="warning" %}
如果你要创建另一个包含其他装备的命名空间.强烈推荐模仿栗子的结构尽量使其相同,以避免出现错误.
\
例如，你创建了一个名为 `space_armors` 的新命名空间，
在 **optifine** 中你会有  `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\space_armors\armors` 这样的文件夹.
{% endhint %}
