# 自定义方块掉落 蘑菇块,紫颂植株,音符盒

### 第一个原因

如果你使用了 [EmeraldEnchants2 ](https://github.com/TheBusyBiscuit/EmeraldEnchants2)插件 [请阅读此页面](https://github.com/LoneDev6/ItemsAdder/issues/123)

### 第二个原因

删除了世界中的自定义方块文件夹（不要将其文件夹删除）

![](<../../.gitbook/assets/immagine (98).png>)

如果你删除了这些文件夹，将会丢失该世界的所有自定义方块数据

### 第三个原因

区块损坏. 造成的该问题原因如下：

* 在保存ia的区块文件时，强制关闭服务器
* 服务器磁盘已满导致区块文件无法保存
* 使用 **plugman** 类似的插件重载Itemsadder
* 使用 `/reload` 重载服务器
