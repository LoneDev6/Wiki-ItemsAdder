---
description: Custom models for Citizens NPCs
icon: up-right-from-square
---

# Citizens

## Reskinning a Citizens NPC

You can use a custom model as skin for any Citizens NPC.

{% hint style="success" %}
This plugin doesn't require Citizens to work, but some servers might need to use it to create NPCs.
{% endhint %}

### Changing the model

Spawn a new NPC or use an already existing one (`/npc create test`).

Then change the skin using the **ItemsAdder** command:\
`/iaentity citizens <id|selected> model <model>`\
In this example: `/iaentity citizens <id|selected> model custom:barman_robot`

### Mute sounds

You can mute the NPC by using this command, more info on [Citizens wiki](https://wiki.citizensnpcs.co/Commands).\
`/npc sound -n`

### Make head rotate

You can make the NPC look at nearby players by using this command, more info on [Citizens wiki](https://wiki.citizensnpcs.co/Commands).\
`/npc look`

### Done

![](../../../.gitbook/assets/ezgif-2-31a4557026.webp)

## Playing animation

You can play an animation using this command: `/iaentity citizens <id|selected> anim play <animation>`

![](../../../.gitbook/assets/ezgif.com-gif-maker.webp)
