# 进阶用法

## 安装所需依赖

* 安装 [skript](https://github.com/SkriptLang/Skript/releases/latest)
* 安装 [skript-reflect](https://github.com/TPGamesNL/skript-reflect/releases/latest)

{% hint style="info" %}
要了解更多关于 **skript-reflect** 的信息，请阅读其 [wiki](https://tpgamesnl.gitbook.io/skript-reflect/)
{% endhint %}

{% hint style="danger" %}
#### 请**不要**就 **skript** 相关问题或疑问**寻求支持**。

我不是 skript 专家，也不是 **skript** 或 **skript-reflect** 的开发者。\
**所有关于 skript 的问题将被忽略**，希望您能理解。
{% endhint %}

## 示例

### 在命令中获取物品

```yaml
import:
  dev.lone.itemsadder.api.ItemsAdder

command /iaskript:
  trigger:
    set {testItem} to ItemsAdder.getCustomItem("itemsadder:ruby")
    sender.getInventory().addItem({testItem})
```

### 检查点击的方块是否为自定义方块

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

### 自定义 GUI

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

### 更改 HUD 值

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

### 物品菜单

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
    fillInv({_inv}, (46, 47, 48, 49, 50, 51 and 52))
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
        fillInv({_inv}, 53)
    if {_pag} > 0:
        set slot 45 of {_inv} to arrow named "&6<< back page"
    else:
        fillInv({_inv}, 45)
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


function fillInv(inv: inventory, slots: integers):
    loop {_slots::*}:
        set slot loop-value of {_inv} to black stained glass pane named " a
```
