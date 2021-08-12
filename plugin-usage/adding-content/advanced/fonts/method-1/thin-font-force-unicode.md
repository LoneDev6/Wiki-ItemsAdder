# Font \(force unicode\)

## 细形字体样式

在Minecraft里,你只要设置**Force Unicode Font: ON**就能看到_"thin font[瘦体字]"_.

![](../../../../../.gitbook/assets/immagine%20%284%29.png)

当然会影响到**ItemsAdder**,因为它将会使表情符号、GUI、HUDs无法显示.这是一个Minecraft的bug.

{% hint style="warning" %}
你必须设置为**强制Unicode Font:OFF**
{% endhint %}

![](../../../../../.gitbook/assets/immagine%20%283%29.png)

并且在`config.yml`**设置如下属性**

```yaml
  thin-font:
    enabled: true
```

这允许你设置**强制Unicode字体: OFF**,但仍能用细字体.

{% hint style="warning" %}
记住,修改之后,你必须重新生成你的pack.zip 
检查[资源包教程](../../../../resourcepack-hosting/)
{% endhint %}

### 结果

![](../../../../../.gitbook/assets/immagine%20%286%29.png)

{% hint style="success" %}
现在你可以看到"thin font[瘦体字]"和GUIs, emojis, HUDs不会有问题\(bugged white squares\)
{% endhint %}

