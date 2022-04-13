# 🖥 Commands

* iatexture:
  * תיאור: הורדה מחדש של הטקסטורה לשחקן או לכל השרת
  * אופן שימוש: /iatexture \[לכולם או שחקן]
  * גישה: "ia.user.iatexture"
* iaget:
  * תיאור: קבלת פריט לפי מזהה עם מרחב שם או לפי מזהה
  * אופן שימוש: /iaget \<item> \[כמות]
  * גישה: "ia.admin.iaget"
* iagive:
  * תיאור: לתת פריט שהוא חלק מפלאגין לשחקן
  * אופן שימוש: /iagive \<item> \[כמות] \[silent]
  * גישה: "ia.admin.iagive"
* iadrop:
  * תיאור: זורק פריט שהוא חלק מהפלאגין במיקום של השחקן
  * אופן שימוש: /iadrop \<item> \[כמות]
  * גישה: "ia.admin.iadrop"
* iaremove:
  * תיאור: Remove custom item from player inventory
  * אופן שימוש: /iaremove \<item> \[כמות] \[silent]
  * גישה: "ia.admin.iaremove"
* iatag:
  * תיאור: מציג מידע על ניפוי באגים בהתאמה אישית
  * אופן שימוש: /iatag
  * גישה: "ia.admin.iatag"
* iacustommodeldata:
  * תיאור: מציג CustomModelData
  * אופן שימוש: /iacustommodeldata
  * גישה: "ia.admin.custommodeldata"
* iaplayerstat:
  * תיאור: הגדר ערך סטטיסטיקת שחקן (ועדכן HUD).
  * אופן שימוש: /iaplayerstat \<read|write|increment|decrement> \<player> \<attribute> \<int|float|string> \[value]
  * גישה: "ia.admin.iaplayerstat"
* ia:
  * תיאור: פותח את תפריט הדברים
  * אופן שימוש: /ia
  * גישה: "ia.user.ia"
* iarepair:
  * תיאור: מתקן פריט שיש ביד (לא משנה אם הוא של מיינקרפאט או של הפלאגין)
  * אופן שימוש: /iarepair
  * גישה: "ia.admin.iarepair"
* iarename
  * תיאור: Rename current item (vanilla or custom). Supports emojis (font\_images) and ItemsAdder text-effects.
  * אופן שימוש: /iarename \<name>
  * גישה: "ia.admin.iarename"
* iadurability:
  * תיאור: Modify durability of current item (vanilla or custom)
  * אופן שימוש: /iadurability
  * גישה: "ia.admin.iadurability"
* iareload:
  * תיאור: Reloads items\_packs files
  * אופן שימוש: /iareload
  * גישה: "ia.admin.iareload"
* iazip:
  * תיאור: Executes /iareload and generates pack.zip file
  * אופן שימוש: /iazip
  * גישה: "ia.admin.iazip"
* iablock:
  * תיאור: Show info about block you're looking at
  * אופן שימוש: /iablock
  * גישה: "ia.admin.iablock"
* ialiquid:
  * תיאור: Show info about liquid you're looking at
  * אופן שימוש: /ialiquid \[x] \[y] \[z]
  * גישה: "ia.admin.ialiquid"
* e:
  * תיאור: Show list of font images (emojis, huds...). Can also be used to send messages with emojis autocomplete.
  * אופן שימוש: /iaimage
  * גישה: "ia.user.image.gui"
* iarecipe:
  * תיאור: Show item recipe GUI
  * אופן שימוש: /iarecipe \[item]
  * גישה: "ia.user.iarecipe"
* iahud:
  * תיאור: Force show/hide a HUD manually by namespaced id
  * אופן שימוש: /iahud \[name]
  * גישה: "ia.admin.iahud"
* iaconvert:
  * תיאור: Converts old 1.0 world to 2.0 world (blocks), you can decide to delete ores (set stone) or keep them
  * אופן שימוש: /iaconvert \[world] \[deleteores]
  * גישה: "ia.admin.iaconvert"
* iainfo:
  * תיאור: Shows info about the plugin
  * אופן שימוש: /iainfo
  * גישה: "ia.admin.iainfo"
* iakill:
  * תיאור: Kills custom mobs
  * אופן שימוש: /iakill
  * גישה: "ia.admin.iakill"
* iasummon:
  * תיאור: Summons custom mobs
  * אופן שימוש: /iasummon \[כמות]
  * גישה: "ia.admin.iasummon"
* iaexport:
  * תיאור: Exports a namespace into a .zip file
  * אופן שימוש: /iaexport \<namespace>
  * גישה: "ia.admin.iaexport"
* iaspawntree:
  * תיאור: Spawns a custom tree
  * אופן שימוש: /iaspawntree
  * גישה: "ia.admin.iaspawntree"
* iaplaytotemanimation:
  * תיאור: Shows a Totem Of Undying animation
  * אופן שימוש: /iaplaytotemanimation
  * גישה: "ia.admin.iatotemanimation"
* iaplaysound:
  * תיאור: Play itemsadder sounds. Useful in console since vanilla /playsound is bugged in console.
  * אופן שימוש: /iaplaysound
  * גישה: "ia.admin.iaplaysound"
* iacleancache:
  * תיאור: Cleans unused IDs from cache to allow them to be used by future added blocks / items.
  * אופן שימוש: /iacleancache
  * גישה: "ia.admin.iacleancache"
* iasha1:
  * תיאור: Calculates sha1 of the current resourcepack.
  * אופן שימוש: /iasha1
  * גישה: "ia.user.iasha1"
* iahitbox:
  * תיאור: Shows the hitbox of placed furnitures.
  * אופן שימוש: /iahitbox
  * גישה: "ia.admin.iahitbox"
* iaconfig:
  * תיאור: Main command to execute some operations on the plugin configurations.
  * גישה: "ia.admin.config"
