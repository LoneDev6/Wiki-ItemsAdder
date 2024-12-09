---
icon: binary
---

# 自定义物品 NBT

## 向物品添加自定义 NBT 属性

你可以指定自定义 **NBT** 属性以合并到自定义物品中。

{% hint style="danger" %}
确保提供有效的 **NBT** (`json`)，否则它将无法工作！
{% endhint %}

{% hint style="warning" %}
### 注意

确保使用 `\` 转义 `"` 字符。\
在将字符串用于 YML 之前，请使用我的 [转义/取消转义工具](https://escape-mc-components.lonedev.workers.dev/) 来转义字符串。
{% endhint %}

{% hint style="success" %}
此功能支持旧版 NBT 和新的 1.20.5+ 现代 NBT！\
如果需要，它会自动转换旧版 NBT。

[更多信息](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20-5) 关于 1.20.5+ 的更改（向下滚动）。
{% endhint %}

### 示例自定义属性

例如，我想将这些标签合并到我的物品中：\
`nbt: '{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}'`

```yaml
items:
  custom_nbt_item_data:
    display_name: "Injected nbt data into this item"
    lore:
    - 'test item: custom_nbt_item_data'
    - 'test line from IA config 1'
    - 'test line from IA config 2'
    - 'test line from IA config 3'
    permission: examples.test
    nbt: '{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}'
    resource:
      material: DIAMOND_SWORD
      generate: false
      model_path: "minecraft:item/diamond"
    durability:
      durability: 650
      max_durability: 1324
    attribute_modifiers:
      mainhand:
        attackDamage: 30
        attackSpeed: 25
```

### 示例 NBT 与物品名称组件

`nbt: "{components:{"minecraft:custom_name":'{"text":"TEST", "font": "alt", "italic":false}', "minecraft:custom_data": {"bro":'asd'}}}"`

```yaml
  custom_nbt_item_custom_name:
    enabled: true
    display_name: example_item_custom_name
    lore:
    - 'test item: custom_nbt_item_custom_name'
    - 'test line from IA config 1'
    - 'test line from IA config 2'
    - 'test line from IA config 3'
    permission: custom.test
    nbt: "{components:{\"minecraft:custom_name\":'{\"text\":\"TEST\", \"font\": \"alt\", \"italic\":false}', \"minecraft:custom_data\": {\"bro\":'asd'}}}"
    resource:
      material: DIAMOND_SWORD
      generate: false
      model_path: "minecraft:item/diamond"
    durability:
      durability: 650
      max_durability: 1324
    attribute_modifiers:
      mainhand:
        attackDamage: 30
        attackSpeed: 25
```

### 1.20.4 组件 - 请勿使用

{% hint style="warning" %}
这是旧版方式，请勿使用。
{% endhint %}

`nbt: "{display:{Name:'{"text":"TEST", "font": "alt", "italic":false}'}}"`

```yml
items:
  custom_nbt_item_custom_name_legacy_nbt:
    enabled: true
    display_name: custom_nbt_item_custom_name_legacy_nbt
    lore:
    - 'test item: custom_nbt_item_custom_name_legacy_nbt'
    - 'test line from IA config 1'
    - 'test line from IA config 2'
    - 'test line from IA config 3'
    permission: custom.test
    nbt: "{display:{Name:'{\"text\":\"TEST\", \"font\": \"alt\", \"italic\":false}'}}"
    resource:
      material: DIAMOND_SWORD
      generate: false
      model_path: "minecraft:item/diamond"
    durability:
      durability: 650
      max_durability: 1324
    attribute_modifiers:
      mainhand:
        attackDamage: 30
        attackSpeed: 25
```

