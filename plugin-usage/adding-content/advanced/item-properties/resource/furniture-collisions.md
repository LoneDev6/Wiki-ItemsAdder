# 家具碰撞

### 我如何把家具做的结实一点？

你可以通过添加 `solid` 属性来使家具无法穿过。

```yaml
  table:
    display_name: display-name-table
    permission: table
    lore:
      - 'lore-decorative-item'
    resource:
      material: OAK_WOOD
      generate: false
      model_path: item/table
    behaviours:
      furniture:
        small_hitbox: true
        solid: true
```

![](../../../../../.gitbook/assets/image%20%2815%29.png)

