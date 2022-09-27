# Iris

## [Download here](https://www.spigotmc.org/resources/iris-world-gen-custom-biome-colors.84586/)

## Enabling compatibility

### Step 1

Install [ItemsAdderBlocksInjector](https://www.spigotmc.org/resources/itemsadderblocksinjector.102078/) and <mark style="color:red;">don't remove it after installation!</mark>

### Step 2

Create your Iris world (follow their guides) and use your ItemsAdder custom blocks IDs as you would do with vanilla blocks.

\
For example open this file of the `overworld` pack: `plugins\Iris\packs\overworld\biomes\mountain\mountain.json`

Then edit the layers settings to use a custom block, in this example the custom **Amethyst Block**:

```json
"layers": [
    {
        "minHeight": 1,
        "maxPerChunk": 21,
        "maxHeight": 80,
        "minPerChunk": 7,
        "minSize": 3,
        "maxSize": 7,
        "palette": [{ "block": "iasurvival:cassiterite_ore" }],
        "varience": 7
    },
```

This will generate a similar result:

![](<../../.gitbook/assets/image (49).png>)

![](<../../.gitbook/assets/image (96).png>)

## Compatibility issues

* FastAsyncWorldEdit will stop working, there is nothing I can do about that.
* WorldEdit `//undo` and `//copy` won't work with the custom blocks placed by `Iris`, they would be reverted back to `NOTE_BLOCK` (or `mushroom`, `TRIPWIRE`, `CHORUS_PLANT`)
