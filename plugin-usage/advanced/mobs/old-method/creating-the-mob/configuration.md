# Configuration

## Creating your fist mob

### yml configuration

You have to create a .yml file in your [namespace ](../../../basic-concepts/namespace/)folder (check [other tutorials ](../../../basic-concepts/namespace/creating-your-namespace.md)for more info).

{% hint style="info" %}
Consider using the[ official online tool](../../../../../files-editor.md) to edit ItemsAdder files. \
It makes you life easier as it has autocomplete (press CRTL+SPACE) which helps you on avoiding mistakes.
{% endhint %}

This is an example for a custom mob named **Soul**.\
As you can see I set it up like a normal item, but with a special [behaviour ](../../../item-properties/behaviours.md)named **mob**.

```yaml
info:
  namespace: creaturesplus
items:
  soul:
    display_name: Soul
    permission: creaturesplus
    click_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/soul"
    behaviours:
      mob:
        ai: HUSK
        hit_color: ff7e7e
        max_health: 40
        y_offset: 0
        lock_head_rotation:
          y: 0
        animation:
          attack: soul_attack
          walk: soul_walking
```

The mob will have **head rotation locked** (only on Y axis), this will avoid it from looking stupid while looking at player when is at an higher position.

`hit_color` is the color the mob will have when damaged by player. \
You can get a valid color from these websites:\
[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Color.html)\
[https://minecraftcommand.science/armor-color](https://minecraftcommand.science/armor-color)\
[https://misode.github.io/worldgen/biome/](https://misode.github.io/worldgen/biome/) (use one of the color pickers and copy the value from the right)

{% hint style="info" %}
Note: I **skipped** the `material` property of `resource` because **it's not needed** for **mobs**, ItemsAdder will automatically handle it.
{% endhint %}

### Animations

You probably noticed that there are two other attributes: `attack` and `walk` **animations**.\
The **mob\_animation** behaviour tells ItemsAdder that the item is a mob animation.\
These are infact other items you have to create like this:

```yaml
  soul_walking:
    display_name: soul_walking
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/walking"
    behaviours:
      mob_animation: true
  soul_attack:
    display_name: soul_attack
    permission: creaturesplus
    show_in_ia_gui: false
    resource:
      generate: false
      model_path: "mob/soul/attack"
    behaviours:
      mob_animation: true
```
