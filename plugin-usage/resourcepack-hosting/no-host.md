# No Host

{% hint style="warning" %}
## Expert users only!
{% endhint %}

Enable this if you want to handle the resourcepack upload and hosting on your own.

Reasons to do that:

* You could do that with a custom plugin of some sort
* You have a Bungeecord network that already applies the resourcepack from another server, for example the lobby.

{% code title="config.yml" %}
```yaml
resource-pack:
# ...
  hosting:
    no-host:
      enabled: false
```
{% endcode %}
