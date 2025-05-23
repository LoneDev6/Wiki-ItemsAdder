---
icon: file-zip
---

# Can't extract the resourcepack file

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

## Read compressed resourcepack

If you need to get the content of the resourcepack without extracting it, for example for debug purposes, you can use the `/iazip --uncompressed --apply-to none`. This command will create a new folder `output_uncompressed` in your ItemsAdder folder. Here you can access all the files and do your checks.
