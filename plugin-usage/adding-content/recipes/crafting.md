---
description: This recipe allows your users to craft an item
---

# Crafting

In order to create a recipe for your items in your [namespace ](../basic-concepts/namespace.md)you have to create a special section in one of your .yml files (or on each one, you decide how you want to organize the plugin).

## Example 3x3 recipe

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

As you can see I created the recipes section in the .yml file, this section can contain each type of recipe.\
In this example I created a `crafting_table` recipe called `deadmau5_hat`

## Example 2x2 recipe

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
You must set first line to XXX, and every ingredient on the bottom right.
{% endhint %}

{% hint style="success" %}
You can create **multiple patterns** per recipe, just make sure that the attribute **starts** with '**pattern**' text. For example pattern\_2.

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

## Special features

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

For example this is the `peeled_potato` recipe. This is a special recipe which uses a knife as ingredient of  the crafting (and a potato) and decrements its durability when player crafts one peeled potato without making it disappear.\


![](<../../../.gitbook/assets/image (10).png>)

As you can see you can also play a sound using `play_sound`
