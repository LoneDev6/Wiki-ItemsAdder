# 在服务器更换时移除自定义资源包

## 在玩家传送至其他子服时移除资源包

如果您的服务器为群组服务器，并且希望在玩家传送至其他服务器时移除 Itemsadder 的自定义资源包 请阅读此教程：

### 如何设置

1. 下载 [默认资源包](http://matteodev.it/spigot/itemsadder/blank\_pack.zip).
2. 上传至云端（选择自行的托管方式进行操作）跳过 `/iazip` 该操作步骤
3. 获取url
4. 打开不需要 Itemsadder 自定义资源包子服的`server.properties`并设置URL

{% code title="server.properties" %}
```properties
resource-pack=http://your_url/blank_pack.zip
```
{% endcode %}

完成!

当玩家传送至其他子服时，ItemsAdder 资源包将被默认资源包替换.