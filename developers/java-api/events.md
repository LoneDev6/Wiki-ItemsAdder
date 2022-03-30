# אירועים

### ItemsAdderLoadDataEvent

```java
package dev.lone.itemsadder.api.Events;
public class ItemsAdderLoadDataEvent extends Event
```

אירוע זה נקרא כאשר ItemsAdder טען את כל הדברים שלו בצורה נכונה (גם ב-`/iareload`)\
עשו מאזין מיוחד לזה כדי להמתין לכל הפריטים/תמונות... שזמינים עבור התוסף/פלאגין שלך.

### CustomBlockInteractEvent

אירוע מופעל כאשר שחקן מקיים אינטראקציה עם בלוק מותאם אישית

### CustomBlockBreakEvent

אירוע מופעל כאשר שחקן שובר חסימה מותאמת אישית

### CustomEntityDeathEvent

אירוע מופעל כאשר ישות מותאמת אישית מתה.

### ResourcePackSendEvent

אירוע מופעל כאשר השרת שולח חבילת משאבים ללקוח. \
אירוע זה כולל **כתובת URL**, **hash** ומכיל גם מידע אם **זה** חבילת משאבים של **ItemsAdder** או **חבילת משאבים נוספת**.

