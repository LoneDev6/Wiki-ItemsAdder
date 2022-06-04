---
description: Tüm kırmızı skor tablosu sayılarını gizleyin
---

# Skor tablosu sayılarını gizleyin (1.17+)

## Skor tablosu sayıları

Bazı sunucular özel verileri göstermek için puan tablosunu kullanır ve kırmızı sayıları kullanmazlar, sunucuların çoğunda berbat görünürler.

![Without ItemsAdder](<../../.gitbook/assets/immagine (131).png>)

![With ItemsAdder](<../../.gitbook/assets/immagine (130).png>)

## Limitlemeler

{% hint style="danger" %}
### Bu özellik sadece **Minecraft 1.17** istemcisinde çalışır, sunucu versiyonu önemli değildir.
{% endhint %}

{% hint style="warning" %}
### Uyarı:

<mark style="color:red;">**KIRMIZI**</mark> (<mark style="color:red;">**\&c**</mark>) rengini skor tablosunda kullanmak **hatalara yol açabilir**.\
Bu, skor tablosunun sağ tarafında kırmızı bir metin olduğunda ve GUI ölçeği ayarınız 1 veya 3 olarak ayarlandığında gerçekleşir.\


### <mark style="color:red;">`&c`</mark> rengini sorun olmadan nasıl kullanabiliriz?

 <mark style="color:red;">`&c`</mark> rengini <mark style="color:red;">`{#ff5546}`</mark>, şeklinde değiştirirseniz sorun olmayacaktor.



Bunu düzeltmenin başka bir yolu kırmızı yazınızın **sonuna biraz boşluk eklemek** .
{% endhint %}

![](<../../.gitbook/assets/immagine (140).png>)

## Nasıl gizleyebiliriz?

ItemsAdder **2.4.19** skor tablosu numaralarınızı gizlemenizi sağlar.

Bunu yapmak için `config.yml` dosyasından ayarı açmak ve **/iazip** yazmak.

```yaml
effects:
  hide-scoreboard-numbers: true
```

{% hint style="warning" %}
### Uyarı

bu ayar oyun içinden kapatılıp/açılamaz.\
Bunu `config.yml` içinden kapatıp `/iazip` yazmalasınız.
{% endhint %}
