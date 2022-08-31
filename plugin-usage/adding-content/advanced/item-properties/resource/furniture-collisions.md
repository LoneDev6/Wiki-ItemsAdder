# 家具碰撞箱

### 如何给家具设置碰撞箱

你只需要通过添加 `solid` 属性使家具变为具有碰撞箱的实体

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

