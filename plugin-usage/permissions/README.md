# 👌🏻权限

* 玩家

  * /ia
    * `ia.user.ia`
  * /iarecipe
    * `ia.user.iarecipe`
  * /iatexture \(强行给自己装上材质包\)
    * `ia.user.iatexture`
  * /iatexture all \(强行对每个玩家装上材质包\)
    * `ia.user.iatexture.all`
  * 合成
    * `ia.user.craft.PERMISSION` \(或者如果你要给所有的合成权限,只需使用 ia.user.craft.\*\)
    * 关于物品权限的更多信息,请[阅读这里](../adding-content/advanced/item-properties/basic/item-permission.md)
  * 查看物品在/ia
    * `ia.user.ia.PERMISSION` \(或者要给所有类型权限,只需使用 ia.user.ia.\*\)
    * 关于物品权限的更多信息,请[阅读这里](../adding-content/advanced/item-properties/basic/item-permission.md)
    * `ia.user.iasearchgui` 用于/ia菜单中的搜索GUI
    * 你也可以为每个类型设置一个权限,请查看[/ia GUI ](../ia.md)页面
  * 表情 \(图像/字体\)
    * **/iaimage /emoji, /iaemoji, /e** 书GUI \(显示一本带有表情/图像的书\)
      * `ia.user.image.gui`
    * **/iaimage** **/emoji &lt;text&gt;, /iaemoji &lt;text&gt;, /e &lt;text&gt;** \(根据搜索词来显示带有表情的标签\)
      * `ia.user.image.hints`
    * 在聊天中使用表情
      * `ia.user.image.chat`
    * 在输入命令时使用表情
      * `ia.user.image.command`
    * 在告示牌使用表情
      * `ia.user.image.sign`
    * 在书中显示表情
      * `ia.user.image.book`
    * 在铁砧重命名时使用表情
      * `ia.user.image.anvil`
    * 允许使用表情符号
      * `ia.user.image.use.<图像名称>`
      * 比如: `ia.user.image.use.heart`

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
  * /iareload
    * `ia.admin.iareload`
  * /iazip
    * `ia.admin.iazip`
  * /iablock _\(获得关于你在看的方块的信息\)_
    * `ia.admin.iablock`
  * /ialiquid _\(获得关于你在看的自定义水的信息\)_
    * `ia.admin.ialiquid`
  * /iadurability
    * ia.admin.iadurability
  * 编辑权限 \(编辑按钮在/ia中\)
    * `ia.admin.edit`
  * /iaplayerstat write _\(显示一个玩家的自定义统计\)_
    * `ia.admin.iaplayerstat.write`
  * /iaplayerstat read _\(读取一个玩家的自定义数据\)_
    * `ia.admin.iaplayerstat.read`
  * /iainfo \(获取关于该插件的信息\)
    * `ia.admin.iainfo`
  * /iakill &lt;mob\|all&gt; \(杀死自定义怪物\)
    * `ia.admin.iakill`
  * /iasummon &lt;mob&gt; \[数量\]
    * `ia.admin.iasummon`
  * /iaexport &lt;namespace&gt;
    * `ia.admin.iaexport`
  * /iaspawntree &lt;tree&gt;
    * `ia.admin.iaspawntree`
  * /iaplaytotemanimation &lt;totem&gt; &lt;player&gt;
    * `ia.admin.iatotemanimation`
  * /iaplaysound &lt;sound&gt; &lt;player&gt;
    * `ia.admin.iaplaysound`
  * /iacleancache
    * `ia.admin.iacleancache`
  * /iahitbox \(显示放置的家具的破坏框\)
    * `ia.admin.iahitbox`
* 其他:
  * 绕过接收资源包
    * `ia.resourcepack.bypasskick`
  * 绕过玩家放置的方块不能掉落物品
    * `ia.admin.bypassblockplaceloot`

