---
description: Glitched blocks in some areas/custom worlds
icon: block-question
---

# Glitched blocks

{% hint style="success" %}
These are all only graphical glitches, they won't cause duplication bugs or similar.
{% endhint %}

## `REAL_NOTE` (Noteblocks)

Noteblocks placed before ItemsAdder installation may be shown with custom blocks textures.

### How to fix

{% code title="config.yml" %}
```yaml
blocks:
  fix-glitched-blocks:
    enabled: true
    only-new-chunks: false
```
{% endcode %}

## `REAL` and `REAL_TRANSPARENT` (Mushroom and Chorus)

This is normal if you use `REAL` , `REAL_TRANSPARENT` types to create custom blocks.\
ItemsAdder uses Mushroom Blocks and Chorus Plants to create them.

This happens because the game generates them during gameplay to create some structures (example: big mushrooms in the over-world and chorus plants in the end), so they might spawn with some specific block data, which interfere with ItemsAdder blocks.

![](<../.gitbook/assets/image (50).png>)

Generally you should avoid using `REAL` custom blocks type (mushroom) and use the better `REAL_NOTE` custom blocks type, it uses **Noteblocks** to create custom blocks, so you won't have this issue because they don't naturally generate around the vanilla world.

### How to fix

{% code title="config.yml" %}
```yaml
  fix-glitched-blocks:
    enabled: true
    only-new-chunks: false
```
{% endcode %}

### Advanced fix on Paper

{% code title="config/paper-global.yml" %}
```yaml
block-updates:
  disable-noteblock-updates: true
  disable-tripwire-updates: true
```
{% endcode %}

{% hint style="warning" %}
#### Note

Setting `disable-tripwire-updates: true` will completely stop tripwire from updating.\
So it can potentially cause tripwires traps to not work anymore.\\

Setting `disable-noteblock-updates: true` will commit into same behaviour.\
Which means NO UPDATES. So you will be unable to do music redstone circuit.
{% endhint %}

## `REAL_TRANSPARENT` (Chorus)

### Blocks breaking animation bug

This is only a graphical glitch and cannot be fixed in **Spigot**.\
If you want to completely fix it you have to install **Paper**.

{% embed url="https://youtu.be/1HPjKn_vmw8" %}

#### How to fix

{% code title="config/paper-global.yml" %}
```yaml
block-updates:
  disable-chorus-plant-updates: true
```
{% endcode %}

### Automatic drop pickup duplication issue

If you have an automatic drops pickup plugin you might experience an issue where chorus fruit gets randomly added to your inventory when this kind of Chorus Plant graphical glitches happen.

To fix this you have to remove the automatic drop pickup plugin or ask its developer to add an option to disable automatic pickup of some items (Chorus Fruit) or from some blocks (Chorus Plant).

## **Tree blocks sometimes disappear and become air blocks**

This is a know issue in CREATIVE mode as the client doesn't send some packets to the server.\
Please try in survival mode.

## **`REAL_TRANSPARENT` blocks are dropped when water flows on them**

I know this bug and I can't fix it without making your server an oven.\
\
As you already know some Minecraft features are not customizable out of the box for both you and the plugins developers, so some features require a lot of hacks to be implemented and sometimes are not totally stable. One of these features are custom blocks.

To fix this water bug I'd have to listen to the water flowing event and check if every block around the water is a custom block. This event is called thousand of times in mid-sized server and I don't want to make the plugin heavy, which would cause lag.
