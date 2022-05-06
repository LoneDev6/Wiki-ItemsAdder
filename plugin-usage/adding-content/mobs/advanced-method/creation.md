# Creation

## How to import the custom entity model and animations

You can import your custom models very easily, you just have to install the Blockbench extension.

## Installing the Blockbench extension

{% hint style="warning" %}
### Before continuing:

* Make sure you're running **Blockbench 4.1.5** or **greater**
* Make sure you're running the latest ItemsAdder and latest ItemsAdder Blockbench extension
{% endhint %}

[Download Blockbench](https://www.blockbench.net) (don't use the web app).

![](<../../../../.gitbook/assets/image (180).png>)

\
[Download the zip](https://github.com/LoneDev6/itemsadder-entity/releases) `iaentitymodel.zip`

![](<../../../../.gitbook/assets/image (86).png>)

Extract it somewhere, then open **Blockbench** and click on File -> Plugins.

![](<../../../../.gitbook/assets/image (57).png>)

Click on the icon to load plugins from file, then select the file `iaentitymodel.js`.

![](<../../../../.gitbook/assets/image (122).png>)

Press OK

![](<../../../../.gitbook/assets/image (109).png>)

## Converting the model

{% hint style="danger" %}
Remember to make a <mark style="color:red;">**backup**</mark> of your `.bbmodel` file before using this tool!
{% endhint %}

Open your `.bbmodel` project with Blockbench, then click on File -> Convert Project

![](<../../../../.gitbook/assets/image (69).png>)

![](<../../../../.gitbook/assets/image (173).png>)

Select "**ItemsAdder Entity Model**" in the **Format** setting, then press **Confirm**.\
Now save the new converted model file in a new folder where you will put only this file.

You will have something like that

![](<../../../../.gitbook/assets/image (85).png>)

### Configuring the model

Now you can configure your model based on your preferences. The ItemsAdder extension automatically decided some settings for you but you might need to change them.\
Click on the **ItemsAdder** tab and press **Settings**.

![](<../../../../.gitbook/assets/image (74).png>)

Here you have to decide a namespace for your custom entities.\
The default one is `custom`, but you should decide your own, for example `my_entities`, `hell_mobs`, `npcs`...

![](<../../../../.gitbook/assets/image (192).png>)

The other thing you might need to change is the "**Model Scaling Mode**":

* Max Model size provides 7x7x7 block wide models but limits scaling to shrinking only.
* Max Scaling range provides shrinking and growing up to 3.125x in size, but limits the maximum model size to 3x3x3 blocks

Change "**Max Model Size**"  only if you have animated the size of some bones.

![](<../../../../.gitbook/assets/image (97).png>)

### Export the model

Click on the **ItemsAdder** tab and press **Export**.

![](<../../../../.gitbook/assets/image (73).png>)

You should get a success message.

![](<../../../../.gitbook/assets/image (149).png>)

Now open the folder where you have your model and copy/cut the new generated folder `assets`.

![](<../../../../.gitbook/assets/image (151).png>)

Paste the `assets` folder inside the ItemsAdder folder `plugins/ItemsAdder/data/resource_pack/`.&#x20;

### Creating the ingame entity configuration

Now create a new folder inside `plugins/ItemsAdder/data/items_packs/`, it's your namespace folder. For example mine is `custom,` so the path is `plugins/ItemsAdder/data/items_packs/custom/`.

Create a new `.yml` configuration file and call it as you prefer, in this example I use one file per-entity, to keep things organized.

![](<../../../../.gitbook/assets/image (111).png>)

{% code title="barman_robot.yml" %}
```yaml
info:
  namespace: custom
entities:
  barman_robot:
    display_name: "Barman Robot"
    type: ZOMBIE
    model_folder: entity/barman_robot
    silent: true
    can_sun_burn: false
    speed:
      movement: 1
      flying: 0
    max_health: 20
      
```
{% endcode %}

In this example my custom entity will use a ZOMBIE as base entity for its AI.\
You can use any living entity as base entity, depending on your needs.

### Summoning the entity

Use the summon command: `/iaentity summon <entity>`

## Notes

{% hint style="info" %}
Do not create too many bones, keep the model simple, remember this is a blocky pixelated game, use [its style](../../../minecraft-style-guide.md).
{% endhint %}
