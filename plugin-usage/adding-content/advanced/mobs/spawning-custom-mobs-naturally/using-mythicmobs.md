# Using MythicMobs

## How to make MythicMobs handle my custom mob

If you want to make **MythicMobs** handle your custom mob to have more advanced features and control it's really easy!

For example I have this MythicMobs configuration:

```yaml
StaticallyChargedSheep:
  Type: SHEEP
  Display: '&aStatically Charged Sheep'
  Health: 100
  Damage: 2
  Options:
    MovementSpeed: 0.3
  DamageModifiers:
  - LIGHTNING 0
  - FIRE 0.5
  Skills:
  - lightning @LivingInRadius{r=10} ~onTimer:100
```

  
Open your **ItemsAdder** `.yml` file where you created the mob and to edit the **replace rule** like this:

```yaml
        replace_mobs_spawn:
          mob1:
            replace_mythicmob:
              name: StaticallyChargedSheep
              always: true
            type: SHEEP
```

{% hint style="warning" %}
It's important to set **replace\_mythicmob** `name` property to your **mythicmob name**.
{% endhint %}

### Random chance

If you want to create custom spawn logic for your custom mob you must not use **ItemsAdder** rules, use **Mythicmobs** configuration: [https://www.mythicmobs.net/manual/doku.php/tutorials/randomspawns](https://www.mythicmobs.net/manual/doku.php/tutorials/randomspawns)

{% hint style="warning" %}
### Warning:

**ItemsAdder** eggs and /iasummon command **won't work** for Mythicmobs custom mobs, you have to spawn them using **Mythicmobs command** if you want to spawn them manually.  
`/mythicmobs mobs spawn StaticallyChargedSheep`
{% endhint %}



