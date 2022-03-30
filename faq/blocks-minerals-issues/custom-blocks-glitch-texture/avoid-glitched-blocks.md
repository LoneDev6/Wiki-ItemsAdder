---
תיאור: בלוקים של מגליצ'ים באזורים מסוימים/עולמות מותאמים אישית
---

# להימנע מגליצ'ים

## בלוקים מגליצ'ים

{% hint style="info" %}
זוהי רק תקלה גרפית, מצב זה לא יגרום לשכפול באגים וכדומה.
{% endhint %}

![](<../../../.gitbook/assets/image (119).png>)

## תיקון ב Spigot/Paper

{% hint style="info" %}
זה נורמלי אם אתם משתמשים בסוגי REAL כדי ליצור בלוקים מותאמים אישית.\
הפלאגין ItemsAdder משתמש בלוקים של פטריות כדי ליצור אותם.\
הפלאגין ItemsAdder פשוט בודק כמה ביומות(biomes) כדי לתקן את הבלוקים המוגלצ'ים כדי להימנע משימוש ביותר מדי מעבד.
{% endhint %}

תיקון זה עובד רק עבור בלוקים אמיתיים (פטריות).\
אם אתם רוצים להפעיל את התיקון על ביומה(biome) כלשהי, עליכם להגדיר את 'config.yml' כך:

<details>

<summary>Click here to expand</summary>

זה בעצם יאפשר את התיקון בכל אחת מהביומות של Minecraft Overworld.\
אל תהססו להסיר את הביומות שבהן לא יהיו פרטיות, כדי להימנע משימוש גבוה במעבד.

{% code title="config.yml" %}
```yaml
seach-also-in-these-biomes:
  enabled: true
  biomes:
  - OCEAN
  - PLAINS
  - DESERT
  - MOUNTAINS
  - FOREST
  - TAIGA
  - SWAMP
  - RIVER
  - FROZEN_OCEAN
  - FROZEN_RIVER
  - SNOWY_TUNDRA
  - SNOWY_MOUNTAINS
  - MUSHROOM_FIELDS
  - MUSHROOM_FIELD_SHORE
  - BEACH
  - DESERT_HILLS
  - WOODED_HILLS
  - TAIGA_HILLS
  - MOUNTAIN_EDGE
  - JUNGLE
  - JUNGLE_HILLS
  - JUNGLE_EDGE
  - DEEP_OCEAN
  - STONE_SHORE
  - SNOWY_BEACH
  - BIRCH_FOREST
  - BIRCH_FOREST_HILLS
  - DARK_FOREST
  - SNOWY_TAIGA
  - SNOWY_TAIGA_HILLS
  - GIANT_TREE_TAIGA
  - GIANT_TREE_TAIGA_HILLS
  - WOODED_MOUNTAINS
  - SAVANNA
  - SAVANNA_PLATEAU
  - BADLANDS
  - WOODED_BADLANDS_PLATEAU
  - BADLANDS_PLATEAU
  - SMALL_END_ISLANDS
  - END_MIDLANDS
  - END_HIGHLANDS
  - END_BARRENS
  - WARM_OCEAN
  - LUKEWARM_OCEAN
  - COLD_OCEAN
  - DEEP_WARM_OCEAN
  - DEEP_LUKEWARM_OCEAN
  - DEEP_COLD_OCEAN
  - DEEP_FROZEN_OCEAN
  - THE_VOID
  - SUNFLOWER_PLAINS
  - DESERT_LAKES
  - GRAVELLY_MOUNTAINS
  - FLOWER_FOREST
  - TAIGA_MOUNTAINS
  - SWAMP_HILLS
  - ICE_SPIKES
  - MODIFIED_JUNGLE
  - MODIFIED_JUNGLE_EDGE
  - TALL_BIRCH_FOREST
  - TALL_BIRCH_HILLS
  - DARK_FOREST_HILLS
  - SNOWY_TAIGA_MOUNTAINS
  - GIANT_SPRUCE_TAIGA
  - GIANT_SPRUCE_TAIGA_HILLS
  - MODIFIED_GRAVELLY_MOUNTAINS
  - SHATTERED_SAVANNA
  - SHATTERED_SAVANNA_PLATEAU
  - ERODED_BADLANDS
  - MODIFIED_WOODED_BADLANDS_PLATEAU
  - MODIFIED_BADLANDS_PLATEAU
  - BAMBOO_JUNGLE
  - BAMBOO_JUNGLE_HILLS
```
{% endcode %}

</details>

### עוד פתרונות

פתרון נוסף הוא הימנעות משימוש בסוג 'REAL' בלוקים מותאמים אישית (פטריה) ולהשתמש בסוג 'REAL_NOTE' בלוקים מותאמים אישית.\
ה`REAL_NOTE` משתמש בבלוקים של Noteblocks כדי ליצור בלוקים מותאמים אישית, כך שלא תהיה לכם בעיה כזאת.

## תיקון מתקדם ב Purpur

{% hint style="warning" %}
### זה רק עובד על [Purpur](https://purpur.pl3x.net).

### ל-Spegot ול-Paper אין תכונה זו.
{% endhint %}

הגדירו את האפשרויות האלה בקובץ **purpur.yml**:

* [https://purpur.pl3x.net/docs/Configuration/#disable-mushroom-updates](https://purpur.pl3x.net/docs/Configuration/#disable-mushroom-updates)
* [https://purpur.pl3x.net/docs/Configuration/#disable-note-block-updates](https://purpur.pl3x.net/docs/Configuration/#disable-note-block-updates)
* [https://purpur.pl3x.net/docs/Configuration/#disable-chorus-plant-updates](https://purpur.pl3x.net/docs/Configuration/#disable-chorus-plant-updates)

**דוגמא:**

```yaml
  blocks:
    disable-mushroom-updates: true
    disable-note-block-updates: true
    disable-chorus-plant-updates: true
```
