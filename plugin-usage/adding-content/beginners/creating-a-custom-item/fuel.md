# Топливо

## Как сделать предмет пригодным для использования в качестве топлива?

Это очень просто!  
Вы просто должны использовать топливо [behaviour](../../advanced/item-properties/behaviours.md).

## Пример

```yaml
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```

Например, эта конфигурация сделает этот предмет пригодным для использования в **ДОМЕННОЙ ПЕЧИ** и он сгорит за **20 тиков** \(**1 секунду**\).

### Полный пример элемента

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
