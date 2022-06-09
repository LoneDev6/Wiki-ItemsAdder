# 👌 İzinler

## İzinler

*   Kullanıcılar

    * /ia
      * `ia.user.ia`
    * /iarecipe
      * `ia.user.iarecipe`
    * /iatexture (paketi kendinize yüklemeyi sağlar)
      * `ia.user.iatexture`
    * /iatexture all (paketi herkesin yüklemesini sağlar)
      * `ia.user.iatexture.all`
    * crafting
      * `ia.user.craft.PERMISSION` (yada tüm izinler vermek için ia.user.craft. kullanın.\*)
      * eşya izinleri ile ilgili daha fazla için [ okuyun](../adding-content/item-properties/basic/item-permission.md)
    * eşyayı /ia menu görmek için
      * `ia.user.ia.PERMISSION` (yada tüm /ia izinlerini vermek için ia.user.ia kullanın.\*)
      * eşya izinleri için[ bunu okuyun](../adding-content/item-properties/basic/item-permission.md)
      * `ia.user.iasearchgui` /ia menu deki Arama GUİ'si için
      * Her katogoriye bir izin verebilirsiniz, lütfen kontrol edin; [/ia GUI ](../ia.md)page
    * emoji (font resimş)
      * **/iaimage /emoji, /iaemoji, /e** kitap (empjilerim listesi olduğu bir kitap gösterir)
        * `ia.user.image.gui`
      * **/iaimage** **/emoji \<yazi>, /iaemoji \<yazı>, /e \<yazı>** (emojilerin olduğu bir tab gösterir)
        * `ia.user.image.hints`
      * **Sohbette** **emoji kullanın**
        * `ia.user.image.chat`
      * **komutlarda** **emoji kullanın**
        * `ia.user.image.command`
      * **Tabelalarda** **emoji** kullanın
        * `ia.user.image.sign`
      * Use **emojis** in **books**
        * `ia.user.image.book`
      * Use **emojis** in **anvil** rename field
        * `ia.user.image.anvil`
      * Use an **emoji**
        * `ia.user.image.use.<font image name>`
        * Example: `ia.user.image.use.heart`
      * Use **text-effects** in **chat**
        * `ia.user.text_effect.chat`
      * Use **text-effects** in **signs**
        * `ia.user.text_effect.sign`
      * Use **text-effects** in **books**
        * `ia.user.text_effect.book`
      * Use **text-effects** in **anvil** rename field
        * `ia.user.text_effect.anvil`
      * Use a **text-effect**
        * `ia.user.text_effect.use.<effect>`
        * Examples ([full list here](../text-effects-1.17+.md)):
          * `ia.user.text_effect.use.r`
          * `ia.user.text_effect.use.rw`
    * emotes ([<mark style="color:blue;">player emotes</mark>](../adding-content/player-emotes/))
      * Use an emote: `ia.user.iaemote.use.<emote>`
      * Example:
        * `ia.user.iaemote.use.yes`

    ​
* Admin
  * /iaget
    * `ia.admin.iaget`
  * /iagive
    * `ia.admin.iagive`
  * /iadrop
    * `ia.admin.iadrop`
  * /iaremove
    * `ia.admin.iaremove`
  * /iatag
    * `ia.admin.iatag`
  * /iacustommodeldata
    * `ia.admin.custommodeldata`
  * /iareload
    * `ia.admin.iareload`
  * /iazip
    * `ia.admin.iazip`
  * /iablock _(get info about block you're looking at)_
    * `ia.admin.iablock`
  * /ialiquid _(get info about custom liquid you're looking at)_
    * `ia.admin.ialiquid`
  * /iadurability
    * ia.admin.iadurability
  * Edit permission (edit button in /ia)
    * `ia.admin.edit`
  * /iaplayerstat write _(write a player custom stat)_
    * `ia.admin.iaplayerstat.write`
  * /iaplayerstat read _(read a player custom stat)_
    * `ia.admin.iaplayerstat.read`
  * /iainfo (get info about the plugin)
    * `ia.admin.iainfo`
  * /iakill \<mob|all> (kill custom mobs)
    * `ia.admin.iakill`
  * /iasummon \<mob> \[amount]
    * `ia.admin.iasummon`
  * /iaexport \<namespace>
    * `ia.admin.iaexport`
  * /iaspawntree \<tree>
    * `ia.admin.iaspawntree`
  * /iaplaytotemanimation \<totem> \<player>
    * `ia.admin.iatotemanimation`
  * /iaplaysound \<sound> \<player>
    * `ia.admin.iaplaysound`
  * /iacleancache
    * `ia.admin.iacleancache`
  * /iahitbox (shows the hitbox of placed furnitures)
    * `ia.admin.iahitbox`
  * [/iaconfig](../commands/iaconfig.md) (Main command to execute some operations on the plugin configurations)
    * ia.admin.iaconfig
* Other:
  * Bypass kick on refuse resourcepack
    * `ia.resourcepack.bypasskick`
  * Bypass player placed blocks can't drop loot
    * `ia.admin.bypassblockplaceloot`

## Worlguard flags

{% content-ref url="../../compatibility-with-other-plugins/compatible/worldguard-flags.md" %}
[worldguard-flags.md](../../compatibility-with-other-plugins/compatible/worldguard-flags.md)
{% endcontent-ref %}
