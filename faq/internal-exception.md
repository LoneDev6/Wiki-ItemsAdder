# 内部异常

## 第一个解决方法

尝试更新到最新的 ProtocolLib，如果你使用 ViaVersion 也请更新它。

## 第二个解决方法（如果需要）

`Internal Exception: io.netty.handler.codec.DecoderException: java.lang.IndexOutOfBoundsException: index: 5, length: 13632 (expected: range(0,30))`

![](<../.gitbook/assets/image (48).png>)

打开 **ItemsAdder** 的 `config.yml` 文件，并将此值更改为 `false`：`optimized-packets: false`

{% code title="config.yml" %}
```yaml
  custom-entitites:
    optimized-packets: false
```
{% endcode %}
