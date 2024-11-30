---
description: 如何创建椅子
icon: chair
---

# 椅子

要创建椅子，只需按照[家具创建教程](furniture.md)并为家具添加一个简单的属性，使其可以“坐下”。

```yaml
behaviours:
  furniture:
    small: true
  furniture_sit:
    sit_height: 0.5
```

如你所见，你只需添加 `furniture_sit` 行为并指定 `sit_height`。
