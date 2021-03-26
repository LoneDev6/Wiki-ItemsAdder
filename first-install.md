# ⚙️First install

## Video

{% embed url="https://youtu.be/GKGnlF4zZVg" %}

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
**Remember** to use the command `/iazip` **each time** you want the plugin to update the file `pack.zip`
{% endhint %}

## Optional step - removing default items

{% hint style="info" %}
If you don't care about my default stuff and you only want to make your own items, blocks and other things it's easy!

{% page-ref page="faq/removing-default-stuff.md" %}
{% endhint %}



