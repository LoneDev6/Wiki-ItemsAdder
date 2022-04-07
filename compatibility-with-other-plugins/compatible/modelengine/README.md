# ModelEngine

## [Download here](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

(free demo in the previous link, on the top part of the page)

## How to add compatibility?

It's very easy!

{% hint style="warning" %}
### WARNING

Sadly **ModelEngine** code breaks **ItemsAdder** custom **entities** and **emotes** optimizations, so you have to make sure to understand that any lag is not caused by ItemsAdder.\
You should decide to use ItemsAdder entities/emotes or ModelEngine. Having both enabled can cause performance issues.&#x20;

I can't do nothing about that.

### [Read more here](compatibility-issue.md)
{% endhint %}

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

* Run `/iazip` (and follow the [hosting tutorial](../../../plugin-usage/resourcepack-hosting/) if needed)

Done!
