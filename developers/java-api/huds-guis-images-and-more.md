# HUDs, GUIs, images and more

To see how to use HUDs and GUIs API (Font Images) you can check my examples.

## GUIs

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-GUI" %}

## Huds

{% embed url="https://github.com/LoneDev6/RPGhuds" %}

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-ServerMonitor" %}

### Access mana bar value example

```java
PlayerHudsHolderWrapper huds = new PlayerHudsHolderWrapper(player);
PlayerQuantityHudWrapper manaHud = 
                new PlayerQuantityHudWrapper(huds, "magiccraft:mana_bar");
if(manaHud.exists())
  manaHud.setFloatValue(2.0f);
else
  System.out.println("Error: mana not found, maybe it's disabled.");
```

{% hint style="warning" %}
### NOTE

Make sure that you don't have the permission `ia.user.hud.bypass.api.*` or `setFloatValue` the code won't do anything.&#x20;
{% endhint %}

## FAQ

{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}

## Get Emoji or GUI character

```java
new FontImageWrapper("twitteremojis:confirm").getString()
```
