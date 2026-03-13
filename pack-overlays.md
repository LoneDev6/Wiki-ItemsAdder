---
icon: circles-overlap
---

# Overlay

{% hint style="warning" %}
This is for expert resourcepacks artists.
{% endhint %}

Vanilla overlays are supported by ItemsAdder.

You can create your own `pack.mcmeta` and put your `overlays` entries there.\
ItemsAdder will merge them all into the resulting **pack.mcmeta** of your pack `.zip` file.

#### Minecraft Wiki information

{% embed url="https://minecraft.wiki/w/Pack.mcmeta" %}

#### Pack format version for each Minecraft version

{% embed url="https://misode.github.io/changelog/?tags=pack" fullWidth="false" %}

### Example

`contents/myassets/resourcepack/assets/minecraft/pack.mcmeta`

{% code title="pack.mcmeta" %}
```json
{
   "pack":{
      "pack_format":63,
      "description":"My Pack"
   },
   "overlays":{
      "entries":[
         {
            "directory":"my_overlay_1",
            "formats":[
               42,
               43
            ]
         },
         {
            "directory":"my_overlay_3",
            "formats":[
               44,
               47
            ]
         }
      ]
   }
}
```
{% endcode %}
