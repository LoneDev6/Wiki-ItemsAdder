---
描述: 合并资源包（同为自定义资源包的插件）
---

# 🗃 合并资源包

## 为什么要合并资源包

**Minecraft** 仅支持应用 **一个服务器资源包** ，所以你需要将所有带有自定义资源包功能插件的资源包进行合并.

## 如何合并资源包

### 步骤 1

复制需要合并的资源包中的 `assets` 文件夹

### 步骤 2

将资源包的 `assets` 文件夹粘贴至 **ItemsAdder** 文件夹中：`plugins\ItemsAdder\data\resource_pack\`

### 步骤 3

打开 **ItemsAdder** 的 `config.yml` 并设置下列属性：

```yaml
overwrite-vanilla-models: false
```

### 步骤 4

使用指令 `/iazip` 生成新的 Itemsadder 资源包 ，并上传至云端

### 完成.

## 栗子

{% content-ref url="../../compatibility-with-other-plugins/compatible/modelengine.md" %}
[modelengine.md](../../compatibility-with-other-plugins/compatible/modelengine.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/nova.md" %}
[nova.md](../../compatibility-with-other-plugins/compatible/nova.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/space.md" %}
[space.md](../../compatibility-with-other-plugins/compatible/space.md)
{% endcontent-ref %}
