# המרת פריטים/בלוקים ישנים במשחק
* התרגום הזה בזכר, אבל מתאים לכולם כאחד

{% hint style="danger" %}
**מומלץ להתחיל עולם חדש ורענן ולא להשתמש בעולם הישן מכיוון שממירים עובדים אך הם ניסיוניים.**
{% endhint %}

{% hint style="danger" %}
תכונות אלו עשויות להיות פגומות, השאר אותן מופעלות רק לכמה ימים ולאחר מכן השבת אותן כדי למנוע השהייה חסרת תועלת.
{% endhint %}

## כיצד להמיר אוטומטית פריטים ישנים בעולמות שלך

כיצד להמיר אוטומטית פריטים ישנים בעולמות שלך כאשר אתה מעדכן מ-ItemsAdder 1.0 ל-2.0 שמת לב שרוב הפריטים השתנו, כך שהם אינם זהים לפריטים ישנים לפני העדכון.\
זו הסיבה שהייתי צריך לקודד תכונה שמחליפה אוטומטית פריטים ישנים בפריטים חדשים. תהליך זה מופעל בכל פעם ששחקן פותח מלאי בעולם (שידות, מכולות.. אבל לא את המלאי שלו).

על מנת לאפשר זאת עליך להגדיר את המאפיין הזה כ-true ב-'converter.yml' של **ItemsAdder 2.0**

#### הקפד להגדיר את המלאי פתוח: true

```
items-auto-update:
  debug: false
  inventory-open: true
```

## כיצד להמיר אוטומטית בלוקים ישנים המוצבים בעולמות

עליך לפתוח את `converter.yml` ולמפות את הבלוקים הישנים שלך **model\_id** עם הבלוק **namespaced** החדש של IA 2.0. לדוגמה, כבר הוספתי את מפת הבלוקים הישנה של ItemsAdder 1.0 כדי להמיר אותם לבלוקים עם רווחי שמות 2.0.

#### הקפד להגדיר מופעל: true

```
blocks:
  enabled: true
  debug: false
  conversion-map:
    "1": "itemsadder:ruby_block"
    "2": "itemsadder:crystal_block"
    "3": "itemsadder:spinel_block"
    "4": "itemsadder:turquoise_block"
    "5": "itemsadder:aqua_aura_block"
    "6": "itemsadder:amethyst_block"
    "7": "itemsadder:amethyst_prism_block"
    "8": "itemsadder:crying_obsidian"
    "9": "itemsadder:nice_stone"
    "10": "itemsadder:nice_wood"
    "11": "itemsadder:modern_stone"
    "12": "itemsadder:modern_sandstone"
    "13": "itemsadder:modern_quartz"
    "14": "itemsadder:ruby_ore"
    "15": "itemsadder:spinel_ore"
    "16": "itemsadder:turquoise_ore"
    "17": "itemsadder:aqua_aura_ore"
    "18": "itemsadder:amethyst_ore"
    "19": "itemsadder:bronze_ore"
    "20": "itemsadder:mysterious_ore"
    "21": "itemsadder:end_ore"
    "22": "itemsadder:restoration_table"
    "23": "itemsadder:customization_table"
    "24": "itemsadder:iron_dirt_ore"
    "25": "itemsadder:gold_dirt_ore"
    "26": "itemsadder:coal_dirt_ore"
    "27": "itemsadder:blaze_powder_ore"
    "28": "itemsadder:nether_alchemy_ore"
```
