---
תיאור: טקסטורות שריון נראות שבורות בעת שימוש במודלי Shaders מותאמים אישית (1.17)
---

# טקסטורות שבורות על ידי מוד Shaders

{% hint style="warning" %}
### באג זה תוקן ב-ItemsAdder 3.0.3

אם אתה רואה מרקמים שבורים ודא שאתה משתמש ב-ItemsAdder 3.0.3 או גרסה עדכנית יותר.\
וודאו שאתם משתמשים בעותק עדכני ביותר של הטקסטורה `/iazip` (קראו את [מדריך האיחסון](../../plugin-usage/resourcepack-hosting/) אם צריך).
{% endhint %}

{% tabs %}
{% tab title="With shaders (bug)" %}
![](../../.gitbook/assets/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3533333431333137313430333239323731322f3931353939333232363736313130393531342f323032312d31322d30325f31362e34372e34302e706e67.png)
{% endtab %}

{% tab title="Without shaders (no bug)" %}
![](../../.gitbook/assets/144463413-21137314-66a3-41de-a834-9c6063e65e83.png)
{% endtab %}

{% tab title="ItemsAdder 3.0.3 update" %}
{% embed url="https://youtu.be/cb8OAuQE6V0" %}
{% endtab %}
{% endtabs %}

## מה הייתה הסיבה לבאג הזה?

### בעיה של Optifine

ל- Optifine יש מגבלה שאינה מאפשרת לארמורים המותאמים אישית לעבוד כראוי אם מותקן אצלכם מששהוא שקשור Optifine shader מותאם אישית.

עליך להשבית את shader **Optifine** באופן זמני או זמני לחיות עם הבעיה.

יצרתי קשר אם היוצרים של Optifine ראו: [https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

### סוגיית איריס שיידרס(Iris Shaders)

לאיריס יש מגבלה שאינה מאפשרת לשריון מותאמים אישית לעבוד כראוי אם מותקן ברשותך איזשהו הצללה מותאמת אישית של Iris.

כבר יצרתי קשר עם מפתחי Iris בעניין זה: [https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)
