---
description: Diğer kaynak paketlerini birleştirme(aynı zamanda özel eklentilerim paketlerini)
---

# 🗃 Kaynak paketlerini birleştirme

## Neden birleştirmeye ihtiyacım var?

**Minecraft** sadece **1 sunucu kaynak paketini destekliyor**, yani 1'den fazla kaynak paketiniz varsa onları birleştirmelisiniz.

## Nasıl birleştirilir?

### Adım 1

Kaynak paketinizin `assets` dosyasını kopyalayın.

### Adım 2

Kaynak paketinizin `assets` dosyasını **ItemsAdder** dosyasının içine yapıştırın: `plugins\ItemsAdder\data\resource_pack\`

### Adım 3

**Itemsadder**'ın `config.yml` dosyasını açın ve bu ayarı ayarlayın:

```yaml
overwrite-vanilla-models: false
```

### Adım 4

Itemsadder kaynak paketinizi sıkıştırmak için `/iazip` komutunu kullanın.\
(Doğru yaptığınızdan emin olun [barındırma rehberi](../resourcepack-hosting/) based on the hosting method you decided)

### Bitti.

## Örnekler

{% content-ref url="../../compatibility-with-other-plugins/compatible/modelengine.md" %}
[modelengine.md](../../compatibility-with-other-plugins/compatible/modelengine.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/nova.md" %}
[nova.md](../../compatibility-with-other-plugins/compatible/nova.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/space.md" %}
[space.md](../../compatibility-with-other-plugins/compatible/space.md)
{% endcontent-ref %}
