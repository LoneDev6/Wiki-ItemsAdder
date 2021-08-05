# HUDs, GUIs...

要了解如何使用 HUD 和 GUIs API \(Font Images\)，查看下方示例：

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-GUI" caption="" %}

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-ServerMonitor" caption="" %}

### 访问法力值示例

```java
PlayerHUDsHolderWrapper huds = new PlayerHUDsHolderWrapper(player);
PlayerQuantityHudWapper manaHud = 
                new PlayerQuantityHudWapper(huds, "magiccraft:mana_bar");
manaHud.setFloatValue(2.0f);
```

## FAQ

{% page-ref page="../../plugin-usage/adding-content/advanced/font-images/common-errors.md" %}

### 获取 表情符号 或 GUI 

```java
new FontImageWrapper("twitteremojis:confirm").getString()
```

