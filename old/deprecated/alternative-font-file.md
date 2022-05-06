---
description: Use another .json file for the auto generated font images
---

# Alternative font file

## How to use the alternative custom font file

{% hint style="danger" %}
### This feature is unstable.
{% endhint %}

**ItemsAdder** generates the json file for your custom **font\_images**, in some cases you prefer to have a separate file instead of append the images into the `default.json`.

ItemsAdder (if configured) will generate the **font\_images** inside a new file: `assets/minecraft/font/custom.json` instead of `default.json`.

## Why having a separate custom font file?

This will make your font\_images have a completely separate font you can use on-demand without overwriting the main font characters.

Minecraft 1.16+ has the native custom font feature which allows to specify the font name on each message (using json).

For example you can write this command `/tellraw @a [{"text":"Test message!","font":"default"},"\n",{"text":"Test message!","font":"alt"}]`

This command will write the first text with font `default` and the second text with font `alt` (in this case it's included into the game).

![](<../../.gitbook/assets/immagine (154).png>)

ItemsAdder custom font will be named `custom`, so in this case you will have to use the attribute `"font":"custom"`.

## Downsides and upsides

{% hint style="danger" %}
* emojis won't be shown in the `/e` autocomplete command, instead placeholders will be shown ([screenshot](https://i.imgur.com/Im9AXae.png))
* not being able to copy and paste unicode characters everywhere anymore, you have to rely on `:XXX:` and `%img_XXX%` placeholders or on the vanilla json components specifying the `font` attribute (check the [example](alternative-font-file.md#why-having-a-separate-custom-font-file))
* only available on Minecraft 1.16+
* some settings in **config.yml** won't work anymore:&#x20;
  * `font_images.command`
  * `font_images.scoreboard-teams`
  * `font_images.vault-prefix-suffix`
  * `font_images.player-display-name` <mark style="color:orange;">(works only on Paper)</mark>
  * images in broadcast message <mark style="color:orange;">(works only on Paper)</mark>
  * signs, books <mark style="color:orange;">(works only on Paper)</mark>
{% endhint %}

{% hint style="success" %}
* Players can set `Force Unicode: On` and the **font\_images** will show anyway because they are using another font, not the default one
{% endhint %}

## Should I use this feature?

{% hint style="danger" %}
### This feature is unstable.

I'd avoid using it since it has too many downsides, but I'll leave you the decision since some servers may need to separate the custom images from the default font.
{% endhint %}

## How to enable the feature?

You have to enable this option in `config.yml` and run `/iazip`:&#x20;

{% code title="config.yml" %}
```yaml
zip:
  use_separate_custom_font_file_EXPERIMENTAL: true
```
{% endcode %}

##
