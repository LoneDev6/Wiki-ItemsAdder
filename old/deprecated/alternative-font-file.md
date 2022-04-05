---
תיאור: שימוש בקובץ json אחר עבור תמונות הגופן שנוצרו אוטומטית
---

# קובץ גופן חלופי

## כיצד להשתמש בקובץ גופן חלופי

{% hint style="danger" %}
### תכונה זו אינה יציבה.
{% endhint %}

הפלאגין **ItemsAdder** מייצר את קובץ ה-json עבור **font\_images**, במקרים מסוימים, אתם מעדיפים שיהיה לכם קובץ נפרד במקום להוסיף את התמונות ל-`default.json`.

הפלאגין ItemsAdder (אם מוגדר) יפיק את **font\_images** בתוך קובץ חדש: `assets/minecraft/font/custom.json` במקום `default.json`.

## למה יש קובץ גופן נפרד?

זה יגרום לגופן\_תמונות שלכם להיות גופן נפרד לחלוטין כך שתוכל להשתמש בו לפי דרישה מבלי להחליף את תווי הגופן הראשיים.

ל-Minecraft 1.16+ יש את תכונת הגופן המותאם אישית המקורית המאפשרת לציין את שם הגופן בכל הודעה (באמצעות JSON).

לדוגמה, אתם יכולים לכתוב פקודה כזאת `\tellraw @a [{"text":"הודעת בדיקה!","font":"default"},"\n",{"text":"הודעת בדיקה!"," font":"alt"}]`

פקודה זו תכתוב את הטקסט הראשון עם הגופן `ברירת מחדל` ואת הטקסט השני עם הגופן `alt` (במקרה זה הוא כלול במשחק).

![](<../../.gitbook/assets/immagine (154).png>)

הגופן המותאם אישית של ItemsAdder יקרא `custom`, כך שבמקרה זה תצטרכו להשתמש בתכונה `"font":"custom"`.

## חסרונות ויתרונות

{% hint style="danger" %}
* אימוג'י לא יוצגו בפקודת ההשלמה האוטומטית `/e`, במקום זאת יוצגו מצייני מיקום ([תמונה](https://i.imgur.com/Im9AXae.png))
* אם אתם מסוגלים להעתיק ולהדביק תווי Unicode בכל מקום יותר, עליכם להסתמך על מצייני המיקום של `:XXX:` ו-`%img_XXX%` או על רכיבי ה-JSON vanilla specifying the `font` תכונה (ראו את [הדוגמה](alternative-font-file.md#why-having-a-separate-custom-font-file))
* זמין רק ב-Minecraft 1.16+
* חלק מההגדרות ב-**config.yml** לא יפעלו יותר:&#x20;
  * `font_images.command`
  * `font_images.scoreboard-teams`
  * `font_images.vault-prefix-suffix`
  * `font_images.player-display-name` <mark style="color:orange;">(עובד רק ב Paper)</mark>
  * תמונות בהודעה כריזה <mark style="color:orange;">(עובד רק ב Paper)</mark>
  * שלטים, ספרים <mark style="color:orange;">(עובד רק ב Paper)</mark>
{% endhint %}

{% hint style="success" %}
* שחקנים יכולים להגדיר את 'Force Unicode: On' וה-**font\_images** יופיעו בכל מקרה מכיוון שהם משתמשים בגופן אחר, לא ברירת המחדל
{% endhint %}

## האם להשתמש באפשרות הזאת?

{% hint style="danger" %}
### תכונה זו אינה יציבה.

הייתי נמנע משימוש בו מכיוון שיש לו יותר מדי חסרונות, אבל אשאיר לך את ההחלטה מכיוון ששרתים מסוימים עשויים להצטרך להפריד את התמונות המותאמות אישית מגופן ברירת המחדל.
{% endhint %}

## כיצד להפעיל את האפשרות הזאת?

עליכם להפעיל את האפשרות הזו ב- `config.yml` ולעשות `/iazip`:&#x20;

{% code title="config.yml" %}
```yaml
zip:
  use_separate_custom_font_file_EXPERIMENTAL: true
```
{% endcode %}

##
