---
icon: bolt-lightning
---

# ItemsAdder v4

## Introduction

Maintaining compatibility for 6 versions of the game became a very hard task which is impacting too much over the quality of the product and its updates release delay.

I decided to discard compatibility for 1.15 to 1.20.4 in favor of a better 1.20.5+ experience.

## What the community thinks

The Discord community has voted to discard old versions compatibility, so this decision wasn't taken completely out of nowhere.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>



## ViaVersion madness

ViaVersion is a cancer if used incorrectly. The purpose of ViaVersion was to be able to allow clients to connect to a multi-version lobby where players can decide which server they want to join.

Each server has its own version, for example, survival is 1.20.5 and PVP is 1.8. This allows people to connect to the same lobby server which is the main hub of the server community.

Server admins abuse this power to allow players to play on survival servers by joining via 1.8, 1.9, 1.13, 1.18, 1.20 on 1.20.x servers. This causes multiple incompatibilities, instabilities, bugs, glitches to happen.\
The reason for this to happen is because clients (and servers) had A TON of changes between their versions, most of them are crucial.

Expecting a flawless gameplay is impossible because of how many changes were introduced between versions.

A clear example of a successful server which allows only one version to join is [OriginRealms](https://originrealms.com) which is one of the most customized Minecraft multiplayer survival experience, no one can tell the opposite.

I don't see any reason to continue this nonsense of expecting gameplay to be stable while allowing ancient versions of the game to join your server, or worse, keep an old version of the server and allow new client versions to join.

ItemsAdder has tons of hacks coded to check client version and server version and then enable some special fixes to avoid crashes/glitches (let's say) on 1.18 clients joining 1.20 servers. I want to stop having to maintain this kind of tricks which are unstable and introduce nothing but stress to both me and the customer.

So please, consider to stop allowing multiple versions to join your survival/gamemode server.

## So why dropping old versions compatibility?

* less incline to bugs due to less hacky code
* faster updates, no need to keep 6 versions implementations updated
* new features like [item display](https://github.com/PluginBugs/Issues-ItemsAdder/issues/2458) and some other interesting features for [itemstacks](https://github.com/PluginBugs/Issues-ItemsAdder/issues/3536)
* more reliable resourcepack apply process due to recent [1.20.3+ changes](https://github.com/PluginBugs/Issues-ItemsAdder/issues/3585)
* lot of old tricks to add old versions compatibility will be removed to make the plugin more stable

## Final words

{% hint style="info" %}
You should really consider migrating your ancient server to 1.20.5 and stop **ab-using** ViaVersion. Players, admins and me don't get any advantage over using ViaVersion to allow multiple versions to join your server, it just introduces a ton of stress and frustration.
{% endhint %}

{% hint style="success" %}
Old versions will still be downloadable so you can keep using legacy ItemsAdder versions and don't update to the new versions.
{% endhint %}
