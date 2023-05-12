# Using Filenames
To use item states, you need to add suffixes to your model filename (`generate: false`) **or** texture filename (`generate: true`).

## Suffixes for items
* `BOW`
  * `_0` - First pulling state
  * `_1` - Second pulling state
  * `_2` - Third pulling state
* `CROSSBOW`
  * `_0` - First pulling state
  * `_1` - Second pulling state
  * `_2` - Third pulling state
  * `_charged` - A charged crossbow with an arrow
  * `_firework` - A charged crossbow with a firework
* `FISHING_ROD`
  * `_cast` - Shows a fishing rod when it is cast
* `SHIELD`
  * `_blocking` - Shows a shield model when you are blocking with it
* `BUNDLE`
  * `_filled` - Displays a bundle when it is filled

## Adding item states using suffixes (bow)
Firstly you need to create three pulling states for our bow

![](<../../../.gitbook/assets/bow_pulling_states.gif>)

Save them, drop to the directory where is your original bow texture and add suffixes to your textures like this:

![](<../../../.gitbook/assets/bow_suffixes_textures.png>)

{% hint style="info" %}
Suffixes also work on model names

![](<../../../.gitbook/assets/bow_suffixes_models.png>)
{% endhint %}

## Done
You have working bow with item states

![](<../../../.gitbook/assets/bow_with_item_states.gif>)

