# Authme

## [Şuradan İndir](https://www.spigotmc.org/resources/authmereloaded.6269/)

## Giriş yaptıktan sonra kaynak paketi nasıl uygulanır?

**ItemsAdder**'ın **config.yml** dosyasını açın ve "apply-on-join"yı devre dışı bırakın.

```yaml
resource-pack:
  apply-on-join: false
```

**Authme**'nin "commands.yml" dosyasını açın ve "onLogin"i şu şekilde değiştirin:

```yaml
onLogin:
  apply_pack:
    command: 'iatexture %p'
    executor: CONSOLE
```

{% hint style="warning" %}
Yapılandırma dosyasında **yalnızca bir onLogin ayarı** olduğundan emin olun.
{% endhint %}
