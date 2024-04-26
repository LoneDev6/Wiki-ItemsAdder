# PLAYER_HEAD with texture as drop
How to assign PLAYER_HEAD with texture as drop.

### PREPARE DROP HEAD (only this workaround exists)
At first we need create player head to drop
1.) create new file (name of mine is `playerheads.yml`), where we set `nbt` to set texture which can be found on https://minecraft-heads.com</br>
    {% hint style="warning" %}`skull` can be set to what you want{% endhint %}</br>
2.) material should be PLAYER_HEAD</br>
    {% hint style="warning" %}Don't forget PLAYER_HEAD:XXX... doesn't work due to how is ItemsAdder made{% endhint %}</br>
3.) generate on true to assign texture which we leave BLANK `""`</br>
```
info:
    namespace: playerheads
items:
  skull:
    enabled: true
    display_name: "SKULL"
    nbt: "{display:{Name:'{\"text\":\"Mossy Skull\"}'},SkullOwner:{Id:[I;-178232365,-1961341643,-1329297047,2014436438],Properties:{textures:[{Value:\"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjk4NWQzOTY0NDhmM2NlMWQ0YWRhZGVjMjg2N2U5OGU4N2QxNTVhMjU2YmVmNmY0NjQxMDA1MzNiMjQ3YWMwYSJ9fX0=\"}]}}}"
    resource:
      material: PLAYER_HEAD
      generate: true
      textures:
        - ""
```


### SETTING UP LOOT
We have to create a new loot config which should look like this</br>
`OBSIDIAN` is block from which this head will be dropped</br>
     ↳ `namespace:blockname` for custom ItemsAdder block</br>
`head` is custom id which can be set to whatever you want</br>
To `item:` we should place our namespace from prepared head to drop, so `playerheads:skull`</br>
All of other variables you can find here https://itemsadder.devs.beer/plugin-usage/adding-content/loots</br>
```
info:
  namespace: my_loots
loots:
  blocks:
    obsidian:
      type: OBSIDIAN
      items:
        head:
          item: playerheads:skull
          min_amount: 1
          max_amount: 1
          chance: 100
```
