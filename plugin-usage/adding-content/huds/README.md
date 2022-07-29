# 🔋 HUDs

为了创建自定义 HUDs, ItemsAdder 提供了两个示例配置，它们使用了所有可用的功能.

这两个 HUDs 分别是 `法力值` 和 `口渴值`.\
你可以分别在 **realcraft** **magiccraft** 命名空间文件夹中找到其配置

![](<../../../.gitbook/assets/image (30).png>)

## 在世界中 启用/禁用 HUD

您可以在某些世界中启用或禁用 HUDs, 以下是一些示例:

### 在所有世界中启用

要想在所有世界中启用, 您只需避免在列表中填写任何世界, 相当于无需填写该配置.

```yaml
huds:
  thirst_bar:
    enabled: true
```

### 在除了世界 world\_the\_end 之外的所有世界启用口渴值 HUDs

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "!world_the_end"
```

注意: 英文符号 `!` 在世界名之前. (请记得使用 `" "` 包含世界名, 否则插件将无法工作 (yml 的问题).

### 在所有以 `world_` 、 `adventure` 为开头的世界中启用口渴值 HUDs

```yaml
huds:
  thirst_bar:
    enabled: true
    worlds:
    - "world_*
    - "adventure*
```

注意：在末尾的 `*`，代表"全部".（该含义仅适用于名称的末尾.）
