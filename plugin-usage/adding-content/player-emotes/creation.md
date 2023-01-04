# Creation

## Installing the Blockbench extension

{% hint style="warning" %}
**Before continuing:**

* Make sure you're running **Blockbench 4.2.5** or **greater**
* Make sure you're running the latest ItemsAdder and latest ItemsAdder Blockbench extension
{% endhint %}

[Download Blockbench](https://www.blockbench.net/) (don't use the web app).

![](<../../../.gitbook/assets/image (98) (1).png>)

\
[Download the zip](https://github.com/LoneDev6/itemsadder-entity/releases) `iaentitymodel.zip`

![](<../../../.gitbook/assets/image (61).png>)

Extract it somewhere, then open **Blockbench** and click on File -> Plugins.

![](<../../../.gitbook/assets/image (48) (1) (1).png>)

Click on the icon to load plugins from file, then select the file `iaentitymodel.js`.

![](<../../../.gitbook/assets/image (74) (1) (1).png>)

Press OK

![](<../../../.gitbook/assets/image (71).png>)

## Enabling emotes

Open `config.yml` of ItemsAdder and enable these two options, then run `/iazip` command.

{% code title="config.yml" %}
```yaml
entities:
  custom-entitites:
    enabled: true
    emotes: true
```
{% endcode %}

## Opening the animations editor

Open the file `player.iaentitymodel` using Blockbench, you can find this file after running `/iazip` for the first time.

`contents/_iainternal/resourcepack/assets/minecraft/animations/player.iaentitymodel`

You can notice a lot of example animations on the left.

![](<../../../.gitbook/assets/image (51) (3).png>)

### Creating your own animations file

You can create as many as animations files you want (**ItemsAdder 3.2.1+**).

![](<../../../.gitbook/assets/image (62).png>)

![](<../../../.gitbook/assets/image (82).png>)

Delete all the emotes and edit/rename the ones you want. They are useful only as base for your personal emotes.

![](<../../../.gitbook/assets/image (68).png>)

Now create an emote and save your `.iaentitymodel` project file into this folder (for example):\
`contents/my_emotes/resourcepack/assets/minecraft/animations/`

![](<../../../.gitbook/assets/image (95).png>)

Then continue following the tutorial to know how to export the emotes into ItemsAdder.

### Apply the changes to ItemsAdder

Click on the **ItemsAdder** tab and press **Export**.

![](<../../../.gitbook/assets/image (100).png>)

You should get a success message.

![](<../../../.gitbook/assets/image (81) (1).png>)

{% hint style="success" %}
Use the command `/iareload` to load the new animation.\
There is <mark style="color:green;">no need</mark> to use `/iazip`!
{% endhint %}

## Playing the animations

Use the emote command: `/iaemote <emote> [player]` or `/emote <emote> [player]`

## Emote permission

Use the `/iaemote` command: `ia.user.iaemote`

Use an emote: `ia.user.iaemote.use.<emote>`\
Example: `ia.user.iaemote.use.yes`
