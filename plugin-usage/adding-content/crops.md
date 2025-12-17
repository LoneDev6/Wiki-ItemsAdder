---
icon: seedling
---

# Crops

## Crops

{% hint style="warning" %}
This feature requires ItemsAdder 4.0.15+ and Minecraft 1.21.4+ (both client and server).

### Performance

Minecraft 1.21.10 clients introduced a fix that makes custom entities have better performance, so it's adviced to use that version, but the feature works fine on 1.21.4+
{% endhint %}

{% hint style="warning" %}
### This page is under construction...
{% endhint %}

### Seed

Create a new `yml` file for your crop.

This is a simple seed item.

```yaml
info:
  namespace: my_crops
items:
  red_crop_seed:
    name: Crop Seed
    graphics:
      texture: item/red_crop_seed
```

Put the texture into `ItemsAdder/contents/my_crops/textures/item/red_crop_seed.png`.

### Model

ItemsAdder can auto generate the models for you. In this example I want to create a model based on the vanilla crop model, but with custom texture.

```yaml
crops:
  red_crop:
    models_by_textures:
      parent: minecraft:block/crop
      textures_prefix: block/red_crop_stage_
      model_texture_key: crop
    max_age: 7
    seed: red_crop_seed
```

Set `seed` to the seed item id (`red_crop_seed`).

Set `parent` to `minecraft:block/crop` in order to use it as base model.

Set `textures_prefix` to `block/red_crop_stage_` to find any texture that starts by that text, so it automatically gets them based on the `max_age` (`7`).

`model_texture_key` is used to replace the texture key inside the json model, in this example `crop`.

<details>

<summary>More info about <code>model_texture_key</code></summary>

Here you can see a preview of the original parent model, with the `#crop` text that will be replaced by the `model_texture_key`.

{% code title="minecraft:block/crop" %}
```json
{
    "ambientocclusion": false,
    "textures": {
        "particle": "#crop"
    },
    .....
```
{% endcode %}

</details>

Put all the textures inside `ItemsAdder/contents/my_crops/textures/block/`.

<figure><img src="../../.gitbook/assets/image (292).png" alt=""><figcaption></figcaption></figure>

### Hitbox

You can automatically increase the hitbox based on the crop age by using the property `hitbox_auto_height_step`.

`hitbox_auto_height_step`: default value is `0`.

This will make the crop hitbox grow with the model proportionally.

```yaml
crops:
  red_crop:
    models_by_textures:
      parent: minecraft:block/crop
      textures_prefix: block/red_crop_stage_
      model_texture_key: crop
    max_age: 7
    hitbox_auto_height_step: 0.1
```

You can also decide a starting hitbox size.

* `width` by default is `1.0`
* `length` by default is `1.0`
* `height` by default is `1.0`

```yaml
    default_hitbox:
      width: 1.0
      length: 1.0
      height: 0.1
```

If you want more customization you can set per-age hitbox sizes.\
All options are optional, you can override a single one or all.

```yaml
  hitboxes:
    0:
      height: 0.5
      width: 0.5
      length: 0.1
    1:
      height: 0.8
      width: 0.8
      length: 0.2
```

### Growing settings

#### `avg_seconds_per_stage`&#x20;

It uses the value set in `config.yml` by default.\
Average time in seconds for a plant to grow one stage under optimal conditions.\
Used to calculate growth probability at each check (p = checkInterval / avgSecondsPerStage).\
Lower values make crops grow faster, higher values make them grow slower.

#### `min_light`

Minimum light level above the crop for growth to occur.

#### Sounds

Sounds settings.

* `place_sound`
* `break_sound`
* `interact_sound`

#### `multipliers`

Used to determine how fast/slow the crop grows on some conditions.

* `bonemeal`: When interacted with Bone Meal
* `max_moisture`: When moisture is at max level (`7`). Value of `0.5` means plants grow 2x faster at max moisture.
* `rain`: When it rains
* `thunderstorm`: When there is a thunderstorm
* `snow`: When it snows

```yaml
crops:
  red_crop:
    models_by_textures:
      parent: minecraft:block/crop
      textures_prefix: block/red_crop_stage_
      model_texture_key: crop
    max_age: 7
    hitbox_auto_height_step: 0.1
    avg_seconds_per_stage: 240
    min_light: 9
    place_sound: minecraft:item.crop.plant
    break_sound: minecraft:block.crop.break
    multipliers:
      bonemeal: 0.2
      max_moisture: 0.5
      rain: 0.7
      thunderstorm: -0.5
      snow: -0.7
```

### Loots

#### `drop_seed_if_immature`

(default: `true`) This property makes `1` crop seed drop when player breaks the crop that has not reached the max stage and didn't already drop anything (to avoid duplication).

#### `loots`

This is the property where you can list all the loots for this crop.

#### `trigger`

By default: `BREAK`.

* `BREAK`: block broken normally
* `INTERACT`: user clicked/used the crop
* `TRAMPLE`: stepped on
* `WATER`: removed by flowing water
* `LAVA`: removed by lava
* `FARMLAND_DRY`: soil turned to dirt when no longer hydrated

