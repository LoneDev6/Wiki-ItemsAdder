---
description: 合并其他资源包（包括自定义插件资源包）
icon: merge
---

# 合并资源包

{% hint style="danger" %}
### 仅适用于 ItemsAdder 3.3+ 版本！
{% endhint %}

## 为什么要合并？

**Minecraft 版本 1.20.3 之前** 仅**支持 1 个服务器资源包**。\
即使支持多资源包，也具有**无法合并自定义模型数据**的缺陷。\
**如果** 你需要使用多个资源包，你需要自行合并。

## 如何合并？

### 步骤 1

复制你的资源包中的 `assets` 文件夹。

### 步骤 2

将你的资源包中的 `assets` 文件夹粘贴到一个新的 `contents` 子文件夹中。\
例如 `merged_pack_1`：`ItemsAdder/contents/merged_pack_1/resourcepack/`

### 步骤 3

使用 `/iazip` 命令压缩 ItemsAdder 资源包。\
（确保根据你选择的托管方法，遵循正确的[托管教程](resourcepack-hosting/)。）

### 步骤 4（高级用户）

如果你要合并多个包，你可能需要决定合并优先级。\
打开 config.yml 并写入你的 `contents` 子文件夹的加载优先级顺序。

{% code title="config.yml" %}
```yaml
    contents-folders-priorities:
      - vanilla
      - _iainternal
      - merged_pack_1
      - merged_pack_2
      - merged_pack_3
      # ... other packs here of which you want to change load order.
```
{% endcode %}

### 完成

## 示例

{% content-ref url="../compatibility-with-other-plugins/compatible/modelengine.md" %}
[modelengine.md](../compatibility-with-other-plugins/compatible/modelengine.md)
{% endcontent-ref %}

{% content-ref url="../compatibility-with-other-plugins/compatible/nova.md" %}
[nova.md](../compatibility-with-other-plugins/compatible/nova.md)
{% endcontent-ref %}

{% content-ref url="../compatibility-with-other-plugins/compatible/space.md" %}
[space.md](../compatibility-with-other-plugins/compatible/space.md)
{% endcontent-ref %}
