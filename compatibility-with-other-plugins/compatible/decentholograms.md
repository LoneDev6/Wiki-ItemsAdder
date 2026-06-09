# DecentHolograms

## [Download here](https://www.spigotmc.org/resources/96927/)

## How to display a custom Item?

- Run `/iacustommodeldata <item>` (f.e. `/iacustommodeldata ruby`)
- Remember the base item and `CustomModelData` used by the custom item (i.e. `IRON_INGOT` and `10000`)
- Create a new hologram using `/dh create <name> [Line]` (You can skip this if you already have a hologram)
- Add the item to the hologram using `/dh l add <name> <page> #ICON: <item> {CustomModelData: <cmd>}` (i.e. `/dh l add example 1 #ICON: IRON_INGOT {CustomModelData: 10000}`)

{% hint style="success" %}
When creating a hologram can you provide `#ICON: <item> {CustomModelData: <cmd>}` as the very first line in `/dh create`.  
Example: `/dh create example #ICON: IRON_INGOT {CustomModelData: 10000}`
{% endhint %}
