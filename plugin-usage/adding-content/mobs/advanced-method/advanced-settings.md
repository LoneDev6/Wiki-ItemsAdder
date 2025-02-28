# Advanced settings

In `config.yml` you can find some advanced settings about custom entities.

```yaml
  custom-entitites:
    # Enable or disable custom entities
    enabled: true
    # Enable or disable emotes (need /iazip to apply)
    emotes: true
    expert_users:
      delay_packets: false
```

### `delay_packets`

This option delays the sending of packets to lower down the CPU processing, but creates stuttering animations on some servers.

This is not something you should enable without knowing the side effects.
