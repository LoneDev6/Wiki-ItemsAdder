# Internal Exception

`Internal Exception: io.netty.handler.codec.DecoderException: java.lang.IndexOutOfBoundsException: index: 5, length: 13632 (expected: range(0,30))`

![](<../.gitbook/assets/image (48).png>)

Open `config.yml` of **ItemsAdder** and change this value to `false`: `optimized-packets: false`

{% code title="config.yml" %}
```yaml
  custom-entitites:
    enabled: true
    emotes: true
    interval-rendering-packets-ticks: 1
    optimized-packets: false
```
{% endcode %}
