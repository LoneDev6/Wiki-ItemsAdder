# 🏁 Tips for fastest usage

## It takes too much time editing the pack and uploading it online!

Yes if you do that the wrong way ;) Read this:

{% hint style="info" %}
It's a good practice to create a **test server on your PC** with:

* [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-emojis-ores-blocks-wings-tails-hats-more.73355/)
* [LoneLib](https://www.spigotmc.org/resources/lonelibs.75974/)
* [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)
* [LightAPI Fork](https://www.spigotmc.org/resources/lightapi-fork.48247/)

ItemsAdder with this resourcepack config:

```yaml
resource-pack:
  hosting:
    no-host:
      enabled: false
    auto-external-host:
      enabled: false
    self-host:
      enabled: true # <----- HERE, set true
      server-ip: '127.0.0.1'
      pack-port: 8163
    external-host:
      enabled: false
      url: ''
```

Doing this you'll have a fast and easy to use configuration environment. You can add items and edit the pack on the fly.

When you edit an item texture/model and you edit its configuration you will use command  `/iazip` .\
By doing this you'll see changes applied at real-time.

So after you finished adding items and configuring them you'll be able to upload everything on your online server to mirror the changes.
{% endhint %}

{% content-ref url="resourcepack-hosting/resourcepack-on-dropbox.md" %}
[resourcepack-on-dropbox.md](resourcepack-hosting/resourcepack-on-dropbox.md)
{% endcontent-ref %}

{% hint style="warning" %}
It's a good practice to not edit ItemsAdder textures/models directly on your online server.\
Players hate lag on plugins reload, server restarts, having to re-download the pack when they're already player.. keep that in mind.
{% endhint %}

{% hint style="danger" %}
It's a good thing not to edit my custom items as surely in the future they can be edited and you'll go crazy maintaining both your customization and my updates.\
So if you want to edit items just make your own
{% endhint %}
