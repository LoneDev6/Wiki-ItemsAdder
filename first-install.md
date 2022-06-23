---
description: Plugin nasıl kurulur
---

# ⚙ İlk kurulum

{% hint style="info" %}
**Hatalardan** ve birden çok yeniden başlatmadan kaçınmak için bu ilk yapılandırmayı kendi **bilgisayarınızdaki test sunucusunda** denemelisiniz.. Oyuncular sunucu aktif olmadığında mutlu olmazlar.\
Dosyalarınızı düzenlemeyi bitirdikten sonra gerçek sunucunuza yükleyebilirsiniz.
{% endhint %}

{% hint style="danger" %}
Tüm kurulum aşamalarını **tamamlamalısınız**. Sadece ilkini değil
{% endhint %}

## Adım 1 - eklentinin ve API'lerin kurulumu

* [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/) kurun
* [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/) kurun
* (isteğe bağlı) **LightAPI** ([1.14, 1.15, 1.16](http://a.devs.beer/lightapi-old) | [1.17, 1.18](http://a.devs.beer/lightapi-new)) kurun
* (isteğe bağlı)   gelecekte özel moblar eklemeyi planlıyorsanız [**Lib's Disguises**](https://www.spigotmc.org/resources/libs-disguises-free.81/) kurun
* **ItemsAdder.jar**'ı plugins dosyanızın içine koyun
* sunucuyu başlatın
* ItemsAdder'ın **herşeyi** yükleneyi bitirmesini bekleyin

Birinci adım tamamlandı.\
Şimdi kaynak paketini ayarlamak için (merak etmeyin çok zor değil) **adım 2**'yi tamamlamalısınız.

## Adım 2 - kaynak paketi ilk kurulumu

#### Kaynak paketinin hostlanma yolunu seçin:

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

## İsteğe bağlı adımlar

### Varsayılan eşyaları kaldırma

{% hint style="info" %}
Varsayılan öğelerimi umursamıyorsanız ve sadece kendi öğelerinizi, bloklarınızı ve diğer şeyleri yapmak istiyorsanız, bu gayet kolay!
{% endhint %}

{% content-ref url="faq/removing-default-stuff.md" %}
[removing-default-stuff.md](faq/removing-default-stuff.md)
{% endcontent-ref %}

### Hatalı blokladan kaçının (Purpur kullanıyorsanız)

{% content-ref url="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}
[avoid-glitched-blocks.md](faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md)
{% endcontent-ref %}
