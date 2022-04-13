# 🏁 טיפים לשימוש מהיר

## לוקח יותר מדי זמן לערוך את הטקסטורה ולהעלות אותה בחזרה לאחסון!

כן אם אתם לא עושים את זה בצורה  הנכונה ;) קראו את זה:

{% hint style="info" %}
מומלץ לנסות על **שרת נסיון על המחשב שלכם** הורידו את הפלאגינים הבאים: 

* [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-emojis-ores-blocks-wings-tails-hats-more.73355/)
* [LoneLib](https://www.spigotmc.org/resources/lonelibs.75974/)
* [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
* [LightAPI Fork](https://www.spigotmc.org/resources/lightapi-fork.48247/)

אחרי זה הגדירו את ההגדרות הבאות בתוך קובץ ה-`config` של הפאלגין ItemsAdder:

```yaml
resource-pack:
  hosting:
    no-host:
      enabled: false
    auto-external-host:
      enabled: false
    self-host:
      enabled: true # <----- HERE, set true
      server-ip: '127.0.0.1'
      pack-port: 8163
    external-host:
      enabled: false
      url: ''
```

אם תעשו שרת פרטי על המחשב שלכם תוכלו להגדיר ולשנות דברים במהירות.

מתי שאתם עושים עריכה לקבצים\מודלים זכרו לעשות  `\iazip` .\
כאשר אתם עושים את זה השינווים יקרו בזמן אמת. 

אחרי שכל הדברים יהיו מוגדרים תוכלו פשוט להעתיק את הקבצים לשרת שלכם.
{% endhint %}

{% content-ref url="resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

{% hint style="warning" %}
זה הרגל טוב לא לערוך ולשנות דברים בשרת שלכם ולעשות את זה בשרת פרטי.\
זכרו תמיד, שחקנים שונאים בעיות לאגים ולחכות ולכך שהפלאגין יטען זה מעצבן ומפריע.
{% endhint %}

{% hint style="danger" %}
המלצה חמה שלי לא לערוך את הדברים שלי, ככה יהיה לכם יותר קל לעדכן את הפלאגין ולהוריד עדכונים חדשים.\
אם אתם רוצים לערוך דברים צרו דברים חדשים משלכם.
{% endhint %}
