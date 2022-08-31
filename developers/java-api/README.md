# ☕ Java API

## 如何获取 API

你可以使用 Maven 或 Gradle 将远程仓库和依赖添加到你的项目

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

## 重要提醒

{% hint style="warning" %}
如果你要获取ItemsAdder物品实例，请监听[ItemsAdderLoadDataEvent ](events.md#itemsadderloaddataevent)事件后再获取
ItemsAdder 加载物品是 **异步** 的，如果你仅仅是在插件plugin.yml加入ItemsAdder为依赖
并在ItemsAdder启动完成后让你的插件获取ItemsAdder物品实例，很可能无法获取，因为ItemsAdder异步加载物品还未完成
{% endhint %}
