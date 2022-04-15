---
תיאור: ממלאי מקום - PlaceholderAPI 
---

# ממלאי מקום של PAPI

## שימוש ב-FontImage (אימוג'ים וכדומה)

זה הקוד: `%img_NAME%` במקום NAME רשמו את הקוד של האימוג'י (font\_image).\
לדוגמא: `%img_smile%`

## קיזוזים

אפשר להזיז טקסט או תמונות אחורה וקדימה (font\_image).\
לדוגמא example&#x20;

* אפשר להזיז את התמונה\אימוג'י ב 16 פיקסלים אחורה `16%-_img_offset%` .
* אפשר להזיז את התמונה\אימוג'י ב 16 פיקסלים קדימה `16%_img_offset%` .

## שימוש ב- ItemsAdder וסטטיסטיקות שחקנים (ערכי HUDs)

אלה נתונים סטטיסטיים המשמשים את ItemsAdder, הם לא סטטיסטיקות של המשחק הרגיל.

זה הקוד: `%iaplayerstat_NAME%` במקום NAME כיתבו את שם סטטיסטיקת השחקן.\
לדוגמא: `%iaplayerstat_mana%` או `%iaplayerstat_thirst%`

אתם יכולים להשתמש בפקודה זו כדי לבדוק:\
`/papi parse me %iaplayerstat_thirst%`\
`/papi parse me %iaplayerstat_mana%`

{% hint style="info" %}
#### קראו עוד על סטטיסטיקות שחקנים
{% endhint %}

