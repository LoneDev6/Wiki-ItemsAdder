---
description: Blokstate json dosyalarını manuel olarak nasıl düzenleyebiliriz
---

# Blok durumlarını manuel olarak düzenleme

## note\_block.json Düzenleme

{% hint style="warning" %}
ItemsAdder 2.4.20'a güncelleyin
{% endhint %}

`assets\minecraft\blockstates\note_block.json` Dosyasını manuel olarak adding your own rules inside.

**ItemsAdder** will automatically merge your custom json file with the **ItemsAdder** custom blocks if you created any.

## Editing other .json blockstates

You can edit any blockstate file you want, but you have to read this in order to edit some of them.

In order to edit the some blockstates files you have to disable the ItemsAdder custom blocks feature based on the type you want to edit. In the future I may allow manual editing of these files without disabling the ItemsAdder blocks feature (it's not easy to implement, that's why I didn't make this possible yet).

### mushroom blockstates

Delete the files:&#x20;

* `assets\minecraft\blockstates\brown_mushroom_block.json`&#x20;
* `assets\minecraft\blockstates\mushroom_stem.json`
* `assets\minecraft\blockstates\red_mushroom_block.json`

Enable this option:

{% code title="config.yml" %}
```yaml
  disable-REAL: true
```
{% endcode %}

### fire.json

Delete the file `assets\minecraft\blockstates\fire.json`

Enable this option:

{% code title="config.yml" %}
```yaml
  disable-FIRE: true
```
{% endcode %}

### chorus\_plant.json

Delete the file `assets\minecraft\blockstates\chorus_plant.json`

Enable this option:

{% code title="config.yml" %}
```yaml
  disable-REAL_TRANSPARENT: true
```
{% endcode %}

### tripwire.json

Delete the file `assets\minecraft\blockstates\tripwire.json`

Enable this option:

{% code title="config.yml" %}
```yaml
  disable-REAL_WIRE: true
```
{% endcode %}
