# ☕ Java API

## Installing the API

You just have to use **maven** or **gradle**, you can get the **API** here

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

## Important notes

{% hint style="warning" %}
It's very important to listen to the [ItemsAdderLoadDataEvent ](events.md#itemsadderloaddataevent)event in order to make sure items are correctly loaded before accessing them.

**ItemsAdder loading** is **async** that's why.
{% endhint %}
