# Authme

## [Download here](https://www.spigotmc.org/resources/authmereloaded.6269/)

## How to apply resourcepack after login

Open **config.yml** of **ItemsAdder** and disable `apply-on-join`.

```yaml
resource-pack:
  apply-on-join: false
```

Open `commands.yml` of **Authme** and change `onLogin` to this:

```yaml
onLogin:
  apply_pack:
    command: 'iatexture %p'
    executor: CONSOLE
```

{% hint style="warning" %}
Make sure that there is **only one onLogin setting** in the configuration file.
{% endhint %}
