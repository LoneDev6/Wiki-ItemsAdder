# 无法在家具上放置物品展示框

{% embed url="https://github.com/PluginBugs/Issues-ItemsAdder/issues/1913" %}

这是一种 Minecraft 行为，游戏强制删除物品展示框，因为它位于另一个实体内，在这种情况下是家具。

### 解决方法

将家具碰撞箱减小降低 `0.1`。\
例如 `1` -> `0.9`, `2` -> `1.9` 等。

```yaml
        hitbox:
          length: 1
          width: 1
          height: 1.9
```
