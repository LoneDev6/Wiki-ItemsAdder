---
description: Text animations
---

# Text Effects (1.17+)

## What are text effects?

ItemsAdder **2.4.19** offers some cool decorative text effects you can use in your server to make it more professional.

{% hint style="danger" %}
## This feature works only on **Minecraft 1.17** client, server version doesn't matter.
{% endhint %}

{% hint style="warning" %}
You have to run `/iazip` in order to enable/disable this feature.\
Make sure also to enable it in the `config.yml`.

```yaml
effects:
  text-effects:
    enabled: true
    replace-in-customitems-name-and-lore: true
    chat:
      enabled: true
    sign:
      enabled: true
    book:
      enabled: true
    anvil:
      enabled: true
```
{% endhint %}



## Permissions

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

### Rainbow

![](../.gitbook/assets/rainbow.gif)

![](<../.gitbook/assets/immagine (128).png>)

![](<../.gitbook/assets/immagine (129).png>)

![](../.gitbook/assets/rainbow\_item.gif)

Permission: `ia.user.text_effect.use.r`\
Usage: `<r text>`

### Wobble

![](../.gitbook/assets/wobble.gif)

![](../.gitbook/assets/wobble\_item.gif)

Permission: `ia.user.text_effect.use.w`\
Usage: `<w text>`

### Jump

![](../.gitbook/assets/jump\_chat.gif)

![](../.gitbook/assets/jump.gif)

![](../.gitbook/assets/jump\_boss.gif)

Permission: `ia.user.text_effect.use.j`\
Usage: `<j text>`

### Rainbow + Wobble

![](../.gitbook/assets/rw\_chat.gif)

Permission: `ia.user.text_effect.use.rw`\
Usage: `<rw text>`

### Rainbow + Jump

![](../.gitbook/assets/rj.gif)

Permission: `ia.user.text_effect.use.rj`\
Usage: `<rj text>`

## Where can I use these effects?

* Custom item name (in the .yml file)
* Custom item lore (in the .yml file)
* Chat
* Sign
* Book
* Bossbar
* Prefix-Suffix (Luckperms for example)
* _More soon...._

![](../.gitbook/assets/rainbow\_wobble\_lore.gif)

## How to create animated prefix (Luckperms)

![](<../.gitbook/assets/immagine (133).png>)

`/lp group admin meta setprefix "<rw ADMIN >"`

![](../.gitbook/assets/prefix.gif)

Click here to read[ Luckperms official tutorials](https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta) if you don't know how prefix works.
