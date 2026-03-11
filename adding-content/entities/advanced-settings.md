---
icon: sliders-up
---

# Advanced Settings

In `config.yml` you can find some advanced settings about custom entities.

```yaml
entities:
  max-furniture-vehicles-per-chunk: 30
  max_furniture_per_chunk: 20
  custom_entities:
    enabled: true
    emotes: true
    max_per_chunk: 5
    expert_users:
      delay_packets: false
      extract_emotes_shaders: true
  furniture:
    auto_convert_to_item_display: false
```

### `delay_packets`

This option delays the sending of packets to lower down the CPU processing, but creates stuttering animations on some servers.

This is not something you should enable without knowing the side effects.

`max_per_chunk`

Max possible entities per chunk.

`emotes`

Disable or enable emotes. Requires `/iazip` to remove the data from the resourcepack.

`extract_emotes_shaders`

Decide if you want to include the emotes shaders. Disable this if you want to work on your own shaders (shouldn't really be used by novice users).

