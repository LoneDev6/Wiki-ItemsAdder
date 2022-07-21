# ChatControl-Red

[下载插件](https://www.mc-market.org/resources/18217/)

关于该插件与Itemsadder的更多详情内容，参阅下方链接：
<br>[https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610](https://github.com/kangarko/ChatControl-Red/issues/853#issuecomment-818497610)

## 为聊天频道添加图形前缀

如果你想为聊天频道增加图形前缀,并在聊天频道中显示出来,请遵循本教程步骤：

![一个显示 ARCADE 前缀的 Arcade 频道](<../../.gitbook/assets/immagine (94).png>)

你需要先使用 **Itemsadder** 导入 fontimage 接着在 **ChatControl-Red** 中应用
举个例子,在 ChatControl Red 的 `format/arcade.yml`中进行如下设置:

```yaml
  prefix:
    Message: ':arcade:'
```

当然你可以设置为任何自行导入的[font\_image](../../plugin-usage/adding-content/font-images/)
<br>`arcade` 在此只是作为一个例子
