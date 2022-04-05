# RealisticWorldGenerator

## [הורידו כאן](https://www.spigotmc.org/resources/realisticworldgenerator-1-8-8-1-16-x.15905/)

## תאימות

* biomes
* ores
* schematics (RWG schematics)

{% hint style="warning" %}
זה עובד רק ב-ItemsAdder 2.5.2+ ו-RealisticWorldGenerator 4.30+
{% endhint %}

## אזהרות

{% hint style="danger" %}
אל תשתמשו בלוקים מיוחדים כבלוקים לבסיס העולם. זה יגרום ליותר מדי לאגים.\
המשיכו להשתמש בקוביות וניל למטרה זו.
{% endhint %}

{% code title="ores.yml" %}
```yaml
ores:
  veins:
    biome_layers:
      paste: false
    type: 1
    enabled: true
  base:
    block: ia:itemsadder:ruby_block # <---- DO NOT DO THIS!
```
{% endcode %}

{% hint style="success" %}
השתמשן בלוקים מיוחדים רק עבור:

* surfaces
* ores
* structures (schematics)
{% endhint %}

## כיצד להשתמש בלוקים מיוחדים

לדוגמה, בואו ניצור איזור עם רובי\_block כשכבה עליונה.

פתחו את הקובץ 'biomes.yml' בץוך תיקיית ההגדרות העולמית של **RealisticWorldGenerator** שלכם.

החליטו על איזור (למשל 'plains') והוסיפו את זה כשכבה הראשונה.

{% code title="biomes.yml" %}
```yaml
plains:
  layer:
    '1':
    - ia:itemsadder:ruby_ore;120
    '2':
    - minecraft:coarse_dirt;2
    - minecraft:podzol[snowy=false];5
    - minecraft:grass_block[snowy=false];100
```
{% endcode %}

בדוגמה זו, שיניתי גם את הקובץ 'settings.yml' של העולם הזה כדי לוודא שרק האיזור הזה נוצר, כדי למצוא את הבלוקים המותאמים אישית שלי בקלות רבה יותר.

{% code title="settings.yml" %}
```yaml
one_biome:
  biome: PLAINS
  oceans: false
  enabled: true
```
{% endcode %}

### זו התוצאה הסופית

זהו עולם עם משטח מותאם אישית שלי

![](<../../.gitbook/assets/image (47).png>)



