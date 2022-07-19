--
描述: 如何正确安装该插件
---

# ⚙ 首次安装

{% hint style="info" %}
你应该在 **测试服务器** 上进行各种配置，编辑操作.\
当你测试过后没有任何问题，再将其上传至正式服务器
{% endhint %}

{% hint style="danger" %}
你 **必须** 根据教程完成所有安装步骤
{% endhint %}

## 步骤 1 —— 安装插件和API

* 下载并安装 [**ProtocolLib**](https://www.spigotmc.org/resources/protocollib.1997/)
* 下载并安装 [**LoneLibs**](https://www.spigotmc.org/resources/lonelibs.75974/)
* (可选) 下载并安装 **LightAPI** ([1.14, 1.15, 1.16](http://a.devs.beer/lightapi-old) | [1.17, 1.18](http://a.devs.beer/lightapi-new))
* (可选) 下载并安装 [**Lib's Disguises**](https://www.spigotmc.org/resources/libs-disguises-free.81/) 如果你计划创建自定义怪物
* 将 **ItemsAdder.jar** 放到服务端的插件目录
* 开启服务器
* 使Itemsadder完成 **初始化**

步骤 1 就完成啦！.\
接下来你必须跟随 **步骤 2** 来正确的配置资源包（不要担心！so ez的！）。

## 第 2 步 - 安装资源包

#### 资源包的托管

{% content-ref url="plugin-usage/resourcepack-hosting/" %}
[resourcepack-hosting](plugin-usage/resourcepack-hosting/)
{% endcontent-ref %}

## 可选步骤

### 添加官方 ItemsAdder 自定义内容

![](.gitbook/assets/items\_showcase\_gif.apng)

**ItemsAdder** 预置了许多的新的自定义项目.\

预置的项目不会包含在下载的插件中，（某些服主可能并不需要这些内容）因此你需要另外下载。

#### 默认预置包

![](<.gitbook/assets/image (47).png>)

* 最新默认预置包 [点击下载](https://github.com/ItemsAdder/DefaultPack/releases/latest)&#x20;
* 将压缩包中的文件解压至 **ItemAdder** 文件夹并在询问时选择覆盖文件
* 使用 `/iazip` 命令 (如果您未使用**self-host**托管方式请按照你资源包托管方式进行更新） [托管方式](plugin-usage/resourcepack-hosting/).

#### 其他预置包 (可选)

![](<.gitbook/assets/image (50).png>)

* 如果你需要下载其他预置包以此来增加更多的内容 [点击下载](https://github.com/ItemsAdder/OtherPacks/releases/latest) 
* 将压缩包中的文件解压至 **ItemAdder** 文件夹并在询问时选择覆盖文件
* 使用 `/iazip` 命令 (如果您未使用**self-host**托管方式请按照你资源包托管方式进行更新） [托管方式](plugin-usage/resourcepack-hosting/).

如果您的版本为 1.17 或更低版本，则需要更改矿物的生成：

* 打开下列位置文件并设置 `enabled: true`.\
  `ItemsAdder\data\items_packs\iaalchemy\worlds_populators_old.yml`\
  `ItemsAdder\data\items_packs\iasurvival\ores\worlds_populators_old.yml`
* 打开下列位置文件并设置 `enabled: false`.\
  `ItemsAdder\data\items_packs\iaalchemy\worlds_populators_1_18.yml`\
  `ItemsAdder\data\items_packs\iasurvival\ores\worlds_populators_1_18.yml`

### 移除预置物品

{% content-ref url="faq/removing-default-stuff/" %}
[removing-default-stuff](faq/removing-default-stuff/)
{% endcontent-ref %}

### 避免方块错误 (使用 Purpur 核心 的腐竹需要阅读)

{% content-ref url="faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md" %}
[avoid-glitched-blocks.md](faq/blocks-minerals-issues/custom-blocks-glitch-texture/avoid-glitched-blocks.md)
{% endcontent-ref %}
