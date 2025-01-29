# AdvancedEnchantments

## [Download here](https://www.spigotmc.org/resources/43058/)

## How to use enchants

{% hint style="info" %}
Requires 4.0.2-beta-9 or greater.
{% endhint %}

This is an example configuration for an ItemsAdder custom item enchant.

```yaml
info:
  namespace: test
items:
  advanced_enchants_test:
    display_name: advanced_enchants_test
    resource:
      material: DIAMOND_SWORD
      generate: false
      model_path: minecraft:item/emerald
    enchants:
      - Beastslayer
      - Epicness
      - Immolation
```



{% hint style="warning" %}
## Warning

In order to use custom **AdvancedEnchantments** enchants on your **ItemsAdder** items you have to enable it in config.yml of **ItemsAdder**.

```yaml
advanced_enchantments:
  enable_custom_enchants_in_items_configs: true
```

This has a downside though.\
You won't be able to use custom armors texture in the [Armor Set](https://ae.advancedplugins.net/configuration/armor-sets) feature of **AdvancedEnchantments** because of how they hook into my plugin.\
There is nothing I can do.
{% endhint %}
