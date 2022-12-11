# 🔤 Translation

You can translate ItemsAdder's default items, your own custom items (in two different ways), and the interface (i.e. commands and messages). 

## Item Translation

### Translate ItemsAdder's Default Items

If you want to translate IA's default items, you have to copy their dictionary and create your own in your respective language.


* open the following folder: \plugins\ItemsAdder\contents\_iainternal\configs\dictionaries
* copy everything from `en.yml` into your own file (for example: `fr.yml`)
* change `dictionary-lang` from `en` to your language identifier (e.g.: `fr`)
* translate everything you want
* open config.yml and set `dictionaries-lang` to your language identifier (e.g.: `fr`)
* reload the plugin or restart the server

### Create your own translation for your new items (new way)

{% hint style="warning" %}
This method directly edits the NBT tags of your items. This may be incompatible with other plugins that don't support translate tags.
{% endhint %}

If you want to be able to have translations that work for multiple languages at the same time, like in vanilla Minecraft, remove the `display_name` tag from your item and add the following NBT tag:

```yaml
nbt: "{display:{Name:'{\"italic\":false,\"translate\":\"item.namespace.item_name\"}'}}"
```

Be sure to change `item.namespace.item_name` to a unique string. Here's how an example item looks like:

```yaml
info:
  namespace: special_items
items:
  my_sword:
    nbt: "{display:{Name:'{\"italic\":false,\"translate\":\"item.special_items.my_sword\"}'}}"
    permission: my_sword
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/my_sword.png
    durability:
      max_custom_durability: 1324
```

After that:

* make the \plugins\ItemsAdder\contents\minecraft\resourcepack\minecraft\lang folder, if it doesn't already exist
* make a json file for every language you plan to support, and a fallback `en_us.json`.
* make sure the json file name corresponds to the in-game locale code found [here](https://minecraft.fandom.com/wiki/Language).
* in each file, add the NBT tag key you created, as well as the translation text.

For example, `en_us.json`:

```json
{
  "item.special_items.my_sword": "My Sword"
}
```

And `fr_fr.json`:

```json
{
  "item.special_items.my_sword": "épée de saleté"
}
```

Once you're done, be sure to /iazip and your items will be automatically translated depending on the user's language set in Minecraft!

### Create your own translation for your new items (old way)

{% hint style="info" %}
This method only works when the `dictionaries-lang` option is set to the language identifier of your choice. This globally changes the item names, which means you cannot have items displayed in several languages at the same time, like in vanilla Minecraft. In order to do that, follow the new way.
{% endhint %}

To create your own translations for your own items you just have to create new files (one per language) in a new folder inside `ItemsAdder/contents/`, for example `ItemsAdder/contents/myitems/configs/dictionaries/`.

This is how it looks like:

```yaml
info:
  namespace: special_items_lang
  dictionary-lang: "fr"
dictionary:
  display-name-my_sword: épée de saleté
  display-name-my_item: j'aime la baguette
```

And this is how my items file looks like:

```yaml
info:
  namespace: special_items
items:
  my_sword:
    display_name: display-name-my_sword
    permission: my_sword
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/my_sword.png
    durability:
      max_custom_durability: 1324
```

{% hint style="info" %}
As you can see I set the `display_name`to "display-name-my\_sword", this will tell IA to replace the text with text from the dictionary, so sword would be named "épée de saleté".
{% endhint %}

{% hint style="warning" %}
You can **skip** the **translation** part and do this directly, **but** this **won't** allow you to easily **translate** items in the **future** if you need to.

```yaml
info:
  namespace: special_items
items:
  my_sword:
    display_name: "épée de saleté"
    permission: my_sword
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/my_sword.png
    durability:
      max_custom_durability: 1324
```
{% endhint %}

## Translate commands and messages

You just have to open lang folder and copy and paste en.yml, then translate it and change the lang setting in config.yml to your file name.
