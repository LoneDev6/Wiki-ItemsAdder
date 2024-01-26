# OneDrive

{% hint style="warning" %}
Tavsiye edilmez.
{% endhint %}

### Adım 1

![](<../../.gitbook/assets/image (166).png>)

### Adım 2

![](<../../.gitbook/assets/image (81).png>)

### Adım 3

![](<../../.gitbook/assets/image (182).png>)

### Adım 4

**ItemsAdder**'ın `config.yml` dosyasını açın ve yeni URL'niz için `external-host` seçeneğini etkinleştirin.

{% code title="config.yml" %}
```yaml
    external-host:
      enabled: true
      url: 'https://onedrive.live.com/yoururl.....'
      skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```
{% endcode %}

Bu çok önemli. "true" olarak ayarlayın.

```yaml
skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```

{% hint style="warning" %}
unucu URL'sinin geçerli olduğundan emin olamayacağınız için bunun biraz "riskli" olduğunu unutmayın.

Bu, URL'nin geçerli olmaması veya OneDrive'ın doğrudan indirmeyi sağlamaması durumunda oyuncularınızın oturum açma aşamasında takılıp kalmasına neden olabilir; bazen bu durumla karşılaşabilirsiniz.
{% endhint %}
