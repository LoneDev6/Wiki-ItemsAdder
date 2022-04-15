---
תיאור: איך להגן על הטקסטורה מפני גניבה
---

# 🚨 הגנו על הטקסטורה מפני פתיחה של ZIP

{% hint style="info" %}
אם הפלאגין ItemsAdder אפשר להגן על הטקסטורה מפני גנבות.\
כל מה שצריך לעשות זה להפעיל את האפשרות בתוך הקובץ config.yml ולעשות /iazip שוב פעם.\
אם אתם משתמשים בדרופבוקס אז על תשכחו גם להעלות את הקובץ המעודכן אחרי שינויים בקובץ- config.yml.

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      enabled: true
      extreme: true
```
{% endcode %}
{% endhint %}

### מופעל

הפעילו את `enabled` ההגדרה הזאת מאפשרת לכם להפעיל הגנה בסיסית על הטקסטורה.

### מוגזם

הפעילו את `extreme` ההגרה הזאת מאפשרת לכם להגן על הטקסטורה בעוד שלבים נוספים ולמנוע נסיונות נוספים לגנוב דברים.

## הדגמה

ברגע ששחקנים ינסו לגנוב את הטקסטורה יופיע להם על המסך מימ מצחיק, אשר מראה להם דף הורדה וסרטון מצחיק. ככה שאי אפשר להוריד את הטקסטורה.

{% embed url="https://youtu.be/MhtEhoOuWV8" %}

{% hint style="warning" %}
אין דרך יעילה ב-100% להגן על הטקסטורה מכיוון שהמשחק חייב להיות מסוגל לחלץ אותה בצורה נכונה כדי להראות טקסטורות.

תכונה זו היא הקלה כדי למנוע מילדים וטרולרים לגנוב את הטקסטורה שלכם.\
ייתכן שחלק מהמשתמשים המנוסים יוכלו למצוא דרך לעקוף את ההגנות הללו.

הפלאגין ItemsAdder עושה כמיטב יכולתו כדי למנוע זאת, אך זיכרו את הדף הזה.
{% endhint %}

