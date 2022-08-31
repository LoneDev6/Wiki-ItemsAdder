# ExcellentEnchants

[下载插件](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)

(前身为 **GoldenEnchants**)

## 如何添加附魔

这是一个可以让Ia进行插件扩展附魔的栗子

{% hint style="warning" %}
注意: 附魔并不会显示在物品lore上,这是插件的一个"特性".

<mark style="color:green;">但是附魔效果仍有效!</mark>

所以可以自行注释在lore上
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

上方栗子中,我设置了1级的 `tunnel` 附魔效果

