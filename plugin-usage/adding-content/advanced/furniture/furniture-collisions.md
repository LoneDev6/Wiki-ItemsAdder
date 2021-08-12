# 家具的硬度

## 我如何才能使家具变得坚固?

你可以在家具中加入"solid"属性并指定一个破坏方块\(如果你想要的&gt;1x1x1\)

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

## 显示破坏方块 <a id="show-the-hitbox"></a>

{% hint style="info" %}
## 显示破坏方块

你可以使用`/iahitbox`指令来查看当你取得一个家具时的命中率,这对检测命中率配置里的错误超级有用
{% endhint %}

![](../../../../.gitbook/assets/immagine%20%2863%29%20%282%29%20%281%29.png)

![](../../../../.gitbook/assets/immagine%20%2865%29.png)

![](../../../../.gitbook/assets/immagine%20%2858%29.png)

