---
description: 表情纹理错误 (1.17+)
icon: person-walking
---

# 表情纹理损坏

## 光影模组问题

允许使用自定义光影的模组会破坏表情，因为它们会覆盖/替换 ItemsAdder 用于表情功能的原版光影。

唯一的“修复”方法是禁用光影本身或移除相关的光影模组。

{% tabs %}
{% tab title="开启光影时（有错误）" %}
![shader bug](<../.gitbook/assets/image (51) (2) (1) (1).png>)
{% endtab %}

{% tab title="关闭光影时（无错误）" %}
![no shader bug](<../.gitbook/assets/image (64).png>)
{% endtab %}
{% endtabs %}

已知会导致问题的光影模组：

### Optifine

相关问题：[https://github.com/sp614x/optifine/issues/6391](https://github.com/sp614x/optifine/issues/6391)

### Iris Shaders

相关问题：[https://github.com/IrisShaders/Iris/issues/1042](https://github.com/IrisShaders/Iris/issues/1042)

## 更改玩家皮肤的模组

某些模组可能会更改默认的玩家模型/皮肤，因此可能会受到 ItemsAdder 光影操作的影响，反之亦然。

已知会导致问题的模组：

### 3D Skin Layers

该模组改变了外层皮肤，使其以 3D 形式出现，从而改变了玩家模型本身。

可能的解决方法是在模组设置中禁用 `3D Skulls` 和 `3D Skull Items`。\
目前在表情动画中使用 3D 层没有解决方法。

更多信息请参见相关问题：[https://github.com/tr7zw/3d-Skin-Layers/issues/45](https://github.com/tr7zw/3d-Skin-Layers/issues/45)

### Customizable Player Models

该模组允许完全自定义玩家模型，包括替换部分或整个模型。\
因此，表情在 ItemsAdder 中无法正确显示，目前除了不使用该模组或不使用表情动画外，没有其他解决方法。
