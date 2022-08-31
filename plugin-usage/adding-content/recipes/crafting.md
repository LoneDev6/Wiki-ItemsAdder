---
描述: 该合成配方可以使玩家通过工作台合成物品
---

# 工作台

## 栗子

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

在该示例中，分别创建了 `deadmau5_hat` 和 `top_hat` 的 `crafting_table（工作台）` 合成配方

## 特殊功能

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

该示例为 `peeled_potato（去皮土豆）` 的合成配方. .\
该配方中加入了一些特殊的功能，使用刀与（土豆）作为材料，当玩家通过该合成配方去制作物品时将会获得 `peeled_potato（去皮土豆）` ，随之材料中的刀的耐久也会跟着减少.

![](<../../../../.gitbook/assets/image (10).png>)

当然，你还可以使用 `play_sound` 属性来播放音效