#### `triggers`

Alternative to trigger, you can set multiple triggers.

**Example**

```yaml
crops:
  red_crop:
    # ..... previous properties
    loots:
      red_crop_1:
        triggers:
         - INTERACT
         - BREAK
```

```yaml
crops:
  red_crop:
    # ..... previous properties
    loots:
      red_crop_1:
        triggers:
         - INTERACT
         - BREAK
```

#### `decrease_age`

This is used to make the crop lose age instead of being broken.

#### `age`

Age when the loot will be satisfied.

#### `age_range`

Alternative to `age` which allows for further customization of the age range when the loot should be dropped.

```yaml
crops:
  red_crop:
    # ..... previous properties
    loots:
      red_crop_1:
        ## ... other properties
        age_range:
          min: 1
          max: 3
```

#### `biomes`

List of biomes where the loot should be dropped.

#### `worlds`

List of worlds where the loot should be dropped.

#### `tools`

List of tools that can trigger the loot.\
Supports wildcard `*` and use `hand` to allow hand to trigger the loot.

By default `hand` is used.

#### `stop_on_first_success`

Is used to stop other loots to drop whenever a loot already was satisfied and was just dropped.

#### `commands`

List of commands to be triggered.

Each command has a set of properties:

* `command`: command to be executed
* `as_console` (default: `true`): if executed as console
* `silent` (default: `false`): if silent or show a message in console

**Example**

```yaml
      red_crop_1:
        trigger: INTERACT
        decrease_age: 3
        age: 2
        commands:
          my_group_1:
            chance: 100
            my_command_1:
              command: tell {player} hello!
```

#### `exp_drop`

Drops some experience.

<pre class="language-yaml"><code class="lang-yaml"><strong>        exp_drop:
</strong>          min_amount: 1
          max_amount: 1
          chance: 100
</code></pre>

#### `exp_drops`

Alternative to `exp_drop` that allows more than `1` entry to be set.

**Example**

<pre class="language-yaml"><code class="lang-yaml"><strong>        exp_drops:
</strong>          exp1:
            min_amount: 1
            max_amount: 1
            chance: 100
</code></pre>

#### `item_drop`

Drops an item.

```yaml
        item_drop:
          item: DIAMOND
          min_amount: 1
          max_amount: 1
          chance: 100
          ignore_fortune: false
```

#### `item_drops`

Alternative to `item_drop` to drop more than `1` item.

```yaml
        item_drops:
          change_me:
            item: DIAMOND
            min_amount: 1
            max_amount: 1
            chance: 100
            ignore_fortune: false
```

### `bottom_block`

Allow only this particular block to be a valid placement base for the crop. Usually set to `farmland`.

### Done!

Your custom crop is ready.

Just generate your resourcepack using `/iazip`.

<div><figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure> <figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure></div>

### Performance optimization

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

The plugin uses a method to optimize the crops rendering, called `billboard`.\
A billboard is basically a simpler model used to show crops that are far away.

By default the plugin already creates billboard for your models, but if you want to use different models you can do that with some properties.\
By default the billboard model is just a flat surface, which is the same logic used by many videogames.

#### Auto generate billboard based on custom parent and custom textures

```yaml
crops:
  red_crop:
    models_by_textures:
      # Let it auto generate the models
      parent: minecraft:block/crop
      textures_prefix: block/red_crop_stage_
      model_texture_key: crop
      billboard_parent: minecraft:block/crop_billboard
      billboard_textures_prefix: block/red_crop_stage_
```

#### Auto genereate billboard based on custom models

```yaml
crops:
  red_crop:
    models_by_textures:
      # Let it auto generate the models
      parent: minecraft:block/crop
      textures_prefix: block/red_crop_stage_
      model_texture_key: crop
      billboard_textures_prefix: block/red_crop_stage_
```

### Alternative crops models (`cross`)

```yaml
crops:
  blue_berry_bush:
    models_by_textures:
      parent: minecraft:block/crop_cross
      textures_prefix: block/blue_berry_bush_stage_
      model_texture_key: cross
```

You can use `crop_cross` as an alternative model, similar to vanilla `sweet_berries`.

### Custom crops models

{% hint style="warning" %}
DO NOT USE TOO DETAILED MODELS FOR YOUR CROPS, OR YOU WILL GET PERFORMACE ISSUES!

2-4 cubes is more than enough for custom plants.
{% endhint %}

You can use some custom models for your crops.

Instead of using `models_by_textures` you have to use `models_by_items`.

You have to create a single model for each one of your crops stages + billboards.

<details>

<summary>Items creation</summary>

You have to create a single model for each one of your crops stages + billboards.

