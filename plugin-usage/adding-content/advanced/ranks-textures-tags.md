# 等级材质\(称号\)

You can create custom ranks for your server, this will make it look more professional.  
Check this addon to know how to create them, it's very easy: [https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/](https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/)

![](../../../.gitbook/assets/image%20%2827%29.png)

{% hint style="danger" %}
### Please update to [ItemsAdder 2.1.30](https://www.spigotmc.org/resources/%E2%9C%85must-have%E2%9C%85-itemsadder%E2%9C%A8textures-3d-models-huds-gui-emojis-ores-blocks-wings-tails-hats.73355/) or next
{% endhint %}

{% hint style="warning" %}
### You have to use [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) and [TAB](https://www.spigotmc.org/resources/tab-1-7-x-1-16-5.57806/) to follow this tutorial, the method may differ if you're using other permissions and TABs plugins.
{% endhint %}

{% hint style="info" %}
### If you're using another prefix plugin you may need to use [this method](../../using-font_images-emojis-everywhere.md) to show ranks
{% endhint %}

## Luckperms

### Creating a group, example \(admin\)

Use this command `/lp creategroup admin`

### Add the prefix

Use this command `/lp group admin meta addprefix 100 :admin:`

### Assign the group to a player

Use this command \(change LoneDev to your player name\) `/lp user LoneDev group add admin`

![](../../../.gitbook/assets/immagine%20%2843%29.png)

## TAB plugin

{% hint style="warning" %}
Make sure you installed [PlaceholderAPI](../../using-font_images-emojis-everywhere.md)
{% endhint %}

### Open config.yml of TAB plugin

**Add** this under the `groups` category or edit it if already exists.  
\(You have to use `%img_admin%` instead of `:admin:` because **TAB** recognized only **PlaceholderAPI** placeholders and not **ItemsAdder** placeholders. This can be valid also for **other plugins**\)

```yaml
  Admin:
    tabprefix: '%img_admin%  '
    tagprefix: '%img_admin%  '
```

Then use the command `/tab reload`

![](../../../.gitbook/assets/immagine%20%2841%29.png)

![](../../../.gitbook/assets/immagine%20%2842%29.png)

