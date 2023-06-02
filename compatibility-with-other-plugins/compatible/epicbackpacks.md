# EpicBackpacks

## [Buradan Çanta Pluginini Yükleyin](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-epic-backpacks.28981/)

{% hint style="warning" %}
[DefaultPack](../../first-install.md#default-pack-optional) nın Kurulu Olması Gerekir!
{% endhint %}

{% hint style="success" %}
ItemsAdder dokusunu kullanacak sırt çantaları oluşturmak için backpacks.yml'yi (EpicBackpacks klasöründe) açmanız ve bunu (oluşturmak istediğiniz her sırt çantası için bir tane) eklemeniz gerekir):
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
