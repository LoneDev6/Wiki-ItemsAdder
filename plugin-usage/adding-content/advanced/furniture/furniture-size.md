# 家具的尺寸

{% hint style="warning" %}
### 建议使用小型家具\(小武器架\)
{% endhint %}

## 如何调整家具放置时的位置?

如果你想调整它的位置,你需要用到[Blockbench](../item-properties/resource/creating-3d-models.md):

![](../../../../.gitbook/assets/immagine%20%289%29.png)

1. 点击右边的**display**
2. 点击左边的**armorstand icon[盔甲架标志]**
3. 点击左边的**smile face[笑脸]** \(**head**\)
4. **移动**到盔甲架的**底部** \(底部代表**地面**\)

### Too small furniture

如果你的家具是**太小的**话,你想让它**更大**,并且有更大的**破坏方块**,只要把这个设置为**false**.
如果你想要一个**小的家具**与**小的命中率**,只需设置为true

{% tabs %}
{% tab title="Big furniture" %}
```yaml
behaviours:
  furniture:
    small: false
```
{% endtab %}

{% tab title="Small furniture" %}
```yaml
behaviours:
  furniture:
    small: true
```
{% endtab %}
{% endtabs %}

#### 并设置了[BlockBench](../item-properties/resource/creating-3d-models.md)

{% tabs %}
{% tab title="Big furniture" %}


![](../../../../.gitbook/assets/immagine%20%288%29.png)
{% endtab %}

{% tab title="Small furniture" %}


![](../../../../.gitbook/assets/immagine%20%2810%29.png)
{% endtab %}
{% endtabs %}

