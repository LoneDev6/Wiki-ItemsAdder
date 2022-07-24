---
描述: 玩家在安装资源包时被踢出服务器
---

# 🥾 玩家在安装资源包时被踢出服务器

## “服务器未启用飞行” 被踢出

在安装资源包时被踢出服务器显示：<mark style="color:red;">“此服务器未启用飞行”</mark>
<br>可能是因为你进入服务器的位置出现悬空（可以使用tplogin这一类插件固定上线位置），或是被 **反作弊** 插件踢出服务器.

## 如何修复?

关闭 **ItemsAdder**  `config.yml` 文件中的 `hide-hud` 
<br>设置如下：

```yaml
  protect-player:
    black-screen: true
    hide-hud: false
```

## 仍然出现该问题

在 `server.properties` 中设置该属性：

{% code title="server.properties" %}
```
allow-flight=true
```
{% endcode %}
