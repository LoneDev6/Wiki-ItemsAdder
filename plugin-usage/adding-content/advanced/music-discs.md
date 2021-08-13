# 音乐唱片

## 第一步

{% page-ref page="sounds/" %}

## 第二步

在你的分组中创建一个新的物品,然后创建一个属于你的唱片

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

正如你所看到的,我添加了"music/_disc"的特殊属性.
这其实在和Spigot核心进行焦流,在告诉他这个物品它是一个自定义的音乐唱片.
**name**是即将要进行播放的音效,你在**第一步**时就添加了它.
