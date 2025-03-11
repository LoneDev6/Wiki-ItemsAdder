# EpicBackpacks

## [Download the backpack plugin here](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-epic-backpacks.28981/)

{% hint style="warning" %}
You must have the [DefaultPack](../../plugin-usage/first-install.md#default-pack-optional) installed!
{% endhint %}

{% hint style="success" %}
To create backpacks that will use ItemsAdder texture you have to open backpacks.yml (in EpicBackpacks folder) and add this (one for each backpack you want to create):
{% endhint %}

```yaml
 cool_backpack:
    display_name: '&fCool Backpack'
    item:
      type: ITEMSADDER_ITEM
      name: "iageneric:plastic_bag"
    size: 3
    craft_recipe:
      pattern:
        - XXX
        - LCL
        - XLX
      ingredients:
        L: LEATHER
        C: CHEST
```
