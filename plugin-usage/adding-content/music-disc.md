---
icon: compact-disc
---

# 音乐唱片

### 第一步 - 创建声音

{% content-ref url="adding-sounds.md" %}
[添加声音](adding-sounds.md)
{% endcontent-ref %}

### 第二步 - 创建唱片

在你的命名空间中创建一个新物品，这将是你的音乐唱片：

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
          name: my_sounds:music_disc.cdk_sunday
          description: Cdk - Sunday
```

如你所见，我添加了一种特殊行为，称为 `music_disc`.\
这将告诉 Spigot 服务器这是一个自定义音乐唱片。\
**name**是将要播放的声音，是你在[第一步](music-disc.md#step-1-create-the-sound)添加的。
