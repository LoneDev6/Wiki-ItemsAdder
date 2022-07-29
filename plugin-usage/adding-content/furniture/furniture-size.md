# 家具尺寸

{% hint style="warning" %}
### 建议使用小型家具 (小型盔甲架)
{% endhint %}

## 放置后如何调整家具的位置?

如果您想调整家具位置, 您只需要和往常一样使用 [Blockbench](../item-properties/resource/creating-3d-models.md):

![](<../../../../.gitbook/assets/immagine (8).png>)

1. 点击右上方的 **显示调整**
2. 点击左边工具栏中的 **笑脸（头部）**
3. 点击左边工具栏中的 **盔甲架图标**
4. 将模型 **移动** 至盔甲架 **底部**（此时模型与地面齐平）

### 小型家具

如果您的家具 **太小**, 但您想要 **更大** 的尺寸和更大的 **碰撞箱**, 只需要将其设置为 **false**.\
相反地, 如果您想要一个带有 小型碰撞箱 的 **小型家具**, 请设置为 true.

{% hint style="info" %}
提示: 碰撞箱不受限制, 您可以设置一个更大的碰撞箱, 该碰撞箱与实体本身无关.

设置碰撞箱的属性:

```yaml
    hitbox:
      height: 2
      length: 3
      width: 3
```
{% endhint %}

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

#### 并在 [BlockBench](../item-properties/resource/creating-3d-models.md) 中设置

{% tabs %}
{% tab title="Big furniture" %}


![](<../../../../.gitbook/assets/immagine (9).png>)
{% endtab %}

{% tab title="Small furniture" %}


![](<../../../../.gitbook/assets/immagine (10).png>)
{% endtab %}
{% endtabs %}
