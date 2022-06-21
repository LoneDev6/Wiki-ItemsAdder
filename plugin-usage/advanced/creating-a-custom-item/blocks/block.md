# בלוק

## בלוק הראשון והמיוחד שלי

### יצירת קבצי ההגדה של הבלוק

{% hint style="warning" %}
זהו בלוק לדוגמה (על תשכחו לשנות את `myitems` [לשם מרחב ](../../basic-concepts/namespace/) אחר שאתם רוצים).
{% endhint %}

לדוגמא יצרתי **קובץ** שיכיל את כל ה**בלוקים המויחדים** שלי:

בקובץ הזה (`blocks.yml`) אני מתחיל ליצור בלוק פשוט בשם `red_block`

![](<../../../../.gitbook/assets/immagine (90).png>)

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      material: PAPER
```

{% hint style="warning" %}
חשוב מאוד להשתמש ב-**חומר** שהוא במשחק הרגיל וגם **לא ניתן להצבה**. לדוגמה **נייר**.\
אם אתם משתמשים בבלוק (כמו STONE או DIRT) התוצאה תהיה מעט תקולה כאשר מניחים אותו.
{% endhint %}

## טקסטורות בלוק

### יצירת קבצי הטקסטורה

עכשיו החלק המהנה, בואו נעשה את הטקסטרה!\
לשם כך עליכם להכניס את קבצי הטקסטורה `.png` בתוך התיקיה הנכונה.\
במקרה זה **מרחב השמות** שלכם הוא 'myitems' אז עלייכם לשים אותם כאן:

![](<../../../../.gitbook/assets/image (130).png>)

### החלת קבצי הטקסטורה על הפריט שלכם

כעת פתחו שוב את הקובץ 'blocks.yml' והוסיפו את החלק 'resource' כפי שעשיתי.\
כפי שאתם יכולים לראות, אני מגדיר 'generate: true' ואני מגדיר את הטקסטרה לפריט.\
זה אומר לפלאגין ליצור את מודל התלת-ממדי באופן אוטומטי באמצעות הטקסטרה שלכם.

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
```

### שימוש הטקסטורה שונה לכל פנים

{% hint style="info" %}
פנים, מתייחס למושג של הקוביה - לכל קובייה יש 6 פנים. כאשר אנחנו כותבים טקסטורה שונה לכל פנים אנחנו מדברים על כך שלכל פנים בקובייה יהיה טקסטורה שונה.
{% endhint %}
{% hint style="warning" %}
**חשוב**: שמרו על סדר ההוראות הקרדינליות הנכון כפי שמוצג בדוגמה.
{% endhint %}

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block_down.png
        - block/red_block_east.png
        - block/red_block_north.png
        - block/red_block_south.png
        - block/red_block_up.png
        - block/red_block_west.png
```

### שימוש באותו הטקסטורה עבור כל פנים

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
```

## הוספת פונקציונליות הצבת בלוק

עליכם להוסיף את התכונה 'specific_properties', כמו בדוגמה הזאת:

```yaml
info:
  namespace: myitems
items:
  red_block:
    display_name: Red Block
    permission: red_block
    resource:
      generate: true
      material: PAPER
      textures:
        - block/red_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles: ITEM
```

{% hint style="info" %}
לחצו על הקישור אם אתה רוצה לציין **כלים** שיכולים לשבור את הבלוק, להוסיף **קשיות (עד כמה קשה לשבור את הבלוק)** ו**תכונות נוספות**.
{% endhint %}

## חלק אחרון

עכשיו אתם רק צריכים לטעון את הפלאגין מחדש.

### אם אתם עושים [אחסון עצמאי](../../../resourcepack-hosting/resourcepack-self-hosting.md) או [אחסון-חיצוני-אוטומטי](../../../resourcepack-hosting/automatic-upload-hosting.md):

* עשו את הפקודה `/iazip`.

### אם אתם עושים [אחסון-חיצוני](../../../resourcepack-hosting/resourcepack-on-dropbox.md) (דרופבוקס) קראו כאן:

אל תשכחו להעלות את קובץ ה-zip החדש שנוצר למקום החאסון שלכם שלך (דרופבוקס)!\
1\. אפשר למצוא את הקובץ בתוך התקייה:

![](<../../../../.gitbook/assets/immagine (96) (2) (3) (2) (1).png>)

2\. העלו את הקובץ לאחסון שלכם (דרופבוקס)\
3\. פתחו את `config.yml` של ItemsAdder ועדכנו את כתובת האתר של `external-host` עם הקישור החדש שלכם.

```yaml
  self-host:
    enabled: false
    server-ip: '127.0.0.1'
    pack-port: 8163
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

אם יש לכם שאלות נוספות קראו את המדריך המלא של **איחסון חיצוני** כאן:

{% content-ref url="../../../resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](../../../resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

## קבלת הבלוק במשחק

הריצו את הפקודה `/iaget red_block` כדי לקבל את הפריט.

![](<../../../../.gitbook/assets/immagine (92).png>)

![](<../../../../.gitbook/assets/immagine (91).png>)

![](<../../../../.gitbook/assets/immagine (93).png>)
