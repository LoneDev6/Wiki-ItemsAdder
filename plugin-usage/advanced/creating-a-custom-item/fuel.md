# דלק

##כיצד להפוך פריט לדלקן?

זה ממש פשוט!\
כל מה שצריך להוסיף זה את [ההתנהגות](../item-properties/behaviours.md).

## לדוגמא

```yaml
      fuel: 
        burn_ticks: 20
        machines:
          - BLAST_FURNACE
```

לדוגמה, הגדרה זו תהפוך את הפריט הזה לשימוש ב-**BLAST\_FURNACE** ותישרף ב-**20 טיקים** (**1 שנייה**).&#x20;

### פריט לדוגמה

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
