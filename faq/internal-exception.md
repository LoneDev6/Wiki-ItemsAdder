# Internal Exception

`Internal Exception: io.netty.handler.codec.DecoderException: java.lang.IndexOutOfBoundsException: index: 5, length: 13632 (expected: range(0,30))`

![](<../.gitbook/assets/image (48).png>)
打开 **ItemsAdder** 的 `config.yml` 并将`optimized-packets`更改为 `false`
<br>-> `optimized-packets: false`

{% code title="config.yml" %}
```yaml
  custom-entitites:
    enabled: true
    emotes: true
    interval-rendering-packets-ticks: 1
    optimized-packets: false
```
{% endcode %}
