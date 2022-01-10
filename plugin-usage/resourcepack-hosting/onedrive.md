# 1⃣ 1⃣ OneDrive

{% hint style="warning" %}
Not recommended.
{% endhint %}

### Step 1

![](<../../.gitbook/assets/image (52) (1).png>)

### Step 2

![](<../../.gitbook/assets/image (43).png>)

### Step 3

![](<../../.gitbook/assets/image (53) (1).png>)

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
Keep in mind that it's a bit "risky" because the server cannot make sure the URL is valid.

This can cause your players to be stuck on login phase if the URL is not valid or if OneDrive doesn't provide the direct download, sometimes it happens.
{% endhint %}
