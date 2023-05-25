# 💧 Liquids bugs

{% hint style="warning" %}
These are all Minecraft bugs I cannot fix.\
This is how the game works.\
Please do not report these issues.
{% endhint %}

### Custom liquid color mixed with water and vice versa

Custom liquids are not totally colored sometimes, some parts still have vanilla water color.\
This is a limitation of how the game works. I cannot fix this.

<details>

<summary>Technical reason</summary>

Minecraft stores biomes of a chunk in an int\[1024]. 16x16x256=65536, that's way more than 1024. This means that it stores it in some kind of blobs (not sure myself which size they are), so changing specific blocks is sadly not possible. The colours also fade between biomes, so changing small "blobs" always looks weird and the blocks won't have the full colour.

Source: [https://www.spigotmc.org/threads/how-to-create-custom-biomes.512105/page-2#post-4243330](https://www.spigotmc.org/threads/how-to-create-custom-biomes.512105/page-2#post-4243330)

</details>

![](<../.gitbook/assets/image\_(14) (1) (2) (3) (3) (4) (4) (5) (7) (8) (3) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (13) (1) (1) (1) (11).png>)

### I cannot see liquid color at all, even by placing it in a different location

You have to set the biome blend to `5x5` or lower.

#### Bad

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

#### Good

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

## Liquids on top of each other show the same color

You can do that only if your client is 1.18.1 or greater.\
Old clients cannot see these colors correctly, it's a limitation of the game.

{% hint style="warning" %}
If you place normal water (or if it's naturally generated) on the top or on the bottom of a custom liquid you will see it will have the custom liquid color.

**This is a Minecraft bug I cannot fix.**
{% endhint %}

#### Bad - 1.17.1 and lower

<figure><img src="../.gitbook/assets/water_bug_1.png" alt=""><figcaption></figcaption></figure>

#### Good - 1.18.1 and greater

<figure><img src="../.gitbook/assets/water_bug_2.png" alt=""><figcaption></figcaption></figure>

## Liquids do not spread like water!

{% hint style="success" %}
It's working as intended to avoid lag and glitches.\
Use multiple liquid buckets to place a wider liquid area.
{% endhint %}

<figure><img src="../.gitbook/assets/water_bug_3.png" alt=""><figcaption></figcaption></figure>
