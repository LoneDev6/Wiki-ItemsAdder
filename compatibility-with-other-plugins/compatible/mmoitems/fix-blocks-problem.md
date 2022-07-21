# Fix blocks problem

{% hint style="warning" %}
**MMOItems**方块他没法兼容**ItemsAdder**.
{% endhint %}

## 如何使用MMOitem方块

在这之前请打开**ItemsAdder**中的`config.yml`.<br>然后禁用 **REAL** 方块(蘑菇方块).

{% code title="config.yml" %}
```yaml
  disable-REAL: true [把该项改为true. =w=]
```
{% endcode %}

{% hint style="info" %}
若你启用了该项,你将无法创建类型为: **REAL** 的自定义方块.

其他物品增加的自定义方块类型将可以继续使用.(举个栗子:REAL\_NOTE).
{% endhint %}
