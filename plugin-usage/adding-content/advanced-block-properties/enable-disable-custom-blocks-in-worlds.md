---
icon: ban
---

# 在世界中启用/禁用自定义方块

你可以在某些世界中禁用自定义方块，这将阻止插件生成自定义区域文件。

默认情况下，自定义方块在所有世界中启用。

## 所有规则

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

## 示例

### 在所有世界中启用

{% code title="config.yml" %}
```yaml
blocks:
  worlds:
    - "*"
```
{% endcode %}

### 在所有世界中启用但不在地狱世界中启用

{% code title="config.yml" %}
```yaml
blocks:
  worlds:
    - "*"
    - "!*_nether"
```
{% endcode %}
