---
icon: m
---

# ModelEngine vs ItemsAdder

## Compatibility

{% content-ref url="../compatibility-with-other-plugins/compatible/modelengine.md" %}
[modelengine.md](../compatibility-with-other-plugins/compatible/modelengine.md)
{% endcontent-ref %}

## Differences between ItemsAdder and ModelEngine

{% hint style="warning" %}
Please consider contacting me if you find incorrect data on this page, I'll be more than happy to discuss about it and fix the reported inconsistencies.
{% endhint %}

### Disclaimer

This page is not meant to discredit the works put into ModelEngine or to decide which plugin is better.\
ModelEngine lets you introduce custom entities that act almost like the vanilla ones at a reasonable price.\
These are just my thoughts about ModelEngine, but there's probably some features I missed.\
So, take what I say with a grain of salt and ask others which plugin they like the most.

<details>

<summary>Click to read the old comparison by Ticxo</summary>

Ticxo (ModelEngine developer):

> This is in no way an effort to try to prove which plugin is better. ItemsAdder is truly a fascinating, feature-packed plugin at a very reasonable price range. The following are all my observations and in no way the complete picture of ItemsAdder. Please take my observation with a grain of salt and consult others to see which plugin fits you!

<mark style="color:red;">⚠️</mark> Tocxo's comparison page wasn't updated since Nov 26, 2022 and might not reflect the actual state of the plugins.

