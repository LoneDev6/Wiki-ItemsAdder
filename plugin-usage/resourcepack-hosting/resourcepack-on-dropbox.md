---
cover: >-
  ../../.gitbook/assets/Dropbox_(service)-Blue&White-Dark-Background-Logo.wine.svg
coverY: 0
---

# 📦 DropBox

## Videolu Anlatım

{% embed url="https://www.youtube.com/embed/GKGnlF4zZVg?start=78&end=189&rel=0&autoplay=0&showinfo=0" %}

## Yazılı Anlatım

* [DropBox](https://dropbox.com/)'ı açın ve kayıt olun/giriş yapın
* `/iazip` komutunu kullanın (**bu önemlidir** çünkü `/iazip` eklentiyi yeniden yükler ve **pack.zip** dosyasını günceller)
* Dosyayı açın: `plugins/ItemsAdder/data/resource_pack/`
* **pack.zip** dosyasını **DropBox** dosyasına **sürükleyip bırakın**
* **Share**'e basın

![](<../../.gitbook/assets/immagine (20).png>)

* **Create**'ye basın

![](<../../.gitbook/assets/immagine (21).png>)

* **Copy link**'e basın
* Örneğin bağlantınız [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0)&#x20;
* **ItemsAdder**'in `config.yml`'sini açın
* Bunu şu şekilde ayarlayın (**I used the example URL, please use your own**)

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

* **GERÇEKTEN ÖNEMLİ**: **config.yml**'de bir şeyi **değiştirdikten** sonra eklentiyi **yeniden yüklemek** için **`/iareload` komutunu kullanın** (bu durumda kaynak paketi indirme bağlantısını yeniden yüklemek için)
* Oyun içi mevcut oyun dokunuzu yenilemek için oyununuzda `/iatexture` **komutunu** kullanın veya her oyuncu için yenilemek için `/iatexture all` **komutunu kullanın**

{% hint style="danger" %}
LÜTFEN **doku**, 3D **model**, **ses** dosyalarını düzenlediğinizde **her seferinde** `/iazip` kullanın... ardından paketi **Dropbox**'a **yeniden yükleyin** * ve **/iareload** kullanın, aksi takdirde hiçbir değişiklik görmezsiniz.
{% endhint %}

{% hint style="warning" %}
**Change** the **file name each time** you **upload** a **new version** of the **resourcepack** to **force** the game to **redownload** the **new version**.\
If you **reupload** the **zip** file with the same and keep the **same URL** it **won't update** to each player.
{% endhint %}

## Ama bu çok yavaş! DropBox'a birçok kez yeniden yükleme yapmam gerekiyor!

Evet öyle, bu yüzden **DropBox** yerine kendi kendine barındırma özelliğini kullanmalısınız. Ancak bazı barındırma (ucuz olanlar) bağlantı noktası açma olanağı sağlamaz, bu nedenle **DropBox** kullanmanız gerekir.

{% content-ref url="resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](resourcepack-self-hosting.md)
{% endcontent-ref %}
