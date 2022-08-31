---
描述： 使用 PackSquash 后自定义盔甲无法正常显示
---

# 使用 PackSquash 后自定义盔甲无法正常显示

## PackSquash

**PackSquash** 使用时会压缩盔甲贴图文件.\
被压缩的盔甲文件不会被Minecraft识别,导致无法正常显示

你只需要打开 **PackSquash** 配置文件并添加下列属性：

```ini
['**/*?.{fsh,vsh,glsl}']
minify_shader = false

['**/textures/models/armor/*?.png']
image_data_compression_iterations = 0
skip_alpha_optimizations = true
color_quantization_target = 'none'
```

感谢 **@Faceguy** 提供的帮助！
