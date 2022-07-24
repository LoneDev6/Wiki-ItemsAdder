# 👌 权限

*   玩家

    * /ia
      * `ia.user.ia`
    * /iarecipe
      * `ia.user.iarecipe`
    * /iatexture (强行给自己安资源包)
      * `ia.user.iatexture`
    * /iatexture all (强行给每个玩家安资源包)
      * `ia.user.iatexture.all`
    * 使用物品合成配方
      * `ia.user.recipe.PERMISSION` (如果需要全部物品的权限,你可以使用这个 `ia.user.recipe.*`)
      * 关于权限的更多信息,请[查阅此处](../adding-content/item-properties/basic/item-permission.md)
    * see item in the `/ia` menu
      * `ia.user.ia.seeitem.PERMISSION` (or to give all /ia permissions just use `ia.user.ia.seeitem.*`)
      * for more info about item permissions please[ read this](../adding-content/item-properties/basic/item-permission.md)
      * `ia.user.ia.search` for the search GUI in `/ia` menu
      * You can also set a permission per category, please check [/ia GUI ](../ia.md)page
    * 表情 (font图像)
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
        * 栗子 ([full list here](../text-effects-1.17+.md)):
          * `ia.user.text_effect.use.r`
          * `ia.user.text_effect.use.rw`
    * emotes ([<mark style="color:blue;">player emotes</mark>](../adding-content/player-emotes/))
      * Use the emote command: `ia.user.iaemote`
      * Use an emote: `ia.user.iaemote.use.<emote>`
      * 栗子:
        * `ia.user.iaemote.use.yes`
        * `ia.user.iaemote.use.*`

    ​
* 管理员
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
* 其他：
  * Bypass kick on refuse resourcepack
    * `ia.resourcepack.bypasskick`
  * Bypass player placed blocks can't drop loot
    * `ia.admin.bypassblockplaceloot`

{% hint style="warning" %}
You **must** use a permission manager like [LuckPerms](https://luckperms.net/download) which supports `.*` permissions notation.\
Bukkit doesn't support this notation by default.
{% endhint %}

## Worlguard flags

{% content-ref url="../../compatibility-with-other-plugins/compatible/worldguard-flags.md" %}
[worldguard-flags.md](../../compatibility-with-other-plugins/compatible/worldguard-flags.md)
{% endcontent-ref %}
