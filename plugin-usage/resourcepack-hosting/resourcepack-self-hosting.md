# Self hosting

{% hint style="warning" %}
## **Your hosting service must let you get additional ports for your server.**

If your hosting service doesn't provide you additional ports you have to use one of the [alternative hosting methods](./).
{% endhint %}

### What is the difference between self-host and the other methods?

Difference is that with self-host you can download the pack directly from your server without having to upload it to a website each time you make a small change.

`self-host` is really useful when you are configuring the resourcepack on your test server on your PC.\
You just have to use command `/iazip` and you'll see changes applied in-game almost instantly.

## Configuration

{% embed url="https://www.youtube.com/watch?v=XoTwF4_HztU" %}

* Check in your **hosting service panel** if you can get an additional port, if not please ask hosting service support to provide your one.

For example on **Pterodactyl**:

![](../../.gitbook/assets/image_\(104\).png)

![](../../.gitbook/assets/image_\(101\).png)

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
**`pack-port`** is not the same as your server port (the one your users use to connect).
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

### Continue installation if you need

{% content-ref url="../first-install.md" %}
[first-install.md](../first-install.md)
{% endcontent-ref %}

## (optional) Cloudflare configuration

{% hint style="warning" %}
This guide won't protect your server IP as you are already exposing it via the SRV rule and Cloudflare free doesn't allow protecting traffic from non-standard ports.
{% endhint %}

{% hint style="success" %}
This guide might make your traffic lower due to how Cloudflare caches requests automatically, so resourcepack requests might be less heavy after applying this method.
{% endhint %}

### Create a new `DNS record`

<figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (8) (1).png" alt=""><figcaption></figcaption></figure>

* type: `A`
* name: `pack` (for example)
* IPv4 address to your server IP, where the pack is hosted (ItemsAdder is running)
* Proxy status: `Proxied`
* Click **Save**

<figure><img src="../../.gitbook/assets/image (4) (1) (1).png" alt=""><figcaption></figcaption></figure>

### Create a new `Origin rule`

<figure><img src="../../.gitbook/assets/image (99).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (101).png" alt=""><figcaption></figcaption></figure>

Select "Change Port" and "Create a Rule".

<figure><img src="../../.gitbook/assets/image (5) (1) (1).png" alt=""><figcaption></figcaption></figure>

Select "Custom filer expression" and complete as shown in the screenshot changing the values based on your setup.

<figure><img src="../../.gitbook/assets/image (10) (1).png" alt=""><figcaption></figcaption></figure>

### Configure ItemsAdder

* set `server-ip` to your new pack address
* set  `pack-port` to your resourcepack port
* set `append-port` to false
* try to access the&#x20;

{% code title="config.yml" %}
```yml
self-host:
  enabled: true
  server-ip: 'https://pack.devs.beer'
  pack-port: 25650
  append-port: false
```
{% endcode %}
