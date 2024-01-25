---
description: Skor tablosunda ki kırmızı sayıları gizleyin
---

# Skor tablosunda ki sayılar gizle (1.17+)

## Skor tablosu numaraları

Bazı sunucular özel verileri göstermek için puan tablosunu kullanır ve kırmızı sayıları kullanmazlar, çoğu sunucuda berbat görünürler.

![ItemsAdder'dan Önce](<../../.gitbook/assets/immagine (131).png>)

![ItemsAdder'dan Sonra](<../../.gitbook/assets/immagine (130).png>)

## Kısıtlamalar

{% hint style="danger" %}
### Bu özellik sadece **Minecraft 1.17** sürümünde çalışır, sunucu sürümü önemli değildir.
{% endhint %}

{% hint style="warning" %}
### Uyarı:

Skor tablosunda <mark style="color:red;">**KIRMIZI**</mark> (<mark style="color:red;">**\&c**</mark>) rengin kullanılması bazı **hatalara** sebep olabilir.\
Bu, puan tablosunun sağ kısmının yakınında kırmızı bir metin olduğunda ve GUI ölçek ayarını 1 veya 3 olarak ayarladığınızda meydana gelir.\


### <mark style="color:red;">`&c`</mark> rengi sorunsuz nasıl kullanılır?

You can change your text color from <mark style="color:red;">`&c`</mark> to <mark style="color:red;">`{#ff5546}`</mark>, it's the same color but it won't be bugged.



Another way to fix this is to **add some spaces at the end** of your red text to avoid this.
{% endhint %}

![](<../../.gitbook/assets/immagine (140).png>)

## How to hide them?

ItemsAdder **2.4.19** allows you to hide the scoreboard numbers.

To do that you have to enable the feature in `config.yml` and run **/iazip**.

```yaml
effects:
  hide-scoreboard-numbers: true
```

{% hint style="warning" %}
### Warning

this option is definitive and cannot be turned on/off in-game.\
You will have to disable it in the `config.yml` and run `/iazip` again if you want to show the numbers.
{% endhint %}
