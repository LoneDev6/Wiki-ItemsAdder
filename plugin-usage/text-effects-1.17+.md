---
description: Special text animations and coloring effects
icon: italic
---

# Text Effects

{% hint style="warning" %}
* **Requires Minecraft 1.17+ clients**
* Doesn't work in [Minecraft language files](/broken/pages/-MT1a_gTKtJE5YCsGgBM) (game limitation)
* Edits the `rendertype_text` shader files
{% endhint %}

## What are text effects?

They are some cool decorative text effects you can use in your server to make it more professional.

### How to enable them

{% hint style="warning" %}
You have to run `/iazip` in order to enable/disable this feature.\
Make sure also to enable it in the `config.yml`.
{% endhint %}

{% code title="config.yml" %}
```yaml
text_effects:
  enabled: true
  chat:
    enabled: true
  customitem_name_and_lore:
    enabled: true
  sign:
    enabled: true
  book:
    enabled: true
  anvil:
    enabled: true
```
{% endcode %}

<details>

<summary>(click to see old <code>config.yml</code> properties from 4.0.7 and lower)</summary>

```yaml
effects:
  text-effects:
    enabled: true # This option requires /iazip when changed.
    customitem-name-and-lore:
      enabled: true
    chat:
      enabled: true
    sign:
      enabled: true
    book:
      enabled: true
    anvil:
      enabled: true
```

</details>

You also have to give the permissions to each player.

* Use **text-effects** in **chat**
  * `ia.user.text_effect.chat`
* Use **text-effects** in **signs**
  * `ia.user.text_effect.sign`
* Use **text-effects** in **books**
  * `ia.user.text_effect.book`
* Use **text-effects** in **anvil** rename field
  * `ia.user.text_effect.anvil`
* Use a **text-effect**
  * `ia.user.text_effect.use.<effect>`

## List of effects

Remove background

<figure><img src="../.gitbook/assets/image (30).png" alt=""><figcaption></figcaption></figure>

Permission: `ia.user.text_effect.use.noshadow`\
Usage: `<noshadow text>`

{% hint style="info" %}
### Note

in Minecraft **1.21.4** you can use `"shadow_color":0` attribute in JSON components to hide the shadow. But this requires you to have knowledge about JSON components.
{% endhint %}

### Rainbow

![](../.gitbook/assets/rainbow.gif)

![](<../.gitbook/assets/immagine (4).png>)

![](<../.gitbook/assets/immagine (14).png>)

![](../.gitbook/assets/rainbow_item.gif)

Permission: `ia.user.text_effect.use.r`\
Usage: `<r text>`

### Wobble

![](../.gitbook/assets/wobble.gif)

![](../.gitbook/assets/wobble_item.gif)

Permission: `ia.user.text_effect.use.w`\
Usage: `<w text>`

### Jump

![](../.gitbook/assets/jump_chat.gif)

![](../.gitbook/assets/jump.gif)

![](../.gitbook/assets/jump_boss.gif)

Permission: `ia.user.text_effect.use.j`\
Usage: `<j text>`

### Rainbow + Wobble

![](../.gitbook/assets/rw_chat.gif)

Permission: `ia.user.text_effect.use.rw`\
Usage: `<rw text>`

### Rainbow + Jump

![](../.gitbook/assets/rj.gif)

Permission: `ia.user.text_effect.use.rj`\
Usage: `<rj text>`

### Blinking

<figure><img src="../.gitbook/assets/blinking.webp" alt=""><figcaption></figcaption></figure>

Permission: `ia.user.text_effect.use.b`\
Usage: `<b text>`

## Where can I use these effects?

* Custom item name (in the .yml file)
* Custom item lore (in the .yml file)
* Chat
* Sign
* Book
* Bossbar
* Prefix-Suffix (Luckperms for example)
* _More soon...._

![](../.gitbook/assets/rainbow_wobble_lore.gif)

## How to create animated prefix (Luckperms)

![](<../.gitbook/assets/immagine (53).png>)

`/lp group admin meta setprefix "<rw ADMIN >"`

![](../.gitbook/assets/prefix.gif)

Click here to read[ Luckperms official tutorials](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta) if you don't know how prefix works.

## Using text effects without the placeholders

For some reason if you want to use text effects on areas which don't support ItemsAdder placeholders (like `<r TEXT>`) you can use another method.

These effects are triggered based on a **special HEX color**.\
So if the area where you want to show a text effect supports HEX colors you can do that.

### Special colors

#### No Shadow

`4e5c24`

#### Rainbow

`e6fffe`

#### Wobble

`e6fffa`

#### Rainbow + Wobble

`e6fbfe`

#### Jump

`e6fbfa`

#### Rainbow + Jump

`e6f7fe`

#### Blinking

`e6f7fa`

### Using them in Minecraft vanilla JSON notation

This triggers the rainbow effect:\
`/tellraw @a {"text":"custom text example", "color":"#e6fffe"}`

Replace `e6fffe` with the effect you want.

### Using them in plugins which support _MiniMessage_

{% embed url="https://docs.advntr.dev/minimessage/format.html#color" %}

(for example ItemsAdder itself and [ChatFormatter](https://www.spigotmc.org/resources/102212/))

This triggers the rainbow effect: `<#e6fffe>custom text example`

Replace `e6fffe` with the effect you want.

### Using them in plugins which support legacy HEX notation

#### Rainbow

`&X&E&6&F&F&F&E`\
etc.

This was tested on [EpicRename](https://www.spigotmc.org/resources/epicrename.4341/) and should work in any plugin or place where Spigot handles the colors replacement using its own legacy colors code.

Example: `/rename &x&F&F&F&F&F&ETest`
