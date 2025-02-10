---
icon: hammer
---

# 合成

要创建配方，您需要在一个 `.yml` 文件中创建一个特殊部分。\
为了更好地组织配方，这个部分可以添加到所有和任何 `.yml` 文件中。

## 3x3 配方

![](../../.gitbook/assets/image_\(42\).png)

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

如你所见，我在 .yml 文件中创建了配方部分，这个部分可以包含每种类型的配方。\
本例中我创建了叫做 `deadmau5_hat` 的 `crafting_table` 配方。

## 2x2 配方

![](../../.gitbook/assets/image_\(41\).png)

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### 方法 1

```yaml
taco:
  permission: itemsadder.taco
  enabled: true
  pattern:
  - XSC
  - XPB
  ingredients:
    B: itemsadder:baguette
    C: itemsadder:sliced_roast_beef
    P: itemsadder:potato_sticks
    S: itemsadder:lettuce
```

### 方法 2

```yaml
taco:
  permission: itemsadder.taco
  enabled: true
  pattern:
  - SC
  - PB
  ingredients:
    B: itemsadder:baguette
    C: itemsadder:sliced_roast_beef
    P: itemsadder:potato_sticks
    S: itemsadder:lettuce
```

## 多种模式

{% hint style="success" %}
你可以为每个配方创建**多种模式**，只要保证每个属性以 `pattern` **开头**。例如本例 `pattern_2`。

```yaml
turquoise_sword:
  permission: itemsadder.turquoise_sword
  enabled: true
  pattern:
  - XRX
  - XRX
  - XSX
  pattern_2:
  - RXX
  - XXR
  - XSX
  ingredients:
    R: itemsadder:turquoise
    S: STICK
  result:
    item: itemsadder:turquoise_sword
    amount: 1
```
{% endhint %}

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

例如，这是 `peeled_potato` 配方。这是一个特殊的配方，它使用刀作为合成的材料（还有土豆），并在玩家制作一个去皮土豆时减少其耐久度，而不会使其消失。

![](<../../.gitbook/assets/image (10) (1).png>)

如您所见，您还可以使用 `play_sound` 播放声音。

## Shapeless recipes

```yaml
shapeless_emerald_example:
  enabled: true
  shapeless: true
  ingredients:
    A: POTATO
    B: STONE
  result:
    item: EMERALD
    amount: 1
```

<figure><img src="../../.gitbook/assets/emerald_shapeless_2.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/emerald_shapeless_1.png" alt=""><figcaption></figcaption></figure>
