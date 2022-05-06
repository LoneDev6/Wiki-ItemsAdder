# RealisticWorldGenerator

## [Download here](https://www.spigotmc.org/resources/realisticworldgenerator-1-8-8-1-16-x.15905/)

## Compatibility

* biomes
* ores
* schematics (RWG schematics)

{% hint style="warning" %}
This works only on ItemsAdder 2.5.2+ and RealisticWorldGenerator 4.30+
{% endhint %}

## Warnings

{% hint style="danger" %}
Do not use custom blocks as base ores blocks. This will cause too much lag.\
Keep using vanilla blocks for this purpose.
{% endhint %}

{% code title="ores.yml" %}
```yaml
ores:
  veins:
    biome_layers:
      paste: false
    type: 1
    enabled: true
  base:
    block: ia:itemsadder:ruby_block # <---- DO NOT DO THIS!
```
{% endcode %}

{% hint style="success" %}
Use custom blocks only for:

* surfaces
* ores
* structures (schematics)
{% endhint %}

## How to use custom blocks

For example let's create a biome which has ruby\_block as top layer.

Open the `biomes.yml` file of your **RealisticWorldGenerator** world configuration folder.

Decide a biome (for example `plains`) and add this as first layer.

{% code title="biomes.yml" %}
```yaml
plains:
  layer:
    '1':
    - ia:itemsadder:ruby_ore;120
    '2':
    - minecraft:coarse_dirt;2
    - minecraft:podzol[snowy=false];5
    - minecraft:grass_block[snowy=false];100
```
{% endcode %}

In this example I also modified the `settings.yml` file of this world to make sure only a biome is generated, to find my custom blocks easier.

{% code title="settings.yml" %}
```yaml
one_biome:
  biome: PLAINS
  oceans: false
  enabled: true
```
{% endcode %}

### This is the final result

This is a world with a custom surface

![](<../../.gitbook/assets/image (49).png>)



