# 无法解压 pack.zip 资源包

在设置中关闭资源包保护

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      enabled: false
      extreme: false
```
{% endcode %}

{% hint style="danger" %}
这是保护 zip 文件免于解压缩的选项
该属性能够防止资源包被解压，防止别人窃取你的劳动成果.\
<br>请慎重关闭该属性，关闭后资源包将不受防解压保护.
{% endhint %}
