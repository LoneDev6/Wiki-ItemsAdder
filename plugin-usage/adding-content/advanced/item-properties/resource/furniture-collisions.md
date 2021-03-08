# Столкновение с мебелью

## Как сделать мебель полноценным блоком?

Вы можете сделать ее полноценным блоком при помощи параметра "solid".

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
        solid: true #   <-----
```

![](../../../../../.gitbook/assets/image%20%2815%29.png)

