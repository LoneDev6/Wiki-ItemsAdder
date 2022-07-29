---
描述: 如何创建坐椅
---

# 创建坐椅

## 第一把椅子

为了创建一把椅子, 您只需要遵循创建家具的教程, 并为家具添加一个简单的属性, 使其可以让玩家坐下.

```yaml
behaviours:
  furniture:
    small: true
  furniture_sit:
    sit_height: 0.5
```

正如您所见, 只需要添加 `furniture_sit` 行为并指定 `sit_height` 的值即可.
