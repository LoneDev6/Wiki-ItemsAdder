---
icon: rotate-right
---

# Items Updater

{% hint style="warning" %}
Available since ItemsAdder 4.0.12
{% endhint %}

ItemsAdder automatically updates items in the world.\
This is useful to avoid having to give updated items manually to your players.

## Disabling update for a single ItemStack instance

To disable the auto update for a single item in the inventory, you have to use this command:\
`/iaitem set-itemstack-auto-update <true|false>`

## Disable update for a certain custom item completely

You can also disable auto-updating for certain items completely, in their configuration file

For example you might want to change the attack damage of a sword to a higher value, but you don't want already crafted swords to have the new attack damage because they would be too op, because people might have crafted a lot of them.

So the already crafted swords will still keep the old attack damage.

#### Example

```yml
  test_item2:
    name: Test Item 2
    resource:
      generate: false
      model_path: minecraft:item/diamond
      material: IRON_SWORD
    max_stack_size: 16
    lore:
    - lol
    - lol
    enchants:
    - BREACH
    attribute_modifiers:
      head:
        armor_toughness: 8
    auto_update:
      enabled: false # <--- here
```

It can also be globally disabled in `config.yml` for every item in your configurations.

```yml
items:
# ....
  auto_update:
    enabled: true # <--- here
```

## Some special settings

### `enchantment_mode`

```yml
    auto_update:
      enchantment_mode: MERGE # MERGE or REPLACE (MERGE by default)
```

* `MERGE` - merges the enchantments of the outdated item and the new item
* `REPLACE` - replaces the old item enchantments completely with the new item enchantments

### `fix_unstackable_items_on_click`&#xD;

This will forceful merge the custom item on your cursor with clicked items that have same `namespace` + `id`.
