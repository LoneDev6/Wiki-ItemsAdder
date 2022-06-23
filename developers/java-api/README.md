# ☕שימוש ב- Java API

## התקנה הAPI

אתם רק צריך להשתמש ב-**maven** או **gradle**, אתם יכול להשיג את **API** כאן

{% embed url="https://github.com/LoneDev6/ItemsAdder-API#-packages" %}

```xml
<repository>
    <id>jitpack-repo</id>
    <url>https://jitpack.io</url>
</repository>
```

```xml
<dependency>
    <groupId>com.github.LoneDev6</groupId>
    <artifactId>api-itemsadder</artifactId>
    <version>3.0.0</version>
    <scope>provided</scope>
</dependency>
```

## Javadocs

{% embed url="https://lonedev6.github.io/API-ItemsAdder" %}

## הערות חשובות

{% hint style="warning" %}
חשוב מאוד להציב "מקשיב" ל [ItemsAdderLoadDataEvent ](events.md#itemsadderloaddataevent)אירוע על מנת לוודא שהפריטים נטענים כהלכה לפני הגישה אליהם.

**טעינת ItemsAdder** היא **אסינכרית** וזו הסיבה.
{% endhint %}
