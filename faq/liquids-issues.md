---
icon: water
---

# 液体问题

{% hint style="warning" %}
这些都是我无法修复的 Minecraft 错误。这是游戏的工作方式。\
请不要报告这些问题。
{% endhint %}

### 自定义液体颜色与水混合，反之亦然

自定义液体有时不会完全着色，有些部分仍然是原版水的颜色。\
这是游戏工作方式的限制。我无法修复这个问题。

<details>

<summary>技术原因</summary>

Minecraft 将一个区块的生物群系存储在一个 int\[1024] 中。16x16x256=65536，远远超过了 1024。这意味着它以某种块状形式存储（我自己也不确定它们的大小），因此无法更改特定的方块。颜色也会在生物群系之间渐变，因此更改小的“块”总是看起来很奇怪，方块不会有完整的颜色。

来源：[https://www.spigotmc.org/threads/how-to-create-custom-biomes.512105/page-2#post-4243330](https://www.spigotmc.org/threads/how-to-create-custom-biomes.512105/page-2#post-4243330)

</details>

![](<../.gitbook/assets/image\_(14) (1) (2) (3) (3) (4) (4) (5) (7) (8) (3) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (13) (1) (1) (1) (11).png>)

### 我完全看不到液体颜色，即使将其放置在不同的位置

你必须将生物群系过渡设置为 `5x5` 或更低。

#### 不好

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

#### 好

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

## 液体不像水一样扩散！

{% hint style="success" %}
这是为了避免延迟和故障而设计的。\
使用多个液体桶来创建更大的液体区域。
{% endhint %}

<figure><img src="../.gitbook/assets/water_bug_3.png" alt=""><figcaption></figcaption></figure>
