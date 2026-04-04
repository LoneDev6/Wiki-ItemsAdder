---
icon: font
---

# Font

{% tabs %}
{% tab title="PNG (Simpler)" %}
### Example font

![](<../../.gitbook/assets/immagine (23).png>)

{% hint style="info" %}
This font is made by Faithful team.
{% endhint %}

To this you have to:

* Download the Faithful font [here](https://www.dropbox.com/s/06et55587zvcmr7/FaithfulFont.zip?dl=0)
* Extract contents into `plugins/ItemsAdder/contents/my_font/resourcepack/`
* This will merge the Faithful font.
{% endtab %}

{% tab title="TTF" %}
### Example custom font

![](<../../.gitbook/assets/immagine (96).png>)

To this you have to:

* download the japanese font [here](http://matteodev.it/spigot/itemsadder/res/v2/font.zip)
* extract contents into `plugins/ItemsAdder/contents/my_font/minecraft/font/`
* open config.yml and set `custom-font enabled: true`

{% hint style="warning" %}
Minecraft has a bug that will make the game crash when using custom TTF fonts.

This happens only on some Intel integrated GPUs and old versions of the game, I can't fix this bug, [read more here](https://bugs.mojang.com/browse/MC-180529?jql=text%20~%20%22ttf%20crash%22).
{% endhint %}
{% endtab %}
{% endtabs %}
