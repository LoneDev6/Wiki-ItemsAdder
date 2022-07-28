# 🍳 合成配方

为了在 [命名空间 ](../basic-concepts/namespace/) 中为自定义物品创建合成配方，你需要在.yml文件中添加 `recipes` 的属性（当然你也可以新建一个文件来专门配置合成配方）

## 示例：3x3 的合成配方

![](<../../../.gitbook/assets/immagine (42).png>)

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

从配置中你可以发现我创建了 `recipes:` 属性部分，该属性部分可以创建各种类型的合成配方.\
在示例中，我创建了一个名为 `deadmau5_hat` 的 `crafting_table（工作台）` 配方

## 示例：2x2 的合成配方

![](<../../../.gitbook/assets/immagine (41).png>)

![](<../../../.gitbook/assets/immagine (43).png>)

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
在 2x2 的配方中你必须将第一行设置为 *XXX** 并在右下角设置合成的材料.\
_在合成配方中 X 代表空白_
{% endhint %}

{% hint style="success" %}
如果你需要创建 **多个** 合成配方，只需要确保多种配方的属性以`pattern` 为前缀. .\
例如：pattern\_2

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
