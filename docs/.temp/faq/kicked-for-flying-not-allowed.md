---
title: "I'm getting kicked for 'flying is not enabled on this server'"
description: "What to do when you get kicked for flying."
---

# I'm getting kicked for 'flying is not enabled on this server'

Servers and/or Anti-cheats may kick you for `Flying is not enabled on this server` or a similar reason during the resource pack loading.

This is of course frustrating but there are solutions to this!

## How to fix

Open the `config.yml` of ItemsAdder and set `hide-hud` to `false`:

```yaml
protect-player:
  black-screen: true
  hide-hud: false
```

Remember to run `/iareload` to apply the updated configuration.

## Still having the issue?

Open the `server.properties` of your server and set `allow-flight` to `true`:

```properties
allow-flight=true
```