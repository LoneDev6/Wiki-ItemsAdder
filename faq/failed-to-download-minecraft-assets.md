---
icon: circle-exclamation
---

# Failed to download Minecraft assets

ItemsAdder needs some Minecraft assets to work, it automatically downloads them for you, but some server setups might have issues downloading (blocking firewall, network error, etc.).

You can manually download the assets to fix this.

{% stepper %}
{% step %}
### Delete the folder

Delete the folder `ItemsAdder/storage/cache/vanilla_assets`
{% endstep %}

{% step %}
### Download the assets

{% embed url="https://mc-assets-downloader.lonedev.workers.dev/itemsadder-required-vanilla-assets/vanilla_assets.zip" %}

<div align="left"><figure><img src="../.gitbook/assets/image (262).png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Extract the `vanilla_assets` folder

Extract the `vanilla_assets` folder into `ItemsAdder/storage/`

<div align="left"><figure><img src="../.gitbook/assets/image (263).png" alt=""><figcaption></figcaption></figure></div>
{% endstep %}

{% step %}
### Done

Start the server and run `/iazip` to regenerate your pack.
{% endstep %}
{% endstepper %}
