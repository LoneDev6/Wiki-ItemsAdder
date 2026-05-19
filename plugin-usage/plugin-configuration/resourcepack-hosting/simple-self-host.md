# Simple Self Host

{% hint style="warning" %}
This feature requires ItemsAdder 4.0.17 or greater
{% endhint %}

This is the new method to apply the resourcepack. It's plug-and-play, it doesn't require any setup or port forwarding.

Just disable all other hosting methods and enable `simple_self_host` in your `config.yml`, then generate the resourcepack using `/iazip`.

If you want you can specify your server address + port, in the `server_address` field, but it shouldn't be necessary.

{% code title="config.yml" %}
```yaml
hosting:
  simple_self_host:
    enabled: true
    server_address: auto
    optimization:
      block_non_game_requests: true
      max_downloads_per_ip: 5
      max_speed_in_megabyte_ps: 30
```
{% endcode %}
