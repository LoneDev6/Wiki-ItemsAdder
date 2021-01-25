# ↪️Example permissions

## Example setup:

* `ia.user.ia` \(open /ia menu\)
* `ia.user.ia.*` \(see all items in /ia menu\)
* `ia.user.iarecipe` \(use /iarecipe command\)
* `ia.user.craft.*` \(craft all items\)
* `ia.menu.*` \(see all categories in /ia menu\)
* `ia.user.emoji.gui` \(use /e command to see emojis book\)
* `ia.user.emoji.hints` \(suggest emojis when using /e and TAB complete\)
* `ia.user.emoji.chat` \(replace emoji text :smile: etc in chat\)
* `ia.user.emoji.command` \(replace emoji text :smile: etc in commands\)
* `ia.user.emoji.sign` \(replace emoji text :smile: etc in signs\)
* `ia.user.emoji.book` \(replace emoji text :smile: etc in books\)
* `ia.user.emoji.use.*` \(access to all emojis\)

## Where can I get categories permissions?

{% hint style="info" %}
### ItemsAdder default categories

Open this file to read all the permissions to see categories: `plugins\ItemsAdder\data\items_packs\various_configs\ia_gui_default_categories.yml`

For example if you want to make players see ALL the categories of default ItemsAdder you just have to give `ia.menu.*` permission.
{% endhint %}

{% hint style="info" %}
### Addons categories

If you're installing an [addon ](https://addons.plugin.ga/itemsadder/)you may search for a `categories.yml` file inside `ItemsAdder\data\items_packs\ADDON`, usually they put the categories there, so you can find also their **permissions**.
{% endhint %}

{% hint style="info" %}
### Creating my categories

To create your categories just read the tutorial

{% page-ref page="../ia.md" %}
{% endhint %}





