---
描述: This recipe allows your users to craft an item [此页面可教会你如何使用Ia的合成配方功能]
---

# Crafting

## Example 栗子

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

In this example I created two `crafting_table `recipes called `deadmau5_hat `and `top_hat`
在示例中，我在 `cooking` 属性下创建了 `deadmau5_hat `/`top_hat` 的合成配方

## Special features [特殊之处]

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

For example this is the `peeled_potato `recipe. This is a special recipe which uses a knife as ingredient of  the crafting (and a potato) and decrements its durability when player crafts one peeled potato without making it disappear.\
在这个示例中这个 `peeled_potato` 的合成配方很特殊.\
他可以使用刀和土豆来合成,并且每次合成小刀并不会消失而是耐久下降,但是土豆会消失并且变成`peeled_potato`.

![](<../../../../.gitbook/assets/image (10).png>)

As you can see you can also play a sound using `play_sound`.
你可以使用音效,正如示例中的`play_sound`.
