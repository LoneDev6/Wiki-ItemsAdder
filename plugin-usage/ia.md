---
description: /ia komutu menüsü
---

# 📃 Tarifler menüsü

## "Hepsi" için menü ayarları

`ia_gui.yml` dosyası  `/ia` komutuyla ilgili ayarları içeriyor.\
Aynı zamanda **"tüm"** ItemsAdder eşyalarınıda gösteriyor.

{% hint style="info" %}
Varsayılan ItemsAdder kaynak paketi kategorileri şunun içinde: `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`
{% endhint %}

## Özel bir kategori oluşturma

Eeğer kendi özel kategorinizi oluşturmak istiyorsanız kendi dosyanızı `.yml` dosyasına koymalısınz [namespace](adding-content/basic-concepts/namespace/).\
Bu bir örnek:

```yaml
info:
  namespace: your_namespace
categories:
  armors:
    enabled: true
    icon: "itemsadder:ruby_head"
    name: 'Armors'
    permission: "ia.menu.armors"
    #THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    font_image:
      name: "mcguis:blank_menu"
      x_position_pixels: -16
    #THIS IS OPTIONAL. Plugin will take the one in ia_gui.yml if not set.
    title_position_pixels: 0
    items:
      - "itemsadder:ruby_sword"
      - "itemsadder:ruby_head"
      - "itemsadder:ruby_chest"
      - "itemsadder:ruby_legs"
      - "itemsadder:ruby_boots"
      - "itemsadder:spinel_head"
      - "itemsadder:spinel_chest"
      - "itemsadder:spinel_legs"
```

Tüm kullanıcılara kategoriyi görmek için yetki verdiğinizden emin olun.\
Örneğin: **ia.menu.armors**

{% hint style="info" %}
**font\_image and title\_position\_pixels are optional.**\
****Eklenti ayarlanmamış ise `ia_gui.yml` dosyasındakini alıcak.

Bu ayar eğer her kategoride farklı font kullanmak istiyorsanız yararlı.
{% endhint %}

{% hint style="success" %}
**Aynı isimdeki** **kategoriler** ve farklı isimler **birleştirilecek**, bu eper 2 tane "kılıçlar" kategoriniz varsa **çok yardımcı** olucaktır. Bu **/ia** menüsünü açtığınızda 2 tane kılıçlar kategorisi görmeniz yerine organize olmuş tek bir kategori görmenizi sağlıyor.
{% endhint %}
