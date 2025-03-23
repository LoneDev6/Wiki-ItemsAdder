---
icon: volume-low
---

# Enabling custom block's sounds

{% hint style="warning" %}
You have to run `/iazip` each time you change any of these settings to regenerate the resourcepack.
{% endhint %}

To enable custom blocks sounds you have to enable these options in `config.yml`.

```yaml
  custom_blocks_sounds_patch:
    enabled: true
    step:
      enabled: true
      allow_non_player: true
    other: true
```

### `enabled`

This enables the whole module.

### `step.enabled`

* `true`
  * This option will enable playing the custom `step` sound each time an entity walks on a custom block.\
    \
    Note: it will also replace the vanilla `step` sound of wood and stone in your resourcepack.\
    (This information is useful only for expert users).
* `false`
  * This option won't enable playing the custom step sound when an entity walks on a custom block.\
    \
    Note: it won't replace the vanilla wood and stone sounds in your resourcepack.\
    (This information is useful only for expert users).

### `other.enabled`

* `true`
  * This option will enable playing the custom sounds on various occasions: `break`, `fall`, `hit`, `place`.\
    \
    Note: it will also replace the vanilla `break`, `fall`, `hit`, `place` sounds of wood and stone in your resourcepack.\
    (This information is useful only for expert users).
* `false`
  * This option won't enable playing the custom sounds on various occasions: `break`, `fall`, `hit`, `place`.\
    \
    Note: it won't replace the vanilla wood and stone sounds in your resourcepack.\
    (This information is useful only for expert users).

### `step.allow_non_player`

* `true`
  * This option will enable playing the custom `step` sound for any non-player entity.\
    You should disable this if you are afraid of server performance drops due to the high frequency of which this code is called.\
    The feature was benchmarked and coded with performance in mind but some servers might have paranoid admins, so I coded this option.
* `false`
  * This option won't enable playing the custom `step` sound for any non-player entity.
