---
description: >-
  Bungeecord ağında tek kaynak paketi ve sunucu başına özellikleri devre dışı
  bırakma
---

# Tek kaynak paketi Bungeecord farklı özellikler

Öğreticiyi yapan; [@itsmemac](https://github.com/LoneDev6/Wiki-ItemsAdder/pull/35)

{% hint style="info" %}
Bu rehberi izlemeden önce, [**İlk Kurulum**](https://itemsadder.devs.beer/first-install) yaptığınızdan emin olun ve ve çalışan bir IA kurulumunuz olduğundan
{% endhint %}

**ADIM 1**

Sunucunuz için tüm ağınızda ihtiyaç duyacağınız her şeyi içeren son paketi yerel olarak oluşturun (her öğe, GUI, mob, emoji vb.).\
PC'nizde istediğiniz her şeyi yapılandıracağınız yerel bir Spigot sunucusu oluşturmanız gerekir.

**ADIM 2**

Spigot sunucularınızın her birini açın ve Itemsadder yapılandırmasından barındırma yöntemini şu şekilde ayarlayın: `no-host` ve extract of items'i false şeklinde ayarlayın

{% code title="config.yml" %}
```yaml
  hosting:
    no-host:
      enabled: true
  extract-default-items: false
  extract-default-resources: false
```
{% endcode %}

**ADIM 3**

Run `/iazip` komutunu çalıştırın ve oluşturulan paketi DİREKT İNDİRMEYE sahip olan bir barındırma hizmetine yükleyin.\
Örneğin [**MCPACKS**](https://mc-packs.net)**,** [**DropBox**](../plugin-usage/resourcepack-hosting/resourcepack-on-dropbox.md)**,** [**GoogleDrive**](../plugin-usage/resourcepack-hosting/google-drive-1.17.1+.md)**.**

**ADIM 4**

Networke girdiğinizde paketi yükleyecek [**Force resourcepack**](https://www.spigotmc.org/resources/force-resourcepacks.10499/) gibi bir eklenti kullanın.

**ADIM 5**

`ItemsAdder.jar`'ını ve tüm `ItemsAdder` eklenti dosyasını kopyalayın ve tüm network sunucularınızın `/plugins` dosyasına yapıştırın (örneğin `lobby`).

**ADIM 6**

ItemsAdder'ın config.yml dosyasını açın ve ihtiyacınız olmayan özellikleri devre dışı bırakın.\
Ayrıca istenmeyen dosyaları da `plugins/ItemsAdder/data/items_packs`'dan kaldırın .

{% hint style="danger" %}
Sözlükleri, mcemojis, mcguis, mcicons, realcraft, çeşitli\yapılandırma KLASÖRÜNÜ KALDIRMAYIN.\
Daha fazlasını buradan okuyun: [Varsayılan öğeleri kaldırma](removing-default-stuff.md)
{% endhint %}

Temel olarak, bu belirli sunucuda tutmak istediğiniz özelliklerin klasörlerini tutmanız gerekir.(`lobby` örneğin).

**ADIM 7**

Sunucuyu yeniden başlatın ve katılın. Sunucu sizden kaynak paketini indirmenizi isteyecektir.\
Daha sonra yalnızca `items_packs` dosyasında bıraktığınız öğeleri göreceksiniz.

**ADIM 8**

Ağınızda bulunan her sunucu için adım 5,6,7'yi yeniden yapın.

{% hint style="info" %}
**BungeePackFix** eklentisi bu rehber için gerekli değildir.
{% endhint %}
