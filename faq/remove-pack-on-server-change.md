# הסרת טקסטורה בשינוי שרת

## הסרת הטקסטורה מתי שהשחקן מחליף שרת

עקבו אחרי המדריך הזה אם יש לכם כמה שרתים ואתם משתמשים בItemsAdder ואתם רוצים להסיר את הטקסטורה מתי ששחקן מחליף שרת.

### איך לעשות

1. הורידו [טקסטורה ריקה](http://matteodev.it/spigot/itemsadder/blank\_pack.zip).
2. העלו את זה איפשהוא, לדוגמא: (דלגו על החלק של `/iazip`) [דרופבוקס](../plugin-usage/resourcepack-hosting/resourcepack-on-dropbox.md), [OneDrive](../plugin-usage/resourcepack-hosting/onedrive.md), [כונן דרייב](../plugin-usage/resourcepack-hosting/google-drive-1.17.1+.md)...
3. העתיקו את הקישור
4. פתחו את השרת שאתם רוצים לעשות בואו שינוי ולכו לקובץ `server.properties` והדביקו את הקישור:

{% code title="server.properties" %}
```properties
resource-pack=http://your_url/blank_pack.zip
```
{% endcode %}

זהו!

הטקסטורה של ItemsAdder תוחלף ותוסר ברגע שהשחקן יכנס לשרת.

