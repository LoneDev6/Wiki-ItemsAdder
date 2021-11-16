# Ranks textures (tags)

## Make your server look professional with custom ranks

![](<../../../.gitbook/assets/image (27) (4).png>)

{% hint style="warning" %}
### You have to use [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) and [TAB](https://www.spigotmc.org/resources/tab-1-7-x-1-16-5.57806/) to follow this tutorial, the method may differ if you're using other permissions and TABs plugins.

### If you're using another prefix plugin you may need to use [this method](../../using-font\_images-emojis-everywhere.md) to show ranks
{% endhint %}

## How to create my ranks?

### Download the example ranks

* Update to **ItemsAdder 2.1.30** or next
* Download the [example ranks here ](https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/)

### Create a new rank configuration

Open`plugins\ItemsAdder\data\items_packs\betterranks\ranks.yml` file and **copy **and **paste **one of them.\
Then rename it to your rank, also decide a new **.png** file name, for example `custom`

```yaml
  custom:
    permission: "ranks.custom"
    show_in_gui: true
    suggest_in_command: false
    path: "font/rank/custom.png"
    scale_ratio: 9
    y_position: 8
```

{% hint style="warning" %}
Don't change `scale_ratio `and `y_position`. It would make the ranks look pixelated
{% endhint %}

### Creating the png image

**Copy **one of my ranks **.png** files and edit it from folder `plugins\ItemsAdder\data\resource_pack\assets\betterranks\textures\font\rank\` \
\
You can edit it using **Photoshop**, **GIMP**, **Paint.NET **or any other editing software you use.\
For example copy `admin.png`, name it `custom.png` and edit it.

{% hint style="danger" %}
### Don't change the rank image height! Change only the width or the image will look pixelated!
{% endhint %}

### Example:

For example in order to make a similar rank to my **BetterRanks **addon you just have to use the [Minecraftia ](https://www.dafont.com/andrew-tyler.d2526)font and cut some pixels.

![](<../../../.gitbook/assets/image (36).png>)

![](<../../../.gitbook/assets/image (37).png>)

![](<../../../.gitbook/assets/image (38).png>)

![](<../../../.gitbook/assets/image (39).png>)

## Using the rank ingame

### Luckperms

#### Creating a group, example (admin)

Use this command `/lp creategroup admin`

#### Add the prefix

Use this command `/lp group admin meta addprefix 100 :admin:`

#### Assign the group to a player

Use this command (change LoneDev to your player name) `/lp user LoneDev group add admin`

![](<../../../.gitbook/assets/immagine (40).png>)

### TAB plugin

{% hint style="warning" %}
Make sure you installed [PlaceholderAPI](../../using-font\_images-emojis-everywhere.md)
{% endhint %}

#### Editing the config.yml of TAB plugin

**Add **this under the `groups` category or edit it if already exists.\
(You have to use `%img_admin%` instead of `:admin:` because **TAB **recognized only **PlaceholderAPI **placeholders and not **ItemsAdder **placeholders. This can be valid also for **other plugins**)

```yaml
  Admin:
    tabprefix: '%img_admin%  '
    tagprefix: '%img_admin%  '
```

Then use the command `/tab reload`

![](<../../../.gitbook/assets/immagine (38).png>)

![](<../../../.gitbook/assets/immagine (39).png>)
