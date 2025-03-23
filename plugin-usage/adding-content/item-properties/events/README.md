---
icon: arrow-progress
---

# Events

## Use the official files editor to read all the properties

{% content-ref url="../../../beginners/files-editor.md" %}
[files-editor.md](../../../beginners/files-editor.md)
{% endcontent-ref %}

## What are events?

Events describe the time when something happens.\
You can make things happen ([actions](actions.md)) when an event is triggered (play sound, execute command etc.)

### List of events

* block\_break
* attack
* kill
* interact.entity
* interact.left
* interact.left\_shift
* interact.right
* interact.right\_shift
* interact\_mainhand.left
* interact\_mainhand.left\_shift
* interact\_mainhand.right
* interact\_mainhand.right\_shift
* interact\_offhand.left
* interact\_offhand.left\_shift
* interact\_offhand.right
* interact\_offhand.right\_shift
* drop
* pickup
* eat
* drink
* bow\_shot
* gun\_shot
* gun\_no\_ammo
* gun\_reload
* book\_write
* book\_read
* fishing\_start
* fishing\_caught
* fishing\_failed
* fishing\_cancel
* fishing\_bite
* fishing\_in\_ground
* wear
* unwear
* held
* held\_offhand
* unheld
* unheld\_offhand
* item\_throw
* item\_hit\_ground
* item\_hit\_entity
* placed\_block.interact
* placed\_block.break
* placed\_armorstand.interact
* placed\_armorstand.break
* placed\_itemframe.interact
* placed\_itemframe.break
* holding\_item.player\_damaged\_by\_entity
* holding\_item\_offhand.player\_damaged\_by\_entity
* equipped\_armor\_item.player\_damaged\_by\_entity
* bucket\_empty
* bucket\_fill

### EXAMPLE

Why is it written like `interact (dot) right`? Below is a small example of how to correctly write it into your item config.

```yaml
...
events:
  interact:
    right:
      play_sound:
      ...
...
```
