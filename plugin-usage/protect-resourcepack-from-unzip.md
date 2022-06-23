---
description: Kaynak paketinizi hırsızlardan koruyun
---

# 🚨 Kaynak paketinizi birinin unzip'lemesinden koruyun

{% hint style="info" %}
Itemsadder ile kaynak paketinizi hırsızlar ve unzip'ten koruyun.\
Bu ayarı config.yml açmanız ve /iazip komutunu kullanmanız gerekiyor.\
Dropbox kullanıyorsanız paketi tekrar yüklemeyi ve config.yml'den linki düzenlemeniz gerekiyor.

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      enabled: true
      extreme: true
```
{% endcode %}
{% endhint %}

### enabled

Ayar `true` ise kaynak paketinizi başlangıç seviyesindeki bir korumayla korur.

### extreme

Ayar `extreme` açık ise kaynak paketinizi başka bir katmanda koruma ile korur..

## Gösterim

Bu video kullanıcının kaynak paketinizi çalmaya çalıştığında olucakları gösteriyor. Ama kullanıcı sadece bozulmuş dosyalar görücek.

{% embed url="https://youtu.be/MhtEhoOuWV8" %}

{% hint style="warning" %}
Kaynak paketinizi %100 efektik olarak korumanın bir yolu yok çünkü oyun bu paketi çıkarabilmeli

Bu özellik trollerin ve çocukların paketinizi çalmasını engeller.\
Tecrübeli kişiler bu korumayı geçebilir.

Itemsadder bunu engellemek için elinden geleni yapıyor ama yinede aklınızda bulunsun.
{% endhint %}

