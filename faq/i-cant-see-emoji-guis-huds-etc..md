---
icon: eye-slash
---

# 我看不到表情符号、GUI、HUD等

## ItemsAdder 3.4.1及以上版本

* 打开**ItemsAdder**的`config.yml`
* 启用此选项：

    ```yaml
    fix_force_unicode_font_images: true
    ```
* 运行`/iazip`重新生成你的资源包
* 按照插件安装期间选择的[资源包托管方法教程](../plugin-usage/resourcepack-hosting/)

## ItemsAdder 3.4.0及以下版本

如果你将**强制Unicode**设置为**开启**，因为你不喜欢Minecraft默认字体，你将看不到表情符号、自定义GUI和HUD。

通常在Minecraft中，你将**强制Unicode字体：开启**以获得 _“细字体”_。

![](../.gitbook/assets/image\_\(5\).png)

由于 **ItemsAdder** 的原因，这是不可能的，因为这会导致表情符号、GUI、HUD 无法正常工作。这是 Minecraft 的限制。

{% hint style="warning" %}
你必须设置**强制Unicode字体：关闭**
{% endhint %}

![](../.gitbook/assets/image\_\(6\).png)

并在`config.yml`中**设置此项**

```yaml
  thin-font:
    enabled: true
```

这允许你设置**强制Unicode字体：关闭**，但仍然启用细字体。

{% hint style="warning" %}
记住，做出此更改后，你必须重新生成你的`generated.zip`文件。\
查看[资源包教程](../plugin-usage/resourcepack-hosting/)
{% endhint %}

### 这是结果

![](../.gitbook/assets/image\_\(7\).png)

{% hint style="success" %}
现在你可以看到“细字体”，并且GUI、表情符号、HUD 不会破裂（错误的白色方块）
{% endhint %}
