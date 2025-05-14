# Armors shown in wrong position on screen

Armors and other entities shown on the wrong location on screen.\
This happens only on 1.21.5.

{% hint style="info" %}
This is a know issue due to a AMD GPU bug.
{% endhint %}

## Possible solutions

* The only solution for now is to disable the armors shader `1_21_5_plus_armors_shaders` in `config.yml`.
* Update your AMD drivers to the latest, there might be a recent fix for that issue.
* Use an unofficial Minecraft launcher. The official launcher is known to cause issues.

```yaml
    custom_armors_shaders_legacy:
      vanilla:
        generate_shader:
          1_21_4_lower: true # you can leave it true to support old clients
          1_21_5_plus: false # here, set to false
```

<figure><img src="../.gitbook/assets/image (248).png" alt=""><figcaption></figcaption></figure>
