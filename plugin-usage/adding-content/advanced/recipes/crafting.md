---
описание: Этот рецепт позволяет вашим пользователям изготовить предмет
---

# Верстак

## Пример

```yaml
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
    top_hat:
      permission: itemsadder.top_hat
      enabled: true
      pattern:
      - XWX
      - XWX
      - WWW
      ingredients:
        W: BLACK_WOOL
      result:
        item: itemsadder:top_hat
        amount: 1
```

В этом примере я создал два рецепта `crafting_table` под названием `deadmau5_hat` и `top_hat`.

## Специальные возможности

```yaml
    peeled_potato:
      permission: itemsadder.peeled_potato
      enabled: true
      pattern:
      - XXX
      - XKP
      - XXX
      ingredients:
        K: itemsadder:knife
        P: POTATO
      result:
        item: itemsadder:peeled_potato
        amount: 1
      return_items:
        decrement_durability:
          knife:
            item: knife
            amount: 1
        play_sound:
          name: itemsadder:item.knife.use
          volume: 1
          pitch: 1
```

Например, это рецепт `peeled_potato`. Это специальный рецепт, который использует нож в качестве ингредиента для изготовления\(и картофеля\) и уменьшает его прочность, когда игрок изготавливает одну очищенную картофелину, не заставляя ее исчезнуть.


![](../../../../.gitbook/assets/image%20%281%29.png)

Как вы видите, вы также можете воспроизвести звук, используя `play_sound`.

