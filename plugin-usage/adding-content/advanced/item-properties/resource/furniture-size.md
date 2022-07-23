# 家具尺寸

## 如何调整放置时的家具位置？

如果你想调整家具只需要使用 [Blockbench](creating-3d-models.md) ，并且进行如下操作：

![](../../../../../.gitbook/assets/immagine%20%289%29.png)

1. 点击右上方的 **显示调整**
2. 点击左边工具栏中的 **笑脸（头部）**
3. 点击左边工具栏中的 **盔甲架图标**
4. 将模型 **移动** 至盔甲架 **底部**（此时模型与地面齐平）

### 小型家具

如果出现 **家具尺寸过小** 但你希望你的家具变大并且拥有更大的碰撞箱只需要将该值设置为**false**

如果你想给你的小型家具增加碰撞箱只需要将 `small_hitbox:` 设置为 `true`

{% tabs %}
{% tab title="Big furniture" %}
```yaml
behaviours:
  furniture:
    small_hitbox: false
```
{% endtab %}

{% tab title="Small furniture" %}
```
behaviours:
  furniture:
    small_hitbox: true
```
{% endtab %}
{% endtabs %}

#### 并在 [BlockBench](creating-3d-models.md) 中进行位置调整

{% tabs %}
{% tab title="Big furniture" %}


![](../../../../../.gitbook/assets/immagine%20%288%29.png)
{% endtab %}

{% tab title="Small furniture" %}


![](../../../../../.gitbook/assets/immagine%20%2810%29.png)
{% endtab %}
{% endtabs %}

