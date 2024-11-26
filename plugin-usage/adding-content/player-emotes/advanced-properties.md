# 高级属性

你还可以为表情指定一些特殊属性。\
为此，你需要创建一个新的 `.yml` 文件，如果你不需要覆盖这些属性，则表情不需要此文件。

`hide_equipment`: 是否需要隐藏玩家的某个装备部分。

`can_player_move`: 玩家是否可以在动画期间移动。

`cancel_conditions`: 会使动画停止的各种动作。

## 示例

```yaml
info:
  namespace: test_emotes
emotes:
  example_1:
    id: example_1
    enabled: false
    hide_equipment:
      helmet: true
      mainhand: true
      offhand: true
    can_player_move: false
  example_2:
    id: example_2
    cancel_conditions:
      sneak: false
      take_damage: false
      deal_damage: false
      in_air: false
    hide_equipment:
      helmet: false
      mainhand: false
      offhand: false
    can_player_move: true
```
