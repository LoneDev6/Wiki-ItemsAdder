# SkinsRestorer

## [此处下载](https://www.spigotmc.org/resources/skinsrestorer.2124/)

## 如何修复加入时未能自动应用资源包

### 第一步

下载 [**ResourcepackBroadcast**](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/)

### 第二部

设置 **ResourcepackBroadcast** 的 `config.yml` 以在资源包正确加载后运行 `sr applyskin`：

```yaml
success:
  enabled: true
  message:
    enabled: true
    text: "&e%player_name% loaded resourcepack"
  placeholder:
    enabled: true
    text: "%img_smile%"
  commands:
    apply_skin:
      enabled: true
      command: sr applyskin %player_name%
      as_console: true
```

### 第三步

打开 **SkinsRestorer** 的 `config.yml` 并设置 `DisableOnJoinSkins: false`

### 第四步

下载 [PlaceholderAPI ](https://www.spigotmc.org/resources/placeholderapi.6245/)(如果你没有)。\
执行指令 `/papi ecloud download Player` 与 `/papi reload`。

### 完成
