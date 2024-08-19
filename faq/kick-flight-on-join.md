---
description: Players get kicked while installing the resourcepack
---

# 🥾 Kick flight on join

## The kick problem

Some servers may think you're flying while the resourcepack is installing, depends on where is your spawn location.

You may get this error: <mark style="color:red;">"Flying is not enabled on this server"</mark>, or getting kicked by an **anticheat**.

## How to fix?

Disable the `hide-hud` feature in the `config.yml` file of **ItemsAdder**.

```yaml
  protect-player:
    black-screen: true
    hide-hud: false
```

## Still having the issue

Enable this option in `server.properties` file:

{% code title="server.properties" %}
```
allow-flight=true
```
{% endcode %}

This setting will not make your players to be able to fly, just Minecraft server will not kick them on flying without permission.\
To prevent hacking because of this setting, is good to use an **AntiCheat**.
