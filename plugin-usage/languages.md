---
icon: earth-americas
---

# Languages

### Currently available languages

```
Messages GUIs: 
    Czech cz
    German de
    English en
    Spanish es
    French fr
    Italian it
    Japanese jp
    Korean ko
    Dutch nl
    Portuguese pt
    Polish pl
    Russian ru
    Turkish tr
    Thai th
    Chinese zh_cn
Dictionaries (items): 
    English en
    Spanish es
    French fr
    Hebrew he
    Italian it
    Portuguese pt
    Russian ru
    Thai th
    Turkish tr
    Chinese zh_cn
```

## Translate commands and messages

You just have to open `lang` folder create a copy of `en.yml`, then translate it and change the `lang` setting in `config.yml` to your file name.

{% code title="config.yml" %}
```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```
{% endcode %}

## Minecraft language files

You can easily overwrite Minecraft default translation files.

This supports:

* items names
* items lore
* entity names
* chat messages

The main difference between ItemsAdder dictionaries and Minecraft language files is how they adapt to player settings. Minecraft language files dynamically adjust based on each player's selected language. In contrast, ItemsAdder dictionaries are static, meaning all players see the same language text, as defined in the `config.yml` file (e.g., `en`).

### Example: custom esc menu return button text

In this example I will change the Return to game text of ESC menu.

```yaml
info:
  namespace: ia_various_configs
minecraft_lang_overwrite:
  esc_menu_texts:
    entries:
      "menu.returnToGame": "Return to &aSurvival &fGamemode"
    languages:
      - ALL
```

#### `languages`

The languages property is used to list all the languages where you want to change the text.\
You should set it to only the languages of your playerbase, but I decided to set it to ALL so you will be sure that everyone can see the custom text despite their decided clientside language.

#### `entries`

It's the list of translated texts. You can find the complete list [here](https://github.com/InventivetalentDev/minecraft-assets/blob/1.21.4/assets/minecraft/lang/en_us.json).

### Example: custom item name translation

```yaml
info:
  namespace: ia_various_configs
minecraft_lang_overwrite:
  my_translations_all:
    entries:
      "my_custom_items.my_sword.name": "My Sword"
    languages:
      - ALL
  my_translations_french:
    entries:
      "my_custom_items.my_sword.name": "Mon épée"
    languages:
      - fr_fr
  my_translations_italian:
    entries:
      "my_custom_items.my_sword.name": "La Mia Spada"
    languages:
      - it_it
```

```yaml
info:
  namespace: special_items
items:
  my_sword:
    name: <lang:my_custom_items.my_sword.name>
    permission: my_sword
    resource:
      material: DIAMOND_SWORD
      generate: true
      textures:
      - item/my_sword.png
    durability:
      max_custom_durability: 1324
```

Use the special property `<lang:NAME>` to specify the translation entry (uses [Minimessage](text-formatting.md)).

## ItemsAdder dictionary

This supports:

* items names
* items lore
* `/ia` menu categories names

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
    name: display-name-my_sword
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
As you can see I set the `name`to `display-name-my_sword`, this will tell IA to replace the text with text from the dictionary, so sword would be named `épée de saleté`.
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

