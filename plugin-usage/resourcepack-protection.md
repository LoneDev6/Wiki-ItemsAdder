---
icon: lock-keyhole
description: How to protect your resourcepack
---

# Resourcepack Protection

{% hint style="danger" %}
## Disclaimer

There is no 100% effective way to protect resourcepack because the game must need to be able to extract it correctly to show textures.

This feature is a mitigation to avoid kids and trolls to steal your texture.\
Some experienced users might be able to find a way to bypass these protections.

ItemsAdder does its best to prevent this, but keep that eventuality in mind.

Every other plugin has the same limitations. It's not a limitation of ItemsAdder.
{% endhint %}

You can protect your resourcepack from unzip and thieves by setting this option in `config.yml` and using `/iazip` again.

If you're using an [external host](resourcepack-hosting/) (like [Dropbox](resourcepack-hosting/resourcepack-on-dropbox.md)) don't forget to reupload the pack and update the `config.yml`.

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      protection_1: true
      protection_2: true
```
{% endcode %}

#### `protection_1`

Protect the resourcepack with a basic method.

#### `protection_2`

Protect the pack with another layer of protection to block some other methods to unzip the pack.

## Showcase

This is a funny meme showcase of what the user will see when they try to steal your data. But this is actually what the user will see, a group of corrupted files and folders.

{% embed url="https://youtu.be/MhtEhoOuWV8" %}

## Protect self-host resourcepack from DDoS attacks

{% hint style="warning" %}
Available only on ItemsAdder 4.0.8
{% endhint %}

This feature is a mitigation to avoid kids and trolls to try to slowdown your server.

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

This section contains security settings to prevent abuse and unauthorized requests.

***

#### `block_non_game_requests`

**Default:** `false`\
Blocks requests made by visiting the resource pack URL from a browser or an automated service (for example, a console command used to DDoS your server).

***

#### `rate_limit`

This setting helps prevent frequent requests that are likely automated, such as a DDoS attack.

**`enabled`**

**Default:** `true`\
Determines whether request rate limiting is active.

**`max_requests`**

**Default:** `3`\
The maximum number of allowed requests within the `period_seconds` timeframe before triggering restrictions.

**`period_seconds`**

**Default:** `2`\
The time window (in seconds) in which requests are counted. If a client exceeds `max_requests` within this period, it counts as a **failed attempt**.

***

#### `cooldown`

This section controls how long a client’s requests will be ignored after repeatedly failing the rate limit check.

**Example:**\
If a user sends more than **3 requests within 2 seconds**, and does this **5 times**, their future requests will be blocked for **30 minutes**.

**`enabled`**

**Default:** `true`\
Determines whether clients exceeding the request limit should be temporarily ignored.

**`duration_minutes`**

**Default:** `30`\
The duration (in minutes) for which the client’s requests will be ignored after exceeding the `trigger_on_failed_times` limit.

**`trigger_on_failed_times`**

**Default:** `5`\
The number of times a client can exceed the request limit within a short period before triggering the cooldown.
