# 挖取方块掉落蘑菇

如果你有这个特性的话,请先阅读这里 **再去Github发送支持请求**:

## 第一个原因

如果你有安装[EmeraldEnchants2](https://github.com/TheBusyBiscuit/EmeraldEnchants2)[请阅读这里](https://github.com/LoneDev6/ItemsAdder/issues/123)

## 第二个原因

请问你删除了Itemsadder的插件配置文件了吗? 插件里面包含了世界数据,位置在: `plugins\ItemsAdder\storage\regions_data`

如果你已经删除了它的话.你会失去这个世界所有的来自Itemsadder自定义的方块的数据.

## 第三个原因

区块破损. 可能导致的原因如下:

* 在服务器保存IA区域文件的时候强制关闭了它
* 硬盘内存不足的问题,才导致了配置文件的保存不了

