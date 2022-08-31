# 燃料

## 如何将物品设置为燃料？

你只需要使用 **fuel** [行为属性](../item-properties/behaviours.md).

## 栗子

```yaml
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```

栗子中的配置使燃油能够在 **BLAST\_FURNACE** 中使用 **20 ticks** (**1 秒**).&#x20;

### 完整栗子配置

```yaml
  magic_fuel:
    display_name: "%#FE5A00%magic_fuel"
    permission: fuel.magic_fuel
    resource:
      material: COAL
      generate: true
      textures:
      - "minecraft:item/diamond.png"
    behaviours:
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```
