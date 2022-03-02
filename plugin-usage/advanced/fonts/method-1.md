# TTF font

This method allows you to add fonts using .ttf font files

## Example custom font

![](<../../../.gitbook/assets/immagine (1).png>)

To this you have to:

* download the japanese font [here](http://matteodev.it/spigot/itemsadder/res/v2/font.zip)
* extract contents into `plugins\ItemsAdder\data\resource_pack\assets\minecraft\font`
* open config.yml and set `custom-font enabled: true`
* and obviously if you're using [dropbox host](../../resourcepack-hosting/resourcepack-on-dropbox.md) you have to reupload the pack.zip after server restart

{% hint style="warning" %}
Minecraft has a bug that will make the game crash when using custom TTF fonts.

This happens only on some Intel integrated GPUs and old versions of the game, I can't fix this bug, [read more here](https://bugs.mojang.com/browse/MC-180529?jql=text%20\~%20%22ttf%20crash%22).
{% endhint %}
