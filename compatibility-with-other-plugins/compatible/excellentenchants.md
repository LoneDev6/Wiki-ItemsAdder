# ExcellentEnchants

[Şuradan İndir](https://www.spigotmc.org/resources/goldenenchants-%E2%80%A2-more-vanilla-like-enchantments-1-14-1-16.61693/)

(Daha Önce **GoldenEnchants** Olarak Biliniyordu)

## büyüler nasıl kullanılır

Bu, bir ItemsAdder özel öğe büyüsü için örnek bir yapılandırmadır.

{% hint style="warning" %}
Uyarı: Büyüler, eşya bilgisinde gösterilmeyecek, bu diğer eklentinin bir "hatası".

<mark style="color:green;">Efekt yine de çalışacak!</mark>

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

Bu durumda `tunnel` büyüsünü seviye 1 olarak ayarlıyorum
