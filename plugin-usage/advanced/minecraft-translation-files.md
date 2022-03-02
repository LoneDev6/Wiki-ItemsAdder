# 🇬🇧 Minecraft translation files

{% hint style="info" %}
With ItemsAdder you can easily overwrite Minecraft default translation files.\
(version 2.1.35+)
{% endhint %}

### Example of usage

In this example I will change the Return to game text of ESC menu.

![](<../../.gitbook/assets/image (31).png>)

```yaml
info:
  namespace: ia_various_configs
minecraft_lang_overwrite:
  esc_menu_texts:
    entries:
      "menu.returnToGame": "Return to &aSurvival &fGamemode"
    languages:
      - ALL
```

### languages

The languages property is used to list all the languages where you want to change the text.\
You should set it to only the languages of your playerbase, but I decided to set it to ALL so you will be sure that everyone can see the custom text despite their decided clientside language.

### entries

It's the list of translated texts. You can find the [complete list here](https://gist.github.com/LoneDev6/1df03fd853b2b244a7348216c8fa909d).

