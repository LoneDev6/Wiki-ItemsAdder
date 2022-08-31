# RealisticWorldGenerator

## [下载](https://www.spigotmc.org/resources/realisticworldgenerator-1-8-8-1-16-x.15905/)

## 已兼容

* 生物群系（biomes）
* 矿石（ores）
* schematics (RWG schematics)

{% hint style="warning" %}
仅适用于 ItemsAdder 2.5.2+ 和 RealisticWorldGenerator 4.30+
{% endhint %}

## 警告

{% hint style="danger" %}
请不要使用自定义方块来作为基础矿石生成，会产生大量延迟.\
因此，尽量使用原版方块.
{% endhint %}

{% code title="ores.yml" %}
```yaml
ores:
  veins:
    biome_layers:
      paste: false
    type: 1
    enabled: true
  base:
    block: ia:itemsadder:ruby_block # <---- 错误的示例
```
{% endcode %}

{% hint style="success" %}
建议将自定义方块生成在下列情景中：

* 表层（surface）
* 矿物（ores）
* 结构建筑 (schematics)
{% endhint %}

## 如何生成自定义方块

举个栗子：让我们创建一个以 ruby\_block 方块为的表层的生物群系

打开 **RealisticWorldGenerator** 世界配置文件夹中的 `biomes.yml` 文件

选择一个生物群系 (例如： `plains`（平原）) 将 ruby\_block 设为表层

{% code title="biomes.yml" %}
```yaml
plains:
  layer:
    '1':
    - ia:itemsadder:ruby_ore;120
    '2':
    - minecraft:coarse_dirt;2
    - minecraft:podzol[snowy=false];5
    - minecraft:grass_block[snowy=false];100
```
{% endcode %}

在该例子中，我还修改了该世界的 `settings.yml` 文件，确保只生成一个生物群系，以便更容易地找到设置的自定义方块.

{% code title="settings.yml" %}
```yaml
one_biome:
  biome: PLAINS
  oceans: false
  enabled: true
```
{% endcode %}

### 最终效果

这是一个地表为自定义方块的世界

![](<../../.gitbook/assets/image (41) (1).png>)



