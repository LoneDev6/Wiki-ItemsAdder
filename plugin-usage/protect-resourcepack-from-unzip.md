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

The `enabled` property allows you to protect the resourcepack with a basic method.

### extreme

The `extreme` property allows you to protect the pack with another layer of protection to block some other methods to unzip the pack.

## Showcase

This is a funny meme showcase of what the user will see when they try to steal your data. But this is actually what the user will see, a group of corrupted files and folders.

{% embed url="https://youtu.be/MhtEhoOuWV8" %}

{% hint style="warning" %}
There is no 100% effective way to protect resourcepack because the game must need to be able to extract it correctly to show textures.

This feature is a mitigation to avoid kids and trolls to steal your texture.\
Some experienced users might be able to find a way to bypass these protections.

ItemsAdder does its best to prevent this, but keep that eventuality in mind.
{% endhint %}

