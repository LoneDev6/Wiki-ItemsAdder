---
icon: terminal
---

# Java API

ItemsAdder exposes a full Java API you can use to interact with custom items, blocks, furniture, entities, crops, HUDs and more.

{% hint style="info" %}
API version: **4.0.17**\
Javadoc: [lonedev6.github.io/API-ItemsAdder](https://lonedev6.github.io/API-ItemsAdder/dev/lone/itemsadder/api/package-summary.html)
{% endhint %}

## Adding the dependency

{% tabs %}
{% tab title="Maven" %}
```xml
<repositories>
    <repository>
        <id>devs-beer</id>
        <url>https://maven.devs.beer/</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>dev.lone</groupId>
        <artifactId>api-itemsadder</artifactId>
        <version>4.0.17</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```
{% endtab %}

{% tab title="Gradle (Kotlin DSL)" %}
```kotlin
repositories {
    maven("https://maven.devs.beer/")
}

dependencies {
    compileOnly("dev.lone:api-itemsadder:4.0.17")
}
```
{% endtab %}

{% tab title="Gradle (Groovy)" %}
```groovy
repositories {
    maven { url "https://maven.devs.beer/" }
}

dependencies {
    compileOnly "dev.lone:api-itemsadder:4.0.17"
}
```
{% endtab %}
{% endtabs %}

## plugin.yml

Add `ItemsAdder` as a soft-depend or depend in your `plugin.yml`:

```yaml
depend: [ItemsAdder]
# or
softdepend: [ItemsAdder]
```

## Waiting for ItemsAdder to load

{% hint style="danger" %}
**Always** wait for `ItemsAdderLoadDataEvent` before accessing any ItemsAdder data.\
This event fires on startup **and** every time `/iareload` or `/iazip` is run.
{% endhint %}

```java
@EventHandler
public void onItemsAdderLoad(ItemsAdderLoadDataEvent event) {
    // Safe to use ItemsAdder API here
}
```

If you need to check programmatically whether items are already loaded (e.g. when your plugin enables after ItemsAdder), use:

```java
if (ItemsAdder.areItemsLoaded()) {
    // Items are ready
}
```
