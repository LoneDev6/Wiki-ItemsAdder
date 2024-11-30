# 剑

{% hint style="danger" %}
如果你还没有创建命名空间，请按照[命名空间教程](../creating-your-namespace.md)进行操作。
{% endhint %}

## 我的第一把剑

这是一个示例剑（记得将 myitems 命名空间更改为你想要的）

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

### 设置纹理

{% page-ref page="../item-properties/resource/" %}



