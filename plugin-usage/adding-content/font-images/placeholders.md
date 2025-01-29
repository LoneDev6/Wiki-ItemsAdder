---
icon: hashtag
---

# Placeholders

You can use these special placeholders in **chat**, **signs**, **books** and in **GUIs** names.

### Font Image

To actually show make your font image show up you just have to write down its name surrounded by `:` character

```
:my_gui:
:blank_menu:
:my_emoji:
```

### Offset

This is a special placeholder that allows you to move a font image back and forward specifying pixels number.

```
:offset_-1:
:offset_-2:
:offset_-30:
:offset_25:
```

As you can see you have to write `:offset_`**`AMOUNT`**`:` (without spaces).\
If you would like to change the image's height, you will need to change it's 'y' value.\
This is located in the image's configuration.

For example:

* you can shift a _font image_ back by 16 pixels by writing `:offset_-16::smile:`
* you can shift a _text_ back by 16 pixels by writing `:offset_-16:hello`
* you can shift a _font image_ forward by 16 pixels by writing `:offset_16::smile:`
* you can shift a _text_ forward by 16 pixels by writing `:offset_16:hello`

## PlaceholderAPI

### Font image

This is the code: `%img_NAME%` instead of `NAME` write the font image name.\
For example: `%img_smile%`

### Offsets

You can shift text or font images back and forward.\
For example&#x20;

* you can shift it back of 16 pixels by writing `%img_offset_-16%`
* you can shift it forward of 16 pixels by writing `%img_offset_16%`

### ItemsAdder PlayerStats (HUDs values)

These are stats used by ItemsAdder, they're not vanilla stats.

This is the code: `%iaplayerstat_NAME%` instead of `NAME` write the playerstat name.\
For example: `%iaplayerstat_mana%` or also `%iaplayerstat_thirst%`

You can use this command to test it out:\
`/papi parse me %iaplayerstat_thirst%`\
`/papi parse me %iaplayerstat_mana%`
