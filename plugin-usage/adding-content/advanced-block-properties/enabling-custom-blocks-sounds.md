---
icon: volume-low
---

# 启用自定义方块声音

{% hint style="warning" %}
每次更改这些设置时，您都必须运行 `/iazip` 以重新生成资源包。
{% endhint %}

要启用自定义方块声音，您必须在 `config.yml` 中启用这些选项。

```yaml
  custom_blocks_sounds_patch:
    enabled: true
    step:
      enabled: true
      allow_non_player: true
    other: true
```

### `enabled`

启用整个模块。

### `step.enabled`

* `true`
  * 此选项将启用每次实体走在自定义方块上时播放自定义 `step` 声音。\
    \
    注意：它还会替换资源包中木材和石头的原版 `step` 声音。\
    (此信息仅对专业用户有用).
* `false`
  * 此选项不会启用当实体走在自定义方块上时播放自定义 `step` 声音。\
    \
    注意：它不会替换资源包中木材和石头的原版 `step` 声音。\
    (此信息仅对专业用户有用).

### `other.enabled`

* `true`
  * 此选项将在各种情况下启用播放自定义声音：`break`, `fall`, `hit`, `place`.\
    \
    注意：它还会替换资源包中木材和石头的原版 `break`, `fall`, `hit`, `place` 声音。\
    (此信息仅对专业用户有用).
* `false`
  * 此选项不会启用在各种情况下播放自定义声音：`break`, `fall`, `hit`, `place`.\
    \
    注意：它不会替换资源包中木材和石头的原版 `break`, `fall`, `hit`, `place` 声音。\
    (此信息仅对专业用户有用).

### `step.allow_non_player`

* `true`
  * 此选项将启用任何非玩家实体播放自定义 `step` 声音。\
    如果您担心由于调用此代码的频率高而导致服务器性能下降，您应该禁用此选项。\
    该功能经过基准测试和性能优化，但某些服务器可能会有问题，或者管理员过于谨慎，因此我编写了此选项。
* `false`
  * 此选项不会启用任何非玩家实体播放自定义 `step` 声音。
