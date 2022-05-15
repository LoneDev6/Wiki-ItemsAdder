# 👌 Permissions

## Permissions

*   Users

    * /ia
      * `ia.user.ia`
    * /iarecipe
      * `ia.user.iarecipe`
    * /iatexture (to force apply the pack to yourself)
      * `ia.user.iatexture`
    * /iatexture all (to force apply the pack to everyone)
      * `ia.user.iatexture.all`
    * crafting
      * `ia.user.craft.PERMISSION` (or to give all crafting permissions just use ia.user.craft.\*)
      * for more info about item permissions please[ read this](../adding-content/item-properties/basic/item-permission.md)
    * see item in /ia menu
      * `ia.user.ia.PERMISSION` (or to give all /ia permissions just use ia.user.ia.\*)
      * for more info about item permissions please[ read this](../adding-content/item-properties/basic/item-permission.md)
      * `ia.user.iasearchgui` for the search GUI in /ia menu
      * You can also set a permission per category, please check [/ia GUI ](../ia.md)page
    * emoji (font images)
      * **/iaimage /emoji, /iaemoji, /e** book GUI (shows a book with the list of emojis/font images)
        * `ia.user.image.gui`
      * **/iaimage** **/emoji \<text>, /iaemoji \<text>, /e \<text>** (shows a tab list with emojis based on searched term)
        * `ia.user.image.hints`
      * Use **emojis** in **chat**
        * `ia.user.image.chat`
      * Use **emojis** in **commands**
        * `ia.user.image.command`
      * Use **emojis** in **signs**
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
      * Use the emote command: `ia.user.iaemote`
      * Use an emote: `ia.user.iaemote.use.<emote>`
      * Example:
        * `ia.user.iaemote.use.yes`
        * `ia.user.iaemote.use.*`

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
