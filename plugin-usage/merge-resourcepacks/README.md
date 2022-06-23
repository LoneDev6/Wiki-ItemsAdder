---
description: Merge other resourcepacks (also custom plugins resourcepacks)
---

# 🗃 Merge resourcepacks

## Why merging?

**Minecraft** supports **only 1 server resourcepack**, so if you have more than one resourcepack you need to merge them.

## How to merge?

### Step 1

Copy the `assets` folder of your resourcepack.

### Step 2

Paste the `assets` folder of your resourcepack inside the **ItemsAdder** folder: `plugins\ItemsAdder\data\resource_pack\`

### Step 3

Open `config.yml` of **ItemsAdder** and set this option:

```yaml
overwrite-vanilla-models: false
```

### Step 4

Use the `/iazip` command to compress the ItemsAdder resourcepack.\
(Make sure to follow the correct [hosting tutorial](../resourcepack-hosting/) based on the hosting method you decided)

### Done.

## Examples

{% content-ref url="../../compatibility-with-other-plugins/compatible/modelengine.md" %}
[modelengine.md](../../compatibility-with-other-plugins/compatible/modelengine.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/nova.md" %}
[nova.md](../../compatibility-with-other-plugins/compatible/nova.md)
{% endcontent-ref %}

{% content-ref url="../../compatibility-with-other-plugins/compatible/space.md" %}
[space.md](../../compatibility-with-other-plugins/compatible/space.md)
{% endcontent-ref %}
