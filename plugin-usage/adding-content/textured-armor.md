---
icon: helmet-battle
---

# 盔甲

{% hint style="danger" %}
仅适用于 ItemsAdder 4.0.9 或更高版本。\
需要 Minecraft 客户端和服务器 1.21.2 或更高版本。

对于旧版教程，请阅读这里：[简单盔甲](armors-old/simple-armor.md) 或 [纹理盔甲](armors-old/textured-armor.md)。
{% endhint %}

## 穿戴纹理配置

```yaml
equipments:
  my_armor_1:
    type: armor
    layer_1: armor/my_armor_1/layer_1
    layer_2: armor/my_armor_1/layer_2
```

`equipment` 是一个属性，包含了如何在游戏中显示盔甲在玩家身体上的信息。

在文件夹 `contents/my_armor_tutorial/textures/armor/my_armor_1` 中创建纹理文件。

<figure><img src="../../.gitbook/assets/armor_textures_preview.png" alt=""><figcaption></figcaption></figure>

## 物品配置

在这个例子中，我将展示如何创建一个**胸甲**，同样的方法可以用来创建其他盔甲部件。

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

如你所见，我将 `material` 设置为 `IRON_CHESTPLATE`。

我还将 `equipment.id` 属性设置为 `my_armor_tutorial:my_armor_1`。\
这会加载我们之前创建的装备设置。

## 背包物品纹理

创建物品纹理并将其放入文件夹：\
`contents/my_armor_tutorial/textures/item`。

<figure><img src="../../.gitbook/assets/image (72).png" alt=""><figcaption></figcaption></figure>

![](<../../.gitbook/assets/image (42) (1) (1).png>)

## 进阶：自定义 3D 头盔

由于 Minecraft 的限制，目前只有头盔支持 3D 模型。

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
不要在 `equipment` 中设置任何 `id`，否则会使用之前的纹理而不是自定义的 `model_path`。
{% endhint %}

<figure><img src="../../.gitbook/assets/image (58).png" alt=""><figcaption></figcaption></figure>

### 前例的完整配置

<details>

<summary>点击这里查看配置文件</summary>

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

## 动画/发光盔甲

当前的自定义盔甲方法不支持动画和发光纹理。\
要创建动画或/和发光纹理，你必须使用[旧方法](armors-old/textured-armor.md)（使用着色器）。

## **高清盔甲纹理**

我不建议使用高清纹理，因为这是一个方块游戏，可以创建高清高分辨率纹理，但要确保它们具有与原版盔甲层纹理相同的比例。

<mark style="color:red;">尺寸必须是 2 的幂</mark>，例如：64x32、128x64、256x128、512x256。

## 多版本兼容

{% hint style="warning" %}
此自定义盔甲功能仅在 1.21.2 及更高版本的客户端和服务器上可用。

如果你的服务器使用 **ViaVersion** 或类似的插件，有一个简单的解决方案，但有一些缺点，应被视为遗留功能。我不建议使用该功能。
{% endhint %}

你必须创建 `equipments` 和 `armors_rendering` 两个属性。

* `armors_rendering` 是旧方法（使用自定义着色器）
* `equipments` 是新方法（使用原版装备属性）

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

对于每个部件，你必须将材料设置为 `LEATHER`，在这种情况下为 `LEATHER_CHESTPLATE`。

然后你必须将 `equipment.legacy_armor_rendering_id` 和 `equipment.id` 设置为之前创建的属性。

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

### 进阶：自定义 3D 头盔

目前在 Minecraft 1.21.1 及以下版本中，由于 Minecraft 的限制，只有普通物品（不是头盔）支持 3D 模型。

在这种情况下，为了支持旧版客户端，你必须使用 `hat` `behaviour`。

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

### 前例的完整配置

<details>

<summary>点击这里查看配置文件</summary>

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

## 将旧版盔甲转换为新装备标签

### 模式 1

此设置允许你附加新的装备设置，并同时使用旧的着色器方法和新的方法，因此旧版客户端仍然可以看到盔甲，即使它们不是 1.21.2+。

{% code title="config.yml" %}
```yml
advanced:
  legacy_shader_armor_conversion:
    append_new_equipment_tag:
      enabled: true
```
{% endcode %}

### 模式 2

此选项将完全转换盔甲以使用新的装备标签。请注意，旧版客户端将不再看到盔甲（低于 1.21.2）。

{% code title="config.yml" %}
```yml
advanced:
    completely_convert_to_new_equipment_tag:
      enabled: true
      new_armor_material: IRON
```
{% endcode %}