---
icon: helmet-battle
---

# Armors

{% hint style="danger" %}
ItemsAdder 4.0.9 或更高版本可用。\
需要 Minecraft 1.21.2 或更高（客户端及服务端）。

旧版教程见此：[普通盔甲](armors-old/simple-armor.md) 或 [带纹理的盔甲](armors-old/textured-armor.md).
{% endhint %}

## 纹理配置

```yaml
equipments:
  my_armor_1:
    type: armor
    layer_1: armor/my_armor_1/layer_1
    layer_2: armor/my_armor_1/layer_2
```

`equipment` 是控制游戏内如何显示玩家身上的盔甲的属性。

在该目录下创建纹理层文件：`contents/my_armor_tutorial/textures/armor/my_armor_1` .

<figure><img src="../../.gitbook/assets/armor_textures_preview.png" alt=""><figcaption></figcaption></figure>

## 物品配置

本例我会展示如何创建一个**胸甲**，其他部件也可使用相同步骤。

```yaml
  my_armor_1_chestplate:
    name: My Armor 1 Chestplate
    resource:
      generate: true
      texture: item/my_armor_1_chestplate
      material: IRON_CHESTPLATE
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial:my_armor_1
      slot_attribute_modifiers:
        armor: 1
```

如你所见，我将 `material` 属性设置为 `IRON_CHESTPLATE`。

我也将 `equipment.id` 属性设置为 `my_armor_tutorial:my_armor_1`。\
这会加载我们先前创建好的装备设置。

## 背包物品纹理

创建物品纹理，放入如下目录：\
`contents/my_armor_tutorial/textures/item`。

<figure><img src="../../.gitbook/assets/image (72).png" alt=""><figcaption></figcaption></figure>

![](<../../.gitbook/assets/image (42) (1) (1).png>)

## 进阶：自定义 3D 头盔

由于 Minecraft 的限制，目前仅有头盔支持 3D 模型。

```yaml
  my_armor_1_helmet_3d:
    name: My Armor 1 Helmet 3D
    resource:
      generate: false
      model_path: armor/my_armor_1_helmet_3d
      material: IRON_HELMET
    durability:
      max_durability: 165
    equipment:
      slot_attribute_modifiers:
        armor: 2.5
```

{% hint style="warning" %}
不要在 `equipment` 中设置任何 `id`，否则会使用普通纹理，而非自定义的 `model_path`。
{% endhint %}

<figure><img src="../../.gitbook/assets/image (58).png" alt=""><figcaption></figcaption></figure>

### 前例对应的完全配置

<details>

<summary>点击阅读配置文件</summary>

```yaml
info:
  namespace: my_armor_tutorial
equipments:
  my_armor_1:
    type: armor
    layer_1: armor/my_armor_1/layer_1
    layer_2: armor/my_armor_1/layer_2
items:
  my_armor_1_helmet:
    name: My Armor 1 Helmet
    resource:
      generate: true
      texture: item/my_armor_1_helmet
      material: IRON_HELMET
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial:my_armor_1
      slot_attribute_modifiers:
        armor: 2.5
  my_armor_1_chestplate:
    name: My Armor 1 Chestplate
    resource:
      generate: true
      texture: item/my_armor_1_chestplate
      material: IRON_CHESTPLATE
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial:my_armor_1
      slot_attribute_modifiers:
        armor: 1
  my_armor_1_leggings:
    name: My Armor 1 Leggings
    resource:
      generate: true
      texture: item/my_armor_1_leggings
      material: IRON_LEGGINGS
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial:my_armor_1
      slot_attribute_modifiers:
        armor: 2.5
  my_armor_1_boots:
    name: My Armor 1 Boots
    resource:
      generate: true
      texture: item/my_armor_1_boots
      material: IRON_BOOTS
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial:my_armor_1
      slot_attribute_modifiers:
        armor: 2.5

```

</details>

{% file src="../../.gitbook/assets/my_armor_tutorial (1).zip" %}

## 动画化/发光盔甲

当前创建自定义盔甲的方法不支持动画化/发光盔甲。\
要创建动画化或发光纹理，你需要使用[旧版方法](armors-old/textured-armor.md) (使用着色器)。

## **高清盔甲纹理**

我不建议在这个方块游戏中使用高清纹理，也可以创建高清的分辨率，但要确保比例与原版盔甲纹理相同。

<mark style="color:red;">Size must be a power of 2</mark>, for example: 64x32, 128x64, 256x128, 512x256.&#x20;

## 多版本兼容

{% hint style="warning" %}
该自定义盔甲功能仅在客户端与服务器版本 1.21.2 及以上时可用。

如果你的服务器正在使用 **ViaVersion** 或其他类似插件，可以使用该方法进行解决。但这有一定缺点，并会被视为过时功能，我不推荐这么做。
{% endhint %}

你需要同时创建 `equipments` 与 `armors_rendering` 属性。

