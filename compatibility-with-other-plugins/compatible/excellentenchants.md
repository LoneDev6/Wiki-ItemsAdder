# ExcellentEnchants

[Download here](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)

(previously known as **GoldenEnchants**)

## How to use enchants

This is an example configuration for an ItemsAdder custom item enchant.

{% hint style="warning" %}
Warning: enchants won't be shown on the item lore, it's a "bug" of the other plugin.

<mark style="color:green;">The effect will still work!</mark>

So you should write the lore on your own.
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
    - tunnel:1
```

In this case I set `tunnel` enchant with level 1

