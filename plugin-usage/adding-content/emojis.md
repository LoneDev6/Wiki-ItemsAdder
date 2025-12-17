---
icon: comment-smile
---

# Emojis

### Folders setup

Create a folder `contents/myemojis/textures/font/emoji/`

### Image

Inside this folder you have to put your emojis, you should make them `72x72` to make sure they're not too big and they're not pixelated.

You can decide the size you want but make sure that height and width is not over `256`.

In this example I put an image named `contents/myemojis/textures/font/emoji/smile.png`.

### Configuration

Create a configuration file, for example `contents/myemojis/myconfig.yml` (you can name it whatever you want)

{% code title="contents/myemojis/myconfig.yml" %}
```yaml
info:
  namespace: "myemojis"
```
{% endcode %}

Then add your emoji (in this example I made a **`smile`** emoji) to the list of `font_images`, so your file would look like this:

{% code title="contents/myemojis/myconfig.yml" %}
```yaml
info:
  namespace: "myemojis"
font_images:
  smile:
    permission: 0
    show_in_gui: true
    path: "font/emoji/smile.png"
    scale_ratio: 9
    y_position: 8
```
{% endcode %}

**`scale_ratio`** is the final height in pixels of the emoji because 72x72 pixels is too big, You'd have to scale it but you can set 9 so Minecraft will handle it automatically.\
&#xNAN;**`y_position`** is the y position in pixels, 8 should be good if you keep emoji 72x72 and `scale_ratio` to 9. If you have different size you'll have to tweak the y\_position based on your tests.

{% hint style="danger" %}
`scale_ratio` must ALWAYS be higher than `y_position`.\
I cannot fix that issue, it's a **Minecraft** limitation.
{% endhint %}

## In-game view

![](<../../.gitbook/assets/immagine (116) (3).png>)

### Using the /e useful suggestions

Write `/e` in chat, press **SPACE** and press **TAB** to start autocompleting.

![](<../../.gitbook/assets/immagine (49).png>)

![](<../../.gitbook/assets/immagine (46).png>)

![](<../../.gitbook/assets/immagine (68).png>)

### Using the tab autocomplete in chat

Write `:` in chat and press **TAB** to start autocompleting.

<figure><img src="../../.gitbook/assets/emoji_autocomplete_chat.png" alt=""><figcaption></figcaption></figure>

### Download examples:

{% @github-files/github-code-block %}

## Create big preview on hover

You have to create a new font image for the big emoji (you can use the same `.png` image) and set `scale_ratio` to a big value, usually 64 is good.

```yaml
info:
  namespace: myemojis
font_images:
  test_hover_new_big:
    path: font/test_hover_new.png
    suggest_in_command: false
    show_in_gui: false
    scale_ratio: 64
```

Edit your small emoji by adding the `chat` `hover` property with the custom `override_text`.\
The `override_text` is used to show the big emoji in the hover description text.&#x20;

```yaml
info:
  namespace: myemojis
font_images:
  test_hover_new:
    path: font/test_hover_new.png
    chat:
      hover:
        enabled: true
        override_text: ":test_hover_new_big:\n\n\n\n\n\n"
    suggest_in_command: true
    show_in_gui: true
    scale_ratio: 9
    y_position: 8
```

{% hint style="info" %}
Note: the `\n` part is important in order to match the big emoji image height, otherwise the tooltip will be too short.

![](<../../.gitbook/assets/image (274).png>)
{% endhint %}

<figure><img src="../../.gitbook/assets/image (272).png" alt=""><figcaption></figcaption></figure>

### Adding a title

You can add a title, just write your text and add a `\n` character to start a new line.

`override_text: "Emoji preview:\n:test_hover_new_big:\n\n\n\n\n\n"`

<figure><img src="../../.gitbook/assets/image (273).png" alt=""><figcaption></figcaption></figure>
