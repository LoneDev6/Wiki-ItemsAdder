# Can't place itemframe on furniture

{% embed url="https://github.com/PluginBugs/Issues-ItemsAdder/issues/1913" %}

It's a Minecraft behaviour, the game is forcefully making itemframe removed because it is inside another entity, in this case the furniture itemframe.

### Solution

Reduce the furniture itemframe height of `0.1`.\
For example `1` -> `0.9`, `2` -> `1.9` etc.

```yaml
        hitbox:
          length: 1
          width: 1
          height: 1.9
```
