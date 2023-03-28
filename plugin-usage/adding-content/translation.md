# 📚 Translate

## Translation supports:

* items names
* items lore
* `/ia` menu categories names

## Translate items

### Translate ItemsAdder default items

If you want to translate IA default items you can, you just have to copy my dictionary and create your own.

* open folder `plugins/ItemsAdder/contents/` and search for the `dictionaries` folders (on each directory, for example `iasurvival/configs/`)
* duplicate and rename the file `en.yml`
* change `dictionary-lang` from `en` to your language identifier (example `fr`)
* translate everything you want
* open config.yml and set `dictionaries-lang` to your language identifier (example `fr`)
* reload the plugin or restart the server

### Create your own translation for your new items

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
As you can see I set the `display_name`to `display-name-my_sword`, this will tell IA to replace the text with text from the dictionary, so sword would be named `épée de saleté`.
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

You just have to open `lang` folder create a copy of `en.yml`, then translate it and change the `lang` setting in `config.yml` to your file name.
