---
описание: Этот рецепт позволяет вашим пользователям варить/плавить материалы
---

# Переплавка в печи

## Пример

```yaml
  cooking:
    cooked_sausage:
      permission: itemsadder.cooked_sausage
      ingredient:
        item: itemsadder:sausage
      machines:
      - FURNACE
      - BLAST_FURNACE
      exp: 1
      cook_time: 200
      result:
        item: itemsadder:cooked_sausage
        amount: 1
```

В этом примере я создал рецепт `приготовления` под названием `cooked_sausage`.

`machines` - это список ванильных машин, которые могут выплавить/приготовить предмет  
`exp` - это опыт, получаемая игроком по завершении готовки  
`cook_time` - время, необходимое для завершения процесса приготовления\(**в тиках**\)

