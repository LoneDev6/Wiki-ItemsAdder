---
描述: 预览发送的聊天消息
---

# 聊天预览 (1.19+)

## 聊天预览

ItemsAdder **3.2.0c** 支持开启 Minecraft 1.19+ 的聊天预览特性

{% hint style="danger" %}
### 该特性只适用于 **Minecraft 1.19** 客户端版本, 并未在旧的游戏版本中进行过测试
{% endhint %}

### 玩家加入游戏时显示的公告

![](<../.gitbook/assets/image (51) (2).png>)

![](<../.gitbook/assets/image (92).png>)

### 聊天预览效果

![](../.gitbook/assets/chat\_preview\_gif.gif)

### 启用聊天预览

打开 `config.yml` 设置该属性,随即使用命令 `/iareload` 进行重载并且重新进入服务器

{% code title="config.yml" %}
```yaml
chat-preview: true
```
{% endcode %}

{% hint style="warning" %}
### 注意

<mark style="color:red;"></mark>使用<mark style="color:red;">`chat-preview`</mark> <mark style="color:red;"></mark><mark style="color:red;">将会关闭消息签名!</mark>\
如果你需要消息签名请勿启用 `chat-preview` (1.19+新特性).

由于Spigot的限制，目前无法将 聊天预览 与 消息签名 同时开启
{% endhint %}
