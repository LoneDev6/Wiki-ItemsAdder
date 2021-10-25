# 👌 Права \(Permissions\)

## Права

*   Для пользователей

    * /ia
      * `ia.user.ia`
    * /iarecipe
      * `ia.user.iarecipe`
    * /iatexture \(принудительно наложить пакет только на себя\)
      * `ia.user.iatexture`
    * крафтинг
      * `ia.user.craft.PERMISSION` \(или выдайте все права на крафты сразу одной строкой - ia.user.craft.\*\)
      * чтобы получить больше информации о правах для предмета - [ознакомьтесь](https://github.com/LoneDev6/Wiki-ItemsAdder/tree/b6ca0e098a470a4971b25346a7a58c6ba6fb5a38/plugin-usage/permissions/adding-content/advanced/item-properties/basic/item-permission.md)
    * просмотр предметов в меню /ia
      * `ia.user.ia.PERMISSION` \(или выдайте все права на /ia меню одной строкой - ia.user.ia.\*\)
      * чтобы получить больше информации о правах для предмета - [ознакомьтесь](https://github.com/LoneDev6/Wiki-ItemsAdder/tree/b6ca0e098a470a4971b25346a7a58c6ba6fb5a38/plugin-usage/permissions/adding-content/advanced/item-properties/basic/item-permission.md)
      * `ia.user.iasearchgui` для выдачи права на функцию поиска в виде GUI для меню /ia
      * Также, плагин позволяет устанавливать права на категории предметов, можете ознакомиться с данной страницей - [/ia GUI ](https://github.com/LoneDev6/Wiki-ItemsAdder/tree/b6ca0e098a470a4971b25346a7a58c6ba6fb5a38/plugin-usage/permissions/ia.md)
    * Эмоджи, GUI и HUDы \(картинки юникода\)
      * **/iaimage /emoji, /iaemoji, /e** GUI на основе книги \(отображает список всех эмоджи/картинок юникода в форме книги\)
        * `ia.user.image.gui`
      * **/iaimage** **/emoji &lt;text&gt;, /iaemoji &lt;text&gt;, /e &lt;text&gt;** \(отображает все эмоджи на основе искового запроса\)
        * `ia.user.image.hints`
      * Использование эмоджи в чате
        * `ia.user.image.chat`
      * Использование эмоджи в командах
        * `ia.user.image.command`
      * Использование эмоджи на табличках
        * `ia.user.image.sign`
      * Использование эмоджи в книгах
        * `ia.user.image.book`
      * Использование эмоджи в именах предметов в наковальне
        * `ia.user.image.anvil`
      * Право использовать определенный эмоджи
        * `ia.user.image.use.<font image name>`
        * Пример: `ia.user.image.use.heart`
      * Use **text-effects** in **chat**
        * `ia.user.text_effect.chat`
      * Use** text-effects** in **signs**
        * `ia.user.text_effect.sign`
      * Use **text-effects** in **books**
        * `ia.user.text_effect.book`
      * Use **text-effects** in **anvil **rename field
        * `ia.user.text_effect.anvil`
      * Use a **text-effect**
        * `ia.user.text_effect.use.<effect>`
        * Examples ([full list here](../text-effects-1.17+.md)):
          * `ia.user.text_effect.use.r`
          * `ia.user.text_effect.use.rw`


* Для администраторов
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
  * /iablock \(дает информацию о блоке, на который вы смотрите\)
    * `ia.admin.iablock`
  * /ialiquid _\(получить информацию о жидкости, которую вы просматриваете\)_
    * `ia.admin.ialiquid`
  * /iadurability
    * ia.admin.iadurability
  * Право редактирования \(кнопка редактирование в меню /ia\)
    * `ia.admin.edit`
  * /iaplayerstat write \(установка значений статистик игрока плагина\)
    * `ia.admin.iaplayerstat.write`
  * /iaplayersta read \(считать значение статистики игрока плагина\)
    * `ia.admin.iaplayerstat.read`
  * /iainfo \(информация о количестве всех предметов, блоков, эмоджи и о самом плагине\)
    * `ia.admin.iainfo`
  * /iakill &lt;mob\|all&gt; \(убить сущность плагина\)
    * `ia.admin.iakill`
  * /iasummon &lt;mob&gt; \[количество\]
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
  * /iahitbox \(показывает хитбокс размещенных предметов мебели\)
    * `ia.admin.iahitbox`
  * [/iaconfig](../commands/iaconfig.md) (Основная команда для выполнения некоторых операций с конфигурациями плагина.)
    * ia.admin.iaconfig
* Прочее:
  * Право избежать отключение от сервера, если владелец права отказался от пакета ресурсов
    * `ia.resourcepack.bypasskick`
  * Право избежать отключенное выпадение предмета из блока для игрока
    * `ia.admin.bypassblockplaceloot`

## Worlguard flags

{% content-ref url="../../compatibility-with-other-plugins/compatible/worldguard-flags.md" %}
[worldguard-flags.md](../../compatibility-with-other-plugins/compatible/worldguard-flags.md)
{% endcontent-ref %}
