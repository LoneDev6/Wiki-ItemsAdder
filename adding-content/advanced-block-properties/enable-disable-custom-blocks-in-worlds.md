---
icon: ban
---

# Enable/Disable custom blocks in worlds

You can disable custom blocks in some worlds, this will stop the plugin from generating custom region files.

By default the custom blocks are enabled in all worlds.

## All Rules

{% code title="config.yml" %}
```yaml
blocks:
  worlds:
    - "*" # Enable in all worlds
    - "world_*" # Enable in worlds starting by `world_`
    - "*_nether" # Enable in worlds ending by `_nether`
    - "!my_custom_world" # Disable in world named `my_custom_world`
```
{% endcode %}

## Examples

### Enable in all worlds

{% code title="config.yml" %}
```yaml
blocks:
  worlds:
    - "*"
```
{% endcode %}

### Enable in all worlds but not in nether world

{% code title="config.yml" %}
```yaml
blocks:
  worlds:
    - "*"
    - "!*_nether"
```
{% endcode %}
