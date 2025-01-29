---
icon: earth-africa
---

# Minecraft language files

With ItemsAdder you can easily overwrite Minecraft default translation files.

### Example of usage: custom esc menu

In this example I will change the Return to game text of ESC menu.

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

It's the list of translated texts. \
You can find the complete list here (change `1.19.3` to your version):

[https://github.com/InventivetalentDev/minecraft-assets/blob/1.19.3/assets/minecraft/lang/en\_us.json](https://github.com/InventivetalentDev/minecraft-assets/blob/1.19.3/assets/minecraft/lang/en\_us.json)
