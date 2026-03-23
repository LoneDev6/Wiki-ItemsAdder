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
### Step 1

Create a new file in your namespace folder called `build.gradle.kts`.\
For example `ItemsAdder/contents/test/build.gradle.kts`.

{% hint style="info" %}
You can add repositories and dependencies, but they must be available on the server, otherwise they won't work!

In this case I added Paper and ItemsAdder as dependencies of my script, to get the autocompletion working.
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
    maven("https://maven.devs.beer/")
}

dependencies {
    compileOnly("io.papermc.paper:paper-api:1.20.1-R0.1-SNAPSHOT")
    compileOnly("dev.lone:api-itemsadder:4.0.10")
}
```
{% endstep %}

{% step %}
### Step 2

Make sure to install [VSCode](https://code.visualstudio.com/).\
Install also the [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle) extension.
{% endstep %}

{% step %}
### Step 3

Change your server launch arguments and add `-Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=55213`.

Change the port `55213` to a new unused port debug port, which is different from the server port.

Example: `java -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=55213 -jar server.jar nogui`.
{% endstep %}

{% step %}
### Step 4

Create a new file `.vscode\launch.json` (do not forget the dot at the very start!).

Change the port `55213` to your own debug port, which is different from the server port.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Attach to Minecraft Server",
      "request": "attach",
      "hostName": "localhost",
      "port": 55213
    }
  ]
}
```
{% endstep %}

{% step %}
### Step 5

Create a new file .vscode\settings.json (do not forget the dot at the very start!).

```yaml
{
  "java.autobuild.enabled": false
}
```
{% endstep %}
{% endstepper %}
