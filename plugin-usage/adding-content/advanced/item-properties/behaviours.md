# "Поведение" предмета

## Что это такое?

Поведение предметов это **встроенная** функция плагина со своими **действиями**, которые осуществляют предметы и эти действия не ванильны.  
Список **поведений** это уже встроенный функционал в плагин, которые позволит вам добавить уже полностью прописанные функции.

### Список всех поведений плагина

* block\_trade\_machine - поведение торгового автомата для блока
* furniture\_trade\_machine - поведение торгового автомата для мебели
* furniture - мебель
* furniture\_sit - мебель, на которую можно сесть
* gun - оружие
* hat - шляпы
* music\_disc - музыкальные пластинки
* vehicle - транспорт

### Примеры использования

```yaml
# Это поведение дает возможность открывать GUI торговли со своими текстурами и предметами на продажу
# Как пример предметов на продажу, тут выставлены предметы black_fishing_rod и red_fishing_rod
block_trade_machine:
  title: "Your title"
  permission: "mypermission.trade.example"            # <--- это можно изменить
  gui_texture:            ###это можно изменить, используйте только текстурированные GUI
    left: customization_table_left
    right: customization_table_right
  trades_list:
    black_fishing_rod:
      ingredients:
        slot1:
          item: FISHING_ROD
          amount: 1
        slot2:
          item: BLACK_DYE
          amount: 1
      result:
        item: black_fishing_rod
        amount: 1
    red_fishing_rod:
      ingredients:
        slot1:
          item: FISHING_ROD
          amount: 1
        slot2:
          item: RED_DYE
          amount: 1
      result:
        item: red_fishing_rod
        amount: 1

furniture_trade_machine:
....... Точно такое же поведение, как и block_trade_machine, только в виде мебели


# Когда вы кликаете правой кнопкой мыши с этим предметов в руках - он установится на земплю
# в качестве стойки для брони. Стойка для брони имеет указанную модель блока на своей голове и является невидимой.
furniture:
  small_hitbox: true
  gravity: true
  fixed_rotation: false
  light_level: 7  
  solid: false
  opposite_direction: false        #заставляет модель поставиться на 180 градусов в направлении от вас


# Если вы добавите поведение "furniture" и это - вы сможете садится на вашу мебель
# на указанную вами высоту.
furniture_sit:
  sit_height: 0.9
  opposite_direction: true      #обычно установлено на значение true


# Дает возможность использовать предмет как дальнобойнее оружие. Какой предмет должен являться снарядом и лежать
# в левой руке во время стрельбы - настраивается вами.
gun:
  projectile: itemsadder:clip


# Дает возможность надеть предмет на голову (точно так же, как и в ваниле. Если указан предмет, который не является шлемом - его можно нажать нажатием
ПКМ, держа предмет в руке)
hat: true


# Позволит использовать указанный предмет как пластинку
# Не забывайте создать музыкальный файл для этой пластинки, иначе она ничего не будет
# проигрывать.
music_disc:
  song:
    name: "itemsadder:music_disc.cdk_sunday"   #<- название пластинки
    description: "Cdk - Sunday"   


# Позволит использовать предмет как транспорт, в который можно сесть
vehicle:
  fixed_rotation: false
  small_hitbox: true
  sit_height: 0
  step_height: 0.1
  size:
    x: 2
    y: 1.7
    z: 1
  speed:
    drive: 1
    jump: 0.3
    fly: 0
  fuel:
    start: 150
    max: 300
    items:
      COAL: 1
      CHARCOAL: 1
      COAL_BLOCK: 9
      "itemsadder:banana": 1
```

