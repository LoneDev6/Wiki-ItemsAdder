# Furniture collisions

## How can I make a furniture solid?

You can make a furniture solid adding the "solid" attribute and specifying a hitbox \(if you want &gt; 1x1x1\)

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
        hitbox:
          length: 1
          width: 1
          height: 1
          length_offset: 0
          width_offset: 0
          height_offset: 0
```

![](../../../../.gitbook/assets/image%20%2815%29.png)

## Show the hitbox <a id="show-the-hitbox"></a>

{% hint style="info" %}
## Show the hitbox

You can use the command `/iahitbox` to see the hitbox when you pleace a furniture, it's very useful to detect mistakes in the hitbox configuration
{% endhint %}

![](../../../../.gitbook/assets/immagine%20%2863%29%20%282%29%20%283%29%20%282%29%20%281%29%20%281%29.png)

![](../../../../.gitbook/assets/immagine%20%2865%29.png)

![](../../../../.gitbook/assets/immagine%20%2858%29.png)

