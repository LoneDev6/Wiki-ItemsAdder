# OneDrive

{% hint style="warning" %}
**Not recommended.**
{% endhint %}

### Step 1

![](<../../.gitbook/assets/image (65).png>)

### Step 2

![](<../../.gitbook/assets/image (208).png>)

### Step 3

![](<../../.gitbook/assets/image (116).png>)

### Step 4

Open `config.yml` of **ItemsAdder** and enable the `external-host` option for your new URL.

{% code title="config.yml" %}
```yaml
    external-host:
      enabled: true
      url: 'https://onedrive.live.com/yoururl.....'
      skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```
{% endcode %}

This is very important. Set it to true.

```yaml
skip-url-file-type-check___DONT_ASK_HELP_IF_SET_TRUE: true
```

{% hint style="warning" %}
Keep in mind that it's a bit 'risky', because the server cannot make sure the URL is valid.

This can cause your players to be stuck on login phase if the URL is not valid or if OneDrive doesn't provide the direct download; sometimes it happens.
{% endhint %}

## Continue installation if you need

{% content-ref url="../first-install.md" %}
[first-install.md](../first-install.md)
{% endcontent-ref %}
