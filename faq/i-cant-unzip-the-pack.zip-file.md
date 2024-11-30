---
icon: file-zip
---

# 我无法解压缩包文件

禁用保护选项。

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      enabled: false
      extreme: false
```
{% endcode %}

{% hint style="danger" %}
这是保护zip文件不被解压的选项。\
禁用它时要小心，如果不启用保护，任何人都可以解压你的文件。
{% endhint %}
