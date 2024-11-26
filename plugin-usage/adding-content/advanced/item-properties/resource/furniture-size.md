# 家具尺寸

## 我如何调整放置时家具的尺寸？

如果你想调节，你需要使用 [Blockbench](creating-3d-models.md) 以及：

![](../../../../../.gitbook/assets/immagine%20%289%29.png)

1. 点击右侧的**display**
2. 点击左侧的**盔甲架图标**
3. 点击左侧的**笑脸**（头）
4. 将模型**移动**到盔甲架**底部**（即**地面**）

### 非常小的家具

如果你的家具**非常小**，但你又想让它模型连同碰撞箱都**大点**，将此设置为 `false`。
If you instead want a **small furniture** with small hitbox just set it to true如果你想要一个带有小型碰撞箱的**小家具**，则设置为 `true`。

{% tabs %}
{% tab title="大家具" %}
```yaml
behaviours:
  furniture:
    small_hitbox: false
```
{% endtab %}

{% tab title="小家具" %}
```
behaviours:
  furniture:
    small_hitbox: true
```
{% endtab %}
{% endtabs %}

#### and set this is [BlockBench](creating-3d-models.md)

{% tabs %}
{% tab title="大家具" %}


![](../../../../../.gitbook/assets/immagine%20%288%29.png)
{% endtab %}

{% tab title="小家具" %}


![](../../../../../.gitbook/assets/immagine%20%2810%29.png)
{% endtab %}
{% endtabs %}

