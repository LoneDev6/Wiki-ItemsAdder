# ⚙️Первая установка плагина

## Видео-гайд

{% embed url="https://youtu.be/GKGnlF4zZVg" caption="" %}

{% hint style="info" %}
**You should do** this first configuration **on** your **test server** on your PC to **avoid mistakes** and too many restarts.. players don't like when server is down ;\)   
You can upload files to your real server after you finished here.
{% endhint %}

{% hint style="danger" %}
If you already own ItemsAdder old 1.0 version please rename **plugins/ItemsAdder** folder to **ItemsAdder\_backup**
{% endhint %}

## Step 1 - installing the plugin and APIs

* install [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* install [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)\*\*\*\*
* install [**LightAPI**](https://www.spigotmc.org/resources/lightapi-fork.48247/)
* put **ItemsAdder.jar** file inside your plugins folder
* start the server
* let ItemsAdder finish loading **everything**
* stop server

## Step 2 - resourcepack first installation

* join the server and execute the command `/iazip` when the plugin is fully loaded
* open plugins\ItemsAdder\config.yml
* follow this tutorial if you want to host the resourcepack directly on  your server

{% page-ref page="plugin-usage/resourcepack-hosting/resourcepack-self-hosting.md" %}

* or follow this tutorial if you want to host the resourcepack on DropBox

{% page-ref page="plugin-usage/resourcepack-hosting/resourcepack-on-dropbox.md" %}

{% hint style="warning" %}
**Не забывайте** переупаковывать пакет ресурсов при помощи `/iazip` **каждый раз**, когда вы внесли какие-либо изменения и хотите сгенерировать новый `pack.zip`
{% endhint %}

## Optional steps

### Removing default items

{% hint style="info" %}
Если вам не нужны заводские блоки, предметы, а так же другие вещи из заводского списка и вы хотите использовать только собственные предметы и настройки - воспользуйтесь этой статьей.

{% page-ref page="faq/removing-default-stuff.md" %}
{% endhint %}

### Avoid glitched blocks \(if you have Purpur installed\)

{% page-ref page="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}


{% endpage-ref %}
{% endhint %}

