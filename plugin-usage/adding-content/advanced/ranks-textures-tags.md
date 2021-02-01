# Ranks textures \(tags\)

You can create custom ranks for your server, this will make it look more professional.  
Check this addon to know how to create them, it's very easy: [https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/](https://www.spigotmc.org/resources/ranks-betterranks-with-custom-textures-itemsadder-addon.84852/)

![](../../../.gitbook/assets/image%20%2827%29.png)

{% hint style="warning" %}
### You have to use [LuckPerms](https://www.spigotmc.org/resources/luckperms.28140/) to follow this tutorial, if you're using another permissions plugin the method may differ.

### Please make sure also to install [PlaceholderAPI](../../using-font_images-emojis-everywhere.md)
{% endhint %}



## Creating a group, example \(admin\)

Use this command `/lp creategroup admin`

### Add the prefix

Use this command `/lp group admin meta addprefix 100 %img_admin%`

### Assign the group to a player

Use this command \(change LoneDev to your player name\) `/lp user LoneDev parent set admin`



