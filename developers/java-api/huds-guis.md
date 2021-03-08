# HUDы, GUI...

Чтобы посмотреть на то, как работает HUD и GUI API \(Картинки юникода\), можете глянуть мои примеры:

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-GUI" %}

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-ServerMonitor" %}



### Пример доступа к данным о мане

```java
PlayerHUDsHolderWrapper huds = new PlayerHUDsHolderWrapper(player);
PlayerQuantityHudWapper manaHud = 
                new PlayerQuantityHudWapper(huds, "magiccraft:mana_bar");
manaHud.setFloatValue(2.0f);
```

## FAQ

{% page-ref page="../../plugin-usage/adding-content/advanced/font-images/common-errors.md" %}

### Достать символ юникода для эмоджи или GUI

```java
new FontImageWrapper("twitteremojis:confirm").getString()
```

