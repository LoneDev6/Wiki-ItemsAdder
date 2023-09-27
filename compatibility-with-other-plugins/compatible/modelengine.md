# ModelEngine

## [Download here](https://www.spigotmc.org/resources/conxeptworks-model-engine%E2%80%94ultimate-entity-model-manager-1-14-1-17-1.79477/)

(free demo [here](https://www.spigotmc.org/resources/conxeptworks-model-engine-demo-1-16-5-1-19-4.106521/))

## How to add compatibility?

### ItemsAdder 3.4.1-r5 and greater

* add all your mobs models and configurations inside the **ModelEngine** plugin folder (read the **ModelEngine** tutorials for more info)
* open `config.yml` of **ItemsAdder** and set this:

```yaml
    merge_other_plugins_resourcepacks_folders:
      - "ModelEngine/resource pack"
```

* run `/meg reload`  to generate the **ModelEngine** resourcepack.
* `/iazip` (and follow the [hosting tutorial](../../plugin-usage/resourcepack-hosting/) if needed).

### ItemsAdder 3.4.1-r4 and lower

It's very easy!

* add all your mobs models and configurations inside the **ModelEngine** plugin folder (read the **ModelEngine** tutorials for more info)
* run `/meg reload` to generate the **ModelEngine** resourcepack
* open the `plugins/ModelEngine/resource_pack/assets/` folder
* copy `assets` folder inside `plugins/ItemsAdder/contents/modelengine/resourcepack/` folder
* Run `/iazip` (and follow the [hosting tutorial](../../plugin-usage/resourcepack-hosting/) if needed)

Done!

## Difference between ItemsAdder and ModelEngine

{% embed url="https://git.lumine.io/mythiccraft/modelengine/-/wikis/Comparison:-ItemsAdder" %}

{% hint style="warning" %}
This comparison page wasn't updated since Nov 26, 2022 and might not reflect the actual state of the plugins.
{% endhint %}
