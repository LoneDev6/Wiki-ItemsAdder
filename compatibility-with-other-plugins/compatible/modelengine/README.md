# ModelEngine

## [Download here](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

(free demo in the previous link, on the top part of the page)

## How to add compatibility?

It's very easy!

{% hint style="warning" %}
### WARNING

<mark style="color:red;">You have to disable</mark> <mark style="color:red;"></mark><mark style="color:red;">**ItemsAdder**</mark> <mark style="color:red;"></mark><mark style="color:red;">custom</mark> <mark style="color:red;"></mark><mark style="color:red;">**entities**</mark> <mark style="color:red;"></mark><mark style="color:red;">and</mark> <mark style="color:red;"></mark><mark style="color:red;">**emotes**</mark> <mark style="color:red;"></mark><mark style="color:red;">systems before starting.</mark>\
Sadly **ModelEngine** code breaks **ItemsAdder** custom **entities** and **emotes**, so you have to decide one of the 2 systems since they can't be used at the same time.

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
