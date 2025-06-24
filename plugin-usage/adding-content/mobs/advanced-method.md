---
icon: file-plus
---

# Entity Creation

## Creating a new model

Create a new ItemsAdder entity model.

<figure><img src="../../../.gitbook/assets/image (250).png" alt=""><figcaption></figcaption></figure>

Set project type `Custom Entity` and decide a `namespace` + `id`.

<figure><img src="../../../.gitbook/assets/image (251).png" alt=""><figcaption></figcaption></figure>

Immediately save the project into the **ItemsAdder** `contents` folder, under the **namespace** folder (in this example `mymobs`).

<figure><img src="../../../.gitbook/assets/image (252).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (254).png" alt=""><figcaption></figcaption></figure>

Start modelling.

<figure><img src="../../../.gitbook/assets/image (255).png" alt=""><figcaption></figcaption></figure>

Create some animations.\
You should follow some tutorials and learn to use Blockbench, there are a [lot of tutorial on Youtube](https://www.youtube.com/results?search_query=blockbench+animation+tutorial).

<figure><img src="../../../.gitbook/assets/image (259).png" alt=""><figcaption></figcaption></figure>

Before exporting make sure that the settings are correct.

<figure><img src="../../../.gitbook/assets/image (257).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (256).png" alt=""><figcaption></figcaption></figure>

Export the model.

<figure><img src="../../../.gitbook/assets/image (258).png" alt=""><figcaption></figcaption></figure>

## Converting an existing model

{% hint style="danger" %}
Remember to make a <mark style="color:red;">**backup**</mark> of your `.bbmodel` file before using this tool!
{% endhint %}

Open your `.bbmodel` project with Blockbench, then click on File -> Convert Project

![](<../../../.gitbook/assets/image (215).png>)

![](<../../../.gitbook/assets/image (58).png>)

Select **`ItemsAdder Entity Model`** in the **Format** setting, then press **Confirm**.

Now save the new converted model file in a new folder where you will put only this file.

You will have something like that:

![](<../../../.gitbook/assets/image (182).png>)

### Saving the project

Now create a new folder inside `ItemsAdder/contents/`, it's your namespace folder. For example mine is `custom`, so the path is `ItemsAdder/contents/custom/`.

Save the project file `.iaentitymodel` into your ItemsAdder namespace folder, in this example into `contents/custom/`.

### Configuring the model

Now you can configure your model based on your preferences. The ItemsAdder extension automatically decided some settings for you but you might need to change them.\
Click on the **ItemsAdder** tab and press **Settings**.

![](<../../../.gitbook/assets/image (220).png>)

Here you have to decide a namespace for your custom entities.\
The default one is `custom`, but you should decide your own, for example `my_entities`, `hell_mobs`, `npcs`...

![](<../../../.gitbook/assets/image (69).png>)

The other thing you might need to change is the "**Model Scaling Mode**":

* Max Model size provides 7x7x7 block wide models but limits scaling to shrinking only.
* Max Scaling range provides shrinking and growing up to 3.125x in size, but limits the maximum model size to 3x3x3 blocks

Change "**Max Model Size**" only if you have animated the size of some bones.

![](<../../../.gitbook/assets/image (170).png>)

### Export the model

Click on the **ItemsAdder** tab and press **Export**.

![](<../../../.gitbook/assets/image (179).png>)

You should get a success message.

![](<../../../.gitbook/assets/image (66).png>)

### Creating the ingame entity configuration

As you can see the extension created a file automatically, called `custom_entity_NAME.yml`. It will create it only on the first export.

You can customize it with more properties if needed.

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
Do not create too many bones, keep the model simple, remember this is a blocky pixelated game, use [its style](advanced-method/broken-reference/).
{% endhint %}
