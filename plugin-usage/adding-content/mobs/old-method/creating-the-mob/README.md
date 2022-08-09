---
description: How to create configuration and 3D models for your mob
---

# Creating the mob

{% page-ref page="configuration.md" %}

{% page-ref page="3d-model.md" %}

{% hint style="info" %}
This is the old method for adding entities, I recommend you to take a look at the [New advanced method to create custom mobs/entities.
](https://itemsadder.devs.beer/plugin-usage/adding-content/mobs/advanced-method)
{% endhint %}

{% hint style="warning" %}
Please Make Sure that you have [Lib's Disguises](https://www.spigotmc.org/resources/libs-disguises-free.81/) on your server
{% endhint %}

## Final result

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
        lock_head_rotation:
          y: 0
        animation:
          attack: soul_attack
          walk: soul_walking
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

![](../../../../../.gitbook/assets/image%20%2816%29.png)

