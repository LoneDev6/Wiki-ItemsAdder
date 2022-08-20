---
description: Armors not working after using PackSquash
---

# Armors not working PackSquash

## PackSquash

**PackSquash** can cause issues because it compresses files.\
Armors files MUST NOT be compressed in order to work on the game.

Open **PackSquash** configuration and add this:

```ini
['**/*?.{fsh,vsh,glsl}']
minify_shader = false

['**/textures/models/armor/*?.png']
image_data_compression_iterations = 0
skip_alpha_optimizations = true
color_quantization_target = 'none'
```

Thanks to **@Faceguy** for that info!
