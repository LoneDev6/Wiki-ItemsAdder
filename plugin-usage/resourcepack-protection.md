---
icon: lock-keyhole
description: 如何保护你的资源包。
---

# 资源包保护

{% hint style="danger" %}
## 免责声明

没有完全有效的方式来保护资源包，因为游戏必须能够正确提取资源来显示纹理。

这个功能是预防措施，防止小朋友或其他不怀好意的人偷取你的纹理。\
一些有经验的用户可能可以找到绕过这些保护方法的措施。

ItemsAdder 尽最大努力防止该情况，但仍请记住这并非完全有效。

其他插件也有相同限制，并非 ItemsAdder独有。
{% endhint %}

要借助 ItemsAdder 你可以防止你的资源包被解压、盗窃。你只需要在 `config.yml` 中启用该设置，并再次使用 `/iazip`。

如果你在使用[外部托管](resourcepack-hosting/) (如 [Dropbox](resourcepack-hosting/resourcepack-on-dropbox.md))，不要忘记重新上传资源包并更新 `config.yml`。

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      protection_1: true
      protection_2: true
```
{% endcode %}

#### `protection_1`

使用基础方法保护资源包。

#### `protection_2`

使用另一层保护来保护资源包，防止其他解压资源包的方法。

## 展示

这是一个有趣的梗图，展示了当用户尝试偷取你的数据时看到的东西。但这也是用户将会看到的，一组损坏的文件与文件夹。（但是大陆看不了）

{% embed url="https://youtu.be/MhtEhoOuWV8" %}

## 从 DDoS 攻击中保护自行托管的资源包

{% hint style="warning" %}
仅在 ItemsAdder 4.0.8 生效
{% endhint %}

该功能可以缓解熊孩子等卡服、崩服的尝试。

{% code title="config.yml" %}
```yaml
self-host:
  enabled: false
  server-ip: '127.0.0.1'
  pack-port: 8163
  append-port: true
  protection:
    block_non_game_requests: false
    rate_limit:
      enabled: true
      max_requests: 3
      period_seconds: 2
      cooldown:
        enabled: true
        duration_minutes: 30
        trigger_on_failed_times: 5
```
{% endcode %}

#### `protection`

该部分包含用于阻止滥用与未验证请求的安全设置。

***

#### `block_non_game_requests`

**Default:** `false`\
阻止来自于浏览器或自动服务对资源包地址的访问（如用来 DDoS 你服务器的控制台指令）。

***

#### `rate_limit`

该设置帮助阻止可能为自动进行的频繁性请求，如 DDoS 攻击。

**`enabled`**

**Default:** `true`\
决定是否启用请求速率限制。

**`max_requests`**

**Default:** `3`\
在 `period_seconds` 时间范围内允许的最大请求数。

**`period_seconds`**

**Default:** `2`\
以秒计，统计请求次数的时间窗口。如果一个客户端超出了 `max_requests` 的限制，则将其记为**失败的请求**。

***

#### `cooldown`

该部分控制忽视多次未通过请求速率检查的客户端再次进行请求的时间。

**示例：**\
如果一个用户在**两秒内发送超过三次请求**，并且重复该行为**五次**，那么未来**半小时**内，该用户的所有请求都会被阻止。

**`enabled`**

**Default:** `true`\
决定是否暂时忽略超出请求限制的客户端。

**`duration_minutes`**

**Default:** `30`\
以分钟计，客户端超出 `trigger_on_failed_times` 限制后，忽略客户端请求的时间。

**`trigger_on_failed_times`**

**Default:** `5`\
在忽视客户端请求前，客户端能够触发超出请求频率限制的次数。