# Remove pack on server change

## Remove the resourcepack when the player changes server

Follow this tutorial if you have multiple servers and you want the ItemsAdder resourcepack to be removed when a user switches server.

### How to

1. Download the [blank resourcepack](http://matteodev.it/spigot/itemsadder/blank\_pack.zip).
2. Upload it somewhere, for example (skip the `/iazip` part of the tutorial) [DropBox](../plugin-usage/resourcepack-hosting/resourcepack-on-dropbox.md), [OneDrive](../plugin-usage/resourcepack-hosting/onedrive.md), [GoogleDrive](../plugin-usage/resourcepack-hosting/google-drive-1.17.1+.md)...
3. Get the URL
4. Open the other server `server.properties` file and set the URL

{% code title="server.properties" %}
```properties
resource-pack=http://your_url/blank_pack.zip
```
{% endcode %}

Done!

The ItemsAdder resourcepack will be replaced by the default resourcepack when the player joins your other server.

