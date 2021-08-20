# 自搭材质包托管

## Info about self-hosting

有了ItemsAdder 2.0版本,你现在可以直接在你的服务器上托管材质包! 不需要支付**额外的托管费**,也**不需要每次更改后上传资源包**

{% hint style="warning" %}
**Your hosting service must let you get additional ports for your server.**  
If your hosting service doesn't provide you additional ports you have to use one of the alternative methods:

{% page-ref page="automatic-upload-hosting.md" %}

{% page-ref page="resourcepack-on-dropbox.md" %}
{% endhint %}

### What is the difference between self-host and the other methods?

Difference is that with self-host you can download the pack directly from your server without having to upload it to a website each time you make a small change.

{% hint style="info" %}
当你在自家电脑测试服务器资源包时.`self-host`真的非常好用.使用`/iazip`指令,并重新进入游戏.你将会在服务器里看到明显的变化.
{% endhint %}

{% page-ref page="../tips-for-fastest-usage.md" %}

## How can I configure the self host?

* 在你的翼龙面板查询有没有额外的端口,如果没有,你可以要求服务商给你提供一个
* 有了端口后,打开 `config.yml` 像这样设置:

```yaml
  self-host:
    enabled: true
    server-ip: '127.0.0.1'
    pack-port: 8163
```

* you have to replace `127.0.0.1` with ... your server IP
* and replace `8163` with the additional port you obtained.
* So for example if my ip is `123.456.789.0` and my additional port is `8163`I will set it like this:

```yaml
  self-host:
    enabled: true
    server-ip: '123.456.789.0'
    pack-port: 8163
```

{% hint style="warning" %}
**额外端口**不能和正在调用的端口公用 \(当然需要另一个可以连接的端口\).
{% endhint %}

{% hint style="info" %}
如果你在自家电脑上测试,你可以保留默认的配置,因为127.0.0.1意味着"本地IP".
{% endhint %}

{% hint style="danger" %}
**每次**修改**材质**,3D**模型**,**音效**... 时.请使用`/iazip`指令**重新生成**材质包,不然你将不会看到有任何变化.
{% endhint %}

### Last step

After you configured the `config.yml` file you just have to run `/iazip` command.

