---
icon: hashtag
---

# Ranks / prefixes

{% hint style="warning" %}
**You have to use** [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/) **and** [**TAB**](https://www.spigotmc.org/resources/tab-1-5-1-21-4.57806/) **to follow this tutorial, the method may differ if you're using other permissions and TABs plugins.**
{% endhint %}

![](<../../.gitbook/assets/ranks-prefixes_016.png>)

Download the example ranks [here](https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-for-itemsadder.84852/).

## Create a rank

Create a new file `contents/myranks/config.yml`.

```yaml
font_images:  
  admin:
    permission: "ranks"
    show_in_gui: true
    suggest_in_command: false
    path: "font/admin.png"
    scale_ratio: 9
    y_position: 8
```

{% hint style="warning" %}
Don't change the PNG image height (keep it 8px), do not change `scale_ratio` and `y_position`.\
It would make the ranks look pixelated.
{% endhint %}

### Official tool to create custom ranks

{% embed url="https://itemsadder.github.io/minecraft-rank-generator/" %}

<figure><img src="../../.gitbook/assets/ranks-prefixes_017.png" alt=""><figcaption><p><a href="https://itemsadder.github.io/minecraft-rank-generator/">https://itemsadder.github.io/minecraft-rank-generator/</a></p></figcaption></figure>

{% hint style="info" %}
Another option is the free [Rank Designer](https://bestmcserverlist.net/tools/ranks): it draws the badges in the browser (icons, gradients, chat and tab preview) and exports the PNGs, the `font_images` config and the LuckPerms prefix commands in one ZIP.
{% endhint %}

Put the image into `contents/myranks/textures/font/admin.png`.

#### Create a group (for example `admin`)

Command `/lp creategroup admin`

#### Add the prefix

Open the editor `/lp editor`.

Click on the link and open the web editor.\
Select the role. In this case `admin`.

![](<../../.gitbook/assets/ranks-prefixes_013.png>)

Add a new permission:`prefix.100.:admin:` . Change `:admin:` based on your rank name.

![](<../../.gitbook/assets/ranks-prefixes_012.png>)

Press <mark style="color:green;">**`+Add`**</mark>

![](<../../.gitbook/assets/ranks-prefixes_018.png>)

You now have a new line in the permissions list, this is the prefix setting.

![](<../../.gitbook/assets/ranks-prefixes_014.png>)

Save your changes.

![](<../../.gitbook/assets/ranks-prefixes_015.png>)

#### Assign the group to a player

Use this command (change `LoneDev` to your player name) `/lp user LoneDev group add admin`

![](<../../.gitbook/assets/ranks-prefixes_009.png>)

## TAB plugin

{% hint style="warning" %}
Make sure you installed [PlaceholderAPI](https://modrinth.com/plugin/placeholderapi)
{% endhint %}

#### Editing the config.yml of TAB plugin

**Add** this under the `groups` category or edit it if already exists.\
(You have to use `%img_admin%` instead of `:admin:` because **TAB** recognized only **PlaceholderAPI** placeholders and not **ItemsAdder** placeholders. This can be valid also for **other plugins**)

```yaml
  Admin:
    tabprefix: '%img_admin%  '
    tagprefix: '%img_admin%  '
```

Then use the command `/tab reload`.

![](../../.gitbook/assets/ranks-prefixes_011.png)

![](<../../.gitbook/assets/ranks-prefixes_010.png>)
