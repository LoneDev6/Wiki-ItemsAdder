---
תיאור: כיצד לערוך באופן ידני קבצי json blockstates
---

# עריכה ידנית של blockstates 

## עריכת note\_block.json

{% hint style="warning" %}
עדכנו לגרסאת 2.4.20
{% endhint %}

אתם יכולים לערוך באופן ידני את הקובץ `assess\minecraft\blockstates\note_block.json` תוך הוספת כללים משלכם פנימה.

הפלאגין **ItemsAdder** ימזג אוטומטית את קובץ ה-json שלך עם הבלוקים של **ItemsAdder** אם יצרתם כאלה.

## עריכת קבצים אחרים של .json blockstates

אתם יכולים לערוך כל קובץ blockstate שאתם רוצים, אבל אתה צריך לקרוא את זה כדי לערוך חלק מהם.

על מנת לערוך כמה קובצי blockstates, עליכם להשבית את תכונת החסימות של ItemsAdder בהתבסס על הסוג הדברים שברצונכם לערוך. בעתיד, אני עשוי לאפשר עריכה ידנית של קבצים אלו מבלי להשבית את תכונת החסימות של ItemsAdder (זה לא קל ליישום, זו הסיבה שעדיין לא אפשרתי זאת).

### mushroom blockstates

מחקו את הקבצים:&#x20;

* `assets\minecraft\blockstates\brown_mushroom_block.json`&#x20;
* `assets\minecraft\blockstates\mushroom_stem.json`
* `assets\minecraft\blockstates\red_mushroom_block.json`

הפעילו את האפשרות הזאת:

{% code title="config.yml" %}
```yaml
  disable-REAL: true
```
{% endcode %}

### fire.json

מחקו את הקובץ הזה `assets\minecraft\blockstates\fire.json`

הפעילו את האפשרות הזאת:

{% code title="config.yml" %}
```yaml
  disable-FIRE: true
```
{% endcode %}

### chorus\_plant.json

מחקו את הקובץ `assets\minecraft\blockstates\chorus_plant.json`

הפעילו את האפשרות הזאת:

{% code title="config.yml" %}
```yaml
  disable-REAL_TRANSPARENT: true
```
{% endcode %}

### tripwire.json

מחקו את הקובץ `assets\minecraft\blockstates\tripwire.json`

הפעילו את האפשרות הזאת:

{% code title="config.yml" %}
```yaml
  disable-REAL_WIRE: true
```
{% endcode %}
