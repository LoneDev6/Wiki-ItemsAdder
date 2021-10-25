# ☕ Java API

## Как получить API

Вы должны использовать **maven** или **gradle**, **API** можно получить тут:

{% embed url="https://github.com/LoneDev6/ItemsAdder-API\#-packages" caption="" %}

## Описание

ItemsAdder встроен более легкий способ использовать API для Java-разработчиков.  
Для доступа добавьте **dev.lone.itemsadder.api.ItemsAdder** в ваш код.

## Важные заметки

{% hint style="warning" %}
It's very important to listen to the [ItemsAdderLoadDataEvent ](events.md#itemsadderloaddataevent)event in order to make sure items are correctly loaded before accessing them.

ItemsAdder loading is async that's why.
{% endhint %}
