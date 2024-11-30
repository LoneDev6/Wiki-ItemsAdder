---
icon: gas-pump
---

# 燃料

## 创建物品

{% hint style="warning" %}
你必须使用在原版 Minecraft 中已经可以被熔炼的材料，否则它将无法工作。\
例如：`STICK`，`COAL`，`CHARCOAL` 等。
{% endhint %}

例如，这个配置将使该物品可用于 **高炉** 并将在 **20 ticks**（**1秒**）内燃烧完。

```yaml
  magic_fuel:
    display_name: "%#FE5A00%magic_fuel"
    permission: fuel.magic_fuel
    resource:
      material: COAL
      generate: false
      model_path: item/diamond
    behaviours:
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```
