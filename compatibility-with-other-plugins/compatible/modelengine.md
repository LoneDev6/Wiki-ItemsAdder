# ModelEngine

## [Download here](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

(free demo in the previous link, on the top part of the page)

## How to add compatibility?

It's very easy!

* open `config.yml` of **ItemsAdder** and set this option:

{% code title="config.yml" %}
```yaml
  custom-entitites:
    enabled: false
    emotes: false
```
{% endcode %}

* add all your mobs models and configurations inside the **ModelEngine** plugin folder
* run `/meg reload` to generate the **ModelEngine** resourcepack
* open the `plugins\ModelEngine\resource_pack\assets\` folder
* copy `assets` folder inside `plugins\ItemsAdder\resource_pack\` folder
* open `config.yml` of **ItemsAdder** and set this option:

{% code title="config.yml" %}
```yaml
overwrite-vanilla-models: false
```
{% endcode %}

* Run `/iazip` (and follow the [hosting tutorial](../../plugin-usage/resourcepack-hosting/) if needed)

Done!
