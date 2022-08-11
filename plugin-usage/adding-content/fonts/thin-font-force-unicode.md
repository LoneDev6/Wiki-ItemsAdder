# Thin font (force unicode)

## Thin font

Normally on Minecraft you set **Force Unicode Font: ON** to get the _"thin font"_.

![](<../../../.gitbook/assets/immagine (5).png>)

\
With **ItemsAdder** this is not possible because it would make emoji, GUIs, HUDs not working anymore. It's a Minecraft limitation.

{% hint style="warning" %}
You must set **Force Unicode Font: OFF**&#x20;
{% endhint %}

![](<../../../.gitbook/assets/immagine (6).png>)

and **set this** in `config.yml`

```yaml
  thin-font:
    enabled: true
```

This allows you to set **Force Unicode Font: OFF** but still have the thin font enabled.

{% hint style="warning" %}
Remember, after this change you have to regenerate your pack.zip file. \
Check [Resourcepack tutorials](../../resourcepack-hosting/)
{% endhint %}

### This is the result

![](<../../../.gitbook/assets/immagine (7).png>)

{% hint style="success" %}
Now you can see the "thin font" and GUIs, emojis, HUDs won't break (bugged white squares)
{% endhint %}