```yaml
info:
  namespace: my_crops
items:
  blue_crop_stage_template:
    template: true
    graphics:
      parent: minecraft:block/crop
  blue_crop_stage_0:
    variant_of: blue_crop_stage_template
    graphics:
      textures:
        crop: block/blue_crop_stage_0
  blue_crop_stage_1:
    variant_of: blue_crop_stage_template
    graphics:
      textures:
        crop: block/blue_crop_stage_1
  blue_crop_stage_2:
    variant_of: blue_crop_stage_template
    graphics:
      textures:
        crop: block/blue_crop_stage_2
  blue_crop_stage_3:
    variant_of: blue_crop_stage_template
    graphics:
      textures:
        crop: block/blue_crop_stage_3
  blue_crop_stage_4:
    variant_of: blue_crop_stage_template
    graphics:
      textures:
        crop: block/blue_crop_stage_4
  blue_crop_stage_5:
    variant_of: blue_crop_stage_template
    graphics:
      textures:
        crop: block/blue_crop_stage_5
  blue_crop_stage_6:
    variant_of: blue_crop_stage_template
    graphics:
      textures:
        crop: block/blue_crop_stage_6
  blue_crop_stage_7:
    variant_of: blue_crop_stage_template
    graphics:
      textures:
        crop: block/blue_crop_stage_7

  # Billboard model is used when far from crops, to get higher FPS
  blue_crop_stage_template_billboard:
    template: true
    graphics:
      parent: minecraft:block/crop_billboard
  blue_crop_stage_0_billboard:
    variant_of: blue_crop_stage_template_billboard
    graphics:
      textures:
        crop: block/blue_crop_stage_0
  blue_crop_stage_1_billboard:
    variant_of: blue_crop_stage_template_billboard
    graphics:
      textures:
        crop: block/blue_crop_stage_1
  blue_crop_stage_2_billboard:
    variant_of: blue_crop_stage_template_billboard
    graphics:
      textures:
        crop: block/blue_crop_stage_2
  blue_crop_stage_3_billboard:
    variant_of: blue_crop_stage_template_billboard
    graphics:
      textures:
        crop: block/blue_crop_stage_3
  blue_crop_stage_4_billboard:
    variant_of: blue_crop_stage_template_billboard
    graphics:
      textures:
        crop: block/blue_crop_stage_4
  blue_crop_stage_5_billboard:
    variant_of: blue_crop_stage_template_billboard
    graphics:
      textures:
        crop: block/blue_crop_stage_5
  blue_crop_stage_6_billboard:
    variant_of: blue_crop_stage_template_billboard
    graphics:
      textures:
        crop: block/blue_crop_stage_6
  blue_crop_stage_7_billboard:
    variant_of: blue_crop_stage_template_billboard
    graphics:
      textures:
        crop: block/blue_crop_stage_7
```

</details>

`blue_crop_stage_`: is the prefix that will be used to find the items used for the stages and for the billboard.

```yaml
crops:
  blue_crop:
    models_by_items:
      items_id_prefix: blue_crop_stage_
```

## Simple method

{% hint style="info" %}
This method works with any ItemsAdder version.
{% endhint %}

{% hint style="info" %}
This method is limited and doesn't allow creating custom modelled crops.\
It's a lightweight method to add some simple crops into the game.

To show custom crops you can decide a vanilla model to be re-used, for example `SWEET_BERRY_BUSH`, `CARROTS` etc.
{% endhint %}

```yaml
info:
  namespace: iasurvival
items:
  tomato_seeds:
    enabled: true
    display_name: display-name-tomato_seeds
    permission: iasurvival.crops.tomato_seeds
    resource:
      material: WHEAT_SEEDS
      generate: true
      textures:
        - item/crops/tomato_seeds
    specific_properties:
      seed:
        crop_block: SWEET_BERRY_BUSH
        results: 
          result_1: 
            item: iasurvival:tomato
            min_amount: 1
            max_amount: 2
            chance: 100
  garlic_seeds:
    enabled: true
    display_name: display-name-garlic_seeds
    permission: iasurvival.crops.garlic_seeds
    resource:
      material: WHEAT_SEEDS
      generate: true
      textures:
        - item/crops/garlic_seeds
    specific_properties:
      seed:
        crop_block: CARROTS
        results:
          result_1:
            item: iasurvival:garlic
            min_amount: 1
            max_amount: 2
            chance: 100
  chili_pepper_seeds:
    enabled: true
    display_name: display-name-chili_pepper_seeds
    permission: iasurvival.crops.chili_pepper_seeds
    resource:
      material: WHEAT_SEEDS
      generate: true
      textures:
        - item/crops/chili_pepper_seeds
    specific_properties:
      seed:
        crop_block: BEETROOTS
        results:
          result_1:
            item: iasurvival:chili_pepper
            min_amount: 1
            max_amount: 2
            chance: 100
  rice_seeds:
    enabled: true
    display_name: display-name-rice_seeds
    permission: iasurvival.crops.rice_seeds
    resource:
      material: WHEAT_SEEDS
      generate: true
      textures:
        - item/crops/rice_seeds
    specific_properties:
      seed:
        crop_block: WHEAT
        results:
          result_1:
            item: iasurvival:rice
            min_amount: 1
            max_amount: 2
            chance: 100
```
