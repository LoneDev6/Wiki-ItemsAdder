---
描述: 如何手动编辑 blockstates（方块状态） 的 json 文件
---

# 手动编辑 blockstates(方块状态)

## 编辑 note\_block.json

{% hint style="warning" %}
版本需求：
ItemsAdder 2.4.20+
{% endhint %}

你可以在 `assets\minecraft\blockstates\note_block.json`中手动编辑方块状态，进一步定义其所需的附加数据.
如果你添加了新的自定义方块 **ItemsAdder** 会将自动将你自定义的 json 文件与 **ItemsAdder** 的自定义方块进行合并

## 编辑其他 .json 的 blockstates（方块状态）

你可以编辑你想编辑的方块状态,但你需要先阅读该教程.\
为了能够编辑某些方块状态文件，你需要根据要编辑的方块状态类型来禁用 Itemsadder 中自定义方块的某些属性功能（例如 `REAL` `REAL_NOTE`）.\
（以后可能允许在不禁用自定义方块属性的情况下允许手动编辑方块状态，但该功能并不容易实现,以至于到现在仍未完成.）

### 蘑菇块的blockstates（方块状态）

删除下列文件:&#x20;

* `assets\minecraft\blockstates\brown_mushroom_block.json`&#x20;
* `assets\minecraft\blockstates\mushroom_stem.json`
* `assets\minecraft\blockstates\red_mushroom_block.json`

并启用此选项：

{% code title="config.yml" %}
```yaml
  disable-REAL: true
```
{% endcode %}

### fire.json

删除该文件 `assets\minecraft\blockstates\fire.json`

并启用此选项：

{% code title="config.yml" %}
```yaml
  disable-FIRE: true
```
{% endcode %}

### chorus\_plant.json

删除该文件 `assets\minecraft\blockstates\chorus_plant.json`

并启用此选项：

{% code title="config.yml" %}
```yaml
  disable-REAL_TRANSPARENT: true
```
{% endcode %}

### tripwire.json

删除该文件 `assets\minecraft\blockstates\tripwire.json`

并启用此选项：

{% code title="config.yml" %}
```yaml
  disable-REAL_WIRE: true
```
{% endcode %}
