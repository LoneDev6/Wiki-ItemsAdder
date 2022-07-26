# OneDrive

{% hint style="warning" %}
## 不建议使用
{% endhint %}

### 步骤 1

![](<../../.gitbook/assets/image (52) (1) (1) (1) (1).png>)

### 步骤 2

![](<../../.gitbook/assets/image (43) (1) (1).png>)

### 步骤 3

![](<../../.gitbook/assets/image (53) (1) (1).png>)

### 步骤 4

打开 **ItemsAdder** 的 `config.yml` 将 url 填写至 external-host 属性中，记得将 external-host 设置为 `enabled: true`

{% code title="config.yml" %}
```yaml
    external-host:
      enabled: true
      url: 'https://onedrive.live.com/yoururl.....'
      skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```
{% endcode %}

此步骤非常重要，请将该属性设置为 `true`

```yaml
skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```

{% hint style="warning" %}
有时候资源包链接会失效，当链接失效或 Onedrive 不提供直连链接，将会导致玩家卡在登录阶段，无法应用资源包
{% endhint %}
