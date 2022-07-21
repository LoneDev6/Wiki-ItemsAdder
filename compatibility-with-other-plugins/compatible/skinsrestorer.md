# SkinsRestorer

## [下载](https://www.spigotmc.org/resources/skinsrestorer.2124/)

## 如何修复加入游戏时资源包无法正常加载

### 步骤 1

安装 [**ResourcepackBroadcast**](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/)\*\*\*\*

### 步骤 2

在 **ResourcepackBroadcast** 的 `config.yml` 中 设置当资源包正确加载时 使用命令 `sr applyskin`.
具体设置如下:

```yaml
success:
  enabled: true
  message:
    enabled: true
    text: "&e%player_name% 已正确加载资源包"
  placeholder:
    enabled: true
    text: "%img_smile%"
  commands:
    apply_skin:
      enabled: true
      command: sr applyskin %player_name%
      as_console: true
```

### 步骤 3

打开 **SkinsRestorer** 的 `config.yml` 并设置 `DisableOnJoinSkins: false`

### 步骤 4

Install [PlaceholderAPI ](https://www.spigotmc.org/resources/placeholderapi.6245/)\(if you don't have it\).  
使用命令 `/papi ecloud download Player` 接着使用 `/papi reload` 进行重载.

### 完成

