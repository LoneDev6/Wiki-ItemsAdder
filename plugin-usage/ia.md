---
תיאור: /ia תפריט
---

# 📃 תפריט המלאכה

## הגדרות תפריט וקטגוריית "הכל".

הקובץ `ia_gui.yml` מכיל את כל ההגדרות בשביל התפריט של `/ia`.\
הוא מכיל גם את הקטגוריה **"הכל"** המציגה את כל הפריטים של ItemsAdder.

{% hint style="info" %}
הקטגוריות הבסיסיות של ItemsAdder נמצאות שם: `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`
{% endhint %}

## יצירת קטגוריה מותאמת אישית

אם אתם רוצים ליצור קטגוריה משלכם, עליכם להוסיף אותה לקובץ `.yml` משלכם [מרחב שמות](advanced/basic-concepts/namespace/).\
זה דוגמא:

```yaml
info:
  namespace: your_namespace
categories:
  armors:
    enabled: true
    icon: "itemsadder:ruby_head"
    name: 'Armors'
    permission: "ia.menu.armors"
    #THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    font_image:
      name: "mcguis:blank_menu"
      x_position_pixels: -16
    #THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    title_position_pixels: 0
    items:
      - "itemsadder:ruby_sword"
      - "itemsadder:ruby_head"
      - "itemsadder:ruby_chest"
      - "itemsadder:ruby_legs"
      - "itemsadder:ruby_boots"
      - "itemsadder:spinel_head"
      - "itemsadder:spinel_chest"
      - "itemsadder:spinel_legs"
```

לא לשכוח לתת למשתמשים שלכם הרשאה לכל קטגוריה אם אתם רוצים שהם יראו את הקטגוריות.\
לדוגמא אם ההרשאה: **ia.menu.armors**

{% hint style="info" %}
**font\_image and title\_position\_pixels are optional.**\
****הפלאגין יכניס את זה `ia_gui.yml` אם לא מוגדר.

אפשרות זו טובה אם אתם רוצים שיהיה לכם רקע שונה לכל קטגוריה.
{% endhint %}

{% hint style="success" %}
**קטגוריות** עם **אותו שם** ומרחב שמות אחר **ימוזגו**, זה **מועיל** אם יש לך שתי קטגוריות "חרבות". זה מאפשר לך לפתוח את תפריט **/ia** ולראות את כל החרבות מאורגנות באותה קטגוריה במקום לכלול 2 קטגוריות חרבות.
{% endhint %}
