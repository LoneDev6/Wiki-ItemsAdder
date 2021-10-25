# Authme

## [Download here](https://www.spigotmc.org/resources/authmereloaded.6269/)

## Как применить ресурспак после входа в систему

Откройте **config.yml** из **ItemsAdder** и отключите `apply-on-join`.

```yaml
resource-pack:
  apply-on-join: false
```

Откройте `commands.yml` из **Authme** и измените `onLogin` на следующее:

```yaml
onLogin:
  apply_pack:
    command: 'iatexture %p'
    executor: CONSOLE
```

{% hint style="warning" %}
Убедитесь, что в конфигурационном файле есть **только один параметр onLogin**.
{% endhint %}

