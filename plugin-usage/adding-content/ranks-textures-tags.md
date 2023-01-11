# 🔖 Ranks textures (tags)

## Make your server look professional with custom ranks

![](<../../.gitbook/assets/image (27) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png>)

{% hint style="warning" %}
**You have to use** [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/) **and** [**TAB**](https://www.mc-market.org/resources/14009/) **to follow this tutorial, the method may differ if you're using other permissions and TABs plugins.**

**If you're using another prefix plugin you may need to use** [**this method**](font-images/using-font\_images-emojis-everywhere.md) **to show ranks**
{% endhint %}

## How to create my ranks?

### Download the example ranks here

{% embed url="https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-for-itemsadder.84852/" %}

### Create a new rank configuration

Open `ItemsAdder/contents/betterranks/configs/ranks.yml` file and **copy** and **paste** one of them.\
Then rename it to your rank, also decide a new **.png** file name, for example `custom`

```yaml
  custom:
    permission: "ranks.custom"
    show_in_gui: true
    suggest_in_command: false
    path: "custom.png"
    scale_ratio: 9
    y_position: 8
```

{% hint style="warning" %}
Don't change `scale_ratio` and `y_position`. It would make the ranks look pixelated
{% endhint %}

### Creating the png image

**Copy** one of my ranks **.png** files and edit it from folder `contents\betterranks\resourcepack\betterranks\textures\`\
\
You can edit it using **Photoshop**, **GIMP**, **Paint.NET** or any other editing software you use.\
For example copy `admin.png`, name it `custom.png` and edit it.

{% hint style="danger" %}
**Don't change the rank image height! Change only the width or the image will look pixelated!**
{% endhint %}

### Example:

For example in order to make a similar rank to my **BetterRanks** addon you just have to use the [Minecraftia ](https://www.dafont.com/andrew-tyler.d2526)font and cut some pixels.

![](<../../.gitbook/assets/image (36).png>)

![](<../../.gitbook/assets/image (37).png>)

![](<../../.gitbook/assets/image (38).png>)

![](<../../.gitbook/assets/image (39).png>)

## Using the rank ingame

### Luckperms

#### Creating a group, example (admin)

Use this command `/lp creategroup admin`

#### Add the prefix

Use this command to get the editor: `/lp editor`\
Now click on the link and open the web editor.

Select the role, in this case `admin`.

![](<../../.gitbook/assets/image (77).png>)

Write `prefix.100.` followed by the prefix placeholder in the bottom input box, in this example I will use `:admin:`

`prefix.100.:admin:` (make sure you write it correctly).

![](<../../.gitbook/assets/image (80) (1).png>)

Press <mark style="color:green;">**`+Add`**</mark>

![](<../../.gitbook/assets/image (74) (1).png>)

As you can see you have a new line in the permissions list, this is the prefix setting.

![](<../../.gitbook/assets/image (70).png>)

Now save your changes

![](<../../.gitbook/assets/image (44).png>)

#### Assign the group to a player

Use this command (change `LoneDev` to your player name) `/lp user LoneDev group add admin`

![](../../.gitbook/assets/image\_\(40\).png)

### TAB plugin

{% hint style="warning" %}
Make sure you installed [PlaceholderAPI](font-images/using-font\_images-emojis-everywhere.md)
{% endhint %}

#### Editing the config.yml of TAB plugin

**Add** this under the `groups` category or edit it if already exists.\
(You have to use `%img_admin%` instead of `:admin:` because **TAB** recognized only **PlaceholderAPI** placeholders and not **ItemsAdder** placeholders. This can be valid also for **other plugins**)

```yaml
  Admin:
    tabprefix: '%img_admin%  '
    tagprefix: '%img_admin%  '
```

Then use the command `/tab reload`

![](../../.gitbook/assets/image\_\(38\).png)

![](../../.gitbook/assets/image\_\(39\).png)
