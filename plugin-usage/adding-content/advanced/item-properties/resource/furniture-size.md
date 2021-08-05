# 家具的尺寸

## How can I adjust the furniture position when placed?

如果你想调整模型,你只需像往常一样使用[Blockbench](creating-3d-models.md)来进行调整:

![](../../../../../.gitbook/assets/immagine%20%289%29.png)

1. 点击右边的**display**
2. 点击左边的**armorstand icon[盔甲架标志]**
3. 点击左边的**smile face[笑脸]** \(**head**\)
4. 把你的模型**移到**盔甲架的**底部**\(它算是**ground[地面]**\)

### 太小的家具

如果你的家具是**太小的话**这是个特性.你想让它**更大的话**,并且有更大的**打击箱**,只要把这个设置为**false**. 
If you instead want a **small furniture** with small hitbox just set it to true
如果你想要一个**小的家具**和小的打击箱,只需将其设置为true.
{% tabs %}
{% tab title="Big furniture" %}
```yaml
behaviours:
  furniture:
    small_hitbox: false
```
{% endtab %}

{% tab title="Small furniture" %}
```text
behaviours:
  furniture:
    small_hitbox: true
```
{% endtab %}
{% endtabs %}

#### and set this is [BlockBench](creating-3d-models.md)

{% tabs %}
{% tab title="Big furniture" %}
![](../../../../../.gitbook/assets/immagine%20%288%29.png)
{% endtab %}

{% tab title="Small furniture" %}
![](../../../../../.gitbook/assets/immagine%20%2810%29.png)
{% endtab %}
{% endtabs %}

