---
description: ItemsAdder תואם ל MMOitems וזה ממש קל להגדיר את זה.
---

# MMOItems

הורידו **MMOItems** [כאן](https://www.spigotmc.org/resources/mmoitems-premium.39267/)

### כאן אפשר למצוא את המדריך על ההתקנה

{% embed url="https://www.spigotmc.org/resources/items-mmoitem-example-integration.88351/" %}

## חברו את החפץ של MMOItem לחפץ שלItemsAdder  

### עשו את הפקודה \mmoitems browse

![](<../../../.gitbook/assets/immagine (25).png>)

### יצירת חפץ MMOitems 

![](<../../../.gitbook/assets/immagine (26).png>)

![](<../../../.gitbook/assets/immagine (29).png>)

### הוסיפו את כל התכונות שאתם רוצים, למשל נזקי קסם וכו'

![](<../../../.gitbook/assets/immagine (28).png>)

### MMOItem תצוגה מקדימה /mmoitems browse

![](<../../../.gitbook/assets/immagine (30).png>)



### צורו את קובץ ה-yml שלך כרגיל והוסיפו את כל המאפיינים עבור הפריט ItemsAdder

![](<../../../.gitbook/assets/immagine (32).png>)

{% hint style="success" %}
כפי שאתה יכול לראות, הגדרתי תכונה חדשה בשם **`mmoitem`** וגם **`type`** ו-**`id`**.\
אלה משמשים ל**חיבור** של **שני הפריטים**.
{% endhint %}

```yaml
info:
  namespace: mmoitems_example
items:
  test:
    display_name: ""
    permission: example_item
    mmoitem:
      type: SWORD
      id: TEST
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/test.png
    durability:
      max_custom_durability: 1324
```

### צרו את טקסטורת ה .png כרגיל

![](<../../../.gitbook/assets/immagine (31).png>)

### קבלו את החפץ

השתמשו בפקודה `/iaget mmoitems_example:test` כדי לקבל את הפריט הסופי שלכם

![](<../../../.gitbook/assets/immagine (33).png>)

![](<../../../.gitbook/assets/immagine (34).png>)
