# 细体字 \(force unicode\)

## 细体字

通常你需要设置 **强制 Unicode 字体: ON** 才能使用  _"细体字"_.

![](../../../.gitbook/assets/immagine%20%284%29.png)

但如果设置为  **强制 Unicode 字体: ON** ，Itemsadder 的很多自定义功能将无法正常使用（例如：表情符号 , GUIs, HUDs）


{% hint style="warning" %}
以至于你必须在客户端中设置 **强制 Unicode 字体: OFF**
{% endhint %}

![](../../../.gitbook/assets/immagine%20%283%29.png)

不过现在，itemsadder 有了修复方法，
你只需要在 `config.yml` 中 **设置** 下列属性：

```yaml
  thin-font:
    enabled: true
```

该设置允许当设置为 **强制 Unicode 字体: OFF** 时仍启用细体字

{% hint style="warning" %}  
记得在更改后，重新生成资源包
并[参阅该教程](../../resourcepack-hosting/)
{% endhint %}

### 最终效果

![](../../../.gitbook/assets/immagine%20%286%29.png)

{% hint style="success" %}
现在，客户端显示的字体为 `细体字`，并且不会影响到  表情符号 , GUIs, HUDs 这些内容 \(比如：无法正常显示\)
{% endhint %}

