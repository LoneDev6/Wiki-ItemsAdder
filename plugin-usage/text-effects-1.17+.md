---
תיאור: אנימציות טקסט
---

# אפקטי טקסט (1.17+)

## מזה אפקטי טקסט?

הפלאגין ItemsAdder **2.4.19** מציע כמה אפקטי טקסט דקורטיביים מגניבים שבהם תוכלו להשתמש בשרת שלכם כדי להפוך אותו למקצועי יותר.

{% hint style="danger" %}
## תכונה זו פועלת רק בגרסא **1.17 של מיינקראפט**, גרסת השרת לא משנה.
{% endhint %}

{% hint style="warning" %}
צריך להריץ את הפקודה `/iazip` כדי להפעיל/להשבית תכונה זו.\
שימו לב שגם צריך להגדיר את התכונה הזאת בקובץ `config.yml`.

```yaml
effects:
  text-effects:
    enabled: true
    replace-in-customitems-name-and-lore: true
    chat:
      enabled: true
    sign:
      enabled: true
    book:
      enabled: true
    anvil:
      enabled: true
```
{% endhint %}



## גישות

* שימוש ב**אפקטי-טקסט** ב **צ'אט**
  * `ia.user.text_effect.chat`
* שימוש ב**אפקטי-טקסט** ב**שלטים**
  * `ia.user.text_effect.sign`
* שימוש ב**אפקטי-טקסט** ב**ספרים**
  * `ia.user.text_effect.book`
* שימוש ב**אפקטי-טקסט** ב**סדן** בשדה של שינוי שם.
  * `ia.user.text_effect.anvil`
* שימוש ב-**אפקט-טקסט** מסויים
  * `ia.user.text_effect.use.<effect>`

## רשימת אפקטים

### קשת בענן

![](../.gitbook/assets/rainbow.gif)

![](<../.gitbook/assets/immagine (128).png>)

![](<../.gitbook/assets/immagine (129).png>)

![](../.gitbook/assets/rainbow\_item.gif)

גישה: `ia.user.text_effect.use.r`\
אופן שימוש: `<r text>`

### ניענוע

![](../.gitbook/assets/wobble.gif)

![](../.gitbook/assets/wobble\_item.gif)

גישה: `ia.user.text_effect.use.w`\
אופן שימוש: `<w text>`

### קפיצה

![](../.gitbook/assets/jump\_chat.gif)

![](../.gitbook/assets/jump.gif)

![](../.gitbook/assets/jump\_boss.gif)

גישה: `ia.user.text_effect.use.j`\
אופן שימוש: `<j text>`

### קשת בענן + ניענוע

![](../.gitbook/assets/rw\_chat.gif)

גישה: `ia.user.text_effect.use.rw`\
אופן שימוש: `<rw text>`

### קשת בענן + קפיצה

![](../.gitbook/assets/rj.gif)

גישה: `ia.user.text_effect.use.rj`\
אופן שימוש: `<rj text>`

## איפה אתפ יכולים להשתמש באפקטים האלה?

* שמות פריטים (בקובץ ה-yml)
* מידע על פריטים (בקובץ ה-yml)
* צ'אט
* סימן
* ספר
* בוסבר
* קידומות וסיומות (לדוגמה ב Luckperms)
* _עוד בקרוב...._

![](../.gitbook/assets/rainbow\_wobble\_lore.gif)

## כיצד ליצור קידומת מונפשת (Luckperms)

![](<../.gitbook/assets/immagine (133).png>)

`/lp group admin meta setprefix "<rw ADMIN >"`

![](../.gitbook/assets/prefix.gif)

לחצו כאן כדי לקרוא[ מדריכים רשמיים של Luckperms](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta) אם אתם לא יודעים איך פועלת הקידומת.
