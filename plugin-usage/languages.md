# Languages

### Currently available languages

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

### Dil nasıl değiştirilir?

config.yml'yi açın ve dil ayarını değiştirin.

```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```

## Yeni diller nasıl düzenlenir veya oluşturulur?

**Eklenti** mesajları **dil** dosyaları **bu klasörde** bulunur: `plugins\ItemsAdder\lang\`

**Varsayılan eşyalar** ve **menü dilleri** dosyaları **bu klasörün** içindedir: `plugins\ItemsAdder\data\items_packs\dictionaries\`

{% hint style="warning" %}
Bazı eklentiler sözlük dosyalarını item\_packs içindeki diğer klasörlere koyabilir, onları aramanız gerekir.
{% endhint %}
