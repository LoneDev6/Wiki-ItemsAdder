# קבלת אקספי מבלוקים

{% hint style="info" %}
#### ישנן 2 דרכים לקבל אקספי מהבלוקים המיוחדים שלכם.
{% endhint %}

## 1. הגדרת האקספי בתוך הגדרות הבלוק המיוחד

יש לזה חיסרון, אתם יכול להגדיר את קבלת האקספי רק לבלוקים המיוחדים, לא לבלוקים במשחק הרגיל.

```yaml
  ruby_block:
    display_name: display-name-ruby_block
    permission: ruby_block
    resource:
      material: PAPER
      generate: true
      textures:
      - block/ruby_block.png
    specific_properties:
      block:
        placed_model:
          type: REAL_NOTE
          break_particles_material: REDSTONE_BLOCK
        break_tools_whitelist:
        - PICKAXE
        - pickaxe
    events:
      placed_block:
        break:
          drop_exp:
            chance: 100
            min_amount: 0
            max_amount: 3
```

## 2. הגדרת האקספי בתוך לוט

זו הדרך הטובה ביותר כי אתם יכולים ליישם את זה גם על סוגי בלוקי במשחק הרגיל ואתם גם יכולים להוסיף כמה הגדרות אקספי שאתם רוצים. זה מאפשר לכם להוסיף יותר אקראיות ודינמיות לאספי שלכם.

```yaml
loots:
  blocks:
    ruby_ore:
      type: itemsadder:ruby_ore
      items:
        ruby:
          item: itemsadder:ruby
          min_amount: 1
          max_amount: 2
          chance: 100
      exp:
        exp_1:
          min_amount: 0
          max_amount: 3
          chance: 100
```
