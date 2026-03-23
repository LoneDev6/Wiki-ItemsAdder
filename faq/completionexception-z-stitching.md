---
icon: circle-exclamation
---

# CompletionException: z: Stitching

```
minecraft:textures/atlas/blocks.png: dropping miplevel from 4 to 0, because of minimum power of two: 1
Caught error loading resourcepacks, removing all selected resourcepacks
java.util.concurrent.CompletionException: v: Stitching
    at java.base/java.util.concurrent.CompletableFuture.encodeThrowable(CompletableFuture.java:315)
    at java.base/java.util.concurrent.CompletableFuture.completeThrowable(CompletableFuture.java:320)
    at java.base/java.util.concurrent.CompletableFuture$UniApply.tryFire(CompletableFuture.java:649)
    at java.base/java.util.concurrent.CompletableFuture.postComplete(CompletableFuture.java:510)
    at java.base/java.util.concurrent.CompletableFuture$AsyncSupply.run(CompletableFuture.java:1773)
    at bbf.b(SourceFile:51)
    at java.base/java.util.concurrent.ForkJoinTask$RunnableExecuteAction.exec(ForkJoinTask.java:1423)
    at java.base/java.util.concurrent.ForkJoinTask.doExec(ForkJoinTask.java:387)
    at java.base/java.util.concurrent.ForkJoinPool$WorkQueue.topLevelExec(ForkJoinPool.java:1312)
    at java.base/java.util.concurrent.ForkJoinPool.scan(ForkJoinPool.java:1843)
    at java.base/java.util.concurrent.ForkJoinPool.runWorker(ForkJoinPool.java:1808)
    at java.base/java.util.concurrent.ForkJoinWorkerThread.run(ForkJoinWorkerThread.java:188)
Caused by: v: Stitching
    at ill.a(SourceFile:90)
    at ill.a(SourceFile:114)
    at java.base/java.util.concurrent.CompletableFuture$UniApply.tryFire(CompletableFuture.java:646)
    ... 9 more
Caused by: iln: Unable to fit: ia:43904 - size: 128x128 - Maybe try a lower resolution resourcepack?
    at ilm.c(SourceFile:55)
    at ill.a(SourceFile:84)
    ... 11 more
```

This error (and similar) is caused by the fact that you have too many textures in your pack. This happens even more when you have a lot of HD textures.

This limitation depends on your GPU (graphical card), for example Intel integrated GPUs have this issue.

{% hint style="warning" %}
You will have the same issues with any content manager or even by manually creating resourcepacks, if you reach this limitation of the game and GPU.
{% endhint %}

## How to fix?

1. Limit the usage of HD textures
2. Avoid using duplicate PNG files
3. Make sure you are connecting your HDMI cable into the dedicated GPU port and not into the integrated GPU port
