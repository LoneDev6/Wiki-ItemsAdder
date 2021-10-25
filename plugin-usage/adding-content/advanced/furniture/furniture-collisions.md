# Столкновения мебели

## Как сделать мебель твердой?

Вы можете сделать мебель твердой, добавив атрибут "solid" и указав хитбокс \(если вы хотите &gt; 1x1x1\).

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

![](../../../../.gitbook/assets/image%20%2815%29.png)

## Показать хитбокс <a id="show-the-hitbox"></a>

{% hint style="info" %}
## Показать хитбокс

Вы можете использовать команду `/iahitbox`, чтобы увидеть хитбокс при создании мебели, это очень полезно для обнаружения ошибок в настройке хитбокса.
{% endhint %}

![](../../../../.gitbook/assets/immagine%20%2863%29%20%282%29%20%283%29%20%282%29%20%281%29%20%284%29.png)

![](../../../../.gitbook/assets/immagine%20%2865%29.png)

![](../../../../.gitbook/assets/immagine%20%2858%29.png)

{% hint style="warning" %}
* **мебель**, использующая `entity: item_frame` **поддерживает только хитбокс** с `width` и `length` одинакового значения**. \(пример: `width: 2`, `length: 2`, `height: 1`\).  Если вы хотите иметь разные `ширину` и `длину`, используйте `entity: armor_stand`. 
  {% endhint %}

