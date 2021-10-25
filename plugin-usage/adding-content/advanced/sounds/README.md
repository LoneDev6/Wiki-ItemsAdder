# Звуки

### Шаг 1

{% page-ref page="convert-sound-to-.ogg.md" %}

* откройте папку **plugins\ItemsAdder\data\resource\_pack\assets**.
* откройте папку [namespace](../../beginners/creating-your-namespace.md)
* создайте новую папку под названием **sounds**
* поместите туда ваш **.ogg** файл \(вы также можете создать другую папку для организации звуков, например, папку "эффекты", папку "музыка"...\)

Например, у меня есть файл **cdk\_sunday.ogg** и я поместил его в новую папку **music\_disc**.  
Теперь у меня есть `plugin\ItemsAdder\data\resource_pack\assets\NAMESPACE\sounds\music_disc\cdk_sunday.ogg`.

### Шаг 2

* откройте папку **plugins\ItemsAdder\data\resource\_pack\assets**
* откройте папку [namespace](../../beginners/creating-your-namespace.md)
* создайте новый файл с именем `sounds.json`\(или откройте его, если он уже создан\)
* этот файл является json файлом, вы ДОЛЖНЫ написать его правильно, иначе он не будет работать. Если вам нужна информация о Json файлах, пожалуйста, поищите в интернете.

Чтобы добавить ваш звук в файл, вам нужно сделать следующее:

```javascript
{
    "music_disc.cdk_sunday":{
        "sounds":[
            "myitems:music_disc/cdk_sunday"
        ]
    }
}
```

Теперь я объясню каждую часть кода, который я написал.  
Это название звука, вы будете использовать его в каждой части плагина, а также в Minecraft vanilla [/playsound ](https://www.digminecraft.com/game_commands/playsound_command.php)команда

```javascript
"music_disc.cdk_sunday":{
```

Это список звуковых файлов, которые Minecraft будет воспроизводить, когда вы вызовете название звука.  
Minecraft будет воспроизводить один из этих звуков случайным образом\\(только если вы установите более одного звука\).  
⚠️ Помните, что вы должны изменить `myitems` на ваше собственное название namespace.

```javascript
"sounds":[
            "myitems:music_disc/cdk_sunday"
        ]
```

Например, если вы хотите иметь случайные звуки для одного и того же имени звука, вам просто нужно создать несколько файлов .ogg и разместить их следующим образом:

```javascript
"sounds":[
            "myitems:music_disc/cdk_sunday_1",
            "myitems:music_disc/cdk_sunday_2",
            "myitems:music_disc/test_file"
        ]
```

## Как добавить несколько звуков в файл sounds.json?

Это просто, в следующий раз, когда вы захотите добавить звук, вы просто должны добавить запятую в конце, вот так.  
\(Я имею в виду запятую в строке 6\)

```javascript
{
    "music_disc.cdk_sunday":{
        "sounds":[
            "itemsadder:music_disc/cdk_sunday"
        ]
    },
    "music_disc.vidian_aether_theories":{
        "sounds":[
            "itemsadder:music_disc/vidian_aether_theories"
        ]
    }
}
```

{% hint style="warning" %}
Если вы хотите не ошибиться, воспользуйтесь этим сайтом, чтобы проверить, хорош ли ваш Json-файл или в нем есть ошибки: [https://jsonformatter.curiousconcept.com/](https://jsonformatter.curiousconcept.com/)
{% endhint %}

