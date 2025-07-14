# Armor - Unable to fit - try a lower resolution resourcepack

This error is caused by the fact that you have too many custom armors or/and that their texture is too large (HD textures, for example).

{% hint style="warning" %}
This is a limitation of the game, I currently cannot do anything about that. Every plugin that creates custom armors using shaders tricks has the same issue.
{% endhint %}

{% hint style="success" %}
If you are on 1.21.2 or greater (both client and server) you can use [the new method](../../plugin-usage/adding-content/armors.md) to create armors. The new method doesn't have this issue.
{% endhint %}

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
