---
icon: list-check
---

# Autocompletion

{% hint style="warning" %}
This requires ItemsAdder 4.0.13 or greater.

This is only compatible with `.java` scripting type.
{% endhint %}

{% stepper %}
{% step %}
#### Step 1

Create a new file in your namespace folder called `build.gradle.kts`.\
For example `ItemsAdder/contents/test/build.gradle.kts`.

{% hint style="info" %}
You can add repositories and dependencies, but they must also be available on the server if your script uses them at runtime.

Paper and ItemsAdder API are added here to make Java autocompletion work.
{% endhint %}

```gradle
plugins {
    java
}

sourceSets {
    main {
        java {
            setSrcDirs(listOf("."))
        }
    }
}

repositories {
    mavenCentral()
    maven("https://repo.papermc.io/repository/maven-public/")
}

dependencies {
    compileOnly("io.papermc.paper:paper-api:1.21.4-R0.1-SNAPSHOT")
    compileOnly("beer.devs:itemsadder-api:4.0.17")
}
```

Replace the Paper version with the version matching your server.
{% endstep %}

{% step %}
#### Step 2

Install [VSCode](https://code.visualstudio.com/).

Install these extensions:

* [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
* [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)
{% endstep %}

{% step %}
#### Step 3

Create a new file `.vscode/settings.json` (do not forget the dot at the very start!).

```json
{
  "java.autobuild.enabled": false
}
```
{% endstep %}

{% step %}
#### Step 4

Open the namespace folder in VSCode, for example:

`ItemsAdder/contents/test`

VSCode should detect `build.gradle.kts` and enable Java autocompletion.
{% endstep %}
{% endstepper %}
