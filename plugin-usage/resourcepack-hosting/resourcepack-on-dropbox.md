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

* **BU ÇOK ÖNEMLİ**: **komutunu kullanın** `/iareload` to **reload** the **plugin after** you **change** something in `config.yml` (in this case to reload the resourcepack download link)
* **Use command** `/iatexture` on your game to refresh your current game texture ingame or use `/iatexture all` to refresh it for every player

{% hint style="danger" %}
PLEASE use `/iazip` **everytime** you edit a **texture**, a 3D **model**, a **sound**... then **reupload** the pack on **Dropbox** and use **/iareload** or you won't see any change obviously.
{% endhint %}

{% hint style="warning" %}
**Change** the **file name each time** you **upload** a **new version** of the **resourcepack** to **force** the game to **redownload** the **new version**.\
If you **reupload** the **zip** file with the same and keep the **same URL** it **won't update** to each player.
{% endhint %}

## But this is so slow! I have to reupload on DropBox too many times!

Yea it is, that's why you should use the self host feature instead of **DropBox**. But some hosting (cheap ones) don't provide port opening, so you must use **DropBox**.

{% content-ref url="resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](resourcepack-self-hosting.md)
{% endcontent-ref %}
