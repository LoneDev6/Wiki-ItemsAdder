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
      use_fast_packets: true
      bundle_packets: false
```

### `use_fast_packets: true`

Use the optimized packets code instead of **ProtocolLib**.

### `bundle_packets: false`

Use the new 1.19.4+ bundle packets. \
Cuts down the amount of `rx` shown in the top left corner of the screen.

<figure><img src="../../../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
This doesn't introduce any known performance gain both on client and server. \
I am 90% sure the bundle packets are useless but some people requested this feature so I implemented them.

Actually increase the bandwidth usage due to the fact that 2 more packets are sent per-packet (bundle start and bundle end).\
More info on the [protocol wiki](https://wiki.vg/Protocol#Bundle\_Delimiter).
{% endhint %}
