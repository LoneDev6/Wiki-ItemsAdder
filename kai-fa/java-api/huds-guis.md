# HUDs, GUIs...

要了解如何使用 HUD 和 GUIs API (Font Images)，查看下方示例：

## GUIs

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-GUI" %}

## Huds

{% embed url="https://github.com/LoneDev6/RPGhuds" %}

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-ServerMonitor" %}

### 访问法力值示例

```java
PlayerHudsHolderWrapper huds = new PlayerHudsHolderWrapper(player);
PlayerQuantityHudWrapper manaHud = 
                new PlayerQuantityHudWrapper(huds, "magiccraft:mana_bar");
if(manaHud.exists())
  manaHud.setFloatValue(2.0f);
else
  System.out.println("Error: mana not found, maybe it's disabled.");
```

## FAQ

{% content-ref url="../../plugin-usage/adding-content/font-images/common-errors.md" %}
[common-errors.md](../../plugin-usage/adding-content/font-images/common-errors.md)
{% endcontent-ref %}

## 获取 表情符号 或 GUI

```java
new FontImageWrapper("twitteremojis:confirm").getString()
```

