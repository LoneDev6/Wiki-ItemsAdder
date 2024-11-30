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
`{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}`

```yaml
items:
  custom_nbt_item:
    display_name: "Just an example"
    permission: examples.custom_nbt_item
    nbt: '{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}'
    resource:
      material: DIAMOND_SWORD
      generate: true
      model_path: "minecraft:item/diamond"
    durability:
      max_custom_durability: 1324
```

### 示例物品名称

```yml
items:
  example_item_custom_name:
    enabled: true
    display_name: example_item_custom_name
    permission: custom.example_item_custom_name
    nbt: "{components:{\"minecraft:custom_name\":'{\"text\":\"Yo This is a test!\"}'},count:1,id:\"minecraft:stone\"}"
```

### 示例物品名称 - 1.20.4 表示方法

```yml
items:
  example_item_custom_name:
    enabled: true
    display_name: example_item_custom_name
    permission: custom.example_item_custom_name
    nbt: "{display:{Name:'{\"text\":\"TEST\", \"font\": \"alt\"}'}}"
```

<figure><img src="../../.gitbook/assets/nbt_custom_item_name_example.png" alt=""><figcaption></figcaption></figure>
