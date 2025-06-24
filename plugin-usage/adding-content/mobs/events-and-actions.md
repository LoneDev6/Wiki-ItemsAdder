---
icon: bolt
---

# Events and Actions

Make your entities more interactive by performing actions when specific events occur. This is similar to the custom items events and actions.

{% hint style="info" %}
New actions and events will be implemented in the future. This is a new feature so it's still a work in progress.
{% endhint %}

## Events

### `interact`

Actions executed when a player interacts with a custom entity.

### `attack`

Actions executed when a custom entity attacks another entity.

### `attacked`

Actions executed when a custom entity is attacked by another entity.

### `damaged`

Actions executed when a custom entity takes damage.

### `death`

Actions executed when a custom entity dies.

## Actions

### `summon_entity`

Summon a custom entity.

* `entity` the entity ID
* `max_per_chunk` the max amount of entities of this type to be allowed to spawn in the current chunk

### `execute_command`

Execute a command.

* `command` the command to execute
* `as_console` if the command must be executed as console (true by default)
* `silent` if the command must send a message or not on execution
* `flow_success_if_message_contains` The plugin can't automatically identify plugins commands success/fail status, so you have to specify a text that can help the plugin to identify the command status.

### Common action properties

#### `delay`

Delay before executing this action.

#### `flow`

Advanced options to change the flow of actions for this event section.\
Refer to the [VSCode extension](../../beginners/files-editor.md) to get more info.

#### `permission`

Permission required to run this action.

