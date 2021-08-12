---
description: 这个合成配方允许你玩家用物品来制作一个物品
---

# 合成配方

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

在这个栗子里,我创建了两个`crafting_table[合成配方]`合成配方,叫做`deadmau5_hat`和`top_hat`

## 特别的配方\[嘿嘿嘿\]

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

比如,这是一个`peeled_potato[削皮土豆]`的合成配方.这是一个超级特别的合成配方.使用一把刀\(和土豆\)作为合成材料.玩家合成出一个削皮土豆而刀不会消失反而会减低刀的耐久度.

![](../../../../.gitbook/assets/image%20%281%29.png)

如你所见,你也可以使用`play_sound`来播放一个音效.

