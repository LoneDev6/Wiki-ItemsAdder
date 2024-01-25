# 🖥 Komutlar

* iatexture:
  * açıklama: İstemciyi kaynak paketini yeniden yüklemeye zorlayın (bir oyuncu veya herkes)
  * kullanm: /iatexture \[tümü veya oyuncu]
  * permission: "ia.user.iatexture"
* iaget:
  * açıklama: Get custom item by namespaced id or by id
  * kullanm: /iaget \<eşya> \[miktar]
  * permission: "ia.admin.iaget"
* iagive:
  * açıklama: Give custom item to player
  * kullanım: /iagive \<eşya> \[miktar] \[silent]
  * permission: "ia.admin.iagive"
* iadrop:
  * açıklama: Drop custom item at coords or at player location
  * kullanım: /iadrop \<eşya> \[miktar]
  * permission: "ia.admin.iadrop"
* iaremove:
  * açıklama: Remove custom eşya from player inventory
  * kullanım: /iaremove \<eşya> \[miktar] \[silent]
  * permission: "ia.admin.iaremove"
* iatag:
  * açıklama: Shows custom item debug info
  * kullanım: /iatag
  * permission: "ia.admin.iatag"
* iacustommodeldata:
  * açıklama: Shows custom item CustomModelData
  * kullanım: /iacustommodeldata
  * permission: "ia.admin.custommodeldata"
* iaplayerstat:
  * açıklama: Set a custom player stat (and update HUD) value
  * kullanım: /iaplayerstat \<read|write|increment|decrement> \<player> \<attribute> \<int|float|string> \[value]
  * permission: "ia.admin.iaplayerstat"
* ia:
  * açıklama: Opens eşyas info GUI
  * kullanım: /ia
  * permission: "ia.user.ia"
* iarepair:
  * açıklama: Repairs current eşya (vanilla or custom)
  * kullanım: /iarepair
  * permission: "ia.admin.iarepair"
* iarename
  * açıklama: Rename current eşya (vanilla or custom). Supports emojis (font\_images) and eşyasAdder text-effects.
  * kullanım: /iarename \<name>
  * permission: "ia.admin.iarename"
* iadurability:
  * açıklama: Modify durability of current eşya (vanilla or custom)
  * kullanım: /iadurability
  * permission: "ia.admin.iadurability"
* iareload:
  * açıklama: Reloads eşyas\_packs files
  * kullanım: /iareload
  * permission: "ia.admin.iareload"
* iazip:
  * açıklama: Executes /iareload and generates pack.zip file
  * kullanım: /iazip
  * permission: "ia.admin.iazip"
* iablock:
  * açıklama: Show info about block you're looking at
  * kullanım: /iablock
  * permission: "ia.admin.iablock"
* ialiquid:
  * açıklama: Show info about liquid you're looking at
  * kullanım: /ialiquid \[x] \[y] \[z]
  * permission: "ia.admin.ialiquid"
* e:
  * açıklama: Show list of font images (emojis, huds...). Can also be used to send messages with emojis autocomplete.
  * kullanım: /iaimage
  * permission: "ia.user.image.gui"
* iarecipe:
  * açıklama: Show eşya recipe GUI
  * kullanım: /iarecipe \[eşya]
  * permission: "ia.user.iarecipe"
* iahud:
  * açıklama: Force show/hide a HUD manually by namespaced id
  * kullanım: /iahud \[name]
  * permission: "ia.admin.iahud"
* iaconvert:
  * açıklama: Converts old 1.0 world to 2.0 world (blocks), you can decide to delete ores (set stone) or keep them
  * kullanım: /iaconvert \[world] \[deleteores]
  * permission: "ia.admin.iaconvert"
* iainfo:
  * açıklama: Shows info about the plugin
  * kullanım: /iainfo
  * permission: "ia.admin.iainfo"
* iakill:
  * açıklama: Kills custom mobs
  * kullanım: /iakill
  * permission: "ia.admin.iakill"
* iasummon:
  * açıklama: Summons custom mobs
  * kullanım: /iasummon \[miktar]
  * permission: "ia.admin.iasummon"
* iaexport:
  * açıklama: Exports a namespace into a .zip file
  * kullanım: /iaexport \<namespace>
  * permission: "ia.admin.iaexport"
* iaspawntree:
  * açıklama: Spawns a custom tree
  * kullanım: /iaspawntree
  * permission: "ia.admin.iaspawntree"
* iaplaytotemanimation:
  * açıklama: Shows a Totem Of Undying animation
  * kullanım: /iaplaytotemanimation
  * permission: "ia.admin.iatotemanimation"
* iaplaysound:
  * açıklama: Play eşyasadder sounds. Useful in console since vanilla /playsound is bugged in console.
  * kullanım: /iaplaysound
  * permission: "ia.admin.iaplaysound"
* iacleancache:
  * açıklama: Cleans unused IDs from cache to allow them to be used by future added blocks / eşyas.
  * kullanım: /iacleancache
  * permission: "ia.admin.iacleancache"
* iasha1:
  * açıklama: Calculates sha1 of the current resourcepack.
  * kullanım: /iasha1
  * permission: "ia.user.iasha1"
* iahitbox:
  * açıklama: Shows the hitbox of placed furnitures.
  * kullanım: /iahitbox
  * permission: "ia.admin.iahitbox"
* iaconfig:
  * açıklama: Main command to execute some operations on the plugin configurations.
  * permission: "ia.admin.iaconfig"
* iaentity:
  * açıklama: Main command to manage custom entities.
  * permission: "ia.admin.iaentity"
* iaemote
  * açıklama: Play custom player animation.
  * kullanım: /iaemote \<emote> \[player]
  * permission: "ia.user.iaemote"
    * others: "ia.user.iaemote.others"
