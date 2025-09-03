# DropBox

## Text tutorial

* Open [DropBox](https://dropbox.com/), register/login.
* Use the command`/iazip` (**it's important** because `/iazip`reloads the configs and updates the **generated.zip** file)
* Open folder: `plugins/ItemsAdder/output/`.
* **Drag and drop** **generated.zip** onto **DropBox** or copy paste the file to it from your server host.
* Press **Share**.

![](<../../.gitbook/assets/immagine (99).png>)

* Press **Create**.

![](<../../.gitbook/assets/immagine (41).png>)

* Press **Copy link** (for example you will get `https://www.dropbox.com/blablabla?dl=1`)
* Open `config.yml` of **ItemsAdder**.

```yaml
resource-pack:
  apply-on-join: true
  kick-player-on-decline: false
  delay-ticks: 1
  self-host:
    enabled: false
  external-host:
    enabled: true
    url: 'https://www.dropbox.com/blablabla?dl=1'
```

* **THIS IS REALLY IMPORTANT**: **Use command** `/iareload` to **reload** the **plugin after** you **change** something in `config.yml` (in this case to reload the resourcepack download link)
* **Use command** `/iatexture` on your game to refresh your current game texture ingame or use `/iatexture all` to refresh it for every player

{% hint style="danger" %}
PLEASE use `/iazip` **everytime** you edit a **texture**, a 3D **model**, a **sound**, ect. then **reupload** the pack on **Dropbox** and use **/iareload** or you won't see any changes made.
{% endhint %}

{% hint style="warning" %}
**Change** the **file name each time** you **upload** a **new version** of the **resourcepack** to **force** the game to **redownload** the **new version**.\
If you **reupload** the **zip** file with the same and keep the **same URL** it **won't update** to each player.
{% endhint %}

## But this is so slow! I have to reupload on DropBox too many times!

Yea it is, that's why you should use the self host feature instead of **DropBox**. But some hosting methods (cheap ones) don't provide port opening, so you must use **DropBox**.

{% content-ref url="resourcepack-self-hosting.md" %}
[resourcepack-self-hosting.md](resourcepack-self-hosting.md)
{% endcontent-ref %}

## Continue installation if you need

{% content-ref url="../first-install.md" %}
[first-install.md](../first-install.md)
{% endcontent-ref %}
