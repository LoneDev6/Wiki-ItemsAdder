# 皮革盔甲纹理被覆盖

## 皮革层不断被 ItemsAdder 覆盖

![](<../../.gitbook/assets/image (45) (1) (1).png>)

ItemsAdder 会自动覆盖皮革层纹理以创建自定义盔甲。\
自定义盔甲是使用彩色皮革创建的，但默认的 Minecraft 皮革盔甲纹理看起来不像矿物质纹理。

在某些服务器中，您可能根本不需要此功能，并且您可能更喜欢使用原版的皮革盔甲层纹理，或者使用您自己的自定义纹理。

## 如何禁用此功能？

{% hint style="warning" %}
这需要 ItemsAdder 2.5.2 及以上版本
{% endhint %}

要禁用此功能，您只需在 ItemsAdder 的 config.yml 中设置此选项，然后再次运行 `/iazip`（如果需要，请[托管资源包](../../plugin-usage/resourcepack-hosting/)）。

{% code title="config.yml" %}
```yaml
disable-overwrite-leather-armor-layers-textures: true
```
{% endcode %}
