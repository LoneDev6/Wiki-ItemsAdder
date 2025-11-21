# Potion

## Configuration

```yaml
items:
  my_custom_bottle:
    display_name: Biere
    enabled: true
    resource:
      material: POTION
      generate: true
      textures:
      - basic/my_custom_bottle_overlay.png # The texture (preferably white) which will be recolored
      - basic/my_custom_bottle.png # The texture that will not be recolored 
```

<div align="left"><img width="414" height="77" alt="image" src="https://github.com/user-attachments/assets/a848d81d-0333-43c4-8fc4-5b82009cf2a3" /></div>
<div align="left"><img width="400" height="290" alt="TEST BREUVAGE" src="https://github.com/user-attachments/assets/31712cd9-29ea-476f-804e-006ef87582aa" /></div>

## Customisation

For customise the color of potion, you can use this command:
```
Base:
/minecraft:item replace entity @p weapon.mainhand with minecraft:potion[minecraft:custom_model_data=<you_custom_model_data>, minecraft:potion_contents={custom_color:<numeric_color_code>}]
Exemple:
/minecraft:item replace entity @p weapon.mainhand with minecraft:potion[minecraft:custom_model_data=583024, minecraft:potion_contents={custom_color:15348436}]
```
You can find the "custom_color" value calculator on the official Minecraft wiki: https://minecraft.wiki/w/Potion#Item_data

## Result

<img width="1193" height="484" alt="image" src="https://github.com/user-attachments/assets/14637401-8c93-4911-aa7b-311921b6b350" />
