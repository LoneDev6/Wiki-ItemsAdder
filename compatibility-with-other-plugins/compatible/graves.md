# Graves

## [הורידו](https://www.spigotmc.org/resources/graves.74208/)

## איך להוסיף תאימות?

אפשרו את התאימות

```yaml
itemsadder: # https://www.spigotmc.org/resources/itemsadder.73355/
  enabled: true # Should ItemsAdder integration be enabled.
```

ערכו את אפשרות ברירת המחדל. ניתן גם להתאים את הפריטים במידת הצורך (וודאו שהם מהסוג הנכון, השתמשו בריהוט ברהיטים והשתמשו בבלוק בהגדרת הבלוק הבלוק).

```yaml
  ##############
  # ItemsAdder #
  ##############
  # The option requires ItemsAdder, you must have this installed to use models.
  itemsadder:
    furniture:
      enabled: true # Should we use ItemsAdder Furniture?
      name: "itemsadder:mysterious_stone" # Furniture name.
    block:
      enabled: true # Should we use ItemsAdder Blocks?
      name: "itemsadder:nice_stone" # Block name
```
