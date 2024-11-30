# ModelEngine

## [此处下载](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

（[免费试用版](https://www.spigotmc.org/resources/conxeptworks-model-engine-demo-1-16-5-1-19-4.106521/)）

## 如何添加兼容性？

<details>

<summary>点击阅读适用于 ItemsAdder 3.4.1-r4 或以下版本的方法</summary>

* 将所有怪物模型与配置放入 **ModelEngine** 文件夹（参考 **ModelEngine** 教程）
* 运行 `/meg reload` 以生成 **ModelEngine** 资源包
* 打开 `plugins/ModelEngine/resource_pack/assets/` 文件夹
* 拷贝 `plugins/ItemsAdder/contents/modelengine/resourcepack/` 文件夹下的 `assets` 文件夹
* 运行 `/iazip` （如需，请参考 [托管指引](../../plugin-usage/resourcepack-hosting/)）

</details>

* 将所有怪物模型与配置放入 **ModelEngine** 文件夹（参考 **ModelEngine** 教程）
* 打开 **ItemsAdder** 的 `config.yml` 并设置如下内容：

```yaml
    merge_other_plugins_resourcepacks_folders:
      - "ModelEngine/resource pack"
```

* 运行 `/meg reload` 以生成 **ModelEngine** 资源包
* 运行 `/iazip` （如需，请参考 [托管指引](../../plugin-usage/resourcepack-hosting/)）

## ItemsAdder 与 ModelEngine 的不同

<details>

<summary>点击以阅读来自 Ticxo 的旧版比较</summary>

[点此](https://git.lumine.io/mythiccraft/modelengine/-/wikis/Comparison:-ItemsAdder) 访问旧版比较页面。

<mark style="color:red;">⚠️</mark> 该页面自 2022.11.26 依赖未更新，可能无法反映当前插件的真实情况。

</details>

### 免责声明

本页面并非诋毁 ModelEngine 中的作品，或是判定哪个插件更好。\
ModelEngine 允许您以合理的价格，引入几乎与原版实体相同的自定义实体。\
这只是我对 ModelEngine 的个人看法，也许我并未使用全部功能。\
因此本页面仅供参考，请询问他人哪个插件更受喜爱。

{% hint style="warning" %}
如果您找到了错误数据，请联系我。我很乐意与您讨论并修正错误。
{% endhint %}

***

<table><thead><tr><th width="150">功能</th><th width="173">ItemsAdder</th><th>ModelEngine v3</th><th>ModelEngine v4</th></tr></thead><tbody><tr><td>动画过渡</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>异步<br>(不影响 TPS)</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Blockbench 插件</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>Citizens 集合</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>社区资源</td><td>~20</td><td>~200</td><td>?</td></tr><tr><td>可配置的染色物品</td><td>❌<br>(默认为药水)</td><td>✅<br>(默认为皮革马铠)<br>(除头盔外的皮革盔甲，药水，药箭与探险家地图)</td><td>与 MEG v3 相同</td></tr><tr><td>价格</td><td>€19.95</td><td><p>v3: $18.99<br></p><p>(需要付费以升级至 v4)</p></td><td><p>v4: $31.99</p><ul><li>比 ItemsAdder 贵 52%</li><li>比 MEG v3 贵 72%<br></li></ul></td></tr><tr><td>效果关键帧<br>(粒子与声效的关键帧)</td><td>✅</td><td>✅*<br>(<a href="https://github.com/Ticxo/Model-Engine-Wiki/wiki/[Temporary-Wiki]-3.0-Features#scriptable-keyframes">可脚本化</a>)</td><td>未知</td></tr><tr><td>物品展示</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>头颅位置</td><td>必须居中</td><td>任意位置</td><td>与 MEG v3 相同</td></tr><tr><td>反向运动</td><td>❌</td><td>✅*<br>(分段)</td><td>与 MEG v3 相同</td></tr><tr><td>缩放关键帧</td><td>✅</td><td>❌</td><td>✅</td></tr><tr><td>模型伪装</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>是否无骨骼模型大小限制</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>玩家皮肤骨骼</td><td>✅*<br>(仅表情)</td><td>❌</td><td>✅</td></tr><tr><td>实体显示支持</td><td>❌</td><td>❌</td><td>✅</td></tr><tr><td>导入模型</td><td>使用自定义 Blockbench 插件导入与导出</td><td>拖动</td><td>与 MEG v3 相同</td></tr><tr><td>实体旋转<br>(身体与头颅交互)</td><td>与原版实体相似</td><td>玩家与实体风格+<br>[玩家] 当头-身夹角过大时旋转身体<br>[实体] 在特定间隔后旋转身体<br>模型自动朝向前进方向<br>可配置稳定角，固定角，旋转时间与间隔<br>非对称固定</td><td>与 MEG v3 相同</td></tr><tr><td>多标签</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>多碰撞箱</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>MythicMobs 交互</td><td>6 机制 (一个做六件事的机制):<br>- 应用模型<br>- 播放/停止动画<br>- 覆盖默认动画<br>- 加载/卸载模型<br>- 多彩/附魔模型<br>- 展示/隐藏骨骼<br><a href="../../plugin-usage/adding-content/mobs/advanced-method/mythicmobs.md">更多信息</a></td><td>30+ 机制<br>- 应用/移除模型<br>- 播放/停止动画<br>- 覆盖默认动画<br>- 加载/卸载模型<br>- 设置/展示/隐藏标签<br>- 多彩/附魔模型<br>- 伪装/停止伪装为玩家<br>- 结合/移除/展示/隐藏骨骼<br>- 父骨骼变换<br>- 创建雕像<br>- 高级多碰撞箱配置<br>- 即时模型变体变换<br>- 10+ VFX 相关机制</td><td>未知 (仍需检查)</td></tr><tr><td>非实体模型相关功能</td><td>✅ (ItemsAdder是一个内容管理器，不仅仅允许添加自定义实体)</td><td>❌ (只允许添加自定义实体)</td><td>与 MEG v3 相同</td></tr><tr><td>数据包数量</td><td>部分情况下更少，部分情况下更多</td><td>部分情况下更少，部分情况下更多</td><td>部分情况下更少，部分情况下更多</td></tr><tr><td>程序动画<br>(实时计算)</td><td>❌</td><td>✅</td><td>✅</td></tr><tr><td>生成资源包</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>多资源包</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td>稳定性</td><td>2022.03发布实体系统</td><td>2020.06.13发布</td><td>2023.10.01发布</td></tr><tr><td>VFX 模型<br>(轻量化弹药模型)</td><td>❌</td><td>✅</td><td>✅</td></tr></tbody></table>

### 网络流量比较

这是对两种插件所使用流量的比较（更低的**发包**与**流量**表示更好）。\
为了测试，我使用了25个 `ninja_skeleton` 模型。可在此下载：[ItemsAdder](https://www.spigotmc.org/resources/entity-ninja-skeleton-for-itemsadder.100468/), [ModelEngine](https://mythiccraft.io/index.php?resources/modelengine-ninja-skeleton-model.214/).

#### 无 AI （无动画静止）

<table><thead><tr><th width="96">插件</th><th width="90">版本</th><th width="90">模式</th><th width="91">捆绑</th><th width="83">发包</th><th width="104">流量</th><th>视频</th></tr></thead><tbody><tr><td>IA</td><td>3.6.2</td><td>smooth</td><td>Y</td><td>5500</td><td>300KiB/s</td><td><a href="https://youtu.be/lPHtIqBwx68">查看</a></td></tr><tr><td>IA</td><td>3.6.2</td><td>smooth</td><td>N</td><td>6800</td><td>160KiB/s</td><td><a href="https://youtu.be/-_GZ_SALruQ">查看</a></td></tr><tr><td>MEG</td><td>R3.1.9</td><td>A,A,C</td><td>-</td><td>8200</td><td>200KiB/s</td><td><a href="https://youtu.be/IuIxMatqSYo">查看</a></td></tr><tr><td>MEG</td><td>R4.0.2</td><td>-</td><td><em>Y</em></td><td>8500</td><td>260KiB/s</td><td><a href="https://youtu.be/r4fbzi_sQgc">查看</a></td></tr></tbody></table>

<table><thead><tr><th width="198">IA</th><th width="151">MEG</th><th width="142">发包对比 (a->b)</th><th>流量对比 (a->b)</th></tr></thead><tbody><tr><td>IA 3.6.2 捆绑</td><td>MEG 3.1.9</td><td><mark style="background-color:green;">-49%</mark></td><td><mark style="background-color:red;">+33%</mark></td></tr><tr><td>IA 3.6.2</td><td>MEG 3.1.9</td><td><mark style="background-color:green;">-20%</mark></td><td><mark style="background-color:green;">-25%</mark></td></tr><tr><td>IA 3.6.2 捆绑</td><td>MEG 4.0.2</td><td><mark style="background-color:green;">-54%</mark></td><td><mark style="background-color:red;">+13%</mark></td></tr><tr><td>IA 3.6.2</td><td>MEG 4.0.2</td><td><mark style="background-color:green;">-25%</mark></td><td><mark style="background-color:green;">-62%</mark></td></tr><tr><td>MEG 4.0.2</td><td>MEG 3.1.9</td><td><mark style="background-color:red;">+3%</mark></td><td><mark style="background-color:red;">+23%</mark></td></tr></tbody></table>

#### 有 AI （四处游荡）

<table><thead><tr><th width="98">插件</th><th width="90">版本</th><th width="90">模式</th><th width="87">捆绑</th><th width="83">发包</th><th width="104">流量</th><th>视频</th></tr></thead><tbody><tr><td>IA</td><td>3.6.2</td><td>smooth</td><td>Y</td><td>7700</td><td>450KiB/s</td><td><a href="https://youtu.be/Jow0Vhs2BSQ">查看</a></td></tr><tr><td>IA</td><td>3.6.2</td><td>smooth</td><td>N</td><td>13k</td><td>350KiB/s</td><td><a href="https://youtu.be/NiJRDJcVLTg">查看</a></td></tr><tr><td>MEG</td><td>R3.1.9</td><td>A,A,C</td><td>N</td><td>10k</td><td>270KiB/s</td><td><a href="https://youtu.be/1S5TXngOr0U">查看</a></td></tr><tr><td>MEG</td><td>R4.0.2</td><td>-</td><td><em>Y</em></td><td>9000</td><td>280KiB/s</td><td><a href="https://youtu.be/yz1ZuTvFBEg">查看</a></td></tr></tbody></table>

<table><thead><tr><th width="198">IA</th><th width="151">MEG</th><th width="142">发包对比 (a->b)</th><th>流量对比 (a->b)</th></tr></thead><tbody><tr><td>IA 3.6.2 捆绑</td><td>MEG 3.1.9</td><td><mark style="background-color:green;">-23%</mark></td><td><mark style="background-color:red;">+66%</mark></td></tr><tr><td>IA 3.6.2</td><td>MEG 3.1.9</td><td><mark style="background-color:red;">+30%</mark></td><td><mark style="background-color:red;">+29%</mark></td></tr><tr><td>IA 3.6.2 捆绑</td><td>MEG 4.0.2</td><td><mark style="background-color:green;">-14%</mark></td><td><mark style="background-color:red;">+60%</mark></td></tr><tr><td>IA 3.6.2</td><td>MEG 4.0.2</td><td><mark style="background-color:red;">+44%</mark></td><td><mark style="background-color:red;">+25%</mark></td></tr><tr><td>MEG 4.0.2</td><td>MEG 3.1.9</td><td><mark style="background-color:green;">-11%</mark></td><td><mark style="background-color:red;">+3%</mark></td></tr></tbody></table>

### 动画质量对比

{% tabs %}
{% tab title="itemsAdder" %}
{% embed url="https://youtu.be/uQHvIv7-laM" %}
{% endtab %}

{% tab title="ModelEngine" %}
{% embed url="https://youtu.be/ejhiwHn2fOM" %}
{% endtab %}
{% endtabs %}

### ModelEngine v4“降低整体网络负载”的争议

MythicCraft 在其[公告](https://web.archive.org/web/20231020161618/https://mythiccraft.io/index.php?threads/modelengine-4-is-out-now.23407/)中为其 ModelEngine v4 版所含的“降低整体网络负载”做了宣传。

在 MythicCraft 的 Discord 中有部分讨论发包（发送给客户端的数据）有多低（相比于 MEG 3）。有部分用户也联系了我，引起了我的好奇。\
但是他们的描述含有误导性。

<div>

<figure><img src="../../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

</div>

我决定通过客户端 F3 界面数据，并为此制作了一个自定义 Spigot [插件](https://github.com/LoneDev6/IAMEGBenchmark)。\
由于客户端计算发包量的方式，用户们展示的发包量并不正确。\
MEG v4 使用捆绑包，允许客户端在一定间隔内接收的数据解析完毕前等待。

捆绑包的工作方式像这样：

1. 服务器发送 `bundle start` 数据包
2. 服务器发送正式数据包（此时 MEG 发送展示实体的传送、展示实体的大小与旋转）
3. 服务器发送 `bundle end` 数据包

这代表服务器总共发送了4个数据包，但收包值只有1。\
这是由于游戏只将捆绑包视为单个数据包，因此 F3 界面显示了虚假的发包值，以比较 v3/v4 或是 ModelEngine/ItemsAdder。

借用 [EliteCreatures](https://a.devs.beer/elitecreatures-meg-comparison) 团队的一个带有35个骨骼的船模型进行了测试。

{% tabs %}
{% tab title="MEG R4.0.2" %}
{% embed url="https://youtu.be/B1cxPPDNqVE?1" %}
{% endtab %}

{% tab title="MEG R3.1.9" %}
{% embed url="https://youtu.be/2zbLISIzRnA" %}
{% endtab %}
{% endtabs %}

### 结论

✅ 当实体静止不动且不四处走动（但显然仍在运行其当前动画）时，IA 发送的数据包较少。\
❌ 当涉及到在世界中四处游荡的实体时，IA（目前）会发送比 MEG v3 [更多的数据包](#user-content-fn-1)[^1]\
❌ 与 MEG v3 相比，IA 缺少一些功能，但这些功能不会给创建逼真的自定义实体带来任何困难。请参阅前面的比较。

✅ 相比于IA，MEG v3 会对移动实体使用更少的包（33%）。\
❌ 相比于IA，MEG v3 会对站立实体使用更多的包（20%）。\
❌ MEG v3 的实体行走/旋转看起来更加笨重，正如前述**视频**所示。

{% hint style="info" %}
对于这两个插件，ModelEngine v3 和 ItemsAdder 之间的数据包数量差异可以忽略不计。

ModelEngine v4 引入了显示实体的使用，由于这些实体的工作方式，减少了数据包的使用。

总结：你需要决定到底哪个更适合你的服务器。
{% endhint %}



[^1]: 原因并不是很明确，可能与 IA 处理自定义实体头颅/身体朝向的逻辑（与原版Minecraft接近）有关。
