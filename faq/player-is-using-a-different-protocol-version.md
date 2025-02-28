---
icon: diamond-exclamation
---

# Player is using a different protocol version

`'Player' is using a different protocol version of the game (x) than the server (x).`

{% hint style="info" %}
This message is just a warning, you can ignore it.
{% endhint %}

## Why?

ViaVersion and similar plugins are not recommended to be used in general, other than when you want to create a lobby server ([source](https://github.com/PluginBugs/Issues-ItemsAdder/issues/3683)).

ViaVersion is a cancer if used incorrectly. The purpose of ViaVersion was to be able to allow clients to connect to a multi-version lobby where players can decide which server they want to join.

Each server has its own version, for example, survival is 1.20.5 and PVP is 1.8. This allows people to connect to the same lobby server which is the main hub of the server community.

Server admins abuse this power to allow players to play on survival servers by joining via 1.8, 1.9, 1.13, 1.18, 1.20 on 1.20.x servers. This causes multiple incompatibilities, instabilities, bugs, glitches to happen. The reason for this to happen is because clients (and servers) had A TON of changes between their versions, most of them are crucial.

Expecting a flawless gameplay is impossible because of how many changes were introduced between versions.

A clear example of a successful server which allows only one version to join is [OriginRealms](https://originrealms.com/) which is one of the most customized Minecraft multiplayer survival experience, no one can tell the opposite.

I don't see any reason to continue this nonsense of expecting gameplay to be stable while allowing ancient versions of the game to join your server, or worse, keep an old version of the server and allow new client versions to join.

ItemsAdder has tons of hacks coded to check client version and server version and then enable some special fixes to avoid crashes/glitches (let's say) on 1.18 clients joining 1.20 servers. I want to stop having to maintain this kind of tricks which are unstable and introduce nothing but stress to both me and the customer.

So please, consider to stop allowing multiple versions to join your survival/gamemode server.
