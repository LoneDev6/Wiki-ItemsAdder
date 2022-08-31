# Leather armor（皮革盔甲） 材质被覆盖

## 皮革盔甲的表面材质被覆盖

![](<../../.gitbook/assets/image (45) (1) (1).png>)

Itemsadder 会自动覆盖皮革的原版材质来创建自定义盔甲，自定义盔甲是通过染色的皮革来实现的.然而默认的皮革盔甲看上去不像任何一种矿物做成的.
某些服务器里你可能根本不需要这个特性，并且你可能会想要使用原版的皮革材质或是自己的自定义材质
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
