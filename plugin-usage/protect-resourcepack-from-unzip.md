# 保护材质包不被解压

{% hint style="info" %}
通过ItemsAdder的一系列措施.它可以保护你的资源包不被解压和盗取  
你只需在config.yml中打开这个选项,并再次使用/iazip指令.  
如果你使用的是Dropbox的话,别忘了重新上传材质包并更新config.yml的内容

像这样去设置:

```yaml
zip:
  protect-file-from-unzip__DISABLE_IF_ANY_PROBLEM: true
```
{% endhint %}

这是一个有趣的功能,当玩家试图窃取你的数据时,他们会看到什么呢?实际上玩家看到的,是一组损坏的文件和文件夹!

{% embed url="https://youtu.be/MhtEhoOuWV8" caption="" %}

