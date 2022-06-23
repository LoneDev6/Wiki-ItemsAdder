---
cover: ../../.gitbook/assets/Google-Drive.jpg
coverY: 0
---

# 🗂 Google Drive (1.17.1+)

## Google Drive nasıl kullanılır

{% hint style="warning" %}
Bu method bazı pclerde 1.17 sürümü dışında bir minecraft hatasına sahip, daha fazla okuyun: [https://bugs.mojang.com/browse/MC-143768](https://bugs.mojang.com/browse/MC-143768)

Bu method Minecraft 1.17.1 ve daha üst versiyonlarında %100 çalışıyor.
{% endhint %}

### Adım 1

Kaynak paketi zip dosyanıza sağ tıklayın ve "Linki Al"'a basın

![](<../../.gitbook/assets/immagine (156).png>)

### Adım 2

Önemli: izinleri "Bağlantıya sahip olan herkes" olarak ayarlayın

![](<../../.gitbook/assets/immagine (145).png>)

"Bağlantıyı kopyala"'ya basın

![](<../../.gitbook/assets/immagine (150).png>)

### Adım 3

Websiteye göz atın: [http://a.devs.beer/gdrive-direct](http://a.devs.beer/gdrive-direct)

Bağlantıyı yapıştırın ve "Get direct link" butonuna basın

<img src="../../.gitbook/assets/immagine (144).png" alt="" data-size="original">

### Adım 4

Website otomatik olarak oluşturulmuş linki kopyalar

![](<../../.gitbook/assets/immagine (147).png>)

Şimdi linki **ItemsAdder** konfigürasyon  dosyasında `config.yml`'ye yapıştırıp  `/iareload` komutunu kullanabilirsiniz.

{% code title="config.yml" %}
```yaml
external-host:
  enabled: true
  url: 'http://drive.google.com/uc?export=view&id=10g3whim95Hab40KZNjUkwY9FUuqKMGh5'
```
{% endcode %}

### Bitti!

Şimdi paketin oyun tarafından başarıyla yüklendiğini görebilirsiniz.

## Sık görülen hatalar

### "Making Request... 100%" kısmında uzun süre takılma

### ![](<../../.gitbook/assets/immagine (146).png>)

Bu normal. Çünkü Google Drive kaynak paketinin indirmesini başlatmadan önce doğrulamalar yapıyor.

Bu sadece oyuncu paketi ilk kez indiriyorsa oluyor ve 5-10 saniye alıyor.

### Kaynak paketi yüklenmiyor

Bu method bazı pclerde 1.17 sürümü dışında bir minecraft hatasına sahip, daha fazlasını okuyun: [https://bugs.mojang.com/browse/MC-143768](https://bugs.mojang.com/browse/MC-143768)

Bu method Minecraft 1.17.1 ve daha üst versiyonlarında %100 çalışıyor.
