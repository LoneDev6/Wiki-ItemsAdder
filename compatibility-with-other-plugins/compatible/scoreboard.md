# Scoreboard-revision

## ​[此处下载](https://www.spigotmc.org/resources/scoreboard.14754/)​ <a href="#download-here" id="download-here"></a>

{% hint style="warning" %}
似乎由于某些原因，该插件已经从SpigotMC.org移除。\
(我不是作者).

[Source code](https://github.com/RienBijl/Scoreboard-revision)
{% endhint %}

## 表情

你可以在 **scoreboard** 中使用 [font\_images ](../../plugin-usage/adding-content/font-images/)(表情与符号) 。

### 示例

`%img_smile%` 会显示如下内容:

![](../../.gitbook/assets/image\_\(95\).png)

## 隐藏记分板背景

(适用于所有类似插件)

### 隐藏前

![](../../.gitbook/assets/image\_\(97\).png)

### 隐藏后

![](../../.gitbook/assets/image\_\(96\).png)

借助 ItemsAdder，你可以如此做以隐藏记分板背景。\
你只需要在记分板<mark style="color:yellow;">**每行**</mark>前添加 `%img_offset_-500%`，即使是<mark style="color:yellow;">空行！</mark>

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
