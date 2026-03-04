---
icon: hashtag
---

# Ranks / prefixes

{% hint style="warning" %}
**You have to use** [**LuckPerms**](https://www.spigotmc.org/resources/luckperms.28140/) **and** [**TAB**](https://www.spigotmc.org/resources/tab-1-5-1-21-4.57806/) **to follow this tutorial, the method may differ if you're using other permissions and TABs plugins.**
{% endhint %}

![](<../../.gitbook/assets/image (27) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png>)

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

<figure><img src="../../.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption><p><a href="https://itemsadder.github.io/minecraft-rank-generator/">https://itemsadder.github.io/minecraft-rank-generator/</a></p></figcaption></figure>

Put the image into `contents/myranks/textures/font/admin.png`.

#### Create a group (for example `admin`)

Command `/lp creategroup admin`

#### Add the prefix

Open the editor `/lp editor`.

Click on the link and open the web editor.\
Select the role. In this case `admin`.

![](<../../.gitbook/assets/image (67).png>)

Add a new permission:`prefix.100.:admin:` . Change `:admin:` based on your rank name.

![](<../../.gitbook/assets/image (2).png>)

Press <mark style="color:green;">**`+Add`**</mark>

![](<../../.gitbook/assets/image (165).png>)

You now have a new line in the permissions list, this is the prefix setting.

![](<../../.gitbook/assets/image (105).png>)

Save your changes.

![](<../../.gitbook/assets/image (202).png>)

#### Assign the group to a player

Use this command (change `LoneDev` to your player name) `/lp user LoneDev group add admin`

![](<../../.gitbook/assets/immagine (30).png>)

## TAB plugin

{% hint style="warning" %}
Make sure you installed [PlaceholderAPI](broken-reference/)
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

![](<../../.gitbook/assets/immagine (40).png>)

![](<../../.gitbook/assets/immagine (98).png>)
