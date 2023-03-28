# SkinsRestorer

## [Download here](https://www.spigotmc.org/resources/skinsrestorer.2124/)

## How to fix resourcepack not applying on join

### Step 1

Install [**ResourcepackBroadcast**](https://www.spigotmc.org/resources/resourcepackbroadcast.88318/)****

### Step 2

Set the **ResourcepackBroadcast** `config.yml` to run `sr applyskin` when the resourcepack is loaded correctly:

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

### Step 3

Open `config.yml` of **SkinsRestorer** and set `DisableOnJoinSkins: false`

### Step 4

Install [PlaceholderAPI ](https://www.spigotmc.org/resources/placeholderapi.6245/)(if you don't have it).\
Execute the command `/papi ecloud download Player` then `/papi reload`.

### Done
