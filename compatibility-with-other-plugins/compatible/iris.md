#  מנוע Iris

## [הורידו מכאן](https://www.spigotmc.org/resources/iris-world-gen-custom-biome-colors.84586/)

## הוספת התאמה

### שלב 1

התקינו [ItemsAdderBlocksInjector](https://www.spigotmc.org/resources/itemsadderblocksinjector.102078/) זיכרו <mark style="color:red;"לא להסיר את הפלאגין הזה אחרי ההתנה !</mark>

### שלב 2

צרו את העולם במנוע Iris (קראו את דפי המידע של הפלאגין) והשתמשו ב-ItemsAdder בשביל ליצור מזההי(ID) בלוקים מיוחדים בדיוק כמו שעושים אם בלוקים במשחק הרגיל

\
ראו דוגמא בקובץ הרים שהוא חלק מחבילת ה-`plugins\Iris\packs\overworld\biomes\mountain\mountain.json` : `overworld`

אתם יכולים לערוך שכבות בשימוש בלוקים מיוחדים מהפלאגין, בדוגמא הזאת אני משתמש ב **Amethyst Block**: 


```json
"layers": [
    {
        "minHeight": 1,
        "maxHeight": 1,
        "slopeCondition": {
            "minimumSlope": 0,
            "maximumSlope": 2.6
        },
        "palette": [
            {
                "block": "itemsadder:amethyst_block"
            }
        ]
    },
```

זה התוצאה:

![](<../../.gitbook/assets/image (49).png>)

![](<../../.gitbook/assets/image (96).png>)

## בעיות בהתאמה
* הפלאגין FastAsyncWorldEdit יפסיק לפעול בשרת, אני לא יכול לעשות שום דבר בנוגע לזה 
* בפלאגין WorldEdit לא תוכלו לעשות `//undo` וגם `//copy` על הבלוקים המיוחדים שנוצרו בעזרת מנוע `Iris` הבלוקים יחזרו ל-`NOTE_BLOCK` (או`TRIPWIRE` `mushroom` `CHORUS_PLANT` , )
