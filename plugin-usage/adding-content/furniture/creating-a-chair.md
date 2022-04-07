---
description: How to create a chair
---

# Creating a chair

## Your first chair

In order to create a chair you just have to follow the furniture creation tutorial and add a simple attribute to the furniture to make it sittable.

```yaml
behaviours:
  furniture:
    small: true
  furniture_sit:
    sit_height: 0.5
```

As you can see you just have to add the `furniture_sit` behaviour and specify the `sit_height`.
