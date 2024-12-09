---
description: 玩家在安装资源包时被踢出
icon: plane-engines
---

# 加入时由于飞行被踢出

## 被踢问题

某些服务器可能会认为你在安装资源包时正在飞行，这取决于你的出生地点。

你可能会收到这个错误：<mark style="color:red;">"服务器未启用飞行"</mark>，或者被**反作弊**踢出。

## 如何修复？

在 **ItemsAdder** 的 `config.yml` 文件中禁用 `hide-hud` 功能。

```yaml
  protect-player:
    black-screen: true
    hide-hud: false
```

## 仍然有问题

在 `server.properties` 文件中启用此选项：

{% code title="server.properties" %}
```
allow-flight=true
```
{% endcode %}

此设置不会使你的玩家能够飞行，只是 Minecraft 服务器不会在没有权限的情况下踢出他们。
为了防止因此设置而导致的黑客攻击，最好使用**反作弊**。
