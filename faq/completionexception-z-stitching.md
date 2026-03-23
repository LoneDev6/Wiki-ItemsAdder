---
icon: circle-exclamation
---

# CompletionException: z: Stitching

```
Caught error loading resourcepacks, removing all selected resourcepacks
java.util.concurrent.CompletionException: z: Stitching
    at java.base/java.util.concurrent.CompletableFuture.encodeThrowable(CompletableFuture.java:315)
    at java.base/java.util.concurrent.CompletableFuture.completeThrowable(CompletableFuture.java:320)
    at java.base/java.util.concurrent.CompletableFuture$UniApply.tryFire(CompletableFuture.java:649)
    at java.base/java.util.concurrent.CompletableFuture.postComplete(CompletableFuture.java:510)
    at java.base/java.util.concurrent.CompletableFuture$AsyncSupply.run(CompletableFuture.java:1773)
    at java.base/java.util.concurrent.CompletableFuture$AsyncSupply.exec(CompletableFuture.java:1760)
    at java.base/java.util.concurrent.ForkJoinTask.doExec(ForkJoinTask.java:387)
    at java.base/java.util.concurrent.ForkJoinPool$WorkQueue.topLevelExec(ForkJoinPool.java:1312)
    at java.base/java.util.concurrent.ForkJoinPool.scan(ForkJoinPool.java:1843)
    at java.base/java.util.concurrent.ForkJoinPool.runWorker(ForkJoinPool.java:1800)
    at java.base/java.util.concurrent.ForkJoinWorkerThread.run(ForkJoinWorkerThread.java:188)
Caused by: z: Stitching
    at heo.a(SpriteLoader.java:146)
    at heo.lambda$loadAndStitch$8(SpriteLoader.java:212)
    at java.base/java.util.concurrent.CompletableFuture$UniApply.tryFire(CompletableFuture.java:646)
    ... 8 more
Caused by: hr: Unable to fit: minecraft:entity/equipment/humanoid_leggings/leather - size: 7936x128, atlas: 4096x8192
z, atlasMax: 8192x8192 - Maybe try a lower resolution resourcepack?
```

This error (and similar) is caused by the fact that you have too many textures in your pack. This happens even more when you have a lot of HD textures.

This limitation depends on your GPU (graphical card), for example Intel integrated GPUs have this issue.

In order to fix that you can limit the usage of HD textures in your pack.

{% hint style="warning" %}
You will have the same issues with any content manager or even by manually creating resourcepacks, if you reach this limitation of the game and GPU.
{% endhint %}
