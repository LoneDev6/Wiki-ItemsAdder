# 📤 OneDrive

{% hint style="warning" %}
#### Non recommandé.
{% endhint %}

### Étape 1

![](<../../.gitbook/assets/image (52) (1) (1) (1) (1).png>)

### Étape 2

![](<../../.gitbook/assets/image (43) (1) (1).png>)

### Étape 3

![](<../../.gitbook/assets/image (53) (1) (1).png>)

### Étape 4

Ouvrez le fichier `config.yml` d'**ItemsAdder** et activez l'option `external-host` pour votre nouvelle URL.

{% code title="config.yml" %}
```yaml
    external-host:
      enabled: true
      url: 'https://onedrive.live.com/yoururl.....'
      skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```
{% endcode %}

C'est très important. Mettez-le sur true.

```yaml
skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```

{% hint style="warning" %}
Gardez à l'esprit que c'est un peu "risqué" parce que le serveur ne peut pas s'assurer que l'URL est valide.

Cela peut entraîner le blocage de vos joueurs lors de la phase de connexion si l'URL n'est pas valide ou si OneDrive ne fournit pas le téléchargement direct, ce qui arrive parfois.
{% endhint %}

## Continuez l'installation si nécessaire

{% content-ref url="../../first-install.md" %}
[first-install.md](../../first-install.md)
{% endcontent-ref %}
