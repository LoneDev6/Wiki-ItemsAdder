# Optifine CIT not working

## Custom CIT not working correctly

If you created a custom CIT for leather armor it might not work.

In order to fix this you have to make sure to add the `weight` attribute to your custom CIT, this makes Optifine prioritize your CIT and it will load it correctly.

Example:

```editorconfig
type=armor
items=leather_helmet leather_chestplate leather_leggings leather_boots
texture.leather_layer_1=my_layer_1
texture.leather_layer_2=my_layer_2
nbt.display.Name=ipattern:My Custom Armor
weight=99999
```
