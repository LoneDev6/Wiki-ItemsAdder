# 🖥 Commands

* iatexture:
  * description: Force the client to reload resourcepack (a player or everyone)
  * usage: /iatexture \[all or player]
  * permission: "ia.user.iatexture"
* iaget:
  * description: Get custom item by namespaced id or by id
  * usage: /iaget \<item> \[amount]
  * permission: "ia.admin.iaget"
* iagive:
  * description: Give custom item to player
  * usage: /iagive \<item> \[amount] \[silent]
  * permission: "ia.admin.iagive"
* iadrop:
  * description: Drop custom item at coords or at player location
  * usage: /iadrop \<item> \[amount]
  * permission: "ia.admin.iadrop"
* iaremove:
  * description: Remove custom item from player inventory
  * usage: /iaremove \<item> \[amount] \[silent]
  * permission: "ia.admin.iaremove"
* iatag:
  * description: Shows custom item debug info
  * usage: /iatag
  * permission: "ia.admin.iatag"
* iacustommodeldata:
  * description: Shows custom item CustomModelData
  * usage: /iacustommodeldata
  * permission: "ia.admin.custommodeldata"
* iaplayerstat:
  * description: Set a custom player stat (and update HUD) value
  * usage: /iaplayerstat \<read|write|increment|decrement> \<player> \<attribute> \<int|float|string> \[value]
  * permission: "ia.admin.iaplayerstat"
* ia:
  * description: Opens items info GUI
  * usage: /ia
  * permission: "ia.user.ia"
* iarepair:
  * description: Repairs current item (vanilla or custom)
  * usage: /iarepair
  * permission: "ia.admin.iarepair"
* iarename
  * description: Rename current item (vanilla or custom). Supports emojis (font\_images) and ItemsAdder text-effects.
  * usage: /iarename \<name>
  * permission: "ia.admin.iarename"
* iadurability:
  * description: Modify durability of current item (vanilla or custom)
  * usage: /iadurability
  * permission: "ia.admin.iadurability"
* iareload:
  * description: Reloads items\_packs files
  * usage: /iareload
  * permission: "ia.admin.iareload"
* iazip:
  * description: Executes /iareload and generates pack.zip file
  * usage: /iazip
  * permission: "ia.admin.iazip"
* iablock:
  * description: Show info about block you're looking at
  * usage: /iablock
  * permission: "ia.admin.iablock"
* ialiquid:
  * description: Show info about liquid you're looking at
  * usage: /ialiquid \[x] \[y] \[z]
  * permission: "ia.admin.ialiquid"
* e:
  * description: Show list of font images (emojis, huds...). Can also be used to send messages with emojis autocomplete.
  * usage: /iaimage
  * permission: "ia.user.image.gui"
* iarecipe:
  * description: Show item recipe GUI
  * usage: /iarecipe \[item]
  * permission: "ia.user.iarecipe"
* iahud:
  * description: Force show/hide a HUD manually by namespaced id
  * usage: /iahud \[name]
  * permission: "ia.admin.iahud"
* iaconvert:
  * description: Converts old 1.0 world to 2.0 world (blocks), you can decide to delete ores (set stone) or keep them
  * usage: /iaconvert \[world] \[deleteores]
  * permission: "ia.admin.iaconvert"
* iainfo:
  * description: Shows info about the plugin
  * usage: /iainfo
  * permission: "ia.admin.iainfo"
* iakill:
  * description: Kills custom mobs
  * usage: /iakill
  * permission: "ia.admin.iakill"
* iasummon:
  * description: Summons custom mobs
  * usage: /iasummon \[amount]
  * permission: "ia.admin.iasummon"
* iaexport:
  * description: Exports a namespace into a .zip file
  * usage: /iaexport \<namespace>
  * permission: "ia.admin.iaexport"
* iaspawntree:
  * description: Spawns a custom tree
  * usage: /iaspawntree
  * permission: "ia.admin.iaspawntree"
* iaplaytotemanimation:
  * description: Shows a Totem Of Undying animation
  * usage: /iaplaytotemanimation
  * permission: "ia.admin.iatotemanimation"
* iaplaysound:
  * description: Play itemsadder sounds. Useful in console since vanilla /playsound is bugged in console.
  * usage: /iaplaysound
  * permission: "ia.admin.iaplaysound"
* iacleancache:
  * description: Cleans unused IDs from cache to allow them to be used by future added blocks / items.
  * usage: /iacleancache
  * permission: "ia.admin.iacleancache"
* iasha1:
  * description: Calculates sha1 of the current resourcepack.
  * usage: /iasha1
  * permission: "ia.user.iasha1"
* iahitbox:
  * description: Shows the hitbox of placed furnitures.
  * usage: /iahitbox
  * permission: "ia.admin.iahitbox"
* iaconfig:
  * description: Main command to execute some operations on the plugin configurations.
  * permission: "ia.admin.iaconfig"
* iaentity:
  * description: Main command to manage custom entities.
  * permission: "ia.admin.iaentity"
* iaemote
  * description: Play custom player animation.
  * usage: /iaemote \<emote> \[player]
  * permission: "ia.user.iaemote"
    * others: "ia.user.iaemote.others"
