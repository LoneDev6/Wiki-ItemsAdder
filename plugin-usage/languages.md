---
icon: earth-americas
---

# Languages

### Currently available languages

```
GUI: 
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
Items: 
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

### How to change language?

{% code title="config.yml" %}
```yaml
config_files:
  lang: 'en'
  dictionaries-lang: 'en'
```
{% endcode %}

## Edit or to create new messages languages

The **plugin** messages **language** files are in **this folder**: `plugins/ItemsAdder/lang/`

You can edit your language file or create a new language file.

## Edit or create items / assets language files

ItemsAdder uses "dictionaries" to translate items name and lore.\
You can create dictionaries in your namespace folder adding your keys there.\
In my case: `contents/iasurvival/dictionaries/`

### Example

In this example I created two dictionaries: English and Italian.\
Then I reference the key in the item name.

{% code title="dictionary_en.yml" %}
```yaml
info:
  namespace: test
  dictionary-lang: en
dictionary:
  name-my-custom-item: This is my custom item
```
{% endcode %}

{% code title="dictionary_it.yml" %}
```yaml
info:
  namespace: test
  dictionary-lang: it
dictionary:
  name-my-custom-item: Il Mio Oggetto Modificato
```
{% endcode %}

{% code title="items.yml" %}
```yaml
items:
  my_custom_item:
    name: name-my-custom-item
    resource:
      material: PAPER
      generate: false
      model_path: minecraft:item/diamond
```
{% endcode %}
