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

**Itemsadderin** `config.yml` dosyasını açın ve `external-host` ayarını yeni URL'niz için aktif edin.

{% code title="config.yml" %}
```yaml
    external-host:
      enabled: true
      url: 'https://onedrive.live.com/yoururl.....'
      skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```
{% endcode %}

Bu çok önemli. Mutlaka true olarak ayarlamalısınız.

```yaml
skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```

{% hint style="warning" %}
Bunun biraz "riskli" olduğunu unutmayın çünkü sunucu URL'nin geçerli olduğunu doğrulayamaz.

Onedrive bazen doğrudan link vermez ve bu oyuncularınızın giriş aşamasında takılmasona sebep olur. 
{% endhint %}
