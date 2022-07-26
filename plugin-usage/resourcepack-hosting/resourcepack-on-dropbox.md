---
cover: >-
  ../../.gitbook/assets/Dropbox_(service)-Blue&White-Dark-Background-Logo.wine.svg
coverY: 0
---

# 📦 DropBox

## 视频教程

{% embed url="https://www.youtube.com/embed/GKGnlF4zZVg?start=78&end=189&rel=0&autoplay=0&showinfo=0" %}

## 文字教程

* 打开 [DropBox](https://dropbox.com/), 进行注册/登录
* Use the command`/iazip` (**it's important** because `/iazip`reloads the configs and updates the **pack.zip** file)
* Open folder: `plugins/ItemsAdder/data/resource_pack/`
* **Drag and drop** on **DropBox** the file **pack.zip**
* 点击 **Share**

![](<../../.gitbook/assets/immagine (20).png>)

* 点击 **Create**

![](<../../.gitbook/assets/immagine (21).png>)

* 点击 **Copy link**
* For example if your link is [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0)&#x20;
* Open `config.yml` of **ItemsAdder**
* Set it like this (**I used the example URL, please use your own**)

```yaml
resource-pack:
  apply-on-join: true
  kick-player-on-decline: false
  delay-ticks: 1
  self-host:
    enabled: false
    server-ip: '127.0.0.1'
    pack-port: 8163
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=0'
```

* **THIS IS REALLY IMPORTANT**: **Use command** `/iareload` to **reload** the **plugin after** you **change** something in `config.yml` (in this case to reload the resourcepack download link)
* **Use command** `/iatexture` on your game to refresh your current game texture ingame or use `/iatexture all` to refresh it for every player

{% hint style="danger" %}
当你编辑了任何 **材质**，**模型**，**音效**... 别忘记使用 `/iazip` 来生成最新的资源包，否则将不会显示最新效果
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
