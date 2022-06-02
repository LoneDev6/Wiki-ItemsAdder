---
description: ItemsAdder before 3.2.0
---

# 🗑 Old ItemsAdder

{% hint style="warning" %}
Read here only if you're using ItemsAdder old resourcepack.\
You can ignore this if you just bought the plugin at or after v3.2.0.
{% endhint %}

## How can I remove all the items and default stuff?

{% hint style="info" %}
If you don't care about my default stuff and you only want to make your own items, blocks and other things it's easy!\
Follow this tutorial.
{% endhint %}

### 1. Config.yml

Open plugin `config.yml` file and set this to **false**.

```yaml
  extract-default-items: false
  extract-default-resources: false
```

### 2. Delete the folders you don't need. Select from this list.

#### Twitter emojis

`plugins\ItemsAdder\data\items_packs\twitteremojis`\
`plugins\ItemsAdder\data\resource_pack\assets\twitteremojis`

#### Magic craft example

`plugins\ItemsAdder\data\items_packs\magiccraft`\
`plugins\ItemsAdder\data\resource_pack\assets\magiccraft`

#### Minecraft Emojis

`plugins\ItemsAdder\data\items_packs\mcemojis`\
`plugins\ItemsAdder\data\resource_pack\assets\mcemojis`

#### ItemsAdder items

`plugins\ItemsAdder\data\items_packs\itemsadder`\
`plugins\ItemsAdder\data\resource_pack\assets\itemsadder`

#### &#x20;Example items

`plugins\ItemsAdder\data\items_packs\example`\
`plugins\ItemsAdder\data\resource_pack\assets\example`

### 3. Finalizing the changes

Run this command: `/iacleancache items`

Delete these folders:\
`ItemsAdder\storage\cache\tmp\` `ItemsAdder\data\resource_pack\assets\minecraft\models\item\` `ItemsAdder\data\resource_pack\assets\minecraft\blockstates\`

Then run `/iazip`

{% hint style="danger" %}
## Do not delete other folders which are not listed in the previous list.

If you delete minecraft, mcguis or mcicons folders some parts of the plugin may stop working.
{% endhint %}

