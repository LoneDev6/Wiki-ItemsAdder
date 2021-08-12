# 音乐唱片

## 第一步

{% page-ref page="sounds/" %}

## 第二步

在你的命名空间中创建一个新的物品,然后创建一个属于你的唱片

```yaml
  music_disc_cdk_sunday:
    display_name: display-name-music_disc_cdk_sunday
    permission: music_disc_cdk_sunday
    lore:
    - '&7Cdk - Sunday'
    resource:
      material: STICK
      generate: true
      textures:
      - item/music_disc_cdk_sunday.png
    behaviours:
      music_disc:
        song:
          name: itemsadder:music_disc.cdk_sunday
          description: Cdk - Sunday
```

正如你所看到的,我添加了"music/\_disc"的特殊行为.这在告诉Spigot,这个物品是一个自定义音乐唱片 **name**是将要播放的声音,你在**第一步**中添加了它.

