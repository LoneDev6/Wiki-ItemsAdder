# Holographic Displays

## איך להוסיף אימוג'ים להולוגרמות

* הורידו [Holographic Displays](https://dev.bukkit.org/projects/holographic-displays)
* הורידו [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
* וגם הורידו [HolographicExtension addon](https://www.spigotmc.org/resources/holographicextension.18461/)

אפשר לעשות שימוש ב [גופן\_תמונות](../../plugin-usage/advanced/font-images/)(**אימוג'ים**) בתוך טקסטים של הולוגרמות ובכל מקום בכל התוספים התומכים ב-**PlaceholderAPI**, במקרה זה **תצוגות הולוגרפיות**.\
זה הקוד: `%img_NAME%` במקום NAME כיתבו את הגופן\_שם התמונה.\
לדוגמה: `%img_smile%`

כדי ליצור הולוגרמה אתם יכולים להשתמש בפקודות הבאות למשל:

`/holo create test_itemsadder Hello! %img_smile%`

![](<../../.gitbook/assets/image (20).png>)

## כיצד להוסיף פריט מרחף בהתאמה אישית?

* עשו את הפקודה `\iacustommodeldata <item>` (לדוגמה `\iacustommodeldata ruby`)
* העתיקו את 'CustomModelData', למשל '10000'
* צרו הולוגרמה חדשה, לדוגמה: `/hd create holo_icon Hello!`
* הוסיפו את הפריט המרחף להולוגרמה על ידי ציון **סוג הווניל** וה-**CustomModelData**. דוגמה: `/hd addline holo_icon ICON: IRON_INGOT {CustomModelData: 10000}`

![](<../../.gitbook/assets/immagine (124).png>)



``
