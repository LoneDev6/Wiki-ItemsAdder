---
תיאור: רשימת הכללים של Worldguard
---

# WorldGuard

## רשימת הכללים

### ia-furniture-sit

כלל הזה מאפשר לשחקנים שלכם לשבת על רהיטים או לא (ריהוט עם `furniture_sit` [התנהגות](../../plugin-usage/advanced/item-properties/behaviours.md))

### ia-campfire-item-add

אפשר לשקחנים להעביר להזיז מדורות

### ia-campfire-item-remove

אפשרו לשחקנים לשבור מדורות

### ia-vehicle-place

אפשר לשקחנים להציב ולהישתמש בכלי רכב באזור

### ia-vehicle-remove

אפשר לשחקנים להסיר כל רכב באזור

### ia-vehicle-personal-remove

לאפשר לשקחנים להסיר רק את כלי הרכב שלהם באזור

### ia-vehicle-sit

אפשר לשחקנים לשבת על כל רכב באזור

### ia-vehicle-personal-sit

לאפשר לשחקנים לשבת רק על כלי הרכב שלהם באזור

### ia-trade-machine-use

לאפשר לשחקנים להשתמש במכונות סחר

### ia-placed-block-interact

לאפשר לשחקנים להפעיל אירועים מוצבים\_block.interact

### ia-placed-armorstand-interact

אפשר לשחקנים להפעיל אירועי place\_armorstand.interact

{% hint style="info" %}
הגדירו את **ia-vehicle-sit** לדחיית ו-**ia-vehicle-personal-sit** לאפשר לשחקנים שלכם לשבת רק על כלי רכב אישיים
{% endhint %}

## בעיות נפוצות

{% hint style="warning" %}
אם השחקנים שלכם **לא יכולים לשבת** על **רהיטים** גם אם הגדרתם את הדגל הנכון:

* בידוקו אם אתם משתמשים באזור `__גלובלי__` כאזור הראשי שלך (זה שעליו החלת את דגל הרהיטים). אם כן, נא ליצור אזור חדש. האזור הגלובלי ידוע כגורם לבעיות מסוימות עם דגלים של פלאגינים מסוימים.
* בידקו אם הכלל 'build' או 'passthrough' מוגדרים כמו שצריך. \
  זיכורו שאסור לשנות כללים אלה, עלייכם לשמור על ערך ברירת המחדל (לא נבחר, טקסט אפור)
{% endhint %}
