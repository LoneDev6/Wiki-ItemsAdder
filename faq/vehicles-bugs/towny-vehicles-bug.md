# Can't write in chat and can't move

## Worldguard

If you experience bugged vehicles (get tipped under world and strange bugs like that) please open config.yml of WorldGuard and set this:

```
block-plugin-spawning: false
```

## Towny

{% hint style="warning" %}
If you have problems with vehicles and you're using Towny plugin open Towny config.yml and remove Slime from here:
{% endhint %}

```yaml
town_mob_removal_entities: Monster,Flying,Shulker,SkeletonHorse,ZombieHorse
```

## Mob Farm Manager

If you own [Mob Farm Manager ](https://www.spigotmc.org/resources/mob-farm-manager-supports-1-7-10-up-to-1-16-hopper-support.15127/)plugin please make sure to check if you set any entity type **SLIME** rule, this may remove the slime which is part of the vehicle and cause this bug.

## Residence

Use the command `/res set monsters t/r` inside a **Residence**.\
I already contacted Residence developer and I hope[ they will fix this](https://github.com/Zrips/Residence/issues/469#issuecomment-801425643)

## Other mobs removal / grouping / merge plugins

Please remove any group/merge/removal feature on entity type **SLIME**.
