# ↪ Example permissions

## Example setup:

* `ia.user.ia` (open `/ia` menu)
* `ia.user.ia.seeitem.*` (see all items in `/ia` menu)
* `ia.user.iarecipe` (use `/iarecipe` command)
* `ia.user.recipe.*` (use all recipes)
* `ia.menu.seecategory.*` (see all categories in `/ia` menu). NOTE: This can change based on the items pack you downloaded. Category permission usually starts with `ia.menu.seecategory.` but some developers may have changed it.
* `ia.user.image.gui` (use `/e` command to see emojis book)
* `ia.user.image.hints` (suggest emojis when using `/e` and TAB complete)
* `ia.user.image.chat` (replace emoji text `:smile:` etc in chat)
* `ia.user.image.command` (replace emoji text `:smile:` etc in commands)
* `ia.user.image.sign` (replace emoji text `:smile:` etc in signs)
* `ia.user.image.book` (replace emoji text `:smile:` etc in books)
* `ia.user.image.use.*` (access to all emojis)

## Where can I get categories permissions?

{% hint style="info" %}
#### ItemsAdder default categories

Open the `categories.yml` file to read all the permissions to see categories.\
The default ItemsAdder pack categories files are inside each `namespace` folder.\
For example: `contents\iasurvival\configs\categories.yml`

For example if you want to make players see ALL the categories of default ItemsAdder you just have to give `ia.menu.*` permission.
{% endhint %}

{% hint style="info" %}
#### Addons categories

If you're installing an [addon](https://addons.plugin.ga/itemsadder/)you may search for a `categories.yml` file inside `ItemsAdder\contents\<ADDON NAME>\configs`, usually they put the categories there, so you can find also their **permissions**.
{% endhint %}

{% hint style="info" %}
#### Creating my categories

To create your categories just read the tutorial
{% endhint %}
