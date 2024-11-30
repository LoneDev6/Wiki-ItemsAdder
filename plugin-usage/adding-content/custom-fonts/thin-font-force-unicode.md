# 细字体（强制使用 Unicode）

## 细字体

通常在 Minecraft 中，你可以设置 **强制使用 Unicode 字体：开启** 来获得 _“细字体”_。

![](../../../.gitbook/assets/immagine%20%284%29.png)

  
使用 **ItemsAdder** 时，这是不可能的，因为这会导致表情符号、GUI、HUD 无法正常工作。这是 Minecraft 的一个 bug。

{% hint style="warning" %}
你必须设置 **强制使用 Unicode 字体：关闭**
{% endhint %}

![](../../../.gitbook/assets/immagine%20%283%29.png)

并在 `config.yml` 中设置如下内容

```yaml
  thin-font:
    enabled: true
```

这允许你设置 **强制使用 Unicode 字体：关闭**，但仍然启用细字体。

{% hint style="warning" %}
请记住，在此更改之后，你必须重新生成 `generated.zip` 文件。
查看 [资源包教程](../../resourcepack-hosting/)
{% endhint %}

### 这是结果

![](../../../.gitbook/assets/immagine%20%286%29.png)

{% hint style="success" %}
现在你可以看到“细字体”，并且 GUI、表情符号、HUD 不会破坏（错误的白色方块）
{% endhint %}

