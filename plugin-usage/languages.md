# Dller

### Mevcut olan diller

```
GUI: 
    Çince zh_cn
    Çek cz
    Almanca de
    İngilizce en
    İspanyolca es
    Fransızca fr
    İtalyanca it
    Japonca jp
    Korece ko
    Flemenkçe nl
    Lehçe pl
    Portekizce pt
    Rusça ru
    Türkçe tr
    Tay th

Items: 
    Çince zh_cn
    İspanyolca es
    Fransızca fr
    İtalyanca it
    Portekizce pt
    Türkçe tr
```

### Dili nasıl değiştiririm?

`config.yml`'yi aç ve dil ayarını değiştir.

```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```

## Yeni bir dil nasıl düzenlenir ve oluşturulur?

**eklenti mesajları** bu klosörde bulunur: `plugins\ItemsAdder\lang\`

**Varsaylan eşyalar** ve **menü dilleri** bu klosörün içerisinde bulunur.: `plugins\ItemsAdder\data\items_packs\dictionaries\`

{% hint style="warning" %}
Some addons may put their dictionary files inside other folders inside items\_packs, you have to search for them.
{% endhint %}
