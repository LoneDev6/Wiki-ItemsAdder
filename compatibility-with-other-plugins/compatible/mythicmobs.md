# Mythicmobs

### [הורידו כאן](https://www.spigotmc.org/resources/%E2%9A%94-mythicmobs-free-version-%E2%96%BAthe-1-custom-mob-creator%E2%97%84.5702/)

## שימוש בפריטים של ItemsAdder ב-MythicMobs&#x20;

{% hint style="warning" %}
עדכנו את הפלגינים ל-**ItemsAdder 3.0.4** ומעלה ול-**MythicMobs 5.0.1** ומעלה
{% endhint %}

### דרופים

דוגמה: הורדת פריט בסיכוי של 30% ובסכום של 1 עד 5.

```yaml
ninja_skeleton:
  Type: ZOMBIE
  Display: '&aNinja Skeleton'
  Health: 10
  Damage: 2
  Drops:
    - my_items:special_sword 1-5 30%
  Options:
    MovementSpeed: 0
    Silent: true
  Skills:
  - customentity{model=custom:ninja_skeleton} @self ~onSpawn
  - customentity{play=attack} @self ~onAttack
  - customentity{walk=b_walk} @self ~onAttack
```

### ציוד

```yaml
SkeletalKnight:
  Type: WITHER_SKELETON
  Display: '&aSkeletal Knight'
  Health: 40
  Damage: 8
  Equipment:
  - my_items:special_helmet HEAD
  - my_items:special_chestplate CHEST
  - my_items:special_leggings LEGS
  - my_items:special_boots FEET
  - my_items:special_sword HAND
  - my_items:special_shield OFFHAND
```

## מודלים של מובים

{% content-ref url="../../plugin-usage/advanced/mobs/advanced-method/" %}
[שיטה מתקדמת](../../plugin-usage/advanced/mobs/advanced-method/)
{% endcontent-ref %}
