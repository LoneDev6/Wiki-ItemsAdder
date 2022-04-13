# 👌 גישות

## רשימת גישות

*   שחקנים

    * /ia
      * `ia.user.ia`
    * /iarecipe
      * `ia.user.iarecipe`
    * /iatexture (בשביל להוריד את הטקסטורה מחדש)
      * `ia.user.iatexture`
    * /iatexture all (בשביל להוריד את הטקסטורה מחדש לכל החשקנים בשרת)
      * `ia.user.iatexture.all`
    * crafting
      * `ia.user.craft.PERMISSION` (או לתת את הגישה ia.user.craft.\*)
      * בשביל עוד מידע על הגישה הזאת[ קראו כאן](../advanced/item-properties/basic/item-permission.md)
    * לראות דברים בתפריט ai/
      * `ia.user.ia.PERMISSION` (או בשביל לתת את כל הגישות של /ia עשו ככה ia.user.ia.\*)
      * בשביל עוד מידע לגביי הגישה הזאת[ קראו כאן](../advanced/item-properties/basic/item-permission.md)
      * `ia.user.iasearchgui` בשביל אפשרות חיפוש בתוך תפריט /ai
      * אפשר לראות עוד מידע בדף [תפריט ia/ ](../ia.md)
    * emoji (תמונות פונט)
      * **/iaimage /emoji, /iaemoji, /e** book GUI (מציג ספר אם רשימת אימוג'ים ותמונות פונט)
        * `ia.user.image.gui`
      * **/iaimage** **/emoji \<text>, /iaemoji \<text>, /e \<text>** (מציג רשימת אימוג'ים המבוססים על חיפוש)
        * `ia.user.image.hints`
      * שימוש ב **אימוג'ים** בתוך **צ'אט**
        * `ia.user.image.chat`
      * שימוש ב **אימוג'ים** בתוך **פקודות**
        * `ia.user.image.command`
      * שימוש ב **אימוג'ים** בתוך **שלטים**
        * `ia.user.image.sign`
      * שימוש ב **אימוג'ים** בתוך **ספרים**
        * `ia.user.image.book`
      * שימוש ב **אימוג'ים** בתוך **סדן\אנביל**
        * `ia.user.image.anvil`
      * שימוש ב **אימוג'י** מסוים
        * `ia.user.image.use.<font image name>`
        * לדוגמא: `ia.user.image.use.heart`
      * שימוש **אפקטי-טקסט** בתוך **צ'אט**
        * `ia.user.text_effect.chat`
      * שימוש **אפקטי-טקסט** בתוך **שלטים**
        * `ia.user.text_effect.sign`
      * שימוש **אפקטי-טקסט** בתוך **ספרים**
        * `ia.user.text_effect.book`
      * שימוש **אפקטי-טקסט** בתוך **אנביל\סדן**
        * `ia.user.text_effect.anvil`
      * שימוש **אפקט-טקסט**
        * `ia.user.text_effect.use.<effect>`
        * דוגמאות ([רשימה מלאה](../text-effects-1.17+.md)):
          * `ia.user.text_effect.use.r`
          * `ia.user.text_effect.use.rw`

    ​
* אדמין
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
  * /iablock _(מציג מידע על הבלוק שאתם מסתכלים)_
    * `ia.admin.iablock`
  * /ialiquid _(מציג מידע לגביי הנוזל שאתם מסתכלים עליו)_
    * `ia.admin.ialiquid`
  * /iadurability
    * ia.admin.iadurability
  * Edit permission (עריכת התפריט /ia)
    * `ia.admin.edit`
  * /iaplayerstat write _(כתיבת נתון על שחקן)_
    * `ia.admin.iaplayerstat.write`
  * /iaplayerstat read _(לקרוא נתון על שחקן)_
    * `ia.admin.iaplayerstat.read`
  * /iainfo (מידע על הפלאגין)
    * `ia.admin.iainfo`
  * /iakill \<mob|all> (להרוג ישויות מיוחדות)
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
  * /iahitbox (של רהיטים hitbox-מציג את ה )
    * `ia.admin.iahitbox`
  * [/iaconfig](../commands/iaconfig.md) (פקודה ראשית לביצוע פעולות מסוימות בהגדרות הפלאגין)
    * ia.admin.iaconfig
* אחר:
  * ביטול הקיק כאשר אין טקסטורה
    * `ia.resourcepack.bypasskick`
  * לעקוף את השחקן שהציב בלוקים ולא יכול להפיל שלל
    * `ia.admin.bypassblockplaceloot`

## הגדרות Worlguard 

{% content-ref url="../../compatibility-with-other-plugins/compatible/worldguard-flags.md" %}
[worldguard-flags.md](../../compatibility-with-other-plugins/compatible/worldguard-flags.md)
{% endcontent-ref %}