* `armors_rendering` 是老方法（使用自定义着色）
* `equipments` 是新方法（使用原版属性）

```yaml
info:
  namespace: my_armor_tutorial_legacy_fix
equipments:
  my_armor_legacy_fix_1:
    type: armor
    layer_1: armor/my_armor_legacy_fix_1/layer_1
    layer_2: armor/my_armor_legacy_fix_1/layer_2
legacy_armor_renderings:
  my_armor_legacy_fix_1_shader:
    layer_1: armor/my_armor_legacy_fix_1/layer_1
    layer_2: armor/my_armor_legacy_fix_1/layer_2
    color: "570e11"
```

你需要将各盔甲部位的材质设为 `LEATHER`，本例中为 `LEATHER_CHESTPLATE`。

你需要在前例中设置 `equipment.legacy_armor_rendering_id` 与 `equipment.id`。

```yaml
  my_armor_legacy_fix_1_chestplate:
    name: My Armor 1 Chestplate Legacy Fix
    resource:
      generate: true
      texture: item/my_armor_legacy_fix_1_chestplate
      material: LEATHER_CHESTPLATE
    durability:
      max_durability: 165
    equipment:
      id: my_armor_legacy_fix_1
      legacy_armor_rendering_id: my_armor_legacy_fix_1_shader
      slot_attribute_modifiers:
        armor: 1
```

### 进阶：自定义 3D 模型

当前在 Minecraft 1.21.1 及以下版本，仅正常物品（非头盔）支持 3D 模型。

因此，为了支持过时客户端，你必须使用 `hat` `behaviour`。

```yaml
  my_armor_1_helmet_3d:
    name: My Armor 1 Helmet 3D
    resource:
      generate: false
      model_path: armor/my_armor_1_helmet_3d
      material: IRON_HELMET
    durability:
      max_durability: 165
    equipment:
      slot_attribute_modifiers:
        armor: 2.5
```

### 前例对应的完全配置

<details>

<summary>点击阅读配置文件</summary>

```yaml
info:
  namespace: my_armor_tutorial_legacy_fix
equipments:
  my_armor_legacy_fix_1:
    type: armor
    layer_1: armor/my_armor_legacy_fix_1/layer_1
    layer_2: armor/my_armor_legacy_fix_1/layer_2
armors_rendering:
  my_armor_legacy_fix_1_shader:
    layer_1: armor/my_armor_legacy_fix_1/layer_1
    layer_2: armor/my_armor_legacy_fix_1/layer_2
    color: "570e11"
items:
  my_armor_legacy_fix_1_helmet:
    name: My Armor 1 Helmet Legacy Fix
    resource:
      generate: true
      texture: item/my_armor_legacy_fix_1_helmet
      material: LEATHER_HELMET
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial_legacy_fix:my_armor_legacy_fix_1
      slot_attribute_modifiers:
        armor: 2.5
    specific_properties:
      armor:
        slot: head
        custom_armor: my_armor_legacy_fix_1_shader
  my_armor_legacy_fix_1_chestplate:
    name: My Armor 1 Chestplate Legacy Fix
    resource:
      generate: true
      texture: item/my_armor_legacy_fix_1_chestplate
      material: LEATHER_CHESTPLATE
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial_legacy_fix:my_armor_legacy_fix_1
      slot_attribute_modifiers:
        armor: 1
    specific_properties:
      armor:
        slot: chest
        custom_armor: my_armor_legacy_fix_1_shader
  my_armor_legacy_fix_1_leggings:
    name: My Armor 1 Leggings Legacy Fix
    resource:
      generate: true
      texture: item/my_armor_legacy_fix_1_leggings
      material: LEATHER_LEGGINGS
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial_legacy_fix:my_armor_legacy_fix_1
      slot_attribute_modifiers:
        armor: 2.5
    specific_properties:
      armor:
        slot: legs
        custom_armor: my_armor_legacy_fix_1_shader
  my_armor_legacy_fix_1_boots:
    name: My Armor 1 Boots Legacy Fix
    resource:
      generate: true
      texture: item/my_armor_legacy_fix_1_boots
      material: LEATHER_BOOTS
    durability:
      max_durability: 165
    equipment:
      id: my_armor_tutorial_legacy_fix:my_armor_legacy_fix_1
      slot_attribute_modifiers:
        armor: 2.5
    specific_properties:
      armor:
        slot: feet
        custom_armor: my_armor_legacy_fix_1_shader
  my_armor_legacy_fix_1_helmet_3d:
    name: My Armor Legacy Fix 1 Helmet 3d
    resource:
      generate: false
      model_path: armor/my_armor_legacy_fix_1_helmet_3d
      material: PAPER
    durability:
      max_durability: 165
    behaviours:
      hat: true
    attribute_modifiers:
      head:
        armor: 2.5

```

</details>

{% file src="../../.gitbook/assets/my_armor_tutorial_legacy_fix.zip" %}