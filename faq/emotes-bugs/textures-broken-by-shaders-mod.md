---
描述: 在使用光影时表情动作材质显示错误
---

# 使用光影时材质显示错误

{% hint style="warning" %}
#### 目前无法修复该错误

该问题是由于 Optifine/Iris 模组使用光影时无法与自定义表情动作兼容，修复该问题需要从模组层面进行兼容.
{% endhint %}

{% tabs %}
{% tab title="使用光影(显示错误)" %}
![](<../../.gitbook/assets/image (99).png>)
{% endtab %}

{% tab title="关闭光影(显示正常)" %}
![](<../../.gitbook/assets/image (64).png>)
{% endtab %}
{% endtabs %}

## 导致该问题的原因

### Optifine 问题

在使用 Optifine 渲染器的光影时，会导致自定义表情动作失效，想要解决该问题只能关闭光影功能

已与该开发者联系修复: [https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

### Iris 问题

在使用 Iris 渲染器的光影时，会导致自定义表情动作失效，想要解决该问题只能关闭光影功能

已与该开发者联系修复: [https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)

### 3DSkinLayers

使用 [3DSkinLayers](https://www.curseforge.com/minecraft/mc-mods/skin-layers-3d) 模组 会导致自定义表情失效.\
因为该mod更改了额外layer的渲染方式，打乱了 Itemsadder 皮肤部件的位置.

已与该开发者联系修复: [https://github.com/tr7zw/3d-Skin-Layers/issues/45](https://github.com/tr7zw/3d-Skin-Layers/issues/45)
