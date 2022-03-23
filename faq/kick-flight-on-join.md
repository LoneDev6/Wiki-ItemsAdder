---
תיאור: שחקנים מקבלים קיק בזמן טעינת הטקסטורה
---

# 🥾 קיק של אסור לעוף

## על הבעייה

חלק מהשרתים חושבים שאתם עפים בזמן התקנה תטקסטורה, זה תלוי איפו נימצא מיקום הספאון שלכם

זה ההודעה שמקבלים: <mark style="color:red;">"Flying is not enabled on this server"</mark>, או שאתם מקבלים קיק על ידי **anticheat**.

## איך לתקן?

בטלו את האפשרות `hide-hud` בתוך הקובץ `config.yml` של **ItemsAdder**.

```yaml
  protect-player:
    black-screen: true
    hide-hud: false
```

## הבעיות ממשיכות

הפעילו את האפשרות הזאת בתוך הקובץ `server.properties`:

{% code title="server.properties" %}
```
allow-flight=true
```
{% endcode %}
