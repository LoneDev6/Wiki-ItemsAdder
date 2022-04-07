# Scoreboard

## [Download here](https://www.spigotmc.org/resources/scoreboard.14754/)

## Font images

You can use [font\_images ](../../plugin-usage/adding-content/font-images/)(emojis and symbols) in the **scoreboard**.

### Example

`%img_smile%` will show like that:

![](<../../.gitbook/assets/immagine (95).png>)

## Hide the scoreboard background

(works with every scoreboard plugin)

### Before

![](<../../.gitbook/assets/immagine (97).png>)

### After

![](<../../.gitbook/assets/immagine (96).png>)

With ItemsAdder you can hide the scoreboard background, just use this trick.\
You just have to add `%img_offset_-500%` in front of **each line** of your scoreboard configuration.

```yaml
#  ____  ____  ____  ____  _____ ____  ____  ____  ____  ____
# / ___\/   _\/  _ \/  __\/  __//  _ \/  _ \/  _ \/  __\/  _ \
# |    \|  /  | / \||  \/||  \  | | //| / \|| / \||  \/|| | \|
# \___ ||  \_ | \_/||    /|  /_ | |_\\| \_/|| |-|||    /| |_/|
# \____/\____/\____/\_/\_\\____\\____/\____/\_/ \|\_/\_\\____/
#
# Scoreboard-r by Rien Bijl
# rep: github : RienBijl/Scoreboard-revision
# v: R4 1.1 RELEASE

# Do not edit! The plugin uses this to determine if the configuration is suitable
config_version: 1

settings:
  # The driver is the Scoreboard implementation used to display the user
  # Old drivers will from now on remain supported so that switching back to
  # an older (perhaps more stable) version is easy.
  driver: SCOREBOARD_DRIVER_V1
  # Should we check updates? Caution! Disabling this is not recommended
  # you might miss awesome updates *wink*
  check-updates: true

# In what worlds should we disable scoreboard?
disabled-worlds:
  - 'non_existant_world'

board:
  title:
    interval: 3
    lines:
      - '%img_offset_-500%&4> &c&lScoreboard-r &4<'
      - '%img_offset_-500%&4> &c&lScoreboard &4<'
      - '%img_offset_-500%&4> &c&lcoreboar &4<'
      - '%img_offset_-500%&4> &c&loreboa &4<'
      - '%img_offset_-500%&4> &c&leb &4<'
      - '%img_offset_-500%&4> &4<'
      - '%img_offset_-500%&4> &c&leb &4<'
      - '%img_offset_-500%&4> &c&loreboa &4<'
      - '%img_offset_-500%&4> &c&lcoreboar &4<'
      - '%img_offset_-500%&4> &4&lScoreboard &4<'
      - '%img_offset_-500%&4> &4&lScoreboard-r &4<'
      - '%img_offset_-500%&4> &c&lScoreboard-r &c&o4 &4<'
      - '%img_offset_-500%&4> &4&lScoreboard-r &4&o4 ツ &4<'
      - '%img_offset_-500%&4> &c&lScoreboard-r &c&o4 ツ &4<'
      - '%img_offset_-500%&4> &4&lScoreboard-r &4&o4 ツ &4<'
      - '%img_offset_-500%&4> &c&lScoreboard-r &c&o4 ツ &4<'
      - '%img_offset_-500%&4> &c&lScoreboard-r &c&o4 &4<'
  rows:
    1:
      interval: 5
      lines:
        - '%img_offset_-500%&c------------------------'
        - '%img_offset_-500%&4------------------------'
    2:
      interval: 80
      lines:
        - '%img_offset_-500%&cPlayer &4&l> &f%img_smile%'
    3:
      interval: 80
      lines:
        - '%img_offset_-500%%player_name%'
    4:
      interval: 80
      lines:
        - '%img_offset_-500%&4♡ &f&o%player_health_rounded%/%player_max_health_rounded%'
        - '%img_offset_-500%%player_ping% &7ms latency'
    5:
      interval: 80
      lines:
        - '%img_offset_-500%'
    6:
      interval: 80
      lines:
        - '%img_offset_-500%&cServer &4&l>'
    7:
      interval: 80
      lines:
        - '%img_offset_-500%%server_unique_joins% &7unique players'
        - '%img_offset_-500%%server_online% &7online players'
    8:
      interval: 80
      lines:
        - '%img_offset_-500%%server_ram_used%mb/%server_ram_total%mb &7ram usage'
        - '%img_offset_-500%%server_tps_1% &7ticks per second'
    9:
      interval: 5
      lines:
        - '%img_offset_-500%&c------------------------'
        - '%img_offset_-500%&4------------------------'
```

## Hide the red numbers from Scoreboard

{% content-ref url="../../plugin-usage/scoreboard/hide-scoreboard-numbers-1.17+.md" %}
[hide-scoreboard-numbers-1.17+.md](../../plugin-usage/scoreboard/hide-scoreboard-numbers-1.17+.md)
{% endcontent-ref %}
