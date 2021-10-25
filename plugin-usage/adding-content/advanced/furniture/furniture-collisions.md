# 家具的硬度

### 我要如何做才能使家具变得坚固呢?

你可以在家具中加入"solid"属性并添加一个破坏方块(如果你想要的>1x1x1)

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
        small: true
        solid: true
        entity: armor_stand
        hitbox:
          length: 1
          width: 1
          height: 1
          length_offset: 0
          width_offset: 0
          height_offset: 0
```

![](<../../../../.gitbook/assets/image (15).png>)

## 显示破坏方块 <a href="show-the-hitbox" id="show-the-hitbox"></a>

{% hint style="info" %}
## 显示破坏方块

你可以使用`/iahitbox`指令来查看当你取得一个家具时的命中率,这对检测命中率配置里的错误超级有用.
{% endhint %}

![](<../../../../.gitbook/assets/immagine (63) (2) (3) (2) (1) (8).png>)

![](<../../../../.gitbook/assets/immagine (87).png>)

![](<../../../../.gitbook/assets/immagine (88).png>)

{% hint style="warning" %}
## Hitboxes limitations

* **furnitures** that use `entity: item_frame` **support only hitbox** with `width` and `length` of the **same value**. (example: `width: 2`, `length: 2`, `height: 1`).  If you want to have different `width` and `length` use `entity: armor_stand`.
{% endhint %}
