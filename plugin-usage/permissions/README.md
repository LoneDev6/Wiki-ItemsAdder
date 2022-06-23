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
      * **Sohbette** **emoji kullanma**
        * `ia.user.image.chat`
      * **komutlarda** **emoji kullanma**
        * `ia.user.image.command`
      * **Tabelalarda** **emoji** kullanma
        * `ia.user.image.sign`
      * **Kitaplarda** **emoji** kullanma
        * `ia.user.image.book`
      * **Örslerde** yeni isim kısmında **emoji** kullanma
        * `ia.user.image.anvil`
      * Bir **emoji** kullanma
        * `ia.user.image.use.<font resim ismi>`
        * Örneğin: `ia.user.image.use.heart`
      * **Yazı-efektlerini** **sohbette** kullanma
        * `ia.user.text_effect.chat`
      * **Yazı-efektlerini** **tabelalarda** kullanma
        * `ia.user.text_effect.sign`
      * **Yazı-efektlerini** **kitaplarda** kullanma
        * `ia.user.text_effect.book`
      * **Yazı-efektlerini** yeniden adlandırma kısmında **örslerde** kullanma
        * `ia.user.text_effect.anvil`
      * Bir **yazı-efekti** kullanma
        * `ia.user.text_effect.use.<effect>`
        * Örnekler ([tam liste burda](../text-effects-1.17+.md)):
          * `ia.user.text_effect.use.r`
          * `ia.user.text_effect.use.rw`
    * ifadeler ([<mark style="color:blue;">player emotes</mark>](../adding-content/player-emotes/))
      * Bir ifade kullan: `ia.user.iaemote.use.<emote>`
      * Örnek:
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
  * /iablock _(baktığınız blok hakkında bigli alın)_
    * `ia.admin.iablock`
  * /ialiquid _(baktığınız özel sıvı hakkında bilgi alın)_
    * `ia.admin.ialiquid`
  * /iadurability
    * ia.admin.iadurability
  * Edit permission (/ia'daki düzenleme kısmı)
    * `ia.admin.edit`
  * /iaplayerstat write _(özel bir oyunucu istatistiği yazın)_
    * `ia.admin.iaplayerstat.write`
  * /iaplayerstat read _(özel bir oyuncu istatistiğini okuyun)_
    * `ia.admin.iaplayerstat.read`
  * /iainfo (eklenti hakkında bilgi alın)
    * `ia.admin.iainfo`
  * /iakill \<mob|all> (özel canavarları öldürün)
    * `ia.admin.iakill`
  * /iasummon \<mob> \[miktar]
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
  * /iahitbox (koyulmuş mobilyaların hitboxunu görün)
    * `ia.admin.iahitbox`
  * [/iaconfig](../commands/iaconfig.md) (Eklenti konfigürasyonunda operasyon yapmak için ana komut)
    * ia.admin.iaconfig
* Diğer:
  * Kaynak paketini reddettiğinde atılmadan muaf ol
    * `ia.resourcepack.bypasskick`
  * Oyuncunun yerleştirdiği blokları kırmasını atlar
    * `ia.admin.bypassblockplaceloot`

## Worlguard flagleri

{% content-ref url="../../compatibility-with-other-plugins/compatible/worldguard-flags.md" %}
[worldguard-flags.md](../../compatibility-with-other-plugins/compatible/worldguard-flags.md)
{% endcontent-ref %}
