# 高级设置

{% hint style="warning" %}
本指南需要 **ItemsAdder** 3.6.2+ 版本
{% endhint %}

在 `config.yml` 中，你可以找到一些关于自定义实体的高级设置。

```yaml
  custom-entitites:
    # Enable or disable custom entities
    enabled: true
    # Enable or disable emotes (need /iazip to apply)
    emotes: true
    expert_users:
      fast_packets_creation: true
      bundle_packets: false
      delay_packets: false
```

### `fast_packets_creation`

使用优化的数据包代码代替 **ProtocolLib**。

### `bundle_packets`

使用新的 1.19.4+ 捆绑包。\
减少显示在屏幕左上角的 `rx` 数量。\
一些详细的基准测试可在[此页面](../../../../compatibility-with-other-plugins/compatible/modelengine.md#network-traffic-comparison)找到。

<figure><img src="../../../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
这不会对客户端和服务器的性能带来任何已知的提升。\
我非常确定捆绑包是无用的，但有些人要求这个功能，所以我实现了它们。

实际上，由于每个包发送时会多出两个包（捆绑开始和捆绑结束），它们增加了带宽使用量。\
更多信息请参见[协议 wiki](https://wiki.vg/Protocol#Bundle\_Delimiter)。
{% endhint %}

### `delay_packets`

此选项会延迟发送包以降低 CPU 处理，但会在某些服务器上产生卡顿的动画。\
在不了解副作用的情况下，不应启用此选项。
