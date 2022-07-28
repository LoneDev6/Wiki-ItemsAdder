# 自定义 NBT

## 为物品添加自定义 NBT 属性

你可以指定自定义的 NBT 属性标签合并到自定义物品中.

## 示例

例如，下列标签合并到 自定义物品 中.

&#x20;`{my-custom-nbt-tag:"hello this is a custom tag", another-tag:"useless"}`

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

{% hint style="danger" %}
## 提醒

确保提供有效的 **NBT** (**json**) 否则将会失效.

### 版本需求 **ItemsAdder 2.4.18+** 
{% endhint %}
