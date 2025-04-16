---
icon: eye-slash
---

# I can't see emoji, GUIs, HUDs etc.

## ItemsAdder 3.4.1 and greater

* Open `config.yml` of **ItemsAdder**
*   Enable this option:&#x20;

    ```yaml
    fix_force_unicode_font_images: true
    ```
* Run `/iazip` to regenerate your resourcepack
* Follow the [hosting method tutorial](../plugin-usage/resourcepack-hosting/) you decided during plugin installation

<details>

<summary>ItemsAdder 3.4.0 and lower</summary>

If you set **Force Unicode** to **ON** because you don't like Minecraft default font you can't see emojis, custom guis and huds.

Normally on Minecraft you set **Force Unicode Font: ON** to get the _"thin font"_.

<img src="../.gitbook/assets/immagine (33).png" alt="" data-size="original">

\
With **ItemsAdder** this is not possible because it would make emoji, GUIs, HUDs not working anymore. It's a Minecraft limitation.

You must set **Force Unicode Font: OFF**

<img src="../.gitbook/assets/immagine (44).png" alt="" data-size="original">

and **set this** in `config.yml`

```yaml
  thin-font:
    enabled: true
```

This allows you to set **Force Unicode Font: OFF** but still have the thin font enabled.

Remember, after this change you have to regenerate your `generated.zip` file.\
Check [Resourcepack tutorials](../plugin-usage/resourcepack-hosting/)

### This is the result

<img src="../.gitbook/assets/immagine (88).png" alt="" data-size="original">

Now you can see the "thin font" and GUIs, emojis, HUDs won't break (bugged white squares)

</details>
