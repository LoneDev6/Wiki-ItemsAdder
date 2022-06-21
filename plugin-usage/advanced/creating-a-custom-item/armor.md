# ארמור

## דוגמא לארמור מיוחד

כאן אתם יכולים לראות הגדרה לדוגמה ליצירת ארמור שלם עם כל החלקים שלו: קסדה, חזה, מכנסיים ומגפיים.

זהו ארמור פשוט שנוצר באופן אוטומטי ללא טקסטורות, ItemsAdder יפיק אותו מהצבע שהחלטתם.

![](<../../../.gitbook/assets/image (131).png>)



```yaml
items:
  ruby_head:
    display_name: Ruby helmet
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 275
    specific_properties:
      armor:
        slot: head
        color: ff0000
    attribute_modifiers:
      head:
        armor: 9
        armorToughness: 1
  ruby_chest:
    display_name: Ruby chestplate
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 400
    specific_properties:
      armor:
        slot: chest
        color: ff0000
    attribute_modifiers:
      chest:
        armor: 7
        armorToughness: 1
  ruby_legs:
    display_name: Ruby leggings
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 375
    specific_properties:
      armor:
        slot: legs
        color: ff0000
    attribute_modifiers:
      legs:
        armor: 5
        armorToughness: 1
  ruby_boots:
    display_name: Ruby boots
    permission: rubyarmor
    resource:
      generate: true
    durability:
      max_custom_durability: 325
    specific_properties:
      armor:
        slot: FEET
        color: ff0000
    attribute_modifiers:
      feet:
        armor: 3
        armorToughness: 1
```

## טקסטורות מיוחדת - באינבנטורי

כדי להוסיף טקסטורה מיוחדת לפריטי ארמור יש לציין טקסטורה או דגם (כמו לכל פריט מיוחד בפלאגין).

{% hint style="warning" %}
#### עדכנו את הפלאגין לגרסה: ItemsAdder 2.4.17+
{% endhint %}

### טקסטורת חפצים מיוחדת

```yaml
items:
  custom_helmet:
    display_name: "Custom Helmet"
    permission: armors.custom_helmet
    resource:
      generate: true
      textures:
       - "item/custom_helmet"
```

### מודל חפץ מיוחד

```yaml
items:
  custom_helmet:
    display_name: "Custom Helmet"
    permission: armors.custom_helmet
    resource:
      generate: false
      model_path: "item/custom_helmet"
```

## טקסטטורה מיוחדת - בתוך המשחק

{% content-ref url="../armors/" %}
[armors](../armors/)
{% endcontent-ref %}

