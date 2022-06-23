# הוספת תאימות

הוספת תמיכה ל ItemsAdder זה קל!\
ה**API** הוא **חינם** וזמין ב maven package:

{% content-ref url="../developers/java-api/" %}
[java-api](../developers/java-api/)
{% endcontent-ref %}

## איך לקבל את החפץ

{% content-ref url="../developers/java-api/examples.md" %}
[examples.md](../developers/java-api/examples.md)
{% endcontent-ref %}

{% hint style="warning" %}
### חשוב

בבקשה וודאו שיש פעולה מקשיבה למאורע של **ItemsAdderFirstLoadEvent** . הפלאגין ItemsAdder טוען את הפריטים שלו ודברים אחרים בסינכרון, אז אתם צריכים לחכות לאירוע הזה לפני השימוש ב-API.
{% endhint %}
