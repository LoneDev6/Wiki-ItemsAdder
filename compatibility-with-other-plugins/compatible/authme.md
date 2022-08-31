# Authme

## [下载插件](https://www.spigotmc.org/resources/authmereloaded.6269/)

## 登录后如何下载资源包

在**ItemsAdder**打开 **config.yml** 禁用 `apply-on-join` 

```yaml
resource-pack:
  apply-on-join: false #此项改为 false
```

在 **Authme** 打开 `commands.yml` 将 `onLogin` 设置为如下所示：

```yaml
onLogin:
  apply_pack:
    command: 'iatexture %p'
    executor: CONSOLE
```

{% hint style="warning" %}
请确保配置文件中只有一个 onLogin 属性
{% endhint %}
