---
title: First Install
description: "How to install ItemsAdder for the first time"
---

# :fontawesome-solid-cog: First Install
Please read this guide in its **entirety** to avoid errors and confusion.

!!! info "Recommendet"
    You should do your first installation on a **test server** on your PC before uploading it to your actual servers.  
    This prevents misconfiguration and too many restarts... Players don't like a lot of restartds :frowning:

## Step 1: Installing the plugin
When installing ItemsAdder, make sure you also install the following **required** plugins:

- [ProtocolLib](https://www.spigotmc.org/resources/1997/)
- [LoneLibs](https://www.spigotmc.org/resources/75974/)

You can also install the following, optional plugins for additional functionality:

- LightAPI - Allows custom models to emit light
    - For 1.15-1.16: [LightAPI Fork](https://www.spigotmc.org/resources/48247/)
    - For 1.17+: [LightAPI](https://www.spigotmc.org/resources/4510)
- [Lib's Disguises](https://www.spigotmc.org/resources/81/) - Required to spawn and display custom mobs

Upload the plugins alongside the ItemsAdder jar into your server's `plugins` folder and start your server.  
Once your server started up and ItemsAdder loaded fully can you continue to the next step.

## Step 2: Resource pack hosting
ItemsAdder allows you to pick from a set of options for hosting your resource pack, depending on what you can and can't use.

### Selfhosting

!!! info ""
    :octicons-check-circle-fill-24: **Pros:**{ .icon-color--green }
    
    - Automatic updating of the resource pack on `/iazip`
    - No need for uploading to external pages. Just update textures and configs, and `/iazip`
    
    :octicons-x-circle-fill-24: **Cons:**{ .icon-color--red }
    
    - Requires an open Port for the resource pack. If you use a host, ask them if they offer this.

??? youtube "Video tutorial"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XoTwF4_HztU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In order to selfhost will you need to have an open port available.  
This port is **not the same as your server port!**

In our example are we using a Pterodactyl panel to manage our server. How and where you can obtain a free port depends on your host and the server panel they use.

- On the dashboard, click the `Ports` tab followed by clicking the `Create Allocation` button.
  ![ports allocation](/assets/images/rp-hosting/selfhost-ports-allocation.png)
- The dashboard should now have a new port generated for you, which you should select and copy using ++ctrl+c++  
  ![copy port](/assets/images/rp-hosting/selfhost-copy-port.png)
- Open the `config.yml` of ItemsAdder, go to `self-host` and update the settings as follows:
  
    ```yaml
    self-host:
      enabled: true
      server-ip: '127.0.0.1' # (1)
      pack-port: 8163 # (2)
    ```
    
    1.  Change this to the IP your server uses.
    2.  Set the port to the one you copied (++ctrl+v).

----

### Automatic external hosting

!!! info ""
    :octicons-check-circle-fill-24: **Pros:**{ .icon-color--green }
    
    - Automatic updating of the resource pack on `/iazip`
    - Fast download speed thanks to Cloud-based network
    
    :octicons-x-circle-fill-24: **Cons:**{ .icon-color--red }
    
    - Depending on the service. Service down = Resource pack unavailable
    - Could get rate limited when doing `/iazip` too frequently

??? youtube "Video tutorial"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fOpB5-80coY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To use the automatic external hosting, open the `config.yml` and under `auto-external-host` change the settings as follows:

```yaml
auto-external-host:
  enabled: true
```

----

### DropBox

!!! info ""
    :octicons-check-circle-fill-24: **Pros:**{ .icon-color--green }
    
    - Free hosting of your resource pack
    
    :octicons-x-circle-fill-24: **Cons:**{ .icon-color--red }
    
    - Requires DropBox account
    - Manual uploading and updating of the resource pack URL after each `/iazip`
    - Requires renaming of the Zip for each download to force a re-download

??? youtube "Video tutorial"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/GKGnlF4zZVg?start=78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To use [DropBox](https://dropbox.com) as a host for your resource pack, make sure to be logged into your DropBox account or register one before starting.

- Use `/iazip` to reload the configuration files and create the Zip file to upload
- Open `/plugins/ItemsAdder/data/resource_pack/`
- Drag and Drop the `pack.zip` into your DropBox
- Click on `...` followed by `Share`  
  ![share](/assets/images/rp-hosting/dropbox-share.png)
- In the new menu, click on `Create`  
  ![share create](/assets/images/rp-hosting/dropbox-share-create.png)
- Press `Copy link`
- Open the `config.yml` of ItemsAdder, go to `external-host` and update the settings as follows:
  
    ```yaml
    external-host:
      enabled: true
      url: 'https://dropbox.com/abcdefg?dl=0' # (1)
    ```
    
    1.  Replace this with the DropBox URL you copied (++ctrl+v++).

----

### MCPacks

!!! info ""
    :octicons-check-circle-fill-24: **Pros:**{ .icon-color--green }
    
    - Free hosting of your resource pack
    - Generates and provides SHA1 Code if needed
    
    :octicons-x-circle-fill-24: **Cons:**{ .icon-color--red }
    
    - Manual uploading and updating of the resource pack URL after each `/iazip`

[MCPacks](https://mc-packs.net) allows you to upload your resource pack for free to use in your server.  
To make it work, you have to do the following:

- Use `/iazip` to reload the configuration files and create the Zip file to upload
- Go to https://mc-packs.net and click the "Select file" button
- Navigate to `/plugins/ItemsAdder/data/resource_pack/` and select `pack.zip`
- Click the `Upload` button
- Copy the generated URL from the `Download URL` field by clicking it and pressing ++ctrl+c++
- Open the `config.yml` of ItemsAdder, go to `external-host` and update the settings as follows:
  
    ```yaml
    external-host:
      enabled: true
      url: 'https://download.mc-packs.net/pack/1a234bcdef.zip' # (1)
    ```
    
    1.  Replace this with the MCPacks URL you copied (++ctrl+v++).

----

### Google Drive (1.17+) { #google-drive }

!!! info ""
    :octicons-check-circle-fill-24: **Pros:**{ .icon-color--green }
    
    - Free hosting of your resource pack
    
    :octicons-x-circle-fill-24: **Cons:**{ .icon-color--red }
    
    - Requires Google account
    - Manual uploading and updating of the resource pack URL after each `/iazip`
    - Is unreliable for versions older than 1.17 (See [MC-143768](https://bugs.mojang.com/browse/MC-143768) for details)

To use [Google Drive](https://drive.google.com/) as a host for your resource pack, make sure to be logged into your Google account or register one before starting.

- Use `/iazip` to reload the configuration files and create the Zip file to upload
- Open `/plugins/ItemsAdder/data/resource_pack/`
- Drag and Drop the `pack.zip` into your Google Drive
- Right-click the Zip file and select `Get Link`  
  ![google drive get link](/assets/images/rp-hosting/google-drive-get-link.png)
- In the new window, set the permission to `Anyone with the link`  
  ![google drive permission](/assets/images/rp-hosting/google-drive-permission.png)
- Click `Copy link`  
  ![google drive copy link](/assets/images/rp-hosting/google-drive-copy-link.png)
- Head over to https://a.devs.beer/gdrive-direct
- Paste the URL you copied into the text field with ++ctrl+v++  
  ![devs beer paste url](/assets/images/rp-hosting/google-drive-devs-beer-link-gen.png)
- Click `Get direct link`
- The website updates the URL and automatically adds it to your clipboard
- Open the `config.yml` of ItemsAdder, go to `external-host` and update the settings as follows:
  
    ```yaml
    external-host:
      enabled: true
      url: 'drive.google.com/uc?export=view&id=1234abcd' # (1)
    ```
    
    1.  Replace this URL with the one you got from the Converter (++ctrl+v++).

----

## Notes

- ONLY use one of the above methods! You cannot use multiple ones and trying to enable multiple may break the plugin.
- When using Google Drive can the very first downloads take between 5 and 10 seconds. This is normal and expected behaviour.

