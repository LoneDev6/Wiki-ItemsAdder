---
icon: user-police
---

# Furniture permissions

This property allows you to enable permissions for the furniture place and furniture break events.\
This setting is not specified by default because we want players to be able to break and place furniture freely.\
Players would need explicit permissions if you specify these properties:

* `ia.user.furniture.break.iasurvival.my_furniture`
* `ia.user.furniture.place.iasurvival.my_furniture`

```yaml
    behaviours:
      furniture:
        permission_suffix:
          break: iasurvival.my_furniture
          place: iasurvival.my_furniture
```
