# Dil

### Şuanda erişilebilir diller

```
GUI: 
    Chinese zh_cn
    Czech cz
    German de
    English en
    Spanish es
    French fr
    Italian it
    Japanese jp
    Korean ko
    Dutch nl
    Polish pl
    Portuguese pt
    Russian ru
    Turkish tr
    Thai th

Items: 
    Chinese zh_cn
    Spanish es
    French fr
    Italian it
    Portuguese pt
    Turkish tr
```

### Dili nasıl değişirim?
config.yml dosyasını açın ve dil ayarını değiştirin.

```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```

## Nasıl yeni bir dil oluşturulur veya düzenlenir?
**Eklentinin** mesajlar **dil** dosyası **şurada**: `plugins\ItemsAdder\lang\`
**Varsayılan eşyalar** ve **menü dilleri** dosyaları **şurada**: `plugins\ItemsAdder\data\items_packs\dictionaries\`

{% hint style="warning" %}
Bazı eklentiler dosyalarını items\_packs içine koyabilirler, onları aramalısın.
{% endhint %}
