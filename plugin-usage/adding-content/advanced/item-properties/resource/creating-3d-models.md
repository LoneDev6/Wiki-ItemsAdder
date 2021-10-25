# Создание 3D-модели

## Creating 3D model from a texture

{% embed url="https://www.youtube.com/watch?v=CSWxrAqjrKA" %}

{% hint style="warning" %}
### Важно

Если вы используете **не-ванильную** текстуру(ваш **.png** файл), вам необходимо открыть **.json** файл вашей модели и сделать небольшую правку.

Если ваша модель использует пользовательскую текстуру, вы должны убедиться, что перед именем текстуры указано ваше пространство имен.\
Например, если у вас есть 3D модель и текстура имеет такой путь: `plugins\ItemsAdder\data\resource_pack\assets\my_items\textures\item\custom_item_1.png`.

```javascript
 "textures":{
      "0":"item/custom_item_1"
   },
```

вы должны добавить **namespace** перед ним(`my_items` в моем примере, вы должны использовать свой namespace).

```javascript
 "textures":{
      "0":"my_items:item/custom_item_1"
   },
```
{% endhint %}
