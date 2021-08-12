# HUDs

为了创建自定义的HUD,我在ItemsAdder中提供了2个栗子,它们使用了所有可用的功能.

这两个HUD是法力值和口渴值 你可以在**realcraft**和**magiccraft**分组中找到它们. ![](../../../.gitbook/assets/image%20%2832%29.png)

## 禁用/启用 huds 在一些世界

禁用/启用huds是非常方便的,栗子如下:

## 在所有的世界中启用

要在所有的世界中启用它们,你只需要避免在列表里输入任何世界名词.

```yaml
huds:
  thirst_bar:
    enabled: true
```

### 在所有世界中启用口渴值,但在world\_the\_end世界中关闭.

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "!world_the_end"
```

注意世界名称前面的`!`.使用`" "`是非常重要的,否则插件将无法工作\(yml格式的bug\)

### 在所有名称以`world_`或`adventure`开头的世界中启用口渴值.

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "world_*
    - "adventure*
```

注意结尾处的`*`,这是"任何"的意思.\(请记住,这只在名字的末尾起作用\)

