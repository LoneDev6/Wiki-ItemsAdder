---
cover: >-
  ../../.gitbook/assets/Dropbox_(service)-Blue&White-Dark-Background-Logo.wine.svg
coverY: 0
---

# 📦 DropBox

## Öğretici video

{% embed url="https://www.youtube.com/embed/GKGnlF4zZVg?start=78&end=189&rel=0&autoplay=0&showinfo=0" %}

## Yazı ile anlatım

* [DropBox](https://dropbox.com)'u açın, kayıt olun/giriş yapın
* `/iazip` komutunu kullanın (**bu çok önemli** çünkü `/iazip`konfigürasyonu yeniden yükler ve **pack.zip** dosyasını günceller)
* Şu dosyayı açın: `plugins/ItemsAdder/data/resource_pack/`
* **pack.zip** dosyasını **DropBox**'a **sürükleyin**
* **Paylaşa** basın

![](<../../.gitbook/assets/immagine (20).png>)

* **Oluştura** basın

![](<../../.gitbook/assets/immagine (21).png>)

* **Linki kopyalaya** basın
* Örneğin [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0)&#x20;
* **Itemsadderın** `config.yml` of dosyasını açın
* Ve şu şekilde ayarlayın (**Ben örnek URL kullandım, lütfen kendinizinkini kullanın**)

```yaml
resource-pack:
  apply-on-join: true
  kick-player-on-decline: false
  delay-ticks: 1
  self-host:
    enabled: false
    server-ip: '127.0.0.1'
    pack-port: 8163
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

* **BU ÇOK ÖNEMLİ**: `config.yml` dosyasında birşey değiştirdiğinizde eklentiyi **yeniden yüklemek** için `/iareload` **komutunu kullanın** (bu durumda paletin indirme linki için)
* Oyununuzun kaynak paketini oyun içinden yenilemek için `/iatexture` **komutunu kullanın**  yada bunu hekres için yapmak için `/iatexture all` komutunu kullanın

{% hint style="danger" %}
Lütfen dosyaları,3D Modelleri ve sesleri düzenlediğinizde **her zaman** `/iazip` komutunu kullanın... sonra paketinizi **Dropbox**'a **yeniden yükleyin** ve **/iareload** komutunu kullanın.
{% endhint %}

{% hint style="warning" %}
**Her seferinde** **kaynak paketinin yeni versiyonunu** **yüklerken** **adını değiştirin** ve oyunun **yeniden yüklemesini** **zorlayın** .\
Eğer **zip** dosyasını **yeniden** aynı şekilde yüklerseniz ve **aynı URL**'yi tutarsanız paket her oyuncu için **güncellenmeyecektir**.
{% endhint %}

## Ama bu çok yavaş! Dropboxa çok kez yüklemeye çalışmalısınız!

İşte bu yüzden **DropBox** yerine **self-host** kullanmalısınız. Ama bazı barındırma hizmetleri (özellikle ucuz olanlar) port açma özelliği sağlamaz, ve **DropBox** kullanmak zorunda kalırsınız.

{% content-ref url="resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](resourcepack-self-hosting.md)
{% endcontent-ref %}
