# HUD、GUI、图像及更多

要了解如何使用 HUD 和 GUI API（字体图像），您可以查看我的示例。

## GUI

{% embed url="https://github.com/LoneDev6/API-ItemsAdder-Example-GUI" %}

## HUD

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

{% hint style="warning" %}
### 注意

确保您没有权限 `ia.user.hud.bypass.api.*` 否则 `setFloatValue` 代码将不会执行任何操作。
{% endhint %}

## 常见问题

{% content-ref url="../../plugin-usage/adding-content/font-images/common-errors.md" %}
[common-errors.md](../../plugin-usage/adding-content/font-images/common-errors.md)
{% endcontent-ref %}

## 获取表情符号或 GUI 字符

```java
new FontImageWrapper("twitteremojis:confirm").getString()
```
