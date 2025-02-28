---
icon: trash-can
---

# Removing default stuff

{% hint style="info" %}
You shouldn't have any default asset if you didn't follow the optional steps of the [first install](../../first-install.md) tutorial.
{% endhint %}

Follow this tutorial to keep you only your own items, blocks and other things without any of the ItemsAdder content.

## How to remove default assets

Open `plugins/ItemsAdder/contents/` folder and delete the folders/files you don't need

Run this command: `/iacleancache items`.

Then run `/iazip`.

## Remove internal assets (not recommended)

If you want to COMPLETELY remove any already provided asset you have to disable this setting.

{% code title="config.yml" %}
```yaml
extract_internal_utility_assets: true
```
{% endcode %}

Open `plugins/ItemsAdder/contents/` folder and delete the folders/files you don't need.

Then run `/iazip`.

{% hint style="warning" %}
Do not report visual bugs if you delete internal ItemsAdder assets, some are used by the plugin to show GUIs and other things.
{% endhint %}
