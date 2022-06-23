# 🗑 להסיר חפצי ברירת מחדל

## איך אני יכול למחוק את כל הדברים שמגיעים אם הפלאגין?

אם אתם רוצים למחוק דברים או בלוקים, זה קל!\
עקבו אחרי המדריך הזה.\\

### 1. Config.yml

פתחו את `config.yml` העבירו למצב **false**.

```yaml
  extract-default-items: false
  extract-default-resources: false
```

### 2. מחקו תיקיות שאתם לא צריכים. אפשר להשתמש ברשימה הזאת:

#### Twitter emojis

`plugins\ItemsAdder\data\items_packs\twitteremojis`\
`plugins\ItemsAdder\data\resource_pack\assets\twitteremojis`

#### Magic craft example

`plugins\ItemsAdder\data\items_packs\magiccraft`\
`plugins\ItemsAdder\data\resource_pack\assets\magiccraft`

#### Minecraft Emojis

`plugins\ItemsAdder\data\items_packs\mcemojis`\
`plugins\ItemsAdder\data\resource_pack\assets\mcemojis`

#### ItemsAdder items

`plugins\ItemsAdder\data\items_packs\itemsadder`\
`plugins\ItemsAdder\data\resource_pack\assets\itemsadder`

#### Example items

`plugins\ItemsAdder\data\items_packs\example`\
`plugins\ItemsAdder\data\resource_pack\assets\example`

{% hint style="danger" %}
### אל תמחקו תיקיות אחרות שאינן מופיעות ברשימה הקודמת.

אם תמחקו את תיקיות Minecraft, mcguis או mcicons חלקים מסוימים של הפלאגין יפסיקו לעבוד.
{% endhint %}
