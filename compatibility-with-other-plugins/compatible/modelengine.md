# ModelEngine

## [Download here](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

\(free demo in the previous link, on the top part of the page\)

## How to add compatibility?

It's very easy.

* add all your mobs models and configurations inside the **ModelEngine** plugin folder
* run `/meg reload` to generate the **ModelEngine** resourcepack
* open the `plugins\ModelEngine\resource_pack\` folder
* copy the content inside `plugins\ItemsAdder\resource_pack\` folder
* open config.yml of ItemsAdder and set this option:

  ```yaml
  overwrite-vanilla-models__DISABLE_AT_YOUR_OWN_RISK: false
  ```

* Run `/iazip` \(and follow the [hosting tutorial](../../plugin-usage/resourcepack-hosting/) if needed\)

Done!

