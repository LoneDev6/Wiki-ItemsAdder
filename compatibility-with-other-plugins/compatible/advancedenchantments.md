# AdvancedEnchantments

## [下载插件](https://www.spigotmc.org/resources/43058/)

## 如何给Ia物品附魔

ItemsAdder 物品附魔配置示例

{% hint style="warning" %}
版本需求：
**ItemsAdder** 2.5.2+
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
