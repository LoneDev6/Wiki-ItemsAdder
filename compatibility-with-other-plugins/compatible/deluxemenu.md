# DeluxeMenu

To show an ItemsAdder item with custom texture on **DeluxeMenu** you have to add this special attribute to the icon of your menu:

```yaml
nbt_int: CustomModelData: 1
```

Instead of 1 you have to set the **CustomModelData** of your custom item.

### How to get the CustomModelData value?

* run `/iacustommodeldata <item>` (for example `/iacustommodeldata ruby`)
* copy the `CustomModelData`, for example `10000`

