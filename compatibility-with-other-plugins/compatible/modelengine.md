# ModelEngine

## [Download here](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

(free demo [here](https://www.spigotmc.org/resources/conxeptworks-model-engine-demo-1-16-5-1-19-4.106521/))

## How to add compatibility?

<details>

<summary>Click to read the old method for ItemsAdder 3.4.1-r4 and lower</summary>

* add all your mobs models and configurations inside the **ModelEngine** plugin folder (read the **ModelEngine** tutorials for more info)
* run `/meg reload` to generate the **ModelEngine** resourcepack
* open the `plugins/ModelEngine/resource_pack/assets/` folder
* copy `assets` folder inside `plugins/ItemsAdder/contents/modelengine/resourcepack/` folder
* Run `/iazip` (and follow the [hosting tutorial](../../plugin-usage/resourcepack-hosting/) if needed)

</details>

* add all your mobs models and configurations inside the **ModelEngine** plugin folder (read the **ModelEngine** tutorials for more info)
* open `config.yml` of **ItemsAdder** and set this:

```yaml
    merge_other_plugins_resourcepacks_folders:
      - "ModelEngine/resource pack"
```

* run `/meg reload`  to generate the **ModelEngine** resourcepack.
* `/iazip` (and follow the [hosting tutorial](../../plugin-usage/resourcepack-hosting/) if needed).

## Differences between ItemsAdder and ModelEngine

<details>

<summary>Click to read the old comparison by Ticxo</summary>

[Click here](https://git.lumine.io/mythiccraft/modelengine/-/wikis/Comparison:-ItemsAdder) to access the old differences page.

<mark style="color:red;">⚠️</mark> This comparison page wasn't updated since Nov 26, 2022 and might not reflect the actual state of the plugins.

</details>

### Disclaimer

This page is not meant to discredit the works put into ModelEngine or to decide which plugin is better.\
ModelEngine lets you introduce custom entities that act almost like the vanilla ones at a reasonable price.\
These are just my thoughts about ModelEngine, but there's probably some features I missed.\
So, take what I say with a grain of salt and ask others which plugin they like the most.

{% hint style="warning" %}
Please consider contacting me if you find incorrect data on this page, I'll be more than happy to discuss about it and fix the reported inconsistencies.
{% endhint %}

***

<table><thead><tr><th width="239.33333333333331">Feature</th><th width="173">ItemsAdder</th><th>ModelEngine v3</th><th>ModelEngine v4</th></tr></thead><tbody><tr><td>Transition between animations</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Async<br>(TPS Unaffected)</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Blockbench Plugin</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Citizens Integration</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Community-Made Assets</td><td>~20</td><td>~200</td><td>?</td></tr><tr><td>Configurable Tint Item</td><td>❌<br>(Potion by default)</td><td>✅<br>(Leather Horse Armor by default)<br>(All leather armor except helmet, all potions, tipped arrow and filled map)</td><td>Same as MEG v3</td></tr><tr><td>Cost</td><td>€19.95</td><td><p>v3: $18.99<br></p><p>(requires payment to update v3->v4)</p></td><td><p>v4: $31.99</p><ul><li>52% more than ItemsAdder</li><li>72% more than MEG v3<br></li></ul></td></tr><tr><td>Effect Keyframes<br>(Keyframes for particle and sound effects)</td><td>✅</td><td>✅*<br>(<a href="https://github.com/Ticxo/Model-Engine-Wiki/wiki/[Temporary-Wiki]-3.0-Features#scriptable-keyframes">scriptable keyframe</a>)</td><td>Unknown</td></tr><tr><td>Hand Item Display</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Head Position</td><td>Must be centered</td><td>Can be in any position</td><td>Same as MEG v3</td></tr><tr><td>Inverse Kinematics</td><td>❌</td><td>✅*<br>(only segmented)</td><td>Same as MEG v3</td></tr><tr><td>Scale Keyframes</td><td>✅</td><td>❌</td><td>✅</td></tr><tr><td>Model Disguise</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Unlimited Bone Model Size Limit</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Player Skin Bones</td><td>✅*<br>(only in emotes)</td><td>❌</td><td>✅</td></tr><tr><td>Display Entities Support</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>Model Import</td><td>Import &#x26; Export using custom Blockbench plugin</td><td>Drag &#x26; Drop</td><td>Same as MEG v3</td></tr><tr><td>Entity Rotation<br>(Body and Head bone interaction)</td><td>Exactly like vanilla entities</td><td>Player &#x26; Entity style+<br>[Player] Body rotates when head-body angle is too large<br>[Entity] Body rotate after certain delay<br>Model faces towards traveling direction<br>Configurable stable angle, clamp angle, rotation duration and delay<br>Asymmetric clamp</td><td>Same as MEG v3</td></tr><tr><td>Multi-Nametag</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Multi-Hitbox</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>MythicMobs Integration</td><td>6 Mechanics (1 mechanic but does 6 things):<br>- Apply model<br>- Play &#x26; Stop animation<br>- Override default animation<br>- Mount &#x26; Dismount model<br>- Color &#x26; Enchant model<br>- Show &#x26; Hide bones<br><a href="../../plugin-usage/adding-content/mobs/advanced-method/mythicmobs.md">More Info</a></td><td>30+ Mechanics<br>- Apply &#x26; Remove model<br>- Play &#x26; Stop animation<br>- Override default animations<br>- Mount &#x26; Dismount model<br>- Set, Show &#x26; Hide nametags<br>- Color &#x26; Enchant model<br>- Disguise &#x26; Un-disguise player<br>- Combine, Remove, Show &#x26; Hide bones<br>- Bone parent swapping<br>- Create statues<br>- Advance Multi-hitbox configuration<br>- Instant model variant swapping<br>- 10+ VFX-related mechanics</td><td>Unknown (needs to be checked)</td></tr><tr><td>Non-Entity Model Related Features</td><td>✅ (it's a content manager, it allows to add more than only custom entities)</td><td>❌ (allows adding only custom entities to the game)</td><td>Same as MEG v3</td></tr><tr><td>Packet Amount</td><td>Uses less packets in some cases, more in some other cases.</td><td>Uses less packets in some cases, more in some other cases.</td><td>Uses less packets in some cases, more in some other cases.</td></tr><tr><td>Procedural Animation<br>(Realtime calculations)</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>Resource Pack Generation</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Multiple Resource Packs</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>Stability</td><td>Entity system released in March 2022</td><td>Released on Jun 13, 2020</td><td>Released on Oct 1, 2023</td></tr><tr><td>VFX Models<br>(Lightweight models for projectiles)</td><td>❌</td><td>✅</td><td>✅</td></tr></tbody></table>

### Network traffic comparison

This is a comparison of the network traffic usage of both plugins (lower **rx** and **traffic** are better).\
To make these tests I used 25 `ninja_skeleton` model downloadable from here: [ItemsAdder](https://www.spigotmc.org/resources/entity-ninja-skeleton-for-itemsadder.100468/), [ModelEngine](https://mythiccraft.io/index.php?resources/modelengine-ninja-skeleton-model.214/).

#### No AI (standing still with idle animation)

<table><thead><tr><th width="96">Plugin</th><th width="90">Version</th><th width="90">Mode</th><th width="91">Bundle</th><th width="83">rx</th><th width="104">Traffic</th><th>Video</th></tr></thead><tbody><tr><td>IA</td><td>3.6.2</td><td>smooth</td><td>Y</td><td>5500</td><td>300KiB/s</td><td><a href="https://youtu.be/lPHtIqBwx68">Watch</a></td></tr><tr><td>IA</td><td>3.6.2</td><td>smooth</td><td>N</td><td>6800</td><td>160KiB/s</td><td><a href="https://youtu.be/-_GZ_SALruQ">Watch</a></td></tr><tr><td>MEG</td><td>R3.1.9</td><td>A,A,C</td><td>-</td><td>8200</td><td>200KiB/s</td><td><a href="https://youtu.be/IuIxMatqSYo">Watch</a></td></tr><tr><td>MEG</td><td>R4.0.2</td><td>-</td><td><em>Y</em></td><td>8500</td><td>260KiB/s</td><td><a href="https://youtu.be/r4fbzi_sQgc">Watch</a></td></tr></tbody></table>

<table><thead><tr><th width="198">IA</th><th width="151">MEG</th><th width="142">rx diff (a->b)</th><th>traffic diff (a->b)</th></tr></thead><tbody><tr><td>IA 3.6.2 bundle</td><td>MEG 3.1.9</td><td><mark style="background-color:green;">-49%</mark></td><td><mark style="background-color:red;">+33%</mark></td></tr><tr><td>IA 3.6.2</td><td>MEG 3.1.9</td><td><mark style="background-color:green;">-20%</mark></td><td><mark style="background-color:green;">-25%</mark></td></tr><tr><td>IA 3.6.2 bundle</td><td>MEG 4.0.2</td><td><mark style="background-color:green;">-54%</mark></td><td><mark style="background-color:red;">+13%</mark></td></tr><tr><td>IA 3.6.2</td><td>MEG 4.0.2</td><td><mark style="background-color:green;">-25%</mark></td><td><mark style="background-color:green;">-62%</mark></td></tr><tr><td>MEG 4.0.2</td><td>MEG 3.1.9</td><td><mark style="background-color:red;">+3%</mark></td><td><mark style="background-color:red;">+23%</mark></td></tr></tbody></table>

#### With AI (wandering around)

<table><thead><tr><th width="98">Plugin</th><th width="90">Version</th><th width="90">Mode</th><th width="87">Bundle</th><th width="83">rx</th><th width="104">Traffic</th><th>Video</th></tr></thead><tbody><tr><td>IA</td><td>3.6.2</td><td>smooth</td><td>Y</td><td>7700</td><td>450KiB/s</td><td><a href="https://youtu.be/Jow0Vhs2BSQ">Watch</a></td></tr><tr><td>IA</td><td>3.6.2</td><td>smooth</td><td>N</td><td>13k</td><td>350KiB/s</td><td><a href="https://youtu.be/NiJRDJcVLTg">Watch</a></td></tr><tr><td>MEG</td><td>R3.1.9</td><td>A,A,C</td><td>N</td><td>10k</td><td>270KiB/s</td><td><a href="https://youtu.be/1S5TXngOr0U">Watch</a></td></tr><tr><td>MEG</td><td>R4.0.2</td><td>-</td><td><em>Y</em></td><td>9000</td><td>280KiB/s</td><td><a href="https://youtu.be/yz1ZuTvFBEg">Watch</a></td></tr></tbody></table>

<table><thead><tr><th width="198">IA</th><th width="151">MEG</th><th width="142">rx diff (a->b)</th><th>traffic diff (a->b)</th></tr></thead><tbody><tr><td>IA 3.6.2 bundle</td><td>MEG 3.1.9</td><td><mark style="background-color:green;">-23%</mark></td><td><mark style="background-color:red;">+66%</mark></td></tr><tr><td>IA 3.6.2</td><td>MEG 3.1.9</td><td><mark style="background-color:red;">+30%</mark></td><td><mark style="background-color:red;">+29%</mark></td></tr><tr><td>IA 3.6.2 bundle</td><td>MEG 4.0.2</td><td><mark style="background-color:green;">-14%</mark></td><td><mark style="background-color:red;">+60%</mark></td></tr><tr><td>IA 3.6.2</td><td>MEG 4.0.2</td><td><mark style="background-color:red;">+44%</mark></td><td><mark style="background-color:red;">+25%</mark></td></tr><tr><td>MEG 4.0.2</td><td>MEG 3.1.9</td><td><mark style="background-color:green;">-11%</mark></td><td><mark style="background-color:red;">+3%</mark></td></tr></tbody></table>

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

<div>

<figure><img src="../../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

</div>

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

In conclusion: you have to decide which one fits your server project the most.
{% endhint %}



[^1]: The cause is not very clear, it might be related to how ItemsAdder handles custom entities head/body orientation logic, which is close to vanilla Minecraft.
