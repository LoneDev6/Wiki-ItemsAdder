---
icon: hammer-crash
---

# Anvil repair

## Example

This recipe allows you to let players repair an item in anvil using a material.

```yaml
recipes:
  anvil_repair:
    emerald_sword:
      enabled: true
      permission: iasurvival.swords.emerald_sword
      ingredient: EMERALD_BLOCK
      item: iasurvival:emerald_sword
```

In this example I created an `anvil_repair` recipe called `emerald_sword`.
