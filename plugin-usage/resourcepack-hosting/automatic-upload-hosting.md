# 📤 Otomatik Dış Hosting

## Öğretici Video

{% embed url="https://www.youtube.com/watch?v=fOpB5-80coY" %}

## Otomatik hosting'de nedir?

ItemsAdder 2.4.9 kaynak paketinizi otomatik olarak **bedava bir servise** yüklemenize olanak sağlıyor.

[PloudOS ](https://ploudos.com/it/)'a kaynak paketlerinizi ücretsiz olarak barındırmak için  kendi platformunu sağladığı için teşekkürler!

## Avantajlar nedir?

Ana avantaj, indirme hızı ve kullanılabilirliğidir.\
Bu hizmet, oyuncularınızın yaşadıkları ülkeye (bulut tabanlı platform) rağmen kaynak paketini çok hızlı indirmelerini sağlar.

## Zaten self-host kullanıyorum, bu daha mı iyi?

Duruma göre değişir.\
Eğer sürekli `/iazip` kullandığınız bir kaynak paketiniz varsa ve sürekli üstünde çalışıyor, zaman kaybetmek istemiyorsanız [self-host](resourcepack-self-hosting.md) daha iyidir (burayo [okuyun](../tips-for-fastest-usage.md)).

Paket üzerinde çalışmayı bitirdiğinizde,  güvenle. `auto-external-host` özelliğini kullanmaya başlayabilirsiniz.\
Bu, kaynak paketi artık sunucunuzda barındırılmayacağından sunucu trafiğinizi azaltacaktır.

Oyuncu tabanınızın tamamı aynı ülkeden ise, `self-host`  kullanmaya devam edebilirsiniz.

## Nasıl kullanılır?

Sadece:

* `auto-external-host`'u `config.yml`'den aktif edin&#x20;
* diğer tüm barındırma yöntemlerini devre dışı bırakın.

```yaml
auto-external-host:
  enabled: true
```

### Son adım

**Kaynak paketinizi** **sıkıştırmak** için `/iazip` komutunu kullanın.\
**Eklenti** onu **otomatik** olarrak **yükleyecektr** (ilk seferde **gizlilik politikasını kabul etmeniz** gerekecektir.).

**Ve bitirdiniz!** Başka yapıcak bir şey kalmadı, **ücretsiz otomatik kaynak paketi barındırmanın** keyfini çıkarın.

## Kaynak paketim çevrimiçi olarak rastgele kişiler tarafından ulaşılabir olacak mı?

2021-08-16: \
Kaynak paketiniz Google'da aramaya eklenmez ve kaynak paketleri listesinde yayınlanmaz.\
Paketi yalnızca bağlantıya sahip olan kişiler indirebilir.
