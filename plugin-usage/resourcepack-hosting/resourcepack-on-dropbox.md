# DropBox

## Text tutorial

* Open [DropBox](https://dropbox.com/), register/login
* Use the command`/iazip` (**it's important** because `/iazip`reloads the configs and updates the **generated.zip** file)
* Open folder: `plugins/ItemsAdder/output/`
* **Drag and drop** on **DropBox** the file **generated.zip**
* Press **Share**

![](../../.gitbook/assets/image\_\(20\).png)

* Press **Create**

![](../../.gitbook/assets/image\_\(21\).png)

* Press **Copy link**
* For example if your link is [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0)
* Open `config.yml` of **ItemsAdder**
* Set it like this (**I used the example URL, please use your own**)

```yaml
resource-pack:
  apply-on-join: true
  kick-player-on-decline: false
  delay-ticks: 1
  self-host:
    enabled: false
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

* **THIS IS REALLY IMPORTANT**: **Use command** `/iareload` to **reload** the **plugin after** you **change** something in `config.yml` (in this case to reload the resourcepack download link)
* **Use command** `/iatexture` on your game to refresh your current game texture ingame or use `/iatexture all` to refresh it for every player

{% hint style="danger" %}
PLEASE use `/iazip` **everytime** you edit a **texture**, a 3D **model**, a **sound**... then **reupload** the pack on **Dropbox** and use **/iareload** or you won't see any change obviously.
{% endhint %}

{% hint style="warning" %}
**Change** the **file name each time** you **upload** a **new version** of the **resourcepack** to **force** the game to **redownload** the **new version**.\
If you **reupload** the **zip** file with the same and keep the **same URL** it **won't update** to each player.
{% endhint %}

## But this is so slow! I have to reupload on DropBox too many times!

Yea it is, that's why you should use the self host feature instead of **DropBox**. But some hosting (cheap ones) don't provide port opening, so you must use **DropBox**.

{% content-ref url="resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](resourcepack-self-hosting.md)
{% endcontent-ref %}

## Continue installation if you need

{% content-ref url="../../first-install.md" %}
[first-install.md](../../first-install.md)
{% endcontent-ref %}
