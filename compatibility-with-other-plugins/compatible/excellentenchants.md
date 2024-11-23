# ExcellentEnchants

[此处下载](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)

（曾用名 **GoldenEnchants**）

## 如何使用附魔

这是一个用于 ItemsAdder 物品附魔的示例配置。

{% hint style="warning" %}
警告：附魔不会显示在物品描述中，这是另一个插件的“问题”。

<mark style="color:green;">附魔仍会生效！</mark>

因此你可以自行填写附魔描述。
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

在本例中，我设置了等级为一的 `tunnel` 附魔为

