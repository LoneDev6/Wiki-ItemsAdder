---
title: Vehicle issues
description: "Collection of solutions for know vehicle issues."
---

## Clients can dismount the vehicle, even when cancelled

This is a Minecraft bug prominent in MC 1.16 which has been fixed in MC 1.17.  
There is no fix other than using MC 1.17 or newer.

See MC-202202 for more details.

----

## I can't write in chat and/or can't move

ItemsAdder uses Slime entities for some of the vehicle's behaviours which can cause issues when other plugins interfere in some way.

There are some available fixes:

- **WorldGuard**  
  Open the `config.yml` of WorldGuard and set `block-plugin-spawing` to `false`:  
  ```yaml
  block-plugin-spawing: false
  ```
- **Towny**
  Open the `config.yml` of Towny and remove `Slime` from the `town_mob_removal_entitites` setting:  
  ```yaml
  town_mob_removal_entitites: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
  ```
- **Mob Farm Manager**  
  Check if you set any rules for entity type `SLIME` as that would prevent the vehicle from working.
- **Residence**  
  Use the command `/res set monster t/r` inside a Residence.  
  This is unfortunately something that probably won't get fixed in the near future, as [I already contacted them][residence-issue] a while ago about this.
- **Any other mob remover, merger, grouper, ... plugin**  
  If possible in the plugin, remove any kind of remove, merge or group behaviour for the entity type `SLIME`.  
  If the plugin doesn't support this, contact the dev and request this to be added, or switch to another plugin that does support this.
  
  
[residence-issue]: https://github.com/Zrips/Residence/issues/469#issuecomment-801425643