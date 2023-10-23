# Advanced settings

{% hint style="warning" %}
This guide requires **ItemsAdder** 3.6.2+
{% endhint %}

In `config.yml` you can find some advanced settings about custom entities.

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

Use the optimized packets code instead of **ProtocolLib**.

### `bundle_packets`

Use the new 1.19.4+ bundle packets. \
Cuts down the amount of `rx` shown in the top left corner of the screen.\
Some detailed benchmarks are done available [this page](../../../../compatibility-with-other-plugins/compatible/modelengine.md#network-traffic-comparison).

<figure><img src="../../../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
This doesn't introduce any known performance gain on both the client and the server. \
I am very sure that the bundle packets are useless but some people requested this feature so I implemented them.

They actually increase the bandwidth usage due to the fact that 2 more packets are sent per-packet (bundle start and bundle end).\
More info on the [protocol wiki](https://wiki.vg/Protocol#Bundle\_Delimiter).
{% endhint %}

### `delay_packets`

This option delays the sending of packets to lower down the CPU processing, but creates stuttering animations on some servers.\
This is not something you should enable without knowing the side effects.
