# Self hosting

## Video tutorial

{% embed url="https://www.youtube.com/watch?v=XoTwF4_HztU" %}

## Info about self-hosting

With ItemsAdder you can host the resourcepack directly on your server!\
No need to pay for a website host and **no need to upload the pack every time you make a change!**

{% hint style="warning" %}
**Your hosting service must let you get additional ports for your server.**\
If your hosting service doesn't provide you additional ports you have to use one of the [alternative hosting methods](./)
{% endhint %}

### What is the difference between self-host and the other methods?

Difference is that with self-host you can download the pack directly from your server without having to upload it to a website each time you make a small change.

{% hint style="info" %}
`self-host` is really useful when you are configuring the resourcepack on your test server on your PC. Because you just have to use command `/iazip` and you'll see changes applied ingame almost instantly.
{% endhint %}

{% content-ref url="tips-for-fastest-usage.md" %}
[tips-for-fastest-usage.md](tips-for-fastest-usage.md)
{% endcontent-ref %}

## How can I configure the self host?

* Check in your **hosting service panel** if you can get an additional port, if not please ask hosting service support to provide your one.

For example on **Pterodactyl**:

![](../../.gitbook/assets/image\_\(104\).png)

![](../../.gitbook/assets/image\_\(101\).png)

* after you obtained a **new port** you can open `config.yml` and set like this:

```yaml
  self-host:
    enabled: true
    server-ip: '127.0.0.1'
    pack-port: 8163
```

* you have to replace `127.0.0.1` with **your server IP**
* and replace `8163` with the new port you obtained.

For example if my ip is `123.456.789.0` and my additional port is `8163`I will set it like this:

```yaml
  self-host:
    enabled: true
    server-ip: '123.456.789.0'
    pack-port: 8163
```

{% hint style="warning" %}
**pack-port** is not the same as your server port (the one your users use to connect).
{% endhint %}

{% hint style="info" %}
`127.0.0.1` means "**this pc**".\
**So if you are testing the plugin on your PC** you can **leave default config** so plugin will look for the resourcepack zip directly in your PC.
{% endhint %}

{% hint style="danger" %}
Do not forget to use `/iazip` **everytime** you edit a **texture**, a 3D **model**, a **sound**... or you won't see any change obviously.
{% endhint %}

### Last step

After you configured the `config.yml` file you just have to run `/iazip` command to refresh the zip file and start the hosting.

## Continue installation if you need

{% content-ref url="../../first-install.md" %}
[first-install.md](../../first-install.md)
{% endcontent-ref %}

## Cloudflare paid plan

Read this part if you are using `Cloudflare` to protect your IP + port (paid plan) and you have a special rule to redirect the resourcepack request from a subdomain to the resourcepack port.

For example:

* the server is hosted on `mc.example.com`
* the resourcepack is on port `8163`
* you set a **Cloudflare** rule to redirect all traffic from `pack.example.com` to `mc.example.com:8163`

In order for it to work you have to set your configuration like that:

```yml
    self-host:
      enabled: true
      server-ip: 'https://pack.example.com' # <-- don't forget https
      pack-port: 8163
      append-port: false # <-- important
```

This will stop ItemsAdder from adding http in front of your URL and stop adding the port at the end of the URL.
