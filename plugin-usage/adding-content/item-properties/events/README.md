---
icon: arrow-progress
---

# 事件

## 使用官方文件编辑器查看所有属性

{% content-ref url="../../../files-editor.md" %}
[文件编辑器](../../../files-editor.md)
{% endcontent-ref %}

## 什么是事件？

事件描述了某事发生的时间。\
当事件被触发时，你可以让事情发生（[动作](actions.md)）（播放声音、执行命令等）

### 事件列表

* block\_break
* attack
* kill
* interact.entity
* interact.left
* interact.left\_shift
* interact.right
* interact.right\_shift
* interact\_mainhand.left
* interact\_mainhand.left\_shift
* interact\_mainhand.right
* interact\_mainhand.right\_shift
* interact\_offhand.left
* interact\_offhand.left\_shift
* interact\_offhand.right
* interact\_offhand.right\_shift
* drop
* pickup
* eat
* drink
* bow\_shot
* gun\_shot
* gun\_no\_ammo
* gun\_reload
* book\_write
* book\_read
* fishing\_start
* fishing\_caught
* fishing\_failed
* fishing\_cancel
* fishing\_bite
* fishing\_in\_ground
* wear
* unwear
* held
* held\_offhand
* unheld
* unheld\_offhand
* item\_throw
* item\_hit\_ground
* item\_hit\_entity
* placed\_block.interact
* placed\_block.break
* placed\_armorstand.interact
* placed\_armorstand.break
* placed\_itemframe.interact
* placed\_itemframe.break
* holding\_item.player\_damaged\_by\_entity
* holding\_item\_offhand.player\_damaged\_by\_entity
* equipped\_armor\_item.player\_damaged\_by\_entity
* bucket\_empty
* bucket\_fill

### 示例

为什么写成 `interact (.) right`？下面是一个如何正确写入你的物品配置的小例子。
```yaml
...
events:
  interact:
    right:
      play_sound:
      ...
...
```

