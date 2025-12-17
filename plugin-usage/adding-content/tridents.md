# 🔱 Tridents

{% hint style="warning" %}
Available since ItemsAdder 4.0.11.

Requires Minecraft 1.21.4+ clients. Server version is not important.
{% endhint %}

## Example model `obsidian_trident`

```yaml
info:
  namespace: test
items:
  obsidian_trident:
    name: Obsidian Trident
    resource:
      generate: false
      model_path: item/obsidian_trident
      material: TRIDENT
      icon: item/obsidian_trident
```

### Creating the trident

Create a json file in `contents/test/models/item/obsidian_trident.json`

#### Set the item held locations

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

#### Set the hit model location

<figure><img src="../../.gitbook/assets/image (2) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

Here is the complete display:

```
	"display": {
		"thirdperson_righthand": {
			"rotation": [0, 60, 0],
			"translation": [0, 0, 1]
		},
		"firstperson_righthand": {
			"rotation": [0, 90, -25],
			"translation": [2.75, -0.75, 2.25]
		},
		"head": {
			"rotation": [90, 90, 0],
			"translation": [0, 0, -21]
		}
	}
```

### Create the throwing model (`_throwing.json` model)

This is the model shown when you are holding the right click button.\
Create a json file in `contents/test/models/item/obsidian_trident_throwing.json`

It's the same model as before, the only difference is the rotation when hold in hand.

You can create a totally different model using Blockbench or simply create a copy of `obsidian_trident.json` and change the rotation like that:

```
{
	"parent": "test:item/obsidian_trident",
	"display": {
		"thirdperson_righthand": {
			"rotation": [0, 90, 180],
			"translation": [0, 0, 1]
		}
	}
}
```

NOTE: Minecraft automatically applies some hardcoded rotations and translations to the firstperson view of the throwing model.\
You should not edit the firstperson view, only edit the thirdperson. The game will apply some rotations and translations accordingly.

## Inventory 2D icon

You can set a 2D icon in inventory.

{% content-ref url="item-properties/2d-icon.md" %}
[2d-icon.md](item-properties/2d-icon.md)
{% endcontent-ref %}

## Done

{% embed url="https://youtu.be/XvAIg-Lw2xs" %}
