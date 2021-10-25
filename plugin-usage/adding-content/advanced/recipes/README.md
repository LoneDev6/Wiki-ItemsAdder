# Рецепты крафтинга

Чтобы создать рецепт для элементов в вашем [namespace](../../beginners/basic-concepts/namespace.md), вы должны создать специальный раздел в одном из ваших .yml файлов \(или на каждом, вы решаете, как вы хотите организовать plugin\).

## Пример рецепта 3x3

![](../../../../.gitbook/assets/immagine%20%2846%29.png)

```yaml
info:
  namespace: myitems
recipes:
  crafting_table:
    deadmau5_hat:
      permission: myitems.deadmau5_hat
      enabled: true
      pattern:
      - BXB
      - XBX
      - XXX
      ingredients:
        B: LIGHT_BLUE_WOOL
      result:
        item: myitems:deadmau5_hat
        amount: 1
```

Как вы видите, я создал раздел recipes в файле .yml, этот раздел может содержать каждый тип рецепта.  
В этом примере я создал рецепт `crafting_table` под названием `deadmau5_hat`.

## Пример рецепта 2x2

![](../../../../.gitbook/assets/immagine%20%2844%29.png)

![](../../../../.gitbook/assets/immagine%20%2845%29.png)

```yaml
taco:
  permission: itemsadder.taco
  enabled: true
  pattern:
  - XXX
  - XSC
  - XPB
  ingredients:
    B: itemsadder:baguette
    C: itemsadder:sliced_roast_beef
    P: itemsadder:potato_sticks
    S: itemsadder:lettuce
```

{% hint style="warning" %}
Вы должны установить первую строку на XXX, а каждый ингредиент внизу справа.
{% endhint %}

{% hint style="success" %}
Вы можете создать **много шаблонов (patterns) ** для одного рецепта, только убедитесь, что атрибут **начинается** с текста '**pattern**'. Например, pattern\_2.

```yaml
turquoise_sword:
  permission: itemsadder.turquoise_sword
  enabled: true
  pattern:
  - XRX
  - XRX
  - XSX
  pattern_2:
  - XXX
  - XRX
  - XSX
  ingredients:
    R: itemsadder:turquoise
    S: STICK
  result:
    item: itemsadder:turquoise_sword
    amount: 1
```
{% endhint %}

