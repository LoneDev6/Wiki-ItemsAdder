# Для экспертов

## Установите неообходимые библеотеки

* Устновите [skript](https://github.com/SkriptLang/Skript/releases)
* Установите [skript-mirror](https://skripttools.net/addons?q=mirror)

{% hint style="info" %}
Чтобы узнать больше о **skript-mirror**, пожалуйста, ознакомьтесь с [документацией](https://skript-mirror.gitbook.io/docs/)
{% endhint %}

{% hint style="danger" %}
### Пожалуйста, **не просите помощи** со **скриптами**. А так же не задавайте вопросы.

Я не являюсь экспертом в скриптах и я не разработчик **skript** и не разработчик **skript-mirror**.  
**Все вопросы по этому поводу будут проигнорированы**, надеюсь, вы понимаете почему.
{% endhint %}

## Примеры

{% tabs %}
{% tab title="Получение предмета командой" %}
```yaml
import:
  dev.lone.itemsadder.api.ItemsAdder

command /iaskript:
  trigger:
    set {testItem} to ItemsAdder.getCustomItem("itemsadder:ruby")
    sender.getInventory().addItem({testItem})
```
{% endtab %}

{% tab title="Проверка блока на предмет блока ItemsAdder" %}
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

{% tab title="Текстуры для GUI" %}
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

