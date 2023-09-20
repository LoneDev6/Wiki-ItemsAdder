# 🇹🇷 🇹🇷 Turkish computer errors

If you get random errors like this:

```log
java.lang.IllegalArgumentException: Symbol does not appear in the shape
```

you can fix it by adding this into your Java launch arguments: `-Duser.language=en`

For example if you are using [Aikar's flags](https://docs.papermc.io/paper/aikars-flags):

`java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1`` `<mark style="color:green;">`-Duser.language=en`</mark>` ``-Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paper.jar --nogui`
