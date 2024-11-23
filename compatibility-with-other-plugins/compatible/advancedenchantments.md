# AdvancedEnchantments

## [点此下载](https://www.spigotmc.org/resources/43058/)

## 如何使用附魔

{% hint style="info" %}
需要版本 4.0.2-beta-9 或以上.
{% endhint %}

这是一个用于 ItemsAdder 自定义物品附魔的示例配置.

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
## 警告

为了在 **ItemsAdder** 物品中启用 **AdvancedEnchantments** 的自定义附魔，你需要在 **ItemsAdder** 的 config.yml 中启用下方设置.

```yaml
advanced_enchantments:
  enable_custom_enchants_in_items_configs: true
```

该操作会导致另一个问题.\
你无法在 **AdvancedEnchantments** 的[Armor Set](https://ae.advancedplugins.net/configuration/armor-sets) 功能中使用自定义盔甲纹理, 这与他们接入我插件的方式有关.\
对此我无能为力.
{% endhint %}
