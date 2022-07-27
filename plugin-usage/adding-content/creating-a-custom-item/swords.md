# 剑

{% hint style="danger" %}
如果你不知道该如何创建命名空间 [请阅读该教程](../creating-your-namespace.md).
{% endhint %}

## 我的第一把自定义剑

示例 自定义的剑\(记得将 myitems 命名空间更改为您想要的命名空间\)

```yaml
info:
  namespace: myitems
items:
  mysword:
    display_name: My Sword
    permission: mysword
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/example_item.png
    durability:
      max_custom_durability: 1324
  
```

### 设置材质

{% page-ref page="../item-properties/resource/" %}



