# 🎹 音乐唱片

### 步骤 1 - 创建音频

{% content-ref url="./" %}
[.](./)
{% endcontent-ref %}

### 步骤 2 - 创建音乐唱片

在命名空间中创建一个新的物品，并进行如下设置：

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

你可以发现我添加了属性 `music\_disc`.该属性使其物品定义为自定义音乐唱片.\
**name** 是在 **步骤1** 添加的音频，当玩家使用该唱片时将会播放 **name** 中的音频
