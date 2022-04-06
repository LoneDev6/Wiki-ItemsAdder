# SkinsRestorer

## [הורידו כאן](https://www.spigotmc.org/resources/skinsrestorer.2124/)

## איך לתקן את הבעייה אם הורדת הטקסטורה

### שלב 1

הורידו [**ResourcepackBroadcast**](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/)****

### שלב 2

הגדירו את **ResourcepackBroadcast** `config.yml` להפעלת `sr applicationskin` כאשר הטקסטורה נטענת כהלכה:

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

### שלב 3

פתחו את 'config.yml' של **SkinsRestorer** והגדר את 'DisableOnJoinSkins: false'

### שלב 4

התקינו [PlaceholderAPI ](https://www.spigotmc.org/resources/placeholderapi.6245/)(if you don't have it).\
בצעו את הפקודה `\papi ecloud download Player` ואז `\papi reload`.

### סיימתם
