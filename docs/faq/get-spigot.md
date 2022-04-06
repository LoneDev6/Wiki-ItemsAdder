---
title: How to get Spigot, PaperMC or other forks
description: A quick tutorial on how to obtain Spigot, PaperMC or forks of those.
---

# How to get SpigotMC, PaperMC, Purpur or any other fork

Depending on what server type you want to use are there different ways to obtain a copy of the server software.

## PaperMC, Purpur or other forks (Recommendet)

It is highly recommendet to use PaperMC, Purpur or one of their forks.  
Not only do those servers provide performance improvements and quality of life features that Spigot doesn't, but they are also a simple download and drag+drop installation compared to Spigot's more complicated BuildTools.

[:fontawesome-solid-paper-plane: PaperMC Download][papermc]{ .md-button }
[:brands-purpur: PurpurMC Download][purpurmc]{ .md-button }

## SpigotMC

Please see the [official wiki page][spigot-wiki] for detailed instructions.  
The below Video and instructions are only provided for your convenience and are not guaranteed to be up to date or 100% accurate.

??? youtube "YouTube Tutorial"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VzZcgnWJSEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Prerequisites
  
You need to have Git-scm installed when using BuildTools on Windows. BuildTools will not work with the default cmd.exe from Windows. Git for windows can be downloaded [here][git-scm].

You also need to install Java if you haven't already.  
Depending on the MC version you want your server to be will you need a different Java version:

- MC 1.8.x - 1.16.x: [Java 8][java-8]
- MC 1.17.x: [Java 16][java-16]
- MC 1.18.x: [Java 17][java-17]

It is recommendet to use OpenJDK Builds from [Adoptium][adoptium]. The respective versions of those builds are linked above.

### Building a jar

- Go to the [BuildTools Jenkins Page][buildtools-jenkins] and download the [latest successful build][buildtools-latest].
- Put the `BuildTools.jar` in a separate, empty folder (It will later be filled with stuff).
- Open git bash in the folder with the BuildTools jar
- Run `java -jar BuildTools.jar`  
  This will build the latest version of Spigot. If you want an older version (i.e. 1.17.1) can you append `--rev <version>` to the command (Example: `java -jar BuildTools.jar --rev 1.17.1`)
- Let the BuildTools build the jar file. This can take several minutes.  
  The build is complete when there is a line reading `Success! Everything completed successfully. Copying final .jar files now.`
- Take the `spigot-<version>.jar` (`<version>` being the MC version you selected) and move it to your server folder.
- Start your server as usual (You may need to rename the jar, if required).

[papermc]: https://papermc.io/downloads
[purpurmc]: https://purpurmc.org/downloads

[spigot-wiki]: https://www.spigotmc.org/wiki/buildtools/

[git-scm]: https://gitforwindows.org/

[java-8]: https://adoptium.net/?variant=openjdk8&jvmVariant=hotspot
[java-16]: https://adoptium.net/?variant=openjdk16&jvmVariant=hotspot
[java-17]: https://adoptium.net/?variant=openjdk17&jvmVariant=hotspot

[adoptium]: https://adoptium.net/

[buildtools-jenkins]: https://hub.spigotmc.org/jenkins/job/BuildTools/
[buildtools-latest]: https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/