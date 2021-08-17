# PlaceholderAPI

## Вывод картинок юникода \(эмоджи, прочее\)

Используйте данный заполнитель: `%img_ИМЯ%` где вместо "ИМЯ" вы должны указать название картинки\_юникода из файла конфигурации \(не путайте с названием PNG-файла\).  
Пример использования: `%img_smile%`

## Offsets

You can shift text/font\_images back and forward.  
For example 

* you can shift it back of 16 pixels by writing `%img_offset_-16%` .
* you can shift it forward of 16 pixels by writing `%img_offset_16%` .

## ItemsAdder PlayerStats \(HUDs values\)

Эти статистики используются плагином и они не являются ванильными.

Используйте данный заполнитель: `%iaplayerstat_ИМЯ%` где вместо "ИМЯ" вы должны указать название желаемой статистики.  
Пример использования: `%iaplayerstat_mana%` - выведет статус шкалы маны, или, например: `%iaplayerstat_thirst%` - выведет статус шкалы жажды.

Для проверки правильной работы вы можете использовать эти команды:  
`/papi parse me %iaplayerstat_thirst%`  
`/papi parse me %iaplayerstat_mana%`

{% hint style="info" %}
### Узнать больше о статистиках игрока

{% page-ref page="custom-playerstats.md" %}

{% endpage-ref %}
{% endhint %}

