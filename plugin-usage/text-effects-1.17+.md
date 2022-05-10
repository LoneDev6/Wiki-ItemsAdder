---
description: Yazı animasyonları
---

# Yazı Efektleri (1.17+)

## Yazı efektleri nedir?

ItemsAdder **2.4.19** sunucunuzu daha profesyonel göstermek için kullanabileceğiniz havalı yazı efektleri kullanıyor..

{% hint style="danger" %}
## Bu özellik sadece **Minecraft 1.17** istemcisi ile çalışıyor, sunucu versiyonunuz önemli değil.
{% endhint %}

{% hint style="warning" %}
Bu özelliği aktifleştirmek için `/iazip` komutunu kullanın.\
Bu özelliği `config.yml` 'dede aktifleştirdiğinizden emin olun.

```yaml
effects:
  text-effects:
    enabled: true
    replace-in-customitems-name-and-lore: true
    chat:
      enabled: true
    sign:
      enabled: true
    book:
      enabled: true
    anvil:
      enabled: true
```
{% endhint %}



## İzinler

* **Sohbette** **yazı-efekti** kullanmak için
  * `ia.user.text_effect.chat`
* **Tabelalarda** **yazı-efekti** kullanmak için
  * `ia.user.text_effect.sign`
* **Kitaplarda** **yazı-efekti**  kullanmak için
  * `ia.user.text_effect.book`
* **Örslerde** **yazı-efekti**  kullanmak için
  * `ia.user.text_effect.anvil`
* **yazı-efekti** kullanmak için
  * `ia.user.text_effect.use.<effect>`

## Efekt listesi

### Gökkuşağı

![](../.gitbook/assets/rainbow.gif)

![](<../.gitbook/assets/immagine (128).png>)

![](<../.gitbook/assets/immagine (129).png>)

![](../.gitbook/assets/rainbow\_item.gif)

İzin: `ia.user.text_effect.use.r`\
Kullanım: `<r text>`

### Sallanan

![](../.gitbook/assets/wobble.gif)

![](../.gitbook/assets/wobble\_item.gif)

İzin: `ia.user.text_effect.use.w`\
Kullanım: `<w text>`

### Zıplayan

![](../.gitbook/assets/jump\_chat.gif)

![](../.gitbook/assets/jump.gif)

![](../.gitbook/assets/jump\_boss.gif)

İzin: `ia.user.text_effect.use.j`\
Kullanım: `<j text>`

### Gökkuşağı + Sallanan

![](../.gitbook/assets/rw\_chat.gif)

İzin: `ia.user.text_effect.use.rw`\
Kullanım: `<rw text>`

### Gökküşağı + Zıplayan

![](../.gitbook/assets/rj.gif)

İzin: `ia.user.text_effect.use.rj`\
Kullanım: `<rj text>`

## Bu efektleri nerelerde kullanabilirim?

* Özel eşya isimlerinde (.yml dosyasının içinde)
* Özel eşya bilgilerinde (.yml dosyasının içinde)
* Sohbet
* Tabelalar
* Kitap
* Bossbar
* Önek-Sonek (örneğin: Luckperms)
* _Daha fazlası yakında...._

![](../.gitbook/assets/rainbow\_wobble\_lore.gif)

## Animasyonlu önek nasıl oluşturulur (Luckperms)

![](<../.gitbook/assets/immagine (133).png>)

`/lp group admin meta setprefix "<rw ADMIN >"`

![](../.gitbook/assets/prefix.gif)

Luck perms dökümanlarını okumaj için buraya tıklayın [ Luckperms dökumanları](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta) if you don't know how prefix works.
