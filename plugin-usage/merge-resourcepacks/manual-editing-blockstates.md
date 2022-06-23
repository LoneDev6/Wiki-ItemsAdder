---
description: Blokstate json dosyalarını manuel olarak nasıl düzenleyebiliriz
---

# Blok durumlarını manuel olarak düzenleme

## note\_block.json Düzenleme

{% hint style="warning" %}
ItemsAdder 2.4.20'a güncelleyin
{% endhint %}

`assets\minecraft\blockstates\note_block.json` Dosyasını manuel olarak adding your own rules inside.

**ItemsAdder** özel json dosyanızı otomatik olarak **ItemsAdder** özel bloklar ile birleştiricektir.

## EDiğer .json blok durumlarını düzenleme

İstediğiniz herhangi bir blok durum dosyasını düzenleyebilirsiniz, ancak bazılarını düzenlemek için bunu okumalısınız.

Bazı blok durumları dosyalarını düzenlemek için, düzenlemek istediğiniz türe göre ItemsAdder özel bloklar özelliğini devre dışı bırakmanız gerekir. Gelecekte, ItemsAdder blokları özelliğini devre dışı bırakmadan bu dosyaların manuel olarak düzenlenmesine izin verebilirim (uygulaması kolay değil, bu yüzden henüz bunu mümkün kılmadım).

### mantar blok durumları

Dosyaları silin:&#x20;

* `assets\minecraft\blockstates\brown_mushroom_block.json`&#x20;
* `assets\minecraft\blockstates\mushroom_stem.json`
* `assets\minecraft\blockstates\red_mushroom_block.json`

Bu ayarı açın:

{% code title="config.yml" %}
```yaml
  disable-REAL: true
```
{% endcode %}

### fire.json

Dosyayı silin `assets\minecraft\blockstates\fire.json`

Bu ayarı açın:

{% code title="config.yml" %}
```yaml
  disable-FIRE: true
```
{% endcode %}

### chorus\_plant.json

Dosyayı silin `assets\minecraft\blockstates\chorus_plant.json`

Bu ayarı açın:

{% code title="config.yml" %}
```yaml
  disable-REAL_TRANSPARENT: true
```
{% endcode %}

### tripwire.json

Dosyayı silin `assets\minecraft\blockstates\tripwire.json`

Bu ayarı açın:

{% code title="config.yml" %}
```yaml
  disable-REAL_WIRE: true
```
{% endcode %}
