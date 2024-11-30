# OneDrive

{% hint style="warning" %}
#### 不推荐使用。
{% endhint %}

### 步骤 1

![](<../../.gitbook/assets/image (52) (1) (1) (1) (1).png>)

### 步骤 2

![](<../../.gitbook/assets/image (43) (1) (1).png>)

### 步骤 3

![](<../../.gitbook/assets/image (53) (1) (1).png>)

### 步骤 4

打开 **ItemsAdder** 的 `config.yml` 文件，并为你的新 URL 启用 `external-host` 选项。

{% code title="config.yml" %}
```yaml
    external-host:
      enabled: true
      url: 'https://onedrive.live.com/yoururl.....'
      skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```
{% endcode %}

这非常重要。将其设置为 true。

```yaml
skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```

{% hint style="warning" %}
请记住，这有点“冒险”，因为服务器无法确保 URL 有效。

如果 URL 无效或 OneDrive 不提供直接下载（有时会发生），这可能会导致您的玩家卡在登录阶段。
{% endhint %}

## 如果需要，继续安装

{% content-ref url="../../first-install.md" %}
[首次安装](../../first-install.md)
{% endcontent-ref %}
