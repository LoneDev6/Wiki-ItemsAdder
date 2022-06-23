---
description: How to protect your resourcepack from thief
---

# 🚨 Protect resourcepack from unzip

{% hint style="info" %}
With ItemsAdder you can protect your resourcepack from unzip and thieves.\
You just have to set this option in config.yml and use /iazip again.\
If you're using Dropbox don't forget to reupload the pack and update the config.yml

{% code title="config.yml" %}
```yaml
  zip:
    protect-file-from-unzip:
      enabled: true
      extreme: true
```
{% endcode %}
{% endhint %}

### enabled

The `enabled` property allows you to protect the resourcepack with a basic method.

### extreme

The `extreme` property allows you to protect the pack with another layer of protection to block some other methods to unzip the pack.

## Showcase

This is a funny meme showcase of what the user will see when they try to steal your data. But this is actually what the user will see, a group of corrupted files and folders.

{% embed url="https://youtu.be/MhtEhoOuWV8" %}

{% hint style="warning" %}
There is no 100% effective way to protect resourcepack because the game must need to be able to extract it correctly to show textures.

This feature is a mitigation to avoid kids and trolls to steal your texture.\
Some experienced users might be able to find a way to bypass these protections.

ItemsAdder does its best to prevent this, but keep that eventuality in mind.
{% endhint %}

