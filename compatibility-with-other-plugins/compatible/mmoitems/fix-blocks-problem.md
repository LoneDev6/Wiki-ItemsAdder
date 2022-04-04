# תיקון בעיית הבלוקים

{% hint style="warning" %}
הבלוקים של**MMOItems** לא תואמים ל**ItemsAdder** ולהיפך.
{% endhint %}

##איך לעשות שימוש בבלוקים של MMOItems?

פתחו את `config.yml` של **ItemsAdder** בטלו את **REAL** blocks (mushroom) בקבצים.

{% code title="config.yml" %}
```yaml
  disable-REAL: true
```
{% endcode %}

{% hint style="info" %}
אחרי שתעשו את ההגדרה הזאת לא יהיה אפשרי להשתמש ב: REAL.

דברים אחרים שלItemsAdder ימישכו לעבוד (for example REAL\_NOTE).
{% endhint %}
