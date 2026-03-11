# Advanced properties

You can also specify some special properties for your emotes.\
To do so you have to create a new `.yml` file, which is not mandatory for emotes if you don't need to override these properties.

`hide_equipment`: If an equipment part of the player must be hidden.

`can_player_move`: If the player can move during the animation.

`cancel_conditions`: The various actions which will make the animation stop.

`stop_sounds`: Stops all played sound on emote cancel.

`skip_emote_end`: Interrupts the emote on cancel.

`background_music`: Play a song during the emote. Optionally make it loop.

## Example

```yaml
info:
  namespace: test_emotes
emotes:
  example_1:
    id: example_1
    enabled: false
    hide_equipment:
      helmet: true
      mainhand: true
      offhand: true
    can_player_move: false
  example_2:
    id: example_2
    cancel_conditions:
      sneak: false
      take_damage: false
      deal_damage: false
      in_air: false
    hide_equipment:
      helmet: false
      mainhand: false
      offhand: false
    can_player_move: true
    on_stop:
      stop_sounds: true
      skip_emote_end: true
    background_music:
      sound:
        name: test_emotes:my_song
      repeat_interval_seconds: 5

```
