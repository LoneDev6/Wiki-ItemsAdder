# SkinsRestorer

## [Скачать здесь](https://www.spigotmc.org/resources/skinsrestorer.2124/)

## Как исправить, что ресурспак не применяется при присоединении

### Шаг 1

Установите [**ResourcepackBroadcast**](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/) \*\*\*\*\*\*.

### Шаг 2

Установите в **ResourcepackBroadcast** `config.yml` для запуска `sr applyskin`, когда ресурспак загружен правильно:

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

### Шаг 3

Откройте `config.yml` из **SkinsRestorer** и установите `DisableOnJoinSkins: false`.

