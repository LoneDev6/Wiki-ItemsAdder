# AdvancedEnchantments

## [Download here](https://www.spigotmc.org/resources/43058/)

## How to use enchants

This is an example configuration for an ItemsAdder custom item enchant.

{% hint style="warning" %}
Warning: this feature doesn't work on **AdvancedEnchantments** 8.7.29 because of a bug.\
I already contacted the developers about this problem.

This also requires **ItemsAdder** 2.5.2+
{% endhint %}

```yaml
  ruby_pickaxe:
    display_name: display-name-ruby_pickaxe
    permission: ruby_pickaxe
    resource:
      material: DIAMOND_PICKAXE
      generate: true
      textures:
      - item/ruby_pickaxe.png
    enchants:
    - ambit:7
```
