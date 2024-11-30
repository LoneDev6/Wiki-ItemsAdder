# 🇹🇷 土耳其语计算机错误

如果你遇到类似这样的随机错误：

```log
java.lang.IllegalArgumentException: Symbol does not appear in the shape
```

你可以通过在Java启动参数中添加以下内容来修复它：`-Duser.language=en`

例如，如果你使用[Aikar's flags](https://docs.papermc.io/paper/aikars-flags)：

`java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1`` `<mark style="color:green;">`-Duser.language=en`</mark>` ``-Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paper.jar --nogui`
