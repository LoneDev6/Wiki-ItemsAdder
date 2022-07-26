# 🖥 命令

* iatexture:
  * 用处: 强制玩家客户端重新加载资源包
  * 用法: /iatexture \[all/player]
  * 权限: "ia.user.iatexture"
* iaget:
  * 用处: 获取ia物品
  * 用法: /iaget \<item> \[amount]
  * 权限: "ia.admin.iaget"
* iagive:
  * 用处: 给予玩家Ia物品
  * 用法: /iagive \<item> \[amount] \[silent]
  * 权限: "ia.admin.iagive"
* iadrop:
  * 用处: 在玩家坐标处生成一个掉落的ia物品
  * 用法: /iadrop \<item> \[amount]
  * 权限: "ia.admin.iadrop"
* iaremove:
  * 用处: 移除玩家背包中的ia物品
  * 用法: /iaremove \<item> \[amount] \[silent]
  * 权限: "ia.admin.iaremove"
* iatag:
  * 用处: 显示Ia物品的debug信息
  * 用法: /iatag
  * 权限: "ia.admin.iatag"
* iacustommodeldata:
  * 用处: 显示Ia物品的CustomModelData
  * 用法: /iacustommodeldata
  * 权限: "ia.admin.custommodeldata"
* iaplayerstat:
  * 用处: 设置一个自定义playerstat或 HUD 值
  * 用法: /iaplayerstat \<read|write|increment|decrement> \<player> \<attribute> \<int|float|string> \[value]
  * 权限: "ia.admin.iaplayerstat"
* ia:
  * 用处: 打开Ia物品信息的GUI
  * 用法: /ia
  * 权限: "ia.user.ia"
* iarepair:
  * 用处: 修理手上物品(支持原版/Ia物品).
  * 用法: /iarepair
  * 权限: "ia.admin.iarepair"
* iarename
  * 用处: 重命名当前物品(支持原版/Ia物品). 也支持Ia表情(font\_images)和 文字效果
  * 用法: /iarename \<name>
  * 权限: "ia.admin.iarename"
* iadurability:
  * 用处: 设置手上物品的耐久度 (支持原版/Ia物品)
  * 用法: /iadurability
  * 权限: "ia.admin.iadurability"
* iareload:
  * 用处: 重载 items\_packs 
  * 用法: /iareload
  * 权限: "ia.admin.iareload"
* iazip:
  * 用处: 自动使用 /iareload 并生成新的资源包（ pack.zip ） 
  * 用法: /iazip
  * 权限: "ia.admin.iazip"
* iablock:
  * 用处: 显示当前的方块信息
  * 用法: /iablock
  * 权限: "ia.admin.iablock"
* ialiquid:
  * 用处: 显示当前的液体信息
  * 用法: /ialiquid \[x] \[y] \[z]
  * 权限: "ia.admin.ialiquid"
* e:
  * 用处: 显示 Font_image 的列表(表情, huds...)
  * 用法: /iaimage
  * 权限: "ia.user.image.gui"
* iarecipe:
  * 用处: 显示物品合成配方GUI
  * 用法: /iarecipe \[item]
  * 权限: "ia.user.iarecipe"
* iahud:
  * 用处: 强制 显示/隐藏 HUD
  * 用法: /iahud \[name]
  * 权限: "ia.admin.iahud"
* iaconvert:
  * 用处: 将旧版本插件 1.0 中世界的方块生成机制转换插件版本为 2.0 世界的方块生成机制(将会重新生成Ia方块),可以选择删除矿物或者继续保留.
  * 用法: /iaconvert \[world] \[deleteores]
  * 权限: "ia.admin.iaconvert"
* iainfo:
  * 用处: 显示插件信息
  * 用法: /iainfo
  * 权限: "ia.admin.iainfo"
* iakill:
  * 用处: 杀死Ia怪物
  * 用法: /iakill
  * 权限: "ia.admin.iakill"
* iasummon:
  * 用处: 生成Ia怪物
  * 用法: /iasummon \[amount]
  * 权限: "ia.admin.iasummon"
* iaexport:
  * 用处: 导出命名空间
  * 用法: /iaexport \<namespace>
  * 权限: "ia.admin.iaexport"
* iaspawntree:
  * 用处: 生成一个Ia自定义的树
  * 用法: /iaspawntree
  * 权限: "ia.admin.iaspawntree"
* iaplaytotemanimation:
  * 用处: 显示不死图腾动画
  * 用法: /iaplaytotemanimation
  * 权限: "ia.admin.iatotemanimation"
* iaplaysound:
  * 用处: 播放Ia音效,在后台无法进行播放
  * 用法: /iaplaysound
  * 权限: "ia.admin.iaplaysound"
* iacleancache:
  * 用处: 清理Ia的缓存
  * 用法: /iacleancache
  * 权限: "ia.admin.iacleancache"
* iasha1:
  * 用处: 生成资源包的sha1
  * 用法: /iasha1
  * 权限: "ia.user.iasha1"
* iahitbox:
  * 用处: 显示放置的家具的碰撞箱
  * 用法: /iahitbox
  * 权限: "ia.admin.iahitbox"
* iaconfig:
  * 用处: 对Ia配置文件执行操作所需的重要命令.
  * 权限: "ia.admin.iaconfig"
* iaentity:
  * 用处: 管理Ia实体的重要命令
  * 权限: "ia.admin.iaentity"
* iaemote
  * 用处: 播放自定义动作.
  * 用法: /iaemote \<emote> \[player]
  * 权限: "ia.user.iaemote"
    * 其他: "ia.user.iaemote.others"
