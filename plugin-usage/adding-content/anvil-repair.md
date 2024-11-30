---
icon: hammer-crash
---

# 铁砧修复

## 示例

该配方允许你的玩家在铁砧上使用材料修复物品。

```yaml
recipes:
  anvil_repair:
    emerald_sword:
      enabled: true
      permission: iasurvival.swords.emerald_sword
      ingredient: EMERALD_BLOCK
      item: iasurvival:emerald_sword
```

本例中我创建了一个叫做 `emerald_sword` 的 `anvil_repair` 配方。
