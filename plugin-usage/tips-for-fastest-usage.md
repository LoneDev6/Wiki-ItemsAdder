# 🏁 Hızlı kullanım için ipuçları

## Kaynak paketini düzenlemek ve internete yüklemek çok uzun zaman alıyor !

Eğer yanlış yolu yaparsanız ;) Bunu okuyun:

{% hint style="info" %}
Bunlarla birlikte bilgisayarınızda bir **test sunucusu** kurmak iyi bir alıştırma:

* [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-emojis-ores-blocks-wings-tails-hats-more.73355/)
* [LoneLib](https://www.spigotmc.org/resources/lonelibs.75974/)
* [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
* [LightAPI Fork](https://www.spigotmc.org/resources/lightapi-fork.48247/)

Bu kaynak paketi ile Itemsadder:

```yaml
resource-pack:
  hosting:
    no-host:
      enabled: false
    auto-external-host:
      enabled: false
    self-host:
      enabled: true # <----- HERE, set true
      server-ip: '127.0.0.1'
      pack-port: 8163
    external-host:
      enabled: false
      url: ''
```

Bunu yaparak hızlı kullanımı ve kolay bir yapılandırmaya sahip olacaksınız. Öğeleri ekleyip paketi anında düzenleyebilirsiniz.
Bir öğenin modelini veya dokusunu düzenlediğinizde şu komutu kullanacaksınız:  `/iazip` .\
Bunu yaparak değişiklikleri gerçek zamanlı olarak görebileceksiniz.

Eşya/öğe eklemeyi ve yapılandırmayı bitirdikten sonra değişiklikleri göstermek için her şeyi sunucunuza yükleyebilirsiniz.
{% endhint %}

{% content-ref url="resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

{% hint style="warning" %}
ItemsAdder dokularını/modellerini doğrudan sunucunuzda düzenlememek iyi bir uygulamadır..\
Oyuncular pluginlerin yeniden başlatılmasından dolayı oluşan lagdan, sunucunun yeniden başlamasından, paketi tekrar indirmekten hiç hoşlanmazlar.. aklınızda bulunsun.
{% endhint %}

{% hint style="danger" %}
It's a good thing not to edit my custom items as surely in the future they can be edited and you'll go crazy maintaining both your customization and my updates.\
So if you want to edit items just make your own
{% endhint %}
