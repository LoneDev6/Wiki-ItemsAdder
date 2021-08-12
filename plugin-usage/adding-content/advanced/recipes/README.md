# 配方

如果你想给你的物品创建一个合成配方,你必须在你的[命名空间](../../beginners/basic-concepts/namespace.md)下面写一个特殊的部分\(或者在每一个配置里,主要你决定你想如何整理配置\)

## 栗子: 3x3合成配方

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

如你所见,我在.yml文件里写合成配方的部分,这部分可以包含每种类型的合成配方. 在这个栗子里,我创建了一个名为 "deadmau5\_hat"的`crafting_table[合成台]`合成配方

## 栗子: 2x2合成配方

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
你的第一行必须设置为XXX,每一样合成需要的物品都写在下方.
{% endhint %}

{% hint style="success" %}
你可以在每个合成配方里创建**multiple patterns\[多个合成方式\]**,只确保开头为'**pattern\[如有多行则在后面加上\_2或者更多数字\]**'.举个栗子`pattern\_2`.

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

