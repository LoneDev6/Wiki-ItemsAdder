---
description: איך להתקין את הפלאגין
---

# ⚙ התקנה ראשונית

{% hint style="info" %}
**אתם צריכים לעקוב אחרי** ההתקנה הזאת  **בתוך שרת ניסיונות** שלכם על המחשב בשביל ***למנוע תקלות ובעיות** או יותר מידי הפעלות מחדש.. שחקנים לא אוהבים שהשרת סגור.\
אחרי שתסיימו אם ההגדרה פה תכלו להעלות את הקבצים לשרת הראשי שלכם
{% endhint %}

{% hint style="danger" %}
מאוד **מומלץ** לעשות את כל שלבי ההתקנה. לא רק את השלבים הראשונים.
{% endhint %}

## שלב 1 - התקנת הפלאגינים והAPI

* התקינו [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* התקינו [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)
* (אופציאונלי) התקינו **LightAPI** ([1.14, 1.15, 1.16](http://a.devs.beer/lightapi-old) | [1.17](http://a.devs.beer/lightapi-new))
* (אופציאונלי) התקינו [**Lib's Disguises**](https://www.spigotmc.org/resources/libs-disguises-free.81/) if you plan to create custom mobs in the future.
* העבירו את **ItemsAdder.jar** לתוך תיקיית ה-plugins של השרת שלכם
* הפעילו את השרת
* חכו עד שהפלאגין יטען את **הכול**

השלב הראשון הושלם. \
עכשיו חייב להשלים את  **שלב 2** הגדרת הטקסטורה (על תתאגו זה לא יהיה קשה).

## שלב 2 הגדרה ראשונית של הטקסטורה

#### החליטו על האופן שבואו אתם הולכים לאחסן את הטקסטורה:&#x20;

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[אחסון הטקסטורה](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

## שלבים אופציאונלים

### הסרת פריטי ברירת מחדל

{% hint style="info" %}
אם לא איכפת לכם מהדברים שיש בפלאגין, ואתם רוצים לעשות דברים משלכם זה קל!
{% endhint %}

{% content-ref url="faq/removing-default-stuff.md" %}
[removing-default-stuff.md](faq/removing-default-stuff.md)
{% endcontent-ref %}

### הימנעו מגליצ'ים (אם מותקן אצלכם Purpur)

{% content-ref url="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}
[avoid-glitched-blocks.md](faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md)
{% endcontent-ref %}
