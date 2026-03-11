---
icon: merge
description: Merge other resourcepacks (also custom plugins resourcepacks)
---

# Merge Resourcepacks

**Minecraft before 1.20.3** supports **only 1 server resourcepack**.

**Minecraft 1.20.4** and greater support for multiple resource packs, but this new feature is flawed because **custom model data won't be merged**.\
**If** you have more than one resourcepack you need to merge them.

## How to merge?

### Step 1

Copy the `assets` folder of your resourcepack.

### Step 2

Paste the `assets` folder of your resourcepack inside a new `contents` sub-folder.\
For example `merged_pack_1`: `ItemsAdder/contents/merged_pack_1/resourcepack/`

### Step 3

Use the `/iazip` command to compress the ItemsAdder resourcepack.\
(Make sure to follow the correct [hosting tutorial](resourcepack-hosting/) based on the hosting method you decided).

### Step 4 (advanced users)

If you are merging more than 1 pack you might need to decide a merge priority.\
Open config.yml and write the load priority order of your `contents` sub-folders folders.

{% code title="config.yml" %}
```yaml
    contents-folders-priorities:
      - vanilla
      - _iainternal
      - merged_pack_1
      - merged_pack_2
      - merged_pack_3
      # ... other packs here of which you want to change load order.
```
{% endcode %}

## Examples

{% content-ref url="../compatibility-with-other-plugins/compatible/modelengine.md" %}
[modelengine.md](../compatibility-with-other-plugins/compatible/modelengine.md)
{% endcontent-ref %}

{% content-ref url="../compatibility-with-other-plugins/compatible/nova.md" %}
[nova.md](../compatibility-with-other-plugins/compatible/nova.md)
{% endcontent-ref %}

{% content-ref url="../compatibility-with-other-plugins/compatible/space.md" %}
[space.md](../compatibility-with-other-plugins/compatible/space.md)
{% endcontent-ref %}
