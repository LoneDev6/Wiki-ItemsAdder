# Authme

## [הורידו](https://www.spigotmc.org/resources/authmereloaded.6269/)

## איך להכניס שינויים אחרי כניסה

פתחו **config.yml** של **ItemsAdder** בטלו את `apply-on-join`.

```yaml
resource-pack:
  apply-on-join: false
```

פתחו `commands.yml` of **Authme** שנו `onLogin` לזה:

```yaml
onLogin:
  apply_pack:
    command: 'iatexture %p'
    executor: CONSOLE
```

{% hint style="warning" %}
בבקשה בידקו שיש רק **הגדרת onlogin אחת** * בקובץ.
{% endhint %}
