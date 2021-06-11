# Флаги WorldGuard

## Список флагов

### ia-furniture-sit

Разрешает/запрещает игроку садится на мебель \(мебель с `furniture_sit` [поведением](adding-content/advanced/item-properties/behaviours.md)\)

### ia-campfire-item-add

Разрешает/запрещает игрокам класть предметы на костер

### ia-campfire-item-remove

Разрешает/запрещает игрокам забирать предметы из костра

### ia-vehicle-place

Allow user to place vehicles in the region

### ia-vehicle-remove

Allow user to remove ANY vehicle in the region

### ia-vehicle-personal-remove

allow user to remove only their own vehicles in the region

### ia-vehicle-sit

Разрешает/запрещает игрокам садится в любой транспорт в регионе

### ia-vehicle-personal-sit

allow user to sit only on their own vehicles in the region

### ia-trade-machine-use

allow user to use trade machines

### ia-placed-block-interact

allow user to trigger placed\_block.interact events

### ia-placed-armorstand-interact

allow user to trigger placed\_armorstand.interact events

{% hint style="info" %}
Установите **ia-vehicle-sit** на значение Deny и **ia-vehicle-personal-sit** на значение Allow, чтобы дать возможность игрокам садится только в собственный транспорт.
{% endhint %}

## Частые проблемы

{% hint style="warning" %}
Если пользователь **не может сесть** на **мебель**, даже если все флаги установлены правильно:

* проверьте регион `__global__`, возможно вы использовали его как основной \(и именно в него вы могли устновить лишние флаги\). Если это так, создайте новый регион. Регион global часто выдает лишние проблемы и ошибки в работе плагинов.
* проверьте регион на флаги `build` или `passthrough`. Помните, эти флаги не должны меняться, вы должны использовать классические значения \(не выделенный, серый текст\)
{% endhint %}

