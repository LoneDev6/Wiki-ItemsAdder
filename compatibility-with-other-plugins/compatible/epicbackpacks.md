# EpicBackpacks

## [הורידו את הפלאגין כאן](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-epic-backpacks.28981/)

{% hint style="success" %}
כדי ליצור תרמילים שישתמשו בטקסטורת ItemsAdder, עלייכם לפתוח את backpacks.yml (בתיקיית EpicBackpacks) ולהוסיף את זה (אחד עבור כל תרמיל שאתם רוצים ליצור):
{% endhint %}

```yaml
 cool_backpack:
    display_name: '&fCool Backpack'
    item:
      type: ITEMSADDER_ITEM
      name: "itemsadder:plastic_bag"
    size: 3
    craft_recipe:
      pattern:
        - XXX
        - LCL
        - XLX
      ingredients:
        L: LEATHER
        C: CHEST
```
