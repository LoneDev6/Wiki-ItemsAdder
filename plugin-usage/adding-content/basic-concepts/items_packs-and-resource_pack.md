# items\_packs 与 resource\_pack

## 这两个文件夹是用来做什么的？

### items\_packs

**items\_packs** 是包含着 **命名空间** 的文件夹，其中的每个子文件夹都包含着单一或多个自定义内容组成的 .yml文件.\
每个文件都包含着物品的行为属性、设置、附魔、合成配方、掉落物...配置
{% hint style="warning" %}
别忘了在 .yml 文件顶部设置 **命名空间**！ 

```yaml
info:
  namespace: example
```
{% endhint %}

### resource\_pack

**resource\_pack** 为材质资源文件夹用于放置新增的资源（包括 GUI, 音效,模型...等等内容）.\
你可以在此文件夹中对你的资源包进行配置,该文件夹会自动压缩成名为 **pack.zip** 的文件，并且发送资源包至玩家使其应用.
{% hint style="danger" %}
### 重要提醒

为了确保在出现问题时，能够高效的解决问题.\
请 **不要** _随意复制粘贴内容 、 创建太多的子文件夹 、 保留未使用的贴图/模型_
{% endhint %}

\
