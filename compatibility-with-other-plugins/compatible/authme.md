# Authme

## [点此下载](https://www.spigotmc.org/resources/authmereloaded.6269/)

## 如何在登陆后加载资源包

打开 **ItemsAdder** 的 **config.yml** 并禁用 `apply-on-join`。

```yaml
resource-pack:
  apply-on-join: false
```

打开 **Authme** 的 `commands.yml` ，并将 `onLogin` 修改为如下：

```yaml
onLogin:
  apply_pack:
    command: 'iatexture %p'
    executor: CONSOLE
```

{% hint style="warning" %}
确保配置文件中只有**一个onLogin设置**
{% endhint %}
