# ExcellentEnchants

[הורידו כאן](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)

(פעם היה נקרא גם **GoldenEnchants**)

## איך לעשות שימוש בכישופים

זוהי הגדרה לדוגמה עבור פריט מותאם אישית של ItemsAdder.

{% hint style="warning" %}
אזהרה: כישופים לא יוצגו על הפריט lore, זה "באג" של הפלאגין השני.

<mark style="color:green;">האפקט עדיין יעבוד!</mark>

אז עדיין תכתבו את הLore כמו שצריך.
{% endhint %}

```yaml
  ruby_pickaxe:
    display_name: display-name-ruby_pickaxe
    permission: ruby_pickaxe
    resource:
      material: DIAMOND_PICKAXE
      generate: true
      textures:
      - item/ruby_pickaxe.png
    enchants:
    - tunnel:1
```

במקרה הזה הגדרתי את הכישוף 'tunnel' עם רמה 1

