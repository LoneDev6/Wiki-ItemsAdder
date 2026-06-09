---
icon: chart-bar
---

# HUDs, GUIs, images and more

## GUIs

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-GUI" %}

## HUDs

{% embed url="https://github.com/LoneDev6/RPGhuds" %}

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-ServerMonitor" %}

### Set a HUD value

```java
PlayerHudsHolderWrapper huds = new PlayerHudsHolderWrapper(player);
PlayerQuantityHudWrapper manaHud = new PlayerQuantityHudWrapper(huds, "magiccraft:mana_bar");
if (manaHud.exists()) {
    manaHud.setFloatValue(2.0f);
} else {
    System.out.println("Mana HUD not found, check that the HUD is enabled.");
}
```

### Show or hide a HUD

```java
PlayerHudsHolderWrapper huds = new PlayerHudsHolderWrapper(player);
PlayerQuantityHudWrapper hud = new PlayerQuantityHudWrapper(huds, "namespace:hud_name");
hud.setVisible(true);
```

{% hint style="warning" %}
Make sure the player does **not** have the permission `ia.user.hud.bypass.api.*`, otherwise `setFloatValue` will have no effect.
{% endhint %}

## Get a Font Image / Glyph character

```java
String character = new FontImageWrapper("twitteremojis:confirm").getString();
```

## FAQ

{% content-ref url="../../faq/i-cant-see-emoji-guis-huds-etc..md" %}
[i-cant-see-emoji-guis-huds-etc..md](../../faq/i-cant-see-emoji-guis-huds-etc..md)
{% endcontent-ref %}
