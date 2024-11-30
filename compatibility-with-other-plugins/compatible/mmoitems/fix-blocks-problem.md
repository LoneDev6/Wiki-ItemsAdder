# 修复方块问题

{% hint style="warning" %}
**MMOItems** 方块与 **ItemsAdder** 不兼容，反之亦然。
{% endhint %}

## 如何使用MMOItems方块？

你需要打开 **ItemsAdder** 的 `config.yml` 并禁用 **REAL** 方块（蘑菇块）。

{% code title="config.yml" %}
```yaml
blocks:
  # ....
  custom:
    # ....
    mushroom: false
```
{% endcode %}

{% hint style="info" %}
应用该改变后，你将无法创建带有 type：REAL 的 ItemsAdder 方块。

其他的 ItemsAdder 自定义方块类型仍然会生效(如 REAL\_NOTE)。
{% endhint %}
