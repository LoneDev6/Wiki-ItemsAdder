# EpicBackpacks

## [Загрузить сейчас](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-epic-backpacks.28981/)

{% hint style="success" %}
Чтобы создавать рюкзаки, которые будут использовать текстурирование ItemsAdder, откройте backpacks.yml \(в папке EpicBackpacks\) и добавьте это \(для каждого рюкзака, который вы хотите создать\):
{% endhint %}

```yaml
 cool_backpack:
    display_name: '&fCool Backpack'
    item:
      type: ITEMSADDER_ITEM
      name: "itemsadder:plastic_bag"
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

