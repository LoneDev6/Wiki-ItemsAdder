# Blok sorununu düzeltin

{% hint style="warning" %}
**MMOItems** bloklarI **ItemsAdder** ile uyumlu değildir ve bunun tersi de geçerlidir
{% endhint %}

## MMOItems blokları nasıl kullanılır??

**ItemsAdder** `config.yml` dosyasını açmanız ve **GERÇEK** bloklarını (mantar) devre dışı bırakmanız gerekir.

{% code title="config.yml" %}
```yaml
  disable-REAL: true
```
{% endcode %}

{% hint style="info" %}
Bu değişikliği uyguladıktan sonra, REAL türünde ItemsAdder blokları oluşturamayacaksınız.

Diğer ItemsAdder özel blok türleri çalışmaya devam edecek (örneğin REAL\_NOTE).
{% endhint %}
