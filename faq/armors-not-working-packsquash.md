---
description: 使用 PackSquash 后盔甲不起作用
---

# 使用 PackSquash 后盔甲不起作用

## PackSquash

**PackSquash** 可能会导致问题，因为它会压缩文件。\
盔甲文件必须不被压缩才能在游戏中正常工作。

打开 **PackSquash** 配置并添加以下内容：

```ini
['**/*?.{fsh,vsh,glsl}']
minify_shader = false

['**/textures/models/armor/*?.png']
image_data_compression_iterations = 0
skip_alpha_optimizations = true
color_quantization_target = 'none'
```

感谢 **@Faceguy** 提供此信息！
