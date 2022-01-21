# I can't unzip the pack.zip file

Disable the protection option.

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      enabled: false
      extreme: false
```
{% endcode %}

{% hint style="danger" %}
This is the option to protect the zip file from unzip.\
Be careful when disabling it, everyone can unzip your file if you don't protect it.
{% endhint %}
