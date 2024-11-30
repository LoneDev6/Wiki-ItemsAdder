---
icon: user-police
---

# 家具权限

此属性允许您为家具放置和家具破坏事件启用权限。\
默认情况下未指定此设置，因为我们希望玩家能够自由地破坏和放置家具。\
如果您指定这些属性，玩家将需要明确的权限：

* `ia.user.furniture.break.iasurvival.my_furniture`
* `ia.user.furniture.place.iasurvival.my_furniture`

```yaml
    behaviours:
      furniture:
        permission_suffix:
          break: iasurvival.my_furniture
          place: iasurvival.my_furniture
```
