# Resourcepack on mc-packs.net

{% hint style="danger" %}
**NOT USE** file **pack\_21521367.zip** or **precompressed\_example\_pack.zip** AS BASE!!!!  
YOU HAVE TO USE YOUR **pack.zip** FILE WHICH IS GENERATED USING **/iazip** COMMAND.  
You can find it in this folder: `plugins/ItemsAdder/data/resource_pack/pack.zip`
{% endhint %}

## Text tutorial

* Visit [mc-packs.net](https://mc-packs.net/)
* Use the command`/iazip` \(**it's important** because `/iazip`reloads the configs and updates the **pack.zip** file\)
* Open folder: `plugins/ItemsAdder/data/resource_pack/`
* **Upload** the `pack.zip` ****file
* Copy the "Download URL"
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
    url: 'https://download.mc-packs.net/pack/1efaewqerwerwerwer.zip'
```

* **THIS IS REALLY IMPORTANT**: **Use command** `/iareload` to **reload** the **plugin after** you **change** something in `config.yml` \(in this case to reload the resourcepack download link\)
* **Use command** `/iatexture` on your game to refresh your current game texture ingame or use `/iatexture all` to refresh it for every player

{% hint style="danger" %}
PLEASE use `/iazip` **everytime** you edit a **texture**, a 3D **model**, a **sound**... then **reupload** the pack on **Dropbox** and use **/iareload** or you won't see any change obviously.
{% endhint %}

## But this is so slow! I have to reupload on DropBox too many times!

Yea it is, that's why you should use the self host feature instead of **mc-packs**. But some hosting \(cheap ones\) don't provide port opening, so you must use **mc-packs**.

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

