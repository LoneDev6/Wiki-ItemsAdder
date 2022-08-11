# Expert users

## Installing the required dependencies

* Install [skript](https://github.com/SkriptLang/Skript/releases/latest)
* Install [skript-reflect](https://github.com/TPGamesNL/skript-reflect/releases/latest)

{% hint style="info" %}
To get more info about **skript-reflect** please read its [wiki](https://tpgamesnl.gitbook.io/skript-reflect/)
{% endhint %}

{% hint style="danger" %}
#### Please **do not ask** for **support** for **skript** related issues or questions.

I'm not a skript expert and I'm not the developer of **skript** nor **skript-reflect**.\
**Every question about skript will be ignored**, I hope you understand.
{% endhint %}

## Examples

{% tabs %}
{% tab title="Getting item on command" %}
```yaml
import:
  dev.lone.itemsadder.api.ItemsAdder

command /iaskript:
  trigger:
    set {testItem} to ItemsAdder.getCustomItem("itemsadder:ruby")
    sender.getInventory().addItem({testItem})
```
{% endtab %}

{% tab title="Check if clicked block is custom block" %}
```yaml
import:
  dev.lone.itemsadder.api.ItemsAdder
  org.bukkit.event.player.PlayerInteractEvent
  org.bukkit.inventory.EquipmentSlot as EquipmentSlot

on PlayerInteractEvent:
    if event.getHand() is EquipmentSlot.OFF_HAND: 
        stop

    set {_clickedBlock} to event.getClickedBlock()
    set {_isCustomBlock} to ItemsAdder.isCustomBlock({_clickedBlock})
    event.getPlayer().sendMessage("Is custom block: %{_isCustomBlock}%")

    if {_isCustomBlock} is true:
        set {_tmp} to ItemsAdder.getCustomBlock({_clickedBlock})
        set {_name} to {_tmp}.getItemMeta().getDisplayName()
        event.getPlayer().sendMessage("%{_name}%")
```
{% endtab %}

{% tab title="Custom GUI" %}
```yaml
import:
  dev.lone.itemsadder.api.ItemsAdder
  dev.lone.itemsadder.api.FontImages.TexturedInventoryWrapper
  dev.lone.itemsadder.api.FontImages.FontImageWrapper
  org.bukkit.entity.Player
  
  
		
command /iaguitest:
	trigger:
	
		set {_customTexture} to new FontImageWrapper("mcguis:blank_menu")
		set {_gui} to new TexturedInventoryWrapper(null, 54, "&0Test" and {_customTexture})
		set {_icon} to ItemsAdder.getCustomItem("mcicons:icon_confirm")
		add player to {players::*}
		set slot 12 of {_gui}.getInternal() to {_icon}
		{_gui}.showInventory(player)
 
on inventory click:
	if {players::*} contain player:
		if index of event-slot = 12:
			cancel event
			send "Confirmed!"

on inventory close:
	remove player from {players::*}
```
{% endtab %}

{% tab title="Change hud value" %}
```yaml
import:
  dev.lone.itemsadder.api.FontImages.PlayerQuantityHudWrapper
  dev.lone.itemsadder.api.FontImages.PlayerHudsHolderWrapper


command /healme:
	trigger:
		set {_player} to new PlayerHudsHolderWrapper(player)
		set {_hud} to new PlayerQuantityHudWrapper({_player}, "realcraft:thirst_bar")
		{_hud}.setFloatValue(10.0)
		heal the player
            	set the player's food level to 10
```
{% endtab %}

{% tab title="item menu" %}
```yaml
import:
  dev.lone.itemsadder.api.CustomStack
  dev.lone.itemsadder.api.ItemsAdder

on load:
	delete {items::*}
	loop ...ItemsAdder.getAllItems("itemsadder"):
		add loop-value.getNamespacedID() to {items::*}

command /item_menu:
	trigger:
		item_menu(player, 0)


function item_menu(player: player, pag: number):
    set {_pagina_inicio} to (45 * {_pag})
    set {_slot} to 0
    set metadata "item_menu_pag" of {_player} to {_pag}
    loop {items::*}:
        add 1 to {_total}
        if {_total} = 45:
            add 1 to {_pags}
            set {_total} to 0
    set {_inv} to chest with 6 row named "&6Pag &l%{_pag}%/%{_pags}%"
    wait tick
    set metadata "item_menu" of {_player} to {_inv}
    rellenarINV({_inv}, (46, 47, 48, 49, 50, 51 and 52))
    wait tick
    loop {items::*}:
        (loop-index parsed as integer) > {_pagina_inicio}
        set slot {_slot} of {_inv} to CustomStack.getInstance(loop-value).getItemStack()
        add 1 to {_slot}
        if {_slot} = 45:
            exit loop
    if (amount of {items::*}) > {_pagina_inicio} + 45:
        set slot 53 of {_inv} to arrow named "&6next page >>"
    else:
        rellenarINV({_inv}, 53)
    if {_pag} > 0:
        set slot 45 of {_inv} to arrow named "&6<< back page"
    else:
        rellenarINV({_inv}, 45)
    open {_inv} to {_player}

on inventory click:
    if event-inventory = (metadata value "item_menu" of player):
        cancel event
        if event-slot is not 45, 46, 47, 48, 49, 50, 51, 52 or 53:
            give event-item to player
        if event-slot = 53:
            if event-slot is arrow named "&6next page >>":
                item_menu(player, (metadata "item_menu_pag" of player) + 1)
        if event-slot = 45:
            if event-slot is arrow named "&6<< back page":
                item_menu(player, (metadata "item_menu_pag" of player) - 1)
    if current inventory contains (metadata value "item_menu" of player):
        if event-inventory is player's inventory:
            cancel event


function rellenarINV(inv: inventory, slots: integers):
    loop {_slots::*}:
        set slot loop-value of {_inv} to black stained glass pane named " "

```
{% endtab %}
{% endtabs %}
