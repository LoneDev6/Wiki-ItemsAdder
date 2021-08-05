# 家具的硬度

## 我要如何做才能使家具变得坚固?

你可以通过添加"solid"属性来使家具成为一个实体.

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

