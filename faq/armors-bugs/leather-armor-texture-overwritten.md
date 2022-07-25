# Leather armor（皮革盔甲） 材质被覆盖

## 皮革盔甲的表面材质被覆盖

![](<../../.gitbook/assets/image (45) (1) (1).png>)

Itemsadder 会自动覆盖皮革的原版材质来创建自定义盔甲，自定义盔甲是通过染色的皮革来实现的.
通过染色的皮革来创建
Custom armors are created using colored leather, but the default Minecraft leather armor texture doesn't look like a texture made of minerals.
In some servers you might not need this feature at all and you could prefer to have the vanilla leather armor layers texture instead, or use your own custom one.
在某些服务器中可能不需要该功能
## 如何关闭该功能

{% hint style="warning" %}
版本需求：
ItemsAdder 2.5.2+
{% endhint %}

在 config.yml 文件中设置下列属性，再使用指令 `/iazip` 生成资源包上传至云端即可 

{% code title="config.yml" %}
```yaml
disable-overwrite-leather-armor-layers-textures: true
```
{% endcode %}
