# 盔甲材质

如果你想为盔甲添加自定义材质而不仅仅是自定义颜色,你可以配合**Optifine**来实现.

### 下载[示例插件](https://www.spigotmc.org/resources/optifine-example-custom-textured-armor-itemsadder-addon.87846/)

## 自定义材质盔甲的栗子

![](../../../.gitbook/assets/image%20%2823%29.png)

![](../../../.gitbook/assets/image%20%2825%29.png)

### 第一步

请创建你的**自定义分组** \(如果你还没有创建\),请[查看这个教程](../beginners/creating-your-namespace.md).  
在这个教程里,我的**自定义**分组为`mystuff`.

### 第二步

把你为**物品**创建的**材质**放到文件:`plugins\ItemsAdder\data\resource_pack\assets\mystuff\textures\item\example_1`里

![](../../../.gitbook/assets/image%20%2821%29.png)

### 第三步

为**穿上的装备**套上一个**材质** \(当玩家穿戴它时\).你可以从这里得到一个**示例**:  
`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\models\armor\leather_layer_1.png`  
`plugins\ItemsAdder\data\resource_pack\assets\minecraft\textures\models\armor\leather_layer_2.png`

按照你想要的效果**修改**这个**材质**\(使用Paint.NET, Photoshop, GIMP或类似的软件\)并保存为`layer_1.png`和`layer_2.png`

### 第四步

创建`optifine`文件,我们要为**穿戴盔甲**提供**材质**: `plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine`

{% hint style="warning" %}
你**必须**在`minecraft`文件下创建这个文件,你**不能**把`optifine`文件创建在**物品配置**下面\(在这个栗子里是`mystuff`\),这是optifine的一个限制.
{% endhint %}

### Step 5

现在把之前创建的**纹理**\(`layer_1.png`和`layer_2.png` \)放在这个文件里:`plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\mystuff\armors\example_1\entity`

现在你的文件里是这样的:

![](../../../.gitbook/assets/image%20%2824%29.png)

### Step 6

**创建**该文件在: **boots.properties**, **chestplate.properties**, **helmet.properties**, **leggings.properties**内创建`plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\mystuff\armors\example_1\entity`

每个文件都必须包含这个.properties文件:

```elixir
nbt.itemsadder.namespace=mystuff
nbt.itemsadder.id=example_chestplate_1

type=armor
items=diamond_chestplate
texture.diamond_layer_1=layer_1
texture.diamond_layer_2=layer_2
```

对于每一个`.properties`文件,你必须**改变第1行**.把第一行设置为**你的分组名称**,而不是"mystuff",**第二行**是你的**物品ID**,**第五行**是**物品类型**\(`diamond_leggings` , `diamond_boots` ....\)

现在你的文件里应该是这样的:

![](../../../.gitbook/assets/image%20%2826%29.png)

### 第七步

**创建一个文件**里面包含这个自定义盔甲的配置文件.把它命名为**example\_1.yml**,并把它**放在**在你的分组里,这个例子放在: `plugins\ItemsAdder\data\items_packs\mystuff\example_1.yml`

### Step 8

在**yml文件**中添加配置文件.如你们所见,我决定拿Minecraft的DIAMOND盔甲作为基础,无需任何修改,Optifine将会自动给它套上材质.

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
如果你要**创建另一个包含其他装备的分组**.**强烈推荐**你写的和我写的栗子结构**相同**,以避免出现**错误**.

比如,如果你创建了一个新的分组,命名为`space_armors`.你会有这样的**optifine**文件:`plugins\ItemsAdder\data\resource_pack\assets\minecraft\optifine\cit\space_armors\armors`
{% endhint %}

