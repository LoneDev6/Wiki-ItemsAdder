# לא יכול לרשום בצ'אט או לזוז

## Worldguard

אם אתם נתקלים בכלי רכב פגומים (בעיות השתגרות תחת העולם ובאגים מוזרים כאלה) אנא פתח את config.yml של WorldGuard והגדר את זה:

```
block-plugin-spawning: false
```

## Towny

{% hint style="warning" %}
אם יש לכם בעיות עם כלי רכב ואתם משתמשים בפלאגין Towny פתחו את Towny config.yml והסירו את Slime מכאן:
{% endhint %}

```yaml
town_mob_removal_entities: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
```

## Mob Farm Manager

אם אתה הבעלים של [Mob Farm Manager ](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-16-hopper-support.15127/) אנא הקפד לבדוק אם אתה מגדיר כלל סוג ישות **SLIME**, זה עלול להסיר את הסליים שהוא חלק מהרכב ולגרום לבאג זה.

## Residence

עשו את הפקודה `res set monsters t\r\` בתוך **Residence**.\
אני כבר יצרתי קשר אם יוצר הפלאגין מקווה[ שהוא יתקן את זה](https://github.com/Zrips/Residence/issues/469#issuecomment-801425643)

## Other mobs removal / grouping / merge plugins

אנא הסר כל תכונת קבוצה/מיזוג/הסרה בסוג הישות **SLIME**.
