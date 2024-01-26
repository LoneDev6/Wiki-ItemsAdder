---
cover: ../../.gitbook/assets/Google-Drive.jpg
coverY: 0
---

# 🗂 Google Drive (1.17.1+)

## Google Drive nasıl kullanılır?

{% hint style="warning" %}
Bu yöntemin, Minecraft hatası nedeniyle 1.17'den önceki Minecraft sürümlerindeki bazı bilgisayarlarda bazı sorunları vardır, daha fazlası için: [https://bugs.mojang.com/browse/MC-143768](https://bugs.mojang.com/browse/MC-143768)

Bu yöntem Minecraft 1.17.1 ve en yeni sürümlerde %100 oranında çalışır.
{% endhint %}

### Adım 1

Kaynak paketi zip dosyanıza sağ tıklayın ve "Bağlantıyı al"a basın

![](<../../.gitbook/assets/immagine (156).png>)

### Adım 2

Önemli: izni "Anyone with the link" olarak ayarlayın.

![](<../../.gitbook/assets/immagine (145).png>)

Press "Link'i kopyala"

![](<../../.gitbook/assets/immagine (150).png>)

### Adım 3

Visit this website: [http://a.devs.beer/gdrive-direct](http://a.devs.beer/gdrive-direct)

Bağlantıyı yapıştırın ve "Doğrudan bağlantıyı al" seçeneğine basın

<img src="../../.gitbook/assets/immagine (144).png" alt="" data-size="original">

### Adım 4

Web sitesi, oluşturulan bağlantıyı otomatik olarak kopyalar.

![](<../../.gitbook/assets/immagine (147).png>)

Artık bağlantıyı ItemsAdder yapılandırma dosyası `config.yml`'in içine yapıştırabilir ve ardından `/iareload` komutunu kullanabilirsiniz.

{% code title="config.yml" %}
```yaml
external-host:
  enabled: true
  url: 'http://drive.google.com/uc?export=view&id=10g3whim95Hab40KZNjUkwY9FUuqKMGh5'
```
{% endcode %}

### Tamamlandı!

Artık paketin oyun tarafından doğru şekilde yüklendiğini görebilirsiniz.

## Genel sorunlar

### Uzun süren "Talep Alınıyor... %100"

### ![](<../../.gitbook/assets/immagine (146).png>)

Bu normal. Bunun nedeni, Google Drive'ın kaynak paketinin indirilmesine izin vermeden önce bazı şeyler yapmasıdır.

Bu yalnızca oyuncu kaynak paketini ilk kez indirdiğinde gerçekleşir ve 5 ila 10 saniye sürer.

### Kaynak paketi hiç yüklenmiyor

Bu yöntemin, Minecraft hatası nedeniyle 1.17'den önceki Minecraft sürümlerindeki bazı bilgisayarlarda bazı sorunları vardır, daha fazlası için: [https://bugs.mojang.com/browse/MC-143768](https://bugs.mojang.com/browse/MC-143768)

Bu yöntem Minecraft 1.17.1 ve en yeni sürümlerde %100 oranında çalışır.
