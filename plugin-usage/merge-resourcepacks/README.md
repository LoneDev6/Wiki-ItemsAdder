---
description: Merge other resourcepacks (also custom plugins resourcepacks)
---

# 🗃 חיבור טקסטורות

## למה למזג?

**מיינקראפט** תומך ב**טקסטורה אחת בלבד לשרת**, כך שאם יש לכפ יותר מטקסטורה אחת, עליכם למזג אותם.

## איך למזג?

### שלב 1

העתק את תיקיית 'assets' של הטקסטורה שלכם.

### שלב 2

הדביקו את תיקיית ה-'assets' של הטקסטורה שלכם בתוך התיקיה **ItemsAdder הפלאגין**: `plugins\ItemsAdder\data\resource_pack\`

### שלב 3

פתחו את הקובץ 'config.yml' של **ItemsAdder** והגדירו את האפשרות הזאת:

```yaml
overwrite-vanilla-models: false
```

### שלב 4

השתמשו בפקודה `\iazip` כדי לדחוס את הטקסטורה של ItemsAdder.\
(הקפידו לבצע את [המדריך לאחסון](../resourcepack-hosting/) הנכון בהתבסס על שיטת האחסון שלכם)

### סיימתם.

## דוגמאות

{% content-ref url="../../compatibility-with-other-plugins/compatible/modelengine.md" %}
[modelengine.md](../../compatibility-with-other-plugins/compatible/modelengine.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/nova.md" %}
[nova.md](../../compatibility-with-other-plugins/compatible/nova.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/space.md" %}
[space.md](../../compatibility-with-other-plugins/compatible/space.md)
{% endcontent-ref %}
