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

![](<../../../../.gitbook/assets/image (15).png>)

### Show the hitbox <a href="show-the-hitbox" id="show-the-hitbox"></a>

{% hint style="info" %}
### Show the hitbox

You can use the command `/iahitbox` to see the hitbox when you pleace a furniture, it's very useful to detect mistakes in the hitbox configuration
{% endhint %}

![](<../../../../.gitbook/assets/immagine (63) (2) (3) (2) (1).png>)

![](<../../../../.gitbook/assets/immagine (87).png>)

![](<../../../../.gitbook/assets/immagine (88).png>)

{% hint style="warning" %}
## Hitboxes limitations

* **furnitures** that use `entity: item_frame` **support only hitbox** with `width` and `length` of the **same value**. (example: `width: 2`, `length: 2`, `height: 1`). \
  If you want to have different `width` and `length` use `entity: armor_stand`.
{% endhint %}