[Click here](https://git.lumine.io/mythiccraft/modelengine/-/wikis/Comparison:-ItemsAdder) to access the old differences page.

</details>

***

| Feature                                                        | ItemsAdder                                                                                                                                                                                                                                                     | ModelEngine v3                                                                                                                                                                                                                                                                                                                                                                                                                | ModelEngine v4                                                     |
|:---------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------|
| Transition between animations                                  | ✅                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Async<br>(TPS Unaffected)                                      | ✅                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Blockbench Plugin                                              | ✅                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Citizens Integration                                           | ✅                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Community-Made Assets                                          | ~20                                                                                                                                                                                                                                                            | ~200                                                                                                                                                                                                                                                                                                                                                                                                                          | ?                                                                  |
| Configurable Tint Item                                         | ❌<br>(`POTION` by default and `PLAYER_HEAD` for emotes)                                                                                                                                                                                                        | ✅<br>(Leather Horse Armor by default)<br>(All leather armor except helmet, all potions, tipped arrow and filled map)                                                                                                                                                                                                                                                                                                          | Same as MEG v3                                                     |
| Cost                                                           | €19.95                                                                                                                                                                                                                                                         | v3: $18.99<br>(requires payment to update v3->v4)                                                                                                                                                                                                                                                                                                                                                                             | v4: $31.99<br>- 52% more than ItemsAdder<br>- 72% more than MEG v3 |
| Effect Keyframes<br>(Keyframes for particle and sound effects) | ✅                                                                                                                                                                                                                                                              | ✅*<br>([scriptable keyframe](https://github.com/Ticxo/Model-Engine-Wiki/wiki/[Temporary-Wiki]-3.0-Features#scriptable-keyframes))                                                                                                                                                                                                                                                                                             | Unknown                                                            |
| Hand Item Display                                              | ✅                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Head Position                                                  | Must be centered                                                                                                                                                                                                                                               | Can be in any position                                                                                                                                                                                                                                                                                                                                                                                                        | Same as MEG v3                                                     |
| Inverse Kinematics                                             | ❌                                                                                                                                                                                                                                                              | ✅*<br>(only segmented)                                                                                                                                                                                                                                                                                                                                                                                                        | Same as MEG v3                                                     |
| Scale Keyframes                                                | ✅                                                                                                                                                                                                                                                              | ❌                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Model Disguise                                                 | ✅                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Unlimited Bone Model Size Limit                                | ❌                                                                                                                                                                                                                                                              | ❌                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Player Skin Bones                                              | ✅*<br>(only in emotes)                                                                                                                                                                                                                                         | ❌                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Display Entities Support                                       | ❌                                                                                                                                                                                                                                                              | ❌                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Model Import                                                   | Import & Export using custom Blockbench plugin                                                                                                                                                                                                                 | Drag & Drop                                                                                                                                                                                                                                                                                                                                                                                                                   | Same as MEG v3                                                     |
| Entity Rotation<br>(Body and Head bone interaction)            | Exactly like vanilla entities                                                                                                                                                                                                                                  | Player & Entity style+<br>[Player] Body rotates when head-body angle is too large<br>[Entity] Body rotate after certain delay<br>Model faces towards traveling direction<br>Configurable stable angle, clamp angle, rotation duration and delay<br>Asymmetric clamp                                                                                                                                                           | Same as MEG v3                                                     |
| Multi-Nametag                                                  | ❌                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Multi-Hitbox                                                   | ❌                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| MythicMobs Integration                                         | 6 Mechanics (1 mechanic but does 6 things):<br>- Apply model<br>- Play & Stop animation<br>- Override default animation<br>- Mount & Dismount model<br>- Color & Enchant model<br>- Show & Hide bones<br>[More Info](../adding-content/entities/mythicmobs.md) | 30+ Mechanics<br>- Apply & Remove model<br>- Play & Stop animation<br>- Override default animations<br>- Mount & Dismount model<br>- Set, Show & Hide nametags<br>- Color & Enchant model<br>- Disguise & Un-disguise player<br>- Combine, Remove, Show & Hide bones<br>- Bone parent swapping<br>- Create statues<br>- Advance Multi-hitbox configuration<br>- Instant model variant swapping<br>- 10+ VFX-related mechanics | Unknown (needs to be checked)                                      |
| Non-Entity Model Related Features                              | ✅ (it's a content manager, it allows to add more than only custom entities)                                                                                                                                                                                    | ❌ (allows adding only custom entities to the game)                                                                                                                                                                                                                                                                                                                                                                            | Same as MEG v3                                                     |
| Packet Amount                                                  | Uses less packets in some cases, more in some other cases.<br><sub>(Refer to the comparison below)</sub>                                                                                                                                                       | Same as ItemsAdder                                                                                                                                                                                                                                                                                                                                                                                                            | Same as ItemsAdder                                                 |
| Procedural Animation<br>(Realtime calculations)                | ❌                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Resource Pack Generation                                       | ✅                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |
| Multiple Resource Packs                                        | ✅*<br>([Requires merging](../adding-content/merge-resourcepacks.md))                                                                                                                                                                                           | ❌                                                                                                                                                                                                                                                                                                                                                                                                                             | ❌                                                                  |
| Stability                                                      | Entity system released in March 2022                                                                                                                                                                                                                           | Released on Jun 13, 2020                                                                                                                                                                                                                                                                                                                                                                                                      | Released on Oct 1, 2023                                            |
| VFX Models<br>(Lightweight models for projectiles)             | ❌                                                                                                                                                                                                                                                              | ✅                                                                                                                                                                                                                                                                                                                                                                                                                             | ✅                                                                  |

### Network traffic comparison

This is a comparison of the network traffic usage of both plugins (lower **rx** and **traffic** are better).\
To make these tests I used 25 `ninja_skeleton` model downloadable from here: [ItemsAdder](https://www.spigotmc.org/resources/entity-ninja-skeleton-for-itemsadder.100468/), [ModelEngine](https://mythiccraft.io/index.php?resources/modelengine-ninja-skeleton-model.214/).

#### No AI (standing still with idle animation)

| Plugin | Version | Mode   | Bundle | rx   | Traffic  | Video                                 |
|:-------|:--------|:-------|:-------|:-----|:---------|:--------------------------------------|
| IA     | 3.6.2   | smooth | Y      | 5500 | 300KiB/s | [Watch](https://youtu.be/lPHtIqBwx68) |
| IA     | 3.6.2   | smooth | N      | 6800 | 160KiB/s | [Watch](https://youtu.be/-_GZ_SALruQ) |
| MEG    | R3.1.9  | A,A,C  | -      | 8200 | 200KiB/s | [Watch](https://youtu.be/IuIxMatqSYo) |
| MEG    | R4.0.2  | -      | *Y*    | 8500 | 260KiB/s | [Watch](https://youtu.be/r4fbzi_sQgc) |

| IA              | MEG       | rx diff (a->b)                                    | traffic diff (a->b)                               |
|:----------------|:----------|:--------------------------------------------------|:--------------------------------------------------|
| IA 3.6.2 bundle | MEG 3.1.9 | <mark style="background-color:green;">-49%</mark> | <mark style="background-color:red;">+33%</mark>   |
| IA 3.6.2        | MEG 3.1.9 | <mark style="background-color:green;">-20%</mark> | <mark style="background-color:green;">-25%</mark> |
| IA 3.6.2 bundle | MEG 4.0.2 | <mark style="background-color:green;">-54%</mark> | <mark style="background-color:red;">+13%</mark>   |
| IA 3.6.2        | MEG 4.0.2 | <mark style="background-color:green;">-25%</mark> | <mark style="background-color:green;">-62%</mark> |
| MEG 4.0.2       | MEG 3.1.9 | <mark style="background-color:red;">+3%</mark>    | <mark style="background-color:red;">+23%</mark>   |

#### With AI (wandering around)

| Plugin | Version | Mode   | Bundle | rx   | Traffic  | Video                                 |
|:-------|:--------|:-------|:-------|:-----|:---------|:--------------------------------------|
| IA     | 3.6.2   | smooth | Y      | 7700 | 450KiB/s | [Watch](https://youtu.be/Jow0Vhs2BSQ) |
| IA     | 3.6.2   | smooth | N      | 13k  | 350KiB/s | [Watch](https://youtu.be/NiJRDJcVLTg) |
| MEG    | R3.1.9  | A,A,C  | N      | 10k  | 270KiB/s | [Watch](https://youtu.be/1S5TXngOr0U) |
| MEG    | R4.0.2  | -      | *Y*    | 9000 | 280KiB/s | [Watch](https://youtu.be/yz1ZuTvFBEg) |

| IA              | MEG       | rx diff (a->b)                                    | traffic diff (a->b)                             |
|:----------------|:----------|:--------------------------------------------------|:------------------------------------------------|
| IA 3.6.2 bundle | MEG 3.1.9 | <mark style="background-color:green;">-23%</mark> | <mark style="background-color:red;">+66%</mark> |
| IA 3.6.2        | MEG 3.1.9 | <mark style="background-color:red;">+30%</mark>   | <mark style="background-color:red;">+29%</mark> |
| IA 3.6.2 bundle | MEG 4.0.2 | <mark style="background-color:green;">-14%</mark> | <mark style="background-color:red;">+60%</mark> |
| IA 3.6.2        | MEG 4.0.2 | <mark style="background-color:red;">+44%</mark>   | <mark style="background-color:red;">+25%</mark> |
| MEG 4.0.2       | MEG 3.1.9 | <mark style="background-color:green;">-11%</mark> | <mark style="background-color:red;">+3%</mark>  |

### Animation quality comparison

{% tabs %}
{% tab title="itemsAdder" %}
{% embed url="https://youtu.be/uQHvIv7-laM" %}
{% endtab %}

{% tab title="ModelEngine" %}
{% embed url="https://youtu.be/ejhiwHn2fOM" %}
{% endtab %}
{% endtabs %}

### ModelEngine v4 "overall network load reduction" controversy

MythicCraft [announcement](https://web.archive.org/web/20231020161618/https://mythiccraft.io/index.php?threads/modelengine-4-is-out-now.23407/) advertises an "overall network load reduction" for their new ModelEngine v4 version.

There is some chat going on on the MythicCraft Discord server about how rx (packets sent to the client) are extremely lower compared to MEG 3. I also got contacted by some users about this fact and this caught my curiosity.\
However these users statements are misleading.

<div><figure><img src="../.gitbook/assets/image (228).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image (229).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image (227).png" alt=""><figcaption></figcaption></figure></div>

I decided to make some analysis using the client F3 screen data and I made a custom Spigot [plugin](https://github.com/LoneDev6/IAMEGBenchmark) for the occasion.\
The rx values showcased by these users are not correct because of how the client calculates this value.\
MEG v4 uses bundle packets which allow the client to wait before elaborating a group of packets received between an interval.

The bundle packet works like that:

1. Server sends `bundle start` packet
2. Server sends the packets (in this case MEG sends display entity teleport and display entity size + rotation
3. Server sends `bundle end` packet

This means that the server sends 4 packets in total, but the rx value shown on the client is instead 1.\
This happens because the game considers the bundle packets as a single packet, so the F3 screen shows an unreliable value for the purpose of comparing v3 vs v4 or ModelEngine vs ItemsAdder.

I did some testing using a model lend by the [EliteCreatures](https://a.devs.beer/elitecreatures-meg-comparison) team: a ship model with 35 bones.

{% tabs %}
{% tab title="MEG R4.0.2" %}
{% embed url="https://youtu.be/B1cxPPDNqVE?1" %}
{% endtab %}

{% tab title="MEG R3.1.9" %}
{% embed url="https://youtu.be/2zbLISIzRnA" %}
{% endtab %}
{% endtabs %}

### Conclusion

✅ IA sends less packets when entities are stand still and not walking around (but still running their current animation, obviously).\
❌ IA (for now) sends [more packets](#user-content-fn-1)[^1] than MEG v3 when referring to entities walking around the world.\
❌ IA has some missing features compared to MEG v3, but they are not something which creates any difficulty into creating realistic custom entities. Refer to the previous comparison table.

✅ MEG v3 has lower packet usage (-30%) for moving entities compared to IA.\
❌ MEG v3 has higher packet usage (+20%) for standing entities compared to IA.\
❌ MEG v3 entity walking/rotating looks clunky as you can see in the **previous video**.

{% hint style="info" %}
The packets amount difference is negligible between ModelEngine v3 and ItemsAdder for both plugins.

ModelEngine v4 introduces the display entities usage which cuts down the packets usage due to how these entities work.

In the future ItemsAdder might transition to display entities.

In conclusion: you have to decide which one fits your server project the most.
{% endhint %}

[^1]: The cause is not very clear, it might be related to how ItemsAdder handles custom entities head/body orientation logic, which is close to vanilla Minecraft.
