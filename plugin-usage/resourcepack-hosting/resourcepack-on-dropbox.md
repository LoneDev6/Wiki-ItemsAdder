# Resourcepack on DropBox

{% hint style="danger" %}
**DO NOT USE** file **pack\_21521367.zip** or **precompressed\_example\_pack.zip** AS BASE!!!!  
YOU HAVE TO USE YOUR **pack.zip** FILE WHICH IS GENERATED USING **/iazip** COMMAND.  
You can find it in this folder: `plugins/ItemsAdder/data/resource_pack/pack.zip`
{% endhint %}

## Video tutorial

{% embed url="https://www.youtube.com/embed/GKGnlF4zZVg?start=78&end=189&rel=0&autoplay=0&showinfo=0" %}

{% hint style="warning" %}
You **cannot** use **GoogleDrive** and others because they don't provide a **direct download**. **Dropbox does**.
{% endhint %}

## Text tutorial

* Open [DropBox](https://dropbox.com/), register/login
* Use the command`/iazip` \(**it's important** because `/iazip`reloads the configs and updates the **pack.zip** file\)
* Open folder: `plugins/ItemsAdder/data/resource_pack/`
* **Drag and drop** on **DropBox** the file **pack.zip**
* Press **Share**

![](../../.gitbook/assets/immagine%20%2825%29.png)

* Press **Create**

![](../../.gitbook/assets/immagine%20%2824%29.png)

* Press **Copy link**
* For example if your link is [https://www.dropbox.com/blablabla?dl=0](https://www.dropbox.com/blablabla?dl=0) 
* Open `config.yml` of **ItemsAdder**
* Set it like this \(**I used the example URL, please use your own**\)

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
    url: 'https://www.dropbox.com/blablabla?raw=1'
```

* **THIS IS REALLY IMPORTANT**: **Use command** `/iareload` to **reload** the **plugin after** you **change** something in `config.yml` \(in this case to reload the resourcepack download link\)
* **Use command** `/iatexture` on your game to refresh your current game texture ingame or use `/iatexture all` to refresh it for every player

{% hint style="danger" %}
PLEASE use `/iazip` **everytime** you edit a **texture**, a 3D **model**, a **sound**... then **reupload** the pack on **Dropbox** and use **/iareload** or you won't see any change obviously.
{% endhint %}

{% hint style="warning" %}
**Change** the **file name each time** you **upload** a **new version** of the **resourcepack** to **force** the game to **redownload** the **new version**.  
If you **reupload** the **zip** file with the same and keep the **same URL** it **won't update** to each player.
{% endhint %}

## But this is so slow! I have to reupload on DropBox too many times!

Yea it is, that's why you should use the self host feature instead of DropBox. But some hosting \(cheap ones\) don't provide port opening, so you must use DropBox.

{% page-ref page="resourcepack-self-hosting.md" %}

{% hint style="info" %}
If you need a cheap hosting that has good hardware and allows port opening \(for self host and for other plugins that need ports\) you can check this out:

[http://bit.ly/humble-dropbox](http://bit.ly/humble-dropbox)

 [![\[&#x200B;IMG\]](https://proxy.spigotmc.org/79afd6d87a5bfbed0addd07d59139b29552f0627?url=https%3A%2F%2Fi.imgur.com%2FMMICa0s.jpg)](https://bit.ly/2MOtOR5)  


* **Top Notch Hardware @ Budget Cost.**
* **24/7 Support**
* **Instant Deployment**
* **Custom Control Panel\(Pterodactyl\)**
* **sFTP & MySQL Database Access**
* **SSD & NVME Storage**
{% endhint %}

