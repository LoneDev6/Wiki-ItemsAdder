# ⚙️First install

{% hint style="info" %}
**You should do** this first configuration **on** your **test server** on your PC to **avoid mistakes** and too many restarts.. players don't like when server is down ;\)  
You can upload files to your real server after you finished here.
{% endhint %}

{% hint style="danger" %}
You **should** complete ALL installation steps. Not only first.
{% endhint %}

## Step 1 - installing the plugin and APIs

* install [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* install [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)
* install [**LightAPI**](https://www.spigotmc.org/resources/lightapi-fork.48247/)
* \(optional\) install [**Lib's Disguises**](https://www.spigotmc.org/resources/libs-disguises-free.81/) if you plan to create custom mobs in the future.
* put **ItemsAdder.jar** file inside your plugins folder
* start the server
* let ItemsAdder finish loading **everything**

First step is done. Now you must complete step 2 to configure the resourcepack \(don't worry it's not very hard\).

## Step 2 - resourcepack first installation

* join the server 
* open `plugins\ItemsAdder\config.yml`
* decide the resourcepack hosting method: 

{% page-ref page="plugin-usage/resourcepack-hosting/" %}

{% hint style="warning" %}
**Remember** to use the command `/iazip` **each time** you want the plugin to update the file `pack.zip`
{% endhint %}

## Optional steps

### Removing default items

{% hint style="info" %}
If you don't care about my default stuff and you only want to make your own items, blocks and other things it's easy!

{% page-ref page="faq/removing-default-stuff.md" %}
{% endhint %}

### Avoid glitched blocks \(if you have Purpur installed\)

{% page-ref page="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}

