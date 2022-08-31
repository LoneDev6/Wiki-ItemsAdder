# 自定义盔甲

## 自定义盔甲示例

该教程中提供一个示例配置，用于创建包含所有部件的完整盔甲：头盔、胸甲、护腿和靴子.
<br>这是个没有自定义材质的盔甲,该盔甲由 ItemsAdder 根据您指定的颜色生成.

![](<../../../.gitbook/assets/image (46) (1) (1) (1).png>)



```yaml
items:
  ruby_head:
    display_name: Ruby helmet
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 275
    specific_properties:
      armor:
        slot: head
        color: ff0000
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
  ruby_chest:
    display_name: Ruby chestplate
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
        color: ff0000
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
  ruby_legs:
    display_name: Ruby leggings
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 375
    specific_properties:
      armor:
        slot: legs
        color: ff0000
    attribute_modifiers:
      legs:
        armor: 5
        armorToughness: 1
  ruby_boots:
    display_name: Ruby boots
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 325
    specific_properties:
      armor:
        slot: FEET
        color: ff0000
    attribute_modifiers:
      feet:
        armor: 3
        armorToughness: 1
```

### 自定义物品材质

```yaml
items:
  custom_helmet:
    display_name: "Custom Helmet"
    permission: armors.custom_helmet
    resource:
      generate: true
      textures:
       - "item/custom_helmet"
```

### 自定义物品模型

```yaml
items:
  custom_helmet:
    display_name: "Custom Helmet"
    permission: armors.custom_helmet
    resource:
      generate: false
      model_path: "item/custom_helmet"
```

## 在游戏中自定义材质
要为盔甲物品应用自定义材质，你必须指定材质或模型（就像其他自定义物品一样）

{% hint style="warning" %}
#### 更新版本至 ItemsAdder 2.4.17+
{% endhint %}
{% content-ref url="../armors/" %}
[armors](../armors/)
{% endcontent-ref %}

