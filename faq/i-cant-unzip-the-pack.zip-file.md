# אני לא יכול לפתוח את הקובץ pack.zip

בטלו את האשפרות הזאת.

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      enabled: false
      extreme: false
```
{% endcode %}

{% hint style="danger" %}
זה מגן על הקטסורה שלא יוכלו לפתוח את הקובץ ZIP.\
אם תבטלו את ההגנה כולם יוכלו לפתוח את הטקסטורה.
{% endhint %}
