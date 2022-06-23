# משתמשים מתקדמים

## התקנת דברים נדרשים

* התקינו [skript](https://github.com/SkriptLang/Skript/releases)
* התקינו [skript-mirror](https://skripttools.net/addons?q=mirror)

{% hint style="info" %}
כדי לקבל מידע נוסף על **skript-mirror** אנא קראו את זה [wiki](https://skript-mirror.gitbook.io/docs/)
{% endhint %}

{% hint style="danger" %}
#### אנא **אל תבקש** **תמיכה** עבור בעיות או שאלות הקשורות ל**סקריפ**.

אני לא מומחה לתסריט ואני לא המפתח של **סקריפ** וגם לא **סקריפטים**.\
**כל שאלה לגבי סקריפטים תתעלם**, אני מקווה שהבנתם.
{% endhint %}

## דוגמאות

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

    set {clickedBlock} to event.getClickedBlock()
    set {isCustomBlock} to ItemsAdder.isCustomBlock({clickedBlock})
    event.getPlayer().sendMessage("Is custom block: %{isCustomBlock}%")

    if {isCustomBlock} is true:
        set {tmp} to ItemsAdder.getCustomBlock({clickedBlock})
        set {name} to {tmp}.getItemMeta().getDisplayName()
        event.getPlayer().sendMessage("%{name}%")
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
	
		set {customTexture} to new FontImageWrapper("mcguis:blank_menu")
		set {gui} to new TexturedInventoryWrapper(null, 54, "&0Test" and {customTexture})
		set {icon} to ItemsAdder.getCustomItem("mcicons:icon_confirm")
		add player to {players::*}
		set slot 12 of {gui}.getInternal() to {icon}
		{gui}.showInventory(player)
 
on inventory click:
	if {players::*} contain player:
		if index of event-slot = 12:
			cancel event
			send "Confirmed!"

on inventory close:
	remove player from {players::*}
```
{% endtab %}
{% endtabs %}
